package com.devlens.api.service;

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
            JsonNode textNode = rootNode.path("candidates").get(0).path("content").path("parts").get(0).path("text");
            
            String jsonOutput = textNode.asText().trim();
            // Clean up possible markdown wrapper
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

        } catch (Exception e) {
            log.error("Error communicating with Gemini API", e);
            throw new RuntimeException("Failed to analyze code with AI: " + e.getMessage(), e);
        }
    }
}
