package com.devlens.learn.controller;

import com.devlens.learn.dto.*;
import com.devlens.learn.service.AdminCurriculumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/admin/curriculum")
@RequiredArgsConstructor
public class AdminCurriculumController {

    private final AdminCurriculumService curriculumService;

    // ─── EXAMS ───────────────────────────────────────────────────────────────
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/exams")
    public ResponseEntity<?> createExam(@RequestBody AdminExamDto dto) {
        return ResponseEntity.ok(curriculumService.createExam(dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/exams/{id}")
    public ResponseEntity<?> updateExam(@PathVariable UUID id, @RequestBody AdminExamDto dto) {
        return ResponseEntity.ok(curriculumService.updateExam(id, dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/exams/{id}")
    public ResponseEntity<?> deleteExam(@PathVariable UUID id) {
        curriculumService.deleteExam(id);
        return ResponseEntity.ok(Map.of("success", true, "message", "Exam deactivated successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/exams/{id}/reorder")
    public ResponseEntity<?> reorderExam(@PathVariable UUID id, @RequestBody ReorderRequestDto dto) {
        curriculumService.reorderExam(id, dto.getNewOrder());
        return ResponseEntity.ok(Map.of("success", true, "message", "Exam reordered successfully"));
    }

    // ─── SUBJECTS ────────────────────────────────────────────────────────────
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/subjects")
    public ResponseEntity<?> createSubject(@RequestBody AdminSubjectDto dto) {
        return ResponseEntity.ok(curriculumService.createSubject(dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/subjects/{id}")
    public ResponseEntity<?> updateSubject(@PathVariable UUID id, @RequestBody AdminSubjectDto dto) {
        return ResponseEntity.ok(curriculumService.updateSubject(id, dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/subjects/{id}")
    public ResponseEntity<?> deleteSubject(@PathVariable UUID id) {
        curriculumService.deleteSubject(id);
        return ResponseEntity.ok(Map.of("success", true, "message", "Subject deleted successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/subjects/{id}/reorder")
    public ResponseEntity<?> reorderSubject(@PathVariable UUID id, @RequestBody ReorderRequestDto dto) {
        curriculumService.reorderSubject(id, dto.getNewOrder());
        return ResponseEntity.ok(Map.of("success", true, "message", "Subject reordered successfully"));
    }

    // ─── CHAPTERS ────────────────────────────────────────────────────────────
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/chapters")
    public ResponseEntity<?> createChapter(@RequestBody AdminChapterDto dto) {
        return ResponseEntity.ok(curriculumService.createChapter(dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/chapters/{id}")
    public ResponseEntity<?> updateChapter(@PathVariable UUID id, @RequestBody AdminChapterDto dto) {
        return ResponseEntity.ok(curriculumService.updateChapter(id, dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/chapters/{id}")
    public ResponseEntity<?> deleteChapter(@PathVariable UUID id) {
        curriculumService.deleteChapter(id);
        return ResponseEntity.ok(Map.of("success", true, "message", "Chapter deleted successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/chapters/{id}/reorder")
    public ResponseEntity<?> reorderChapter(@PathVariable UUID id, @RequestBody ReorderRequestDto dto) {
        curriculumService.reorderChapter(id, dto.getNewOrder());
        return ResponseEntity.ok(Map.of("success", true, "message", "Chapter reordered successfully"));
    }

    // ─── TOPICS ──────────────────────────────────────────────────────────────
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/topics")
    public ResponseEntity<?> createTopic(@RequestBody AdminTopicDto dto) {
        return ResponseEntity.ok(curriculumService.createTopic(dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/topics/{id}")
    public ResponseEntity<?> updateTopic(@PathVariable UUID id, @RequestBody AdminTopicDto dto) {
        return ResponseEntity.ok(curriculumService.updateTopic(id, dto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/topics/{id}")
    public ResponseEntity<?> deleteTopic(@PathVariable UUID id) {
        curriculumService.deleteTopic(id);
        return ResponseEntity.ok(Map.of("success", true, "message", "Topic deleted successfully"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping("/topics/{id}/reorder")
    public ResponseEntity<?> reorderTopic(@PathVariable UUID id, @RequestBody ReorderRequestDto dto) {
        curriculumService.reorderTopic(id, dto.getNewOrder());
        return ResponseEntity.ok(Map.of("success", true, "message", "Topic reordered successfully"));
    }
}
