package com.devlens.api.dto;

public record CommitResponse(
        String sha,
        String message,
        String author,
        String date
) {}
