package com.devlens.learn.controller;

import com.devlens.learn.security.LearnUserPrincipal;
import com.devlens.learn.service.MockTestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/tests")
@RequiredArgsConstructor
public class MockTestController {

    private final MockTestService mockTestService;
    private final com.devlens.learn.service.LearnPdfService pdfService;

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/my-tests")
    public ResponseEntity<?> getMyTests(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestParam(required = false) String subject,
            @RequestParam(required = false) String type) {
        return ResponseEntity.ok(mockTestService.getMyTests(principal.getId(), subject, type));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/exam/{examTypeId}")
    public ResponseEntity<?> getAvailableTests(@PathVariable UUID examTypeId) {
        return ResponseEntity.ok(mockTestService.getAvailableTests(examTypeId));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/{mockTestId}")
    public ResponseEntity<?> getTestDetails(@PathVariable UUID mockTestId) {
        return ResponseEntity.ok(mockTestService.getTestDetails(mockTestId));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/{mockTestId}/start")
    public ResponseEntity<?> startTest(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @PathVariable UUID mockTestId) {
        return ResponseEntity.ok(mockTestService.startTest(principal.getId(), mockTestId));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/{mockTestId}/questions")
    public ResponseEntity<?> getTestQuestions(@PathVariable UUID mockTestId) {
        return ResponseEntity.ok(mockTestService.getTestQuestions(mockTestId));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/attempt/{attemptId}/submit")
    @SuppressWarnings("unchecked")
    public ResponseEntity<?> submitTest(
            @PathVariable UUID attemptId,
            @RequestBody Map<String, Object> body) {
        Map<String, String> answers = new java.util.HashMap<>();
        Map<String, Integer> questionTimes = new java.util.HashMap<>();

        if (body != null && body.containsKey("answers") && body.get("answers") instanceof Map<?, ?> ansRaw) {
            for (Map.Entry<?, ?> e : ansRaw.entrySet()) {
                if (e.getKey() != null && e.getValue() != null) {
                    answers.put(String.valueOf(e.getKey()), String.valueOf(e.getValue()));
                }
            }
            if (body.get("questionTimes") instanceof Map<?, ?> qtRaw) {
                for (Map.Entry<?, ?> e : qtRaw.entrySet()) {
                    if (e.getKey() != null && e.getValue() instanceof Number n) {
                        questionTimes.put(String.valueOf(e.getKey()), Math.max(0, n.intValue()));
                    }
                }
            }
        } else if (body != null) {
            for (Map.Entry<String, Object> e : body.entrySet()) {
                if (e.getKey() != null && e.getValue() != null) {
                    answers.put(e.getKey(), String.valueOf(e.getValue()));
                }
            }
        }
        return ResponseEntity.accepted().body(mockTestService.submitTest(attemptId, answers, questionTimes));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/attempt/{attemptId}")
    public ResponseEntity<?> getAttemptDetails(@PathVariable UUID attemptId) {
        return ResponseEntity.ok(mockTestService.getAttemptDetails(attemptId));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/attempt/{attemptId}/review")
    public ResponseEntity<?> getAttemptReview(@PathVariable UUID attemptId) {
        return ResponseEntity.ok(mockTestService.getAttemptReview(attemptId));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/{mockTestId}/download")
    public ResponseEntity<byte[]> downloadTestPdf(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @PathVariable UUID mockTestId) {
        
        byte[] pdfBytes = pdfService.generateWatermarkedMockTestPdf(mockTestId, principal.getId());
        
        org.springframework.http.HttpHeaders headers = new org.springframework.http.HttpHeaders();
        headers.setContentType(org.springframework.http.MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "MockTest_" + mockTestId + ".pdf");
        
        return new ResponseEntity<>(pdfBytes, headers, org.springframework.http.HttpStatus.OK);
    }

    @GetMapping("/{mockTestId}/leaderboard")
    public ResponseEntity<?> getLeaderboard(@PathVariable UUID mockTestId) {
        return ResponseEntity.ok(mockTestService.getLeaderboard(mockTestId));
    }
}
