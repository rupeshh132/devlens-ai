package com.devlens.api.service;

import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.entity.AnalysisJobStatus;
import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.api.analysis.AnalysisPipeline;
import com.devlens.api.analysis.AnalysisContext;
import com.devlens.api.analysis.AnalysisResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import com.devlens.api.dto.AnalysisProgressEvent;

@Slf4j
@Service
@RequiredArgsConstructor
public class JobScheduler {

    private final AnalysisJobRepository jobRepository;
    private final AnalysisPipeline analysisPipeline;
    private final SseService sseService;
    
    // Track running jobs to support cancellation
    private final ConcurrentHashMap<UUID, Thread> runningJobs = new ConcurrentHashMap<>();

    @Async("jobExecutor")
    @Transactional
    public void executeJob(UUID jobId) {
        log.info("Starting execution for job: {}", jobId);
        
        AnalysisJob job = jobRepository.findById(jobId).orElse(null);
        if (job == null || job.getStatus() == AnalysisJobStatus.CANCELLED) {
            log.info("Job {} is null or cancelled before starting", jobId);
            return;
        }

        job.setStatus(AnalysisJobStatus.IN_PROGRESS);
        job.setStartedAt(Instant.now());
        job.setProgress(0);
        jobRepository.save(job);
        
        runningJobs.put(jobId, Thread.currentThread());

        try {
            AnalysisContext context = AnalysisContext.builder()
                    .job(job)
                    .repository(job.getRepository())
                    .build();

            AnalysisResult result = analysisPipeline.execute(context);

            if (result.isSuccessful()) {
                job.setStatus(AnalysisJobStatus.COMPLETED);
                job.setCompletedAt(Instant.now());
                job.setProgress(100);
            } else {
                job.setStatus(AnalysisJobStatus.FAILED);
                job.setErrorMessage(result.getErrorMessage());
                job.setCompletedAt(Instant.now());
            }
            jobRepository.save(job);
            log.info("Finished job: {}", jobId);
            
            broadcastEvent(job, result.isSuccessful() ? "Analysis completed" : "Analysis failed");
            
        } catch (Exception e) {
            log.error("Job {} failed", jobId, e);
            job.setStatus(AnalysisJobStatus.FAILED);
            job.setErrorMessage(e.getMessage());
            job.setCompletedAt(Instant.now());
            jobRepository.save(job);
            
            broadcastEvent(job, "Analysis failed: " + e.getMessage());
        } finally {
            runningJobs.remove(jobId);
        }
    }

    private void handleCancellation(AnalysisJob job) {
        log.info("Job {} was cancelled during execution", job.getId());
        job.setStatus(AnalysisJobStatus.CANCELLED);
        job.setCompletedAt(Instant.now());
        jobRepository.save(job);
        
        broadcastEvent(job, "Analysis cancelled");
    }

    public void cancelRunningJob(UUID jobId) {
        Thread jobThread = runningJobs.get(jobId);
        if (jobThread != null) {
            log.info("Interrupting running thread for job {}", jobId);
            jobThread.interrupt();
        }
    }
    
    private void broadcastEvent(AnalysisJob job, String message) {
        AnalysisProgressEvent event = AnalysisProgressEvent.builder()
                .jobId(job.getId())
                .status(job.getStatus())
                .progress(job.getProgress())
                .message(message)
                .build();
        sseService.broadcast(job.getId(), "progress", event);
    }
}
