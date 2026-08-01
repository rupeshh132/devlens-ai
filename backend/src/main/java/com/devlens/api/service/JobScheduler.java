package com.devlens.api.service;

import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.entity.AnalysisJobStatus;
import com.devlens.api.repository.AnalysisJobRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class JobScheduler {

    private final AnalysisJobRepository jobRepository;
    
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
            // Simulated Job Execution - Foundation
            for (int i = 1; i <= 10; i++) {
                if (Thread.currentThread().isInterrupted()) {
                    handleCancellation(job);
                    return;
                }
                
                // Simulate work
                Thread.sleep(1000);
                
                // Update progress
                job.setProgress(i * 10);
                jobRepository.save(job);
            }

            job.setStatus(AnalysisJobStatus.COMPLETED);
            job.setCompletedAt(Instant.now());
            job.setProgress(100);
            jobRepository.save(job);
            log.info("Successfully completed job: {}", jobId);
            
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            handleCancellation(job);
        } catch (Exception e) {
            log.error("Job {} failed", jobId, e);
            job.setStatus(AnalysisJobStatus.FAILED);
            job.setErrorMessage(e.getMessage());
            job.setCompletedAt(Instant.now());
            jobRepository.save(job);
        } finally {
            runningJobs.remove(jobId);
        }
    }

    private void handleCancellation(AnalysisJob job) {
        log.info("Job {} was cancelled during execution", job.getId());
        job.setStatus(AnalysisJobStatus.CANCELLED);
        job.setCompletedAt(Instant.now());
        jobRepository.save(job);
    }

    public void cancelRunningJob(UUID jobId) {
        Thread jobThread = runningJobs.get(jobId);
        if (jobThread != null) {
            log.info("Interrupting running thread for job {}", jobId);
            jobThread.interrupt();
        }
    }
}
