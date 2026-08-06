package com.devlens.api.exception;

/**
 * Thrown when the Gemini AI API returns a 429 Too Many Requests (quota exhausted).
 * Mapped to HTTP 429 in GlobalExceptionHandler.
 */
public class AiRateLimitException extends RuntimeException {
    public AiRateLimitException(String message) {
        super(message);
    }
}
