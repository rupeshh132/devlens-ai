package com.devlens.learn.controller;

import com.devlens.learn.dto.AdminQuestionCreateUpdateDto;
import com.devlens.learn.dto.AdminQuestionStatsDto;
import com.devlens.learn.service.AdminQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/admin/questions")
@RequiredArgsConstructor
public class AdminQuestionController {

    private final AdminQuestionService questionService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/stats")
    public ResponseEntity<AdminQuestionStatsDto> getStats() {
        return ResponseEntity.ok(questionService.getStats());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ResponseEntity<Map<String, Object>> getQuestions(
            @RequestParam(required = false) UUID examId,
            @RequestParam(required = false) UUID subjectId,
            @RequestParam(required = false) UUID chapterId,
            @RequestParam(required = false) UUID topicId,
            @RequestParam(required = false, defaultValue = "ALL") String difficulty,
            @RequestParam(required = false) Boolean isVerified,
            @RequestParam(required = false, defaultValue = "newest") String sort,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(questionService.getQuestions(examId, subjectId, chapterId, topicId, difficulty, isVerified, sort, search, page, size));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> createQuestion(@RequestBody AdminQuestionCreateUpdateDto dto) {
        return ResponseEntity.ok(questionService.createQuestion(dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<?> updateQuestion(
            @PathVariable UUID id,
            @RequestBody AdminQuestionCreateUpdateDto dto
    ) {
        return ResponseEntity.ok(questionService.updateQuestion(id, dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable UUID id) {
        questionService.deleteQuestion(id);
        return ResponseEntity.ok(Map.of("success", true, "message", "Question deleted successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/batch")
    public ResponseEntity<?> deleteQuestionsBatch(@RequestBody Map<String, List<UUID>> payload) {
        List<UUID> ids = payload.get("ids");
        if (ids != null && !ids.isEmpty()) {
            questionService.deleteQuestionsBatch(ids);
        }
        return ResponseEntity.ok(Map.of(
                "success", true,
                "message", (ids != null ? ids.size() : 0) + " questions deleted successfully"
        ));
    }
}
