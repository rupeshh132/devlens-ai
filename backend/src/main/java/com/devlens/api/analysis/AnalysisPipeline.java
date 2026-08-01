package com.devlens.api.analysis;

import com.devlens.api.service.AnalysisJobService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AnalysisPipeline {

    private final List<AnalysisStage> stages;
    private final AnalysisJobService jobService;

    public AnalysisResult execute(AnalysisContext context) {
        log.info("Starting AnalysisPipeline for Job ID: {}", context.getJob().getId());
        int currentProgress = 0;

        try {
            for (AnalysisStage stage : stages) {
                log.info("Executing Stage: {}", stage.getName());
                
                stage.execute(context);
                
                currentProgress += stage.getProgressWeight();
                // Ensure we don't go over 100% just in case
                int normalizedProgress = Math.min(currentProgress, 99);
                
                jobService.updateProgress(context.getJob().getId(), normalizedProgress);
                log.info("Completed Stage: {}. Progress: {}%", stage.getName(), normalizedProgress);
            }

            log.info("AnalysisPipeline completed successfully for Job ID: {}", context.getJob().getId());
            return AnalysisResult.builder()
                    .jobId(context.getJob().getId())
                    .repositoryId(context.getRepository().getId())
                    .scanResult(context.getScanResult())
                    .findings(context.getFindings())
                    .successful(true)
                    .build();

        } catch (Exception e) {
            log.error("AnalysisPipeline failed at some stage for Job ID: {}", context.getJob().getId(), e);
            return AnalysisResult.builder()
                    .jobId(context.getJob().getId())
                    .repositoryId(context.getRepository().getId())
                    .successful(false)
                    .errorMessage(e.getMessage())
                    .build();
        }
    }
}
