package com.devlens.api.service;

import com.devlens.api.exception.AiRateLimitException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * AI client service — powered by Groq (llama-3.3-70b-versatile).
 * Uses Groq's OpenAI-compatible REST API (free tier: 30 req/min, 14,400 req/day).
 */
@Service
@Slf4j
public class GroqClientService {

    private final RestClient restClient;
    private final String groqApiUrl;
    private final String groqApiKey;
    private final String groqModel;
    private final ObjectMapper objectMapper;

    public GroqClientService(
            @Value("${groq.api.url}") String groqApiUrl,
            @Value("${groq.api.key}") String groqApiKey,
            @Value("${groq.api.model}") String groqModel,
            ObjectMapper objectMapper) {
        this.restClient = RestClient.builder().build();
        this.groqApiUrl = groqApiUrl;
        this.groqApiKey = groqApiKey;
        this.groqModel = groqModel;
        this.objectMapper = objectMapper;
    }

    // ─── Shared helper: call Groq and extract text ────────────────────────────
    private String callGroq(String prompt, String context) {
        // Groq uses OpenAI-compatible chat completions format
        Map<String, Object> message = new HashMap<>();
        message.put("role", "user");
        message.put("content", prompt);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", groqModel);
        requestBody.put("messages", List.of(message));
        requestBody.put("temperature", 0.7);
        requestBody.put("max_tokens", 4096);

        try {
            String responseStr = restClient.post()
                    .uri(groqApiUrl)
                    .header("Authorization", "Bearer " + groqApiKey)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(requestBody)
                    .retrieve()
                    .body(String.class);

            JsonNode rootNode = objectMapper.readTree(responseStr);

            // Check for API-level error body
            if (rootNode.has("error")) {
                String errorType = rootNode.path("error").path("type").asText("");
                String errorMsg = rootNode.path("error").path("message").asText("Unknown AI error");
                if (errorType.contains("rate_limit") || errorMsg.contains("rate limit") || errorMsg.contains("429")) {
                    log.warn("Groq rate limit reached for [{}]: {}", context, errorMsg);
                    throw new AiRateLimitException(errorMsg);
                }
                throw new RuntimeException("Groq API error: " + errorMsg);
            }

            // Parse: choices[0].message.content
            String content = rootNode
                    .path("choices").get(0)
                    .path("message")
                    .path("content")
                    .asText("").trim();

            if (content.isEmpty()) {
                throw new RuntimeException("Empty response from Groq AI for [" + context + "]");
            }

            // Strip markdown code block wrappers if present
            if (content.startsWith("```json")) {
                content = content.substring(7);
            }
            if (content.startsWith("```")) {
                content = content.substring(3);
            }
            if (content.endsWith("```")) {
                content = content.substring(0, content.length() - 3);
            }

            return content.trim();

        } catch (AiRateLimitException e) {
            throw e; // re-throw so GlobalExceptionHandler maps it to HTTP 429
        } catch (Exception e) {
            if (e.getMessage() != null && (e.getMessage().contains("429") || e.getMessage().contains("rate_limit"))) {
                log.warn("Groq 429 detected via exception for [{}]", context);
                throw new AiRateLimitException("AI quota exceeded. Please try again in a few minutes.");
            }
            log.error("Error communicating with Groq AI for [{}]", context, e);
            throw new RuntimeException("Failed to call Groq AI [" + context + "]: " + e.getMessage(), e);
        }
    }

    // ─── Public API methods ───────────────────────────────────────────────────

    public String analyzeCode(String codeContent) {
        String prompt = "You are a Senior Security Engineer and Code Reviewer. Analyze the following code and return ONLY a valid JSON response (no markdown, no backticks, no other text) with the following structure:\n" +
                "{\n" +
                "  \"score\": (a double between 0.0 and 100.0, representing code quality and security),\n" +
                "  \"summary\": \"A short overall summary of the code quality\",\n" +
                "  \"vulnerabilities\": [\n" +
                "    {\n" +
                "      \"filePath\": \"(the file name if known, else Unknown)\",\n" +
                "      \"lineNumber\": (approximate line number if applicable, else 0),\n" +
                "      \"severity\": \"(HIGH, MEDIUM, LOW, INFO)\",\n" +
                "      \"description\": \"Description of the bug or vulnerability\",\n" +
                "      \"suggestedFix\": \"How to fix it\"\n" +
                "    }\n" +
                "  ]\n" +
                "}\n\n" +
                "Code to analyze:\n\n" + codeContent;

        return callGroq(prompt, "Code Analysis");
    }

    public String analyzeSkillGap(String resumeText, String targetRole) {
        String prompt = "You are an Expert Career Coach and Technical Recruiter. " +
                "Analyze the candidate's resume against their target role: '" + targetRole + "'.\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"overallMatchPercentage\": (integer between 0 and 100),\n" +
                "  \"matchedSkills\": [\"skill1\", \"skill2\"],\n" +
                "  \"missingSkills\": [\"skill3\", \"skill4\"],\n" +
                "  \"projectIdeas\": [\n" +
                "    {\n" +
                "      \"title\": \"Project Name\",\n" +
                "      \"description\": \"Description of what to build\",\n" +
                "      \"skillsTargeted\": [\"skill3\", \"skill4\"]\n" +
                "    }\n" +
                "  ],\n" +
                "  \"recommendations\": [\"recommendation 1\", \"recommendation 2\"]\n" +
                "}\n\n" +
                "Candidate Resume:\n" + resumeText;

        return callGroq(prompt, "Skill Gap Analysis");
    }

    public String generateRoadmap(String title, String gapReportJson) {
        String prompt = "You are a Technical Mentor and Career Planner. " +
                "Generate a detailed step-by-step roadmap for: '" + title + "'.\n" +
                "Use the following Skill Gap Analysis as context:\n" + gapReportJson + "\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"milestones\": [\n" +
                "    {\n" +
                "      \"title\": \"Milestone Title\",\n" +
                "      \"description\": \"Detailed description of what to learn\",\n" +
                "      \"estimatedTime\": \"e.g. 2 weeks\",\n" +
                "      \"status\": \"pending\",\n" +
                "      \"resources\": [\"Resource 1 URL or Name\", \"Resource 2 URL or Name\"]\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";

        return callGroq(prompt, "Roadmap Generation");
    }

    public String generateInterviewQuestions(String targetRole, String skillsJson) {
        String prompt = "You are an Expert Technical Interviewer. " +
                "Generate a list of 5 technical interview questions for a candidate applying for the role: '" + targetRole + "'.\n" +
                "Use the following skills as context:\n" + skillsJson + "\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"questions\": [\n" +
                "    {\n" +
                "      \"question\": \"The interview question text\",\n" +
                "      \"expectedAnswer\": \"A brief summary of what a good answer should cover\",\n" +
                "      \"difficulty\": \"Easy | Medium | Hard\"\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";

        return callGroq(prompt, "Interview Questions");
    }
    public String analyzeResume(String resumeText) {
        String prompt = "You are an Expert ATS (Applicant Tracking System) and Technical Recruiter. " +
                "Analyze the following resume text and return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"atsScore\": (a number between 0.0 and 100.0 representing the overall resume strength),\n" +
                "  \"suggestions\": [\"Specific suggestion 1\", \"Specific suggestion 2\", \"Specific suggestion 3\"]\n" +
                "}\n\n" +
                "Candidate Resume:\n" + resumeText;

        return callGroq(prompt, "Resume Analysis");
    }

    public String evaluateInterviewAnswers(String questionsAnswersJson) {
        String prompt = "You are an Expert Technical Interviewer. " +
                "You have just conducted an interview. I will provide you with a set of 5 questions, the expected answers, and the candidate's actual typed answers.\n" +
                "Evaluate the candidate's answers based on accuracy, completeness, and understanding of the core concepts.\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"overallScore\": (integer between 0 and 100, representing the overall performance),\n" +
                "  \"feedback\": [\n" +
                "    {\n" +
                "      \"question\": \"The exact question text\",\n" +
                "      \"score\": (integer between 0 and 100 for this specific answer),\n" +
                "      \"feedback\": \"Brief feedback explaining what they did well and what they missed\"\n" +
                "    }\n" +
                "  ]\n" +
                "}\n\n" +
                "Interview Data:\n" + questionsAnswersJson;

        return callGroq(prompt, "Interview Evaluation");
    }
}
