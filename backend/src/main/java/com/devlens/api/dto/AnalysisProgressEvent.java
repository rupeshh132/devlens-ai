package com.devlens.api.dto;

import com.devlens.api.entity.AnalysisJobStatus;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class AnalysisProgressEvent {
    private UUID jobId;
    private AnalysisJobStatus status;
    private int progress;
    private String message;
    private String log;
}
