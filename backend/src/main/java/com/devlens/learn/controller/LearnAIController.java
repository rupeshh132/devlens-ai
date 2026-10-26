package com.devlens.learn.controller;

import com.devlens.learn.security.LearnUserPrincipal;
import com.devlens.learn.service.LearnAIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/learn/ai")
@RequiredArgsConstructor
public class LearnAIController {

    private final LearnAIService learnAIService;

    @PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/study-plan/generate")
    public ResponseEntity<?> generateStudyPlan(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestBody Map<String, String> request) {
            
        String weakTopics = request.get("weakTopics");
        String strongTopics = request.get("strongTopics");
        String dailyHours = request.get("dailyHours");
        
        String planJson = learnAIService.generateStudyPlan(principal.getId(), weakTopics, strongTopics, dailyHours);
        
        return ResponseEntity.ok()
                .header("Content-Type", "application/json")
                .body(planJson);
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/doubt-quota")
    public ResponseEntity<?> getDoubtQuota(@AuthenticationPrincipal LearnUserPrincipal principal) {
        return ResponseEntity.ok(learnAIService.getDoubtQuota(principal.getId()));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/ask-doubt")
    public ResponseEntity<?> askDoubt(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestBody Map<String, String> request) {
            
        String topic = request.getOrDefault("topic", "General Studies");
        String question = request.get("question");
        
        if (question == null || question.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Question cannot be empty"));
        }

        try {
            LearnAIService.AskDoubtResult result = learnAIService.askDoubtDetails(principal.getId(), topic, question);
            return ResponseEntity.ok(Map.of(
                "answer", result.getAnswer(),
                "doubtsUsedToday", result.getDoubtsUsedToday(),
                "dailyLimit", result.getDailyLimit(),
                "doubtsRemaining", result.getDoubtsRemaining(),
                "isPro", result.isPro()
            ));
        } catch (RuntimeException ex) {
            if ("LIMIT_REACHED".equals(ex.getMessage())) {
                return ResponseEntity.status(403).body(Map.of("error", "Free daily doubt limit reached. Upgrade to Pro."));
            }
            throw ex;
        }
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/generate-practice")
    public ResponseEntity<?> generatePractice(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestBody Map<String, String> request) {
            
        String topic = request.get("topic");
        
        if (topic == null || topic.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Topic cannot be empty"));
        }

        try {
            String prompt = "Generate 3 hard multiple-choice questions for the topic: " + topic + ". Format as JSON with question, options (A,B,C,D), and correct_answer.";
            String answer = learnAIService.askDoubt(principal.getId(), topic, prompt);
            return ResponseEntity.ok(Map.of("practiceSet", answer));
        } catch (RuntimeException ex) {
            if ("LIMIT_REACHED".equals(ex.getMessage())) {
                return ResponseEntity.status(403).body(Map.of("error", "Free daily AI limit reached. Upgrade to Pro."));
            }
            throw ex;
        }
    }
}
