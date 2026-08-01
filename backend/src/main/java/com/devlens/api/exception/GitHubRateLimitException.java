package com.devlens.api.exception;

public class GitHubRateLimitException extends GitHubIntegrationException {
    public GitHubRateLimitException(String message) {
        super(message);
    }
}
