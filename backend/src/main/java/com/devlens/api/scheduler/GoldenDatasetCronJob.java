package com.devlens.api.scheduler;

import com.devlens.api.service.GroqClientService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class GoldenDatasetCronJob {

    private final GroqClientService groqClientService;
    private final ObjectMapper objectMapper;

    // Runs every night at 2:00 AM server time
    @Scheduled(cron = "0 0 2 * * *")
    public void runGoldenDatasetDriftCheck() {
        log.info("Starting Nightly Golden Dataset AI Drift Check...");
        
        try {
            testStudyPlanGeneration();
            testResumeAnalysis();
            log.info("Nightly Golden Dataset Check PASSED. No AI Hallucinations detected.");
        } catch (Exception e) {
            log.error("CRITICAL ALARM: AI Drift or Hallucination Detected! Details: {}", e.getMessage(), e);
            // In the future, integrate EmailService here to send an alert to admin@devlens.in
        }
    }

    private void testStudyPlanGeneration() throws Exception {
        String examGoal = "UPSC Prelims";
        String examDate = "2024-05-26";
        String weakTopics = "History, Geography";
        String strongTopics = "Maths";

        String jsonResponse = groqClientService.generateStudyPlan(examGoal, examDate, weakTopics, strongTopics, "2");
        
        JsonNode rootNode = objectMapper.readTree(jsonResponse);

        if (!rootNode.has("plan_title") || !rootNode.has("daily_plans")) {
            throw new RuntimeException("Study Plan JSON Schema drift detected. Missing required keys.");
        }

        JsonNode dailyPlans = rootNode.get("daily_plans");
        if (!dailyPlans.isArray()) {
            throw new RuntimeException("Study Plan 'daily_plans' is not an array.");
        }

        if (dailyPlans.size() < 1) {
            throw new RuntimeException("Study Plan hallucination: Generated less than 1 day of planning.");
        }
    }

    private void testResumeAnalysis() throws Exception {
        String dummyResume = "John Doe\nSoftware Engineer\nSkills: Java, Spring Boot, React.\nExperience: 2 years at TechCorp.";
        
        String jsonResponse = groqClientService.analyzeResume(dummyResume);
        
        JsonNode rootNode = objectMapper.readTree(jsonResponse);

        if (!rootNode.has("atsScore") || !rootNode.has("suggestions")) {
            throw new RuntimeException("Resume Analysis JSON Schema drift detected. Missing required keys.");
        }

        double atsScore = rootNode.get("atsScore").asDouble();
        if (atsScore < 0.0 || atsScore > 100.0) {
            throw new RuntimeException("Resume Analysis hallucination: atsScore out of bounds (" + atsScore + ")");
        }

        JsonNode suggestions = rootNode.get("suggestions");
        if (!suggestions.isArray() || suggestions.size() == 0) {
            throw new RuntimeException("Resume Analysis hallucination: No suggestions provided.");
        }
    }
}
