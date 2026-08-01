package com.devlens.api.analysis.stages;

import com.devlens.api.analysis.AnalysisContext;
import com.devlens.api.analysis.AnalysisStage;
import com.devlens.api.scanner.ScanContext;
import com.devlens.api.scanner.ScanResult;
import com.devlens.api.scanner.ScannerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@Order(2)
@RequiredArgsConstructor
public class ScanStage implements AnalysisStage {

    private final ScannerService scannerService;

    @Override
    public String getName() {
        return "Scan Files";
    }

    @Override
    public void execute(AnalysisContext context) throws Exception {
        log.info("Starting ScanStage for repository: {}", context.getRepository().getId());
        
        ScanContext scanContext = ScanContext.builder()
                .repositoryId(context.getRepository().getId())
                .workspacePath(context.getWorkspacePath())
                .jobId(context.getJob().getId())
                .build();
                
        ScanResult scanResult = scannerService.scanWorkspace(scanContext);
        context.setScanResult(scanResult);
    }

    @Override
    public int getProgressWeight() {
        return 20; // 20% of total job progress
    }
}
