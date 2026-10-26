package com.devlens.api.dto.admin;

import com.devlens.api.entity.AnalysisJobStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDevScanSummaryDto {
    private UUID id;
    private UUID repositoryId;
    private String repositoryName;
    private AnalysisJobStatus status;
    private int progress;
    private Double score;
    private Instant startedAt;
    private Instant completedAt;
    private Instant createdAt;
}
