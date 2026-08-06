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

@Service
@Slf4j
public class GeminiClientService {

    private final RestClient restClient;
    private final String geminiApiUrl;
    private final String geminiApiKey;
    private final ObjectMapper objectMapper;

    public GeminiClientService(
            @Value("${gemini.api.url}") String geminiApiUrl,
            @Value("${gemini.api.key}") String geminiApiKey,
            ObjectMapper objectMapper) {
        this.restClient = RestClient.builder().build();
        this.geminiApiUrl = geminiApiUrl;
        this.geminiApiKey = geminiApiKey;
        this.objectMapper = objectMapper;
    }

    // ─── Shared helper: call Gemini and extract text ──────────────────────────
    private String callGemini(String prompt, String context) {
        Map<String, Object> requestBody = new HashMap<>();
        Map<String, Object> contentMap = new HashMap<>();
        Map<String, Object> partsMap = new HashMap<>();

        partsMap.put("text", prompt);
        contentMap.put("parts", List.of(partsMap));
        requestBody.put("contents", List.of(contentMap));

        try {
            String url = geminiApiUrl + "?key=" + geminiApiKey;

            String responseStr = restClient.post()
                    .uri(url)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(requestBody)
                    .retrieve()
                    .body(String.class);

            JsonNode rootNode = objectMapper.readTree(responseStr);

            // Check for API-level error (e.g. 429 quota returned as 200 with error body)
            if (rootNode.has("error")) {
                int code = rootNode.path("error").path("code").asInt(0);
                String message = rootNode.path("error").path("message").asText("Unknown AI error");
                if (code == 429) {
                    log.warn("Gemini API quota exhausted for [{}]: {}", context, message);
                    throw new AiRateLimitException(message);
                }
                throw new RuntimeException("Gemini API error [" + code + "]: " + message);
            }

            JsonNode textNode = rootNode.path("candidates").get(0)
                    .path("content").path("parts").get(0).path("text");

            String jsonOutput = textNode.asText().trim();

            // Strip markdown code block wrappers if present
            if (jsonOutput.startsWith("```json")) {
                jsonOutput = jsonOutput.substring(7);
            }
            if (jsonOutput.startsWith("```")) {
                jsonOutput = jsonOutput.substring(3);
            }
            if (jsonOutput.endsWith("```")) {
                jsonOutput = jsonOutput.substring(0, jsonOutput.length() - 3);
            }

            return jsonOutput.trim();

        } catch (AiRateLimitException e) {
            throw e; // re-throw as-is so GlobalExceptionHandler maps it to 429
        } catch (Exception e) {
            // Detect 429 from HTTP-level exception message as a fallback
            if (e.getMessage() != null && e.getMessage().contains("429")) {
                log.warn("Gemini API 429 detected via HTTP exception for [{}]", context);
                throw new AiRateLimitException("AI quota exceeded. Please try again in a few minutes.");
            }
            log.error("Error communicating with Gemini API for [{}]", context, e);
            throw new RuntimeException("Failed to call Gemini AI [" + context + "]: " + e.getMessage(), e);
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

        return callGemini(prompt, "Code Analysis");
    }

    public String analyzeSkillGap(String resumeText, String targetRole) {
        String prompt = "You are an Expert Career Coach and Technical Recruiter. " +
                "Analyze the candidate's resume against their target role: '" + targetRole + "'.\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with the following structure:\n" +
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

        return callGemini(prompt, "Skill Gap Analysis");
    }

    public String generateRoadmap(String title, String gapReportJson) {
        String prompt = "You are a Technical Mentor and Career Planner. " +
                "Generate a detailed step-by-step roadmap for: '" + title + "'.\n" +
                "Use the following Skill Gap Analysis as context:\n" + gapReportJson + "\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with the following structure:\n" +
                "{\n" +
                "  \"milestones\": [\n" +
                "    {\n" +
                "      \"title\": \"Milestone Title (e.g. Master React Hooks)\",\n" +
                "      \"description\": \"Detailed description of what to learn\",\n" +
                "      \"estimatedTime\": \"e.g. 2 weeks\",\n" +
                "      \"status\": \"pending\",\n" +
                "      \"resources\": [\"Resource 1 URL or Name\", \"Resource 2 URL or Name\"]\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";

        return callGemini(prompt, "Roadmap Generation");
    }

    public String generateInterviewQuestions(String targetRole, String skillsJson) {
        String prompt = "You are an Expert Technical Interviewer. " +
                "Generate a list of 5 technical interview questions for a candidate applying for the role: '" + targetRole + "'.\n" +
                "Use the following skills as context to tailor the questions (make them relevant to these skills if possible):\n" + skillsJson + "\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with the following structure:\n" +
                "{\n" +
                "  \"questions\": [\n" +
                "    {\n" +
                "      \"question\": \"The interview question text\",\n" +
                "      \"expectedAnswer\": \"A brief summary of what a good answer should cover\",\n" +
                "      \"difficulty\": \"Easy | Medium | Hard\"\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";

        return callGemini(prompt, "Interview Questions");
    }
}
