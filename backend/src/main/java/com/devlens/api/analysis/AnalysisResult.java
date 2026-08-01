package com.devlens.api.analysis;

import com.devlens.api.rule.RuleResult;
import com.devlens.api.scanner.ScanResult;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class AnalysisResult {
    private UUID jobId;
    private UUID repositoryId;
    private ScanResult scanResult;
    private List<RuleResult> findings;
    private boolean successful;
    private String errorMessage;
}
