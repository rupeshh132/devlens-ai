package com.devlens.api.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class AnalysisRequest {
    @NotNull(message = "Repository ID is required")
    private UUID repositoryId;
}
