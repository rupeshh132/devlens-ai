package com.devlens.api.dto;

import com.devlens.api.entity.AnalysisJobStatus;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
@Builder
public class AnalysisResponse {
    private UUID id;
    private UUID repositoryId;
    private AnalysisJobStatus status;
    private int progress;
    private String errorMessage;
    private Instant startedAt;
    private Instant completedAt;
    private Instant createdAt;
    private Instant updatedAt;
}
