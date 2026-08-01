package com.devlens.api.dto;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
@Builder
public class ReportResponse {
    private UUID id;
    private UUID analysisId;
    private String fileFormat;
    private String storageUrl;
    private long sizeBytes;
    private Instant generatedAt;
}
