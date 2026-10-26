package com.devlens.learn.controller;

import com.devlens.learn.service.LearnContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/content")
@RequiredArgsConstructor
public class LearnContentController {

    private final LearnContentService learnContentService;

    @GetMapping("/exams")
    public ResponseEntity<?> getAllExamTypes() {
        return ResponseEntity.ok(learnContentService.getAllExamTypes());
    }

    @GetMapping("/exams/{examTypeId}/subjects")
    public ResponseEntity<?> getSubjects(@PathVariable UUID examTypeId) {
        return ResponseEntity.ok(learnContentService.getSubjectsByExamType(examTypeId));
    }

    @GetMapping("/subjects/{subjectId}/chapters")
    public ResponseEntity<?> getChapters(@PathVariable UUID subjectId) {
        return ResponseEntity.ok(learnContentService.getChaptersBySubject(subjectId));
    }

    @GetMapping("/chapters/{chapterId}/topics")
    public ResponseEntity<?> getTopics(@PathVariable UUID chapterId) {
        return ResponseEntity.ok(learnContentService.getTopicsByChapter(chapterId));
    }

    @GetMapping("/topics/{topicId}/items")
    public ResponseEntity<?> getContentItems(@PathVariable UUID topicId) {
        return ResponseEntity.ok(learnContentService.getContentItemsByTopic(topicId));
    }

    @GetMapping("/topics/{topicId}/questions")
    public ResponseEntity<?> getTopicQuestions(@PathVariable UUID topicId) {
        return ResponseEntity.ok(learnContentService.getQuestionsByTopic(topicId));
    }

    @org.springframework.security.access.prepost.PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/items/{contentId}/rating")
    public ResponseEntity<?> rateContentItem(
            @org.springframework.security.core.annotation.AuthenticationPrincipal com.devlens.learn.security.LearnUserPrincipal principal,
            @PathVariable UUID contentId,
            @RequestBody java.util.Map<String, Object> body
    ) {
        boolean isHelpful = Boolean.TRUE.equals(body.get("isHelpful"));
        String feedbackText = body.get("feedbackText") != null ? body.get("feedbackText").toString() : null;
        learnContentService.rateContentItem(principal.getId(), contentId, isHelpful, feedbackText);
        return ResponseEntity.ok(java.util.Map.of("message", "Rating submitted successfully"));
    }

    @org.springframework.security.access.prepost.PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/items/{contentId}/rating")
    public ResponseEntity<?> getContentRating(
            @org.springframework.security.core.annotation.AuthenticationPrincipal com.devlens.learn.security.LearnUserPrincipal principal,
            @PathVariable UUID contentId
    ) {
        return ResponseEntity.ok(learnContentService.getContentRating(principal.getId(), contentId));
    }
}
