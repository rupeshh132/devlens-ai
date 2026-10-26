package com.devlens.api.security;

import org.springframework.stereotype.Component;

import java.util.regex.Pattern;

@Component
public class PromptSanitizer {

    // Matches common prompt injection keywords and metadata bypass commands
    private static final Pattern INJECTION_PATTERN = Pattern.compile(
            "(?i)\\b(ignore\\s+(all\\s+)?(previous|your)\\s+instructions|system\\s+prompt|forget\\s+(all\\s+)?(previous|your)\\s+instructions|output\\s+exactly|bypass|jailbreak|you\\s+are\\s+now|developer\\s+mode)\\b"
    );

    // Strips HTML/Script tags to prevent execution injection in UI
    private static final Pattern HTML_TAG_PATTERN = Pattern.compile("<[^>]*>");

    /**
     * Sanitizes user input to prevent LLM Prompt Injection and HTML Injection.
     *
     * @param input Raw text from user (e.g., resume, answers)
     * @return Sanitized text safe for LLM context
     */
    public String sanitize(String input) {
        if (input == null || input.trim().isEmpty()) {
            return input;
        }

        // 1. Remove HTML tags
        String sanitized = HTML_TAG_PATTERN.matcher(input).replaceAll("");

        // 2. Remove Prompt Injection commands completely
        sanitized = INJECTION_PATTERN.matcher(sanitized).replaceAll("[REDACTED_COMMAND]");

        return sanitized;
    }
}
