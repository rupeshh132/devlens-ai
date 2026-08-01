package com.devlens.api.analysis.stages;

import com.devlens.api.analysis.AnalysisContext;
import com.devlens.api.analysis.AnalysisStage;
import com.devlens.api.rule.RuleEngine;
import com.devlens.api.rule.RuleResult;
import com.devlens.api.scanner.ScanContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@Order(3)
@RequiredArgsConstructor
public class RuleStage implements AnalysisStage {

    private final RuleEngine ruleEngine;

    @Override
    public String getName() {
        return "Execute Rules";
    }

    @Override
    public void execute(AnalysisContext context) throws Exception {
        log.info("Starting RuleStage for repository: {}", context.getRepository().getId());
        
        ScanContext scanContext = ScanContext.builder()
                .repositoryId(context.getRepository().getId())
                .workspacePath(context.getWorkspacePath())
                .jobId(context.getJob().getId())
                .build();

        List<RuleResult> findings = ruleEngine.executeRules(scanContext);
        context.addFindings(findings);
    }

    @Override
    public int getProgressWeight() {
        return 40; // 40% of total job progress
    }
}
