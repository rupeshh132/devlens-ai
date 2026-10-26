package com.devlens.learn.controller;

import com.devlens.learn.dto.CreatePyqPaperRequest;
import com.devlens.learn.entity.LearnPyqPaper;
import com.devlens.learn.entity.LearnPyqQuestion;
import com.devlens.learn.service.LearnPyqService;
import com.devlens.learn.service.LearnPyqAiExtractorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/v1/learn/admin/pyq")
@RequiredArgsConstructor
public class AdminPyqController {

    private final LearnPyqService pyqService;
    private final LearnPyqAiExtractorService aiExtractorService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> createPaper(@RequestBody CreatePyqPaperRequest request) {
        try {
            LearnPyqPaper paper = pyqService.createPaper(request);
            return ResponseEntity.ok(paper);
        } catch (Exception e) {
            log.error("Failed to create paper: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/{id}/upload-pdf")
    public ResponseEntity<?> uploadPaperPdf(
            @PathVariable UUID id,
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "autoExtract", defaultValue = "true") boolean autoExtract) {
        try {
            log.info("Receiving PDF upload for paper {}: filename={}, size={} bytes, contentType={}",
                    id, file.getOriginalFilename(), file.getSize(), file.getContentType());
            LearnPyqPaper updated = pyqService.uploadPaperPdf(id, file);

            if (autoExtract) {
                try {
                    log.info("Auto-extracting questions from uploaded PDF for paper: {}", id);
                    aiExtractorService.extractAndSaveQuestionsFromPdf(id, file.getBytes());
                } catch (Exception ex) {
                    log.warn("Auto-extraction failed or partially completed: {}", ex.getMessage());
                }
            }

            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            log.error("Failed to upload paper PDF for id {}: {}", id, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Failed to upload PDF"));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/{id}/extract-ai")
    public ResponseEntity<?> extractQuestionsWithAi(@PathVariable UUID id) {
        try {
            log.info("Admin triggered manual AI question extraction for paper: {}", id);
            var questions = aiExtractorService.extractQuestionsForExistingPaper(id);
            return ResponseEntity.ok(Map.of(
                    "message", "Extracted " + questions.size() + " questions successfully",
                    "totalQuestions", questions.size(),
                    "questions", questions
            ));
        } catch (Exception e) {
            log.error("AI extraction failed for paper {}: {}", id, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Failed to extract questions"));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/{id}/upload-solution")
    public ResponseEntity<?> uploadSolutionPdf(
            @PathVariable UUID id,
            @RequestParam("file") MultipartFile file) {
        try {
            log.info("Receiving solution PDF upload for paper {}: filename={}, size={} bytes",
                    id, file.getOriginalFilename(), file.getSize());
            LearnPyqPaper updated = pyqService.uploadSolutionPdf(id, file);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            log.error("Failed to upload solution PDF for id {}: {}", id, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Failed to upload solution PDF"));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{id}/questions")
    public ResponseEntity<?> getPaperQuestions(@PathVariable UUID id) {
        try {
            Map<String, Object> details = pyqService.getPaperWithQuestions(id);
            return ResponseEntity.ok(details);
        } catch (Exception e) {
            log.error("Failed to fetch questions for paper {}: {}", id, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Paper not found"));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/questions/{questionId}")
    public ResponseEntity<?> updateQuestion(
            @PathVariable UUID questionId,
            @RequestBody Map<String, Object> updates) {
        try {
            LearnPyqQuestion updated = pyqService.updateQuestion(questionId, updates);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            log.error("Failed to update question {}: {}", questionId, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Failed to update question"));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/questions/{questionId}")
    public ResponseEntity<?> deleteQuestion(@PathVariable UUID questionId) {
        try {
            pyqService.deleteQuestion(questionId);
            return ResponseEntity.ok(Map.of("message", "Question deleted successfully", "id", questionId.toString()));
        } catch (Exception e) {
            log.error("Failed to delete question {}: {}", questionId, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Failed to delete question"));
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deletePaper(@PathVariable UUID id) {
        pyqService.deletePaper(id);
        return ResponseEntity.ok(Map.of("message", "Paper deleted successfully", "id", id.toString()));
    }
}
