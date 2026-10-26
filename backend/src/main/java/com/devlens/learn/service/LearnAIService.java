package com.devlens.learn.service;

import com.devlens.api.service.GroqClientService;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnAIService {

    private final GroqClientService groqClientService;
    private final LearnUserRepository learnUserRepository;
    private final LearnTemplatePlanCache templatePlanCache;
    private final SystemSettingsService systemSettingsService;
    private final com.devlens.learn.repository.LearnAiDoubtRepository learnAiDoubtRepository;

    @lombok.Data
    @lombok.AllArgsConstructor
    @lombok.NoArgsConstructor
    @lombok.Builder
    public static class DoubtQuotaDto {
        private int doubtsUsedToday;
        private int dailyLimit;
        private int doubtsRemaining;
        private boolean isPro;
    }

    @lombok.Data
    @lombok.AllArgsConstructor
    @lombok.NoArgsConstructor
    @lombok.Builder
    public static class AskDoubtResult {
        private String answer;
        private int doubtsUsedToday;
        private int dailyLimit;
        private int doubtsRemaining;
        private boolean isPro;
    }

    public DoubtQuotaDto getDoubtQuota(UUID userId) {
        LearnUser user = learnUserRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));

        boolean isPaidUser = user.isPaidUser();
        java.time.LocalDate today = java.time.LocalDate.now();

        int usedToday = 0;
        if (user.getLastDoubtDate() != null && user.getLastDoubtDate().equals(today)) {
            usedToday = user.getDailyFreeDoubtsUsed() != null ? user.getDailyFreeDoubtsUsed() : 0;
        }

        int dailyLimit = isPaidUser 
                ? systemSettingsService.getIntSetting("pro_doubts_daily_limit", 100)
                : systemSettingsService.getIntSetting("free_doubts_daily_limit", 5);

        int remaining = Math.max(0, dailyLimit - usedToday);

        return DoubtQuotaDto.builder()
                .doubtsUsedToday(usedToday)
                .dailyLimit(dailyLimit)
                .doubtsRemaining(remaining)
                .isPro(isPaidUser)
                .build();
    }

    public AskDoubtResult askDoubtDetails(UUID userId, String topic, String question) {
        // 1. Check Global Emergency Killswitch
        if (systemSettingsService.getBooleanSetting("ai_emergency_killswitch", false)) {
            throw new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.SERVICE_UNAVAILABLE,
                "AI Doubt Solver is temporarily undergoing scheduled maintenance by Admin. Please try again shortly."
            );
        }

        LearnUser user = learnUserRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));

        boolean isPaidUser = user.isPaidUser();
        java.time.LocalDate today = java.time.LocalDate.now();

        if (user.getLastDoubtDate() == null || !user.getLastDoubtDate().equals(today)) {
            user.setLastDoubtDate(today);
            user.setDailyFreeDoubtsUsed(0);
        }

        int dailyLimit = isPaidUser 
                ? systemSettingsService.getIntSetting("pro_doubts_daily_limit", 100)
                : systemSettingsService.getIntSetting("free_doubts_daily_limit", 5);

        if (!isPaidUser) {
            if (user.getDailyFreeDoubtsUsed() != null && user.getDailyFreeDoubtsUsed() >= dailyLimit) {
                throw new RuntimeException("LIMIT_REACHED");
            }
            user.setDailyFreeDoubtsUsed(user.getDailyFreeDoubtsUsed() + 1);
            learnUserRepository.save(user);
        } else {
            if (dailyLimit > 0 && user.getDailyFreeDoubtsUsed() != null && user.getDailyFreeDoubtsUsed() >= dailyLimit) {
                throw new org.springframework.web.server.ResponseStatusException(
                    org.springframework.http.HttpStatus.TOO_MANY_REQUESTS,
                    "You've used all " + dailyLimit + " AI doubts for today. Your limit refreshes tomorrow — keep up the great work! 🌟"
                );
            }
            user.setDailyFreeDoubtsUsed(user.getDailyFreeDoubtsUsed() + 1);
            learnUserRepository.save(user);
        }

        long startTime = System.currentTimeMillis();
        GroqClientService.GroqCallResult result;
        try {
            result = groqClientService.solveDoubtWithUsage(topic, question);
        } catch (Exception ex) {
            long latency = System.currentTimeMillis() - startTime;
            recordAiDoubt(user, topic, question, "ERROR: " + ex.getMessage(), "unknown", 0, 0, 0, latency, "FAILED");
            throw ex;
        }

        recordAiDoubt(user, topic, question, result.getContent(), result.getModel(),
                result.getPromptTokens(), result.getCompletionTokens(), result.getTotalTokens(),
                result.getLatencyMs(), "SUCCESS");

        int used = user.getDailyFreeDoubtsUsed() != null ? user.getDailyFreeDoubtsUsed() : 1;
        int remaining = Math.max(0, dailyLimit - used);

        return AskDoubtResult.builder()
                .answer(result.getContent())
                .doubtsUsedToday(used)
                .dailyLimit(dailyLimit)
                .doubtsRemaining(remaining)
                .isPro(isPaidUser)
                .build();
    }

    public String askDoubt(UUID userId, String topic, String question) {
        return askDoubtDetails(userId, topic, question).getAnswer();
    }

    private void recordAiDoubt(LearnUser user, String topic, String question, String response,
                              String model, int promptTokens, int completionTokens, int totalTokens,
                              long latencyMs, String status) {
        try {
            double costUsd = (promptTokens * 0.59 + completionTokens * 0.79) / 1_000_000.0;
            double costInr = costUsd * 86.5;

            com.devlens.learn.entity.LearnAiDoubt doubt = com.devlens.learn.entity.LearnAiDoubt.builder()
                    .userId(user != null ? user.getId() : null)
                    .userEmail(user != null ? user.getEmail() : "anonymous")
                    .topic(topic != null ? topic : "General Studies")
                    .questionText(question)
                    .aiResponse(response)
                    .model(model)
                    .promptTokens(promptTokens)
                    .completionTokens(completionTokens)
                    .totalTokens(totalTokens)
                    .estimatedCostUsd(java.math.BigDecimal.valueOf(costUsd).setScale(6, java.math.RoundingMode.HALF_UP))
                    .estimatedCostInr(java.math.BigDecimal.valueOf(costInr).setScale(4, java.math.RoundingMode.HALF_UP))
                    .latencyMs(latencyMs)
                    .status(status)
                    .isFlagged(false)
                    .build();

            learnAiDoubtRepository.save(doubt);
        } catch (Exception e) {
            log.error("Failed to persist AI doubt telemetry: {}", e.getMessage());
        }
    }

    public String generateStudyPlan(UUID userId, String weakTopics, String strongTopics, String dailyHours) {
        LearnUser user = learnUserRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));

        String examGoal = user.getExamGoal();
        if (examGoal == null || examGoal.trim().isEmpty()) {
            throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.BAD_REQUEST, "Target class not set. Please update your exam goal.");
        }
        
        String goalNormalized = examGoal.trim().toLowerCase();
        java.util.List<String> validGoals = java.util.List.of(
            "class 9", "class 10", "class 11", "class 12",
            "jee mains", "jee advanced", "neet ug", "ssc cgl", "upsc cse"
        );
        boolean isSupported = validGoals.stream().anyMatch(g -> goalNormalized.contains(g) || g.contains(goalNormalized));
        if (!isSupported) {
            throw new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.BAD_REQUEST, 
                "Unsupported target exam goal: " + examGoal + ". Supported goals: Class 9, Class 10, Class 11, Class 12, JEE Mains, NEET UG, SSC CGL, UPSC CSE"
            );
        }
        String hours = (dailyHours == null || dailyHours.isBlank()) ? "2" : dailyHours;
        
        boolean isPaidUser = user.isPaidUser();

        String planJson;

        if (!isPaidUser) {
            throw new org.springframework.web.server.ResponseStatusException(org.springframework.http.HttpStatus.FORBIDDEN, "Study Plan is available on Pro");
        }
        
        // BEHAVIOR NOTE (Single Source of Truth):
        // The billing plan does not formally encode the class. The user's target class 
        // is exclusively determined by user.getExamGoal() which is set ONCE during signup.
        // This acts as the unchangeable single source of truth for all roadmap generation.
        
        {
            log.info("Paid user {}: Calling Groq AI for custom auto-healing roadmap for {}", userId, examGoal);
            try {
                String examDateStr = user.getTargetExamDate() != null ? user.getTargetExamDate().toString() : "Unknown";
                String weak = (weakTopics == null || weakTopics.isBlank()) ? "All core subjects" : weakTopics;
                String strong = (strongTopics == null || strongTopics.isBlank()) ? "Revision" : strongTopics;
                planJson = groqClientService.generateStudyPlan(examGoal, examDateStr, weak, strong, hours);
            } catch (Exception e) {
                log.warn("Groq AI call failed for paid user {}, falling back to pre-cached template: {}", userId, e.getMessage());
                planJson = templatePlanCache.getTemplateForGoal(examGoal, hours);
            }
        }

        // Persist the plan to database
        user.setCurrentStudyPlanJson(planJson);
        learnUserRepository.save(user);

        return planJson;
    }
}

