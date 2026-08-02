package com.devlens.api.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class AnalysisReportResponse {
    private UUID jobId;
    private Double score;
    private String summary;
    private List<VulnerabilityDto> vulnerabilities;

    @Data
    @Builder
    public static class VulnerabilityDto {
        private UUID id;
        private String filePath;
        private Integer lineNumber;
        private String severity;
        private String description;
        private String suggestedFix;
    }
}
