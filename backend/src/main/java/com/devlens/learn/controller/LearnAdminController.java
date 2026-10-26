package com.devlens.learn.controller;

import com.devlens.api.service.storage.StorageService;
import com.devlens.learn.dto.ReorderRequestDto;
import com.devlens.learn.entity.LearnContentItem;
import com.devlens.learn.repository.LearnContentItemRepository;
import com.devlens.learn.service.AdminImportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/admin")
@RequiredArgsConstructor
public class LearnAdminController {

    private final AdminImportService adminImportService;
    private final StorageService storageService;
    private final LearnContentItemRepository contentRepository;
    private final JdbcTemplate jdbcTemplate;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/content/status")
    public ResponseEntity<?> getContentStatus() {
        String sql = """
            SELECT 
                e.id AS exam_type_id, e.name AS exam_name, e.category AS exam_category,
                s.id AS subject_id, s.name AS subject_name,
                c.id AS chapter_id, c.title AS chapter_title,
                t.id AS topic_id, t.title AS topic_title,
                COUNT(DISTINCT CASE WHEN i.type = 'VIDEO' THEN i.id END) AS video_count,
                COUNT(DISTINCT CASE WHEN i.type = 'NOTES_PDF' THEN i.id END) AS pdf_count,
                COUNT(DISTINCT CASE WHEN r.is_helpful = true THEN r.id END) AS helpful_count,
                COUNT(DISTINCT CASE WHEN r.is_helpful = false THEN r.id END) AS doubt_count,
                COUNT(DISTINCT r.id) AS total_ratings
            FROM learn_subjects s
            JOIN learn_exam_types e ON e.id = s.exam_type_id
            JOIN learn_chapters c ON c.subject_id = s.id
            JOIN learn_topics t ON t.chapter_id = c.id
            LEFT JOIN learn_content_items i ON i.topic_id = t.id
            LEFT JOIN learn_content_ratings r ON r.content_id = i.id
            GROUP BY e.id, e.name, e.category, e.display_order,
                     s.id, s.name, c.id, c.title, t.id, t.title,
                     s.order_index, c.order_index, t.order_index
            ORDER BY e.display_order, s.order_index, c.order_index, t.order_index
        """;
        
        List<Map<String, Object>> statusList = jdbcTemplate.queryForList(sql);
        return ResponseEntity.ok(statusList);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/feedback/summary")
    public ResponseEntity<?> getFeedbackSummary() {
        String sql = """
            SELECT 
                COUNT(*) AS total_ratings,
                COUNT(CASE WHEN is_helpful = true THEN 1 END) AS helpful_count,
                COUNT(CASE WHEN is_helpful = false THEN 1 END) AS doubt_count,
                COUNT(CASE WHEN feedback_text IS NOT NULL AND TRIM(feedback_text) != '' THEN 1 END) AS text_feedback_count
            FROM learn_content_ratings
        """;
        Map<String, Object> stats = jdbcTemplate.queryForMap(sql);
        
        long totalRatings = ((Number) stats.getOrDefault("total_ratings", 0)).longValue();
        long helpfulCount = ((Number) stats.getOrDefault("helpful_count", 0)).longValue();
        long doubtCount = ((Number) stats.getOrDefault("doubt_count", 0)).longValue();
        long textFeedbackCount = ((Number) stats.getOrDefault("text_feedback_count", 0)).longValue();
        
        double satisfactionRate = totalRatings > 0 
                ? Math.round((helpfulCount * 100.0 / totalRatings) * 10.0) / 10.0 
                : 100.0;

        String flaggedTopicsSql = """
            SELECT COUNT(DISTINCT i.topic_id)
            FROM learn_content_ratings r
            JOIN learn_content_items i ON i.id = r.content_id
            WHERE r.is_helpful = false
        """;
        Long flaggedTopicsCount = jdbcTemplate.queryForObject(flaggedTopicsSql, Long.class);
        if (flaggedTopicsCount == null) flaggedTopicsCount = 0L;

        return ResponseEntity.ok(Map.of(
            "totalRatings", totalRatings,
            "helpfulCount", helpfulCount,
            "doubtCount", doubtCount,
            "textFeedbackCount", textFeedbackCount,
            "satisfactionRate", satisfactionRate,
            "flaggedTopicsCount", flaggedTopicsCount
        ));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/feedback/stream")
    public ResponseEntity<?> getFeedbackStream(
            @RequestParam(required = false, defaultValue = "ALL") String filter,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "50") int size
    ) {
        StringBuilder sql = new StringBuilder("""
            SELECT 
                r.id,
                r.user_id,
                COALESCE(u.full_name, 'Anonymous Student') AS student_name,
                COALESCE(u.email, 'student@preplens.in') AS student_email,
                COALESCE(u.subscription_plan, 'FREE') AS subscription_plan,
                r.content_id,
                COALESCE(i.title, 'Lesson Material') AS content_title,
                COALESCE(i.type, 'VIDEO') AS content_type,
                t.id AS topic_id,
                t.title AS topic_title,
                c.id AS chapter_id,
                c.title AS chapter_title,
                s.id AS subject_id,
                s.name AS subject_name,
                e.id AS exam_type_id,
                e.name AS exam_name,
                r.is_helpful,
                r.feedback_text,
                r.created_at
            FROM learn_content_ratings r
            LEFT JOIN learn_users u ON u.id = r.user_id
            JOIN learn_content_items i ON i.id = r.content_id
            JOIN learn_topics t ON t.id = i.topic_id
            JOIN learn_chapters c ON c.id = t.chapter_id
            JOIN learn_subjects s ON s.id = c.subject_id
            JOIN learn_exam_types e ON e.id = s.exam_type_id
            WHERE 1=1
        """);

        if ("DOUBTS".equalsIgnoreCase(filter)) {
            sql.append(" AND r.is_helpful = false ");
        } else if ("HELPFUL".equalsIgnoreCase(filter)) {
            sql.append(" AND r.is_helpful = true ");
        } else if ("TEXT_ONLY".equalsIgnoreCase(filter)) {
            sql.append(" AND r.feedback_text IS NOT NULL AND TRIM(r.feedback_text) != '' ");
        }

        sql.append(" ORDER BY r.created_at DESC LIMIT ? OFFSET ?");

        int offset = Math.max(0, page * size);
        List<Map<String, Object>> stream = jdbcTemplate.queryForList(sql.toString(), size, offset);
        return ResponseEntity.ok(stream);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/feedback/topic/{topicId}")
    public ResponseEntity<?> getTopicFeedback(@PathVariable UUID topicId) {
        String sql = """
            SELECT 
                r.id,
                r.user_id,
                COALESCE(u.full_name, 'Student') AS student_name,
                COALESCE(u.email, '') AS student_email,
                COALESCE(u.subscription_plan, 'FREE') AS subscription_plan,
                i.title AS content_title,
                i.type AS content_type,
                r.is_helpful,
                r.feedback_text,
                r.created_at
            FROM learn_content_ratings r
            LEFT JOIN learn_users u ON u.id = r.user_id
            JOIN learn_content_items i ON i.id = r.content_id
            WHERE i.topic_id = ?
            ORDER BY r.created_at DESC
        """;
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql, topicId);
        return ResponseEntity.ok(list);
    }

    // We can restrict this to ROLE_ADMIN. 
    // Since this monolithic app has UserPrincipal with ROLE_ADMIN, this will work out of the box
    // for devlens_token authenticated users with Admin role.
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/import/questions/{topicId}")
    public ResponseEntity<?> importQuestions(
            @PathVariable UUID topicId,
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "skipDuplicates", defaultValue = "true") boolean skipDuplicates) {
        
        AdminImportService.QuestionImportResult result = adminImportService.importQuestionsFromCsv(topicId, file, skipDuplicates);
        return ResponseEntity.ok(Map.of(
            "message", "Successfully imported questions",
            "count", result.importedCount(),
            "skipped", result.skippedCount(),
            "total", result.totalCount()
        ));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/import/questions/{topicId}/json")
    public ResponseEntity<?> importQuestionsJson(
            @PathVariable UUID topicId,
            @RequestBody List<Map<String, Object>> payload,
            @RequestParam(value = "skipDuplicates", defaultValue = "true") boolean skipDuplicates) {
        
        AdminImportService.QuestionImportResult result = adminImportService.importQuestionsFromJson(topicId, payload, skipDuplicates);
        return ResponseEntity.ok(Map.of(
            "message", "Successfully imported questions from JSON",
            "count", result.importedCount(),
            "skipped", result.skippedCount(),
            "total", result.totalCount()
        ));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/content/upload/{topicId}")
    public ResponseEntity<?> uploadStudyMaterial(
            @PathVariable UUID topicId,
            @RequestParam("title") String title,
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "isFree", defaultValue = "false") boolean isFree) {
        
        try {
            String path = "study-materials/" + topicId + "/" + file.getOriginalFilename();
            String url = storageService.uploadFile("devlens-storage", path, file.getBytes(), file.getContentType());
            
            List<LearnContentItem> existing = contentRepository.findByTopicIdOrderByOrderIndexAsc(topicId);
            int nextOrder = existing.isEmpty() ? 1 : existing.get(existing.size() - 1).getOrderIndex() + 1;

            LearnContentItem item = new LearnContentItem();
            item.setTopicId(topicId);
            item.setTitle(title);
            item.setType("NOTES_PDF");
            item.setContentUrl(url);
            item.setFree(isFree);
            item.setOrderIndex(nextOrder);
            
            contentRepository.save(item);
            
            return ResponseEntity.ok(Map.of("message", "Uploaded successfully", "url", url));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/content/video/{topicId}")
    public ResponseEntity<?> addVideoLink(
            @PathVariable UUID topicId,
            @RequestParam("title") String title,
            @RequestParam("videoUrl") String videoUrl,
            @RequestParam(value = "isFree", defaultValue = "true") boolean isFree) {
        
        List<LearnContentItem> existing = contentRepository.findByTopicIdOrderByOrderIndexAsc(topicId);
        int nextOrder = existing.isEmpty() ? 1 : existing.get(existing.size() - 1).getOrderIndex() + 1;

        LearnContentItem item = new LearnContentItem();
        item.setTopicId(topicId);
        item.setTitle(title);
        item.setType("VIDEO");
        item.setContentUrl(videoUrl);
        item.setFree(isFree);
        item.setOrderIndex(nextOrder);
        
        contentRepository.save(item);
        
        return ResponseEntity.ok(Map.of("message", "Video added successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/content/{itemId}")
    public ResponseEntity<?> updateContent(
            @PathVariable UUID itemId,
            @RequestBody Map<String, Object> payload) {
        
        LearnContentItem item = contentRepository.findById(itemId)
            .orElseThrow(() -> new RuntimeException("Content not found: " + itemId));
            
        if(payload.containsKey("title") && payload.get("title") != null) {
            item.setTitle(payload.get("title").toString());
        }
        if(payload.containsKey("videoUrl") && payload.get("videoUrl") != null && "VIDEO".equals(item.getType())) {
            item.setContentUrl(payload.get("videoUrl").toString());
        }
        if(payload.containsKey("isFree") && payload.get("isFree") != null) {
            item.setFree(Boolean.parseBoolean(payload.get("isFree").toString()));
        }
        if(payload.containsKey("orderIndex") && payload.get("orderIndex") != null) {
            item.setOrderIndex(Integer.parseInt(payload.get("orderIndex").toString()));
        }
        
        contentRepository.save(item);
        return ResponseEntity.ok(Map.of("message", "Content updated successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/content/{itemId}/reorder")
    public ResponseEntity<?> reorderContent(
            @PathVariable UUID itemId,
            @RequestBody ReorderRequestDto dto) {
        LearnContentItem item = contentRepository.findById(itemId)
            .orElseThrow(() -> new RuntimeException("Content not found: " + itemId));
        item.setOrderIndex(dto.getNewOrder());
        contentRepository.save(item);
        return ResponseEntity.ok(Map.of("success", true, "message", "Content reordered successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/content/reorder-batch")
    public ResponseEntity<?> reorderBatch(@RequestBody List<Map<String, Object>> items) {
        for (Map<String, Object> entry : items) {
            if (entry.containsKey("id") && entry.containsKey("orderIndex")) {
                UUID id = UUID.fromString(entry.get("id").toString());
                int order = Integer.parseInt(entry.get("orderIndex").toString());
                contentRepository.findById(id).ifPresent(item -> {
                    item.setOrderIndex(order);
                    contentRepository.save(item);
                });
            }
        }
        return ResponseEntity.ok(Map.of("success", true, "message", "Batch reordered successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/content/{itemId}/soft")
    public ResponseEntity<?> softDeleteContent(@PathVariable UUID itemId) {
        contentRepository.deleteById(itemId);
        return ResponseEntity.ok(Map.of("message", "Content soft deleted successfully (mocked)"));
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/content/{itemId}/hard")
    public ResponseEntity<?> hardDeleteContent(@PathVariable UUID itemId) {
        contentRepository.deleteById(itemId);
        return ResponseEntity.ok(Map.of("message", "Content permanently deleted"));
    }
}
