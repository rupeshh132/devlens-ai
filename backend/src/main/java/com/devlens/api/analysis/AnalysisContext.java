package com.devlens.api.analysis;

import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.entity.Repository;
import com.devlens.api.rule.RuleResult;
import com.devlens.api.scanner.ScanResult;
import lombok.Builder;
import lombok.Data;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@Builder
public class AnalysisContext {
    private final AnalysisJob job;
    private final Repository repository;
    
    private Path workspacePath;
    private ScanResult scanResult;
    private final List<RuleResult> findings = new ArrayList<>();
    
    public void addFindings(List<RuleResult> newFindings) {
        if (newFindings != null) {
            findings.addAll(newFindings);
        }
    }
}
