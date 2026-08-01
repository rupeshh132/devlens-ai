package com.devlens.api.service;

import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.entity.AnalysisJobStatus;
import com.devlens.api.entity.Repository;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.api.repository.RepositoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class AnalysisJobService {

    private final AnalysisJobRepository jobRepository;
    private final RepositoryRepository repositoryRepository;
    private final JobScheduler jobScheduler;

    @Transactional
    public AnalysisJob queueJob(UUID repositoryId) {
        Repository repository = repositoryRepository.findById(repositoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Repository not found with id: " + repositoryId));

        AnalysisJob job = AnalysisJob.builder()
                .repository(repository)
                .status(AnalysisJobStatus.QUEUED)
                .progress(0)
                .build();

        job = jobRepository.save(job);
        log.info("Queued analysis job {} for repository {}", job.getId(), repositoryId);

        jobScheduler.executeJob(job.getId());

        return job;
    }

    @Transactional(readOnly = true)
    public AnalysisJob getJobStatus(UUID jobId) {
        return jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + jobId));
    }

    @Transactional(readOnly = true)
    public List<AnalysisJob> getJobsForRepository(UUID repositoryId) {
        return jobRepository.findByRepositoryId(repositoryId);
    }

    @Transactional
    public void cancelJob(UUID jobId) {
        AnalysisJob job = getJobStatus(jobId);
        
        if (job.getStatus() == AnalysisJobStatus.COMPLETED || job.getStatus() == AnalysisJobStatus.FAILED) {
            throw new IllegalStateException("Cannot cancel a job that is already completed or failed");
        }

        job.setStatus(AnalysisJobStatus.CANCELLED);
        jobRepository.save(job);
        
        jobScheduler.cancelRunningJob(jobId);
        log.info("Cancelled analysis job {}", jobId);
    }

    @Transactional
    public AnalysisJob retryFailedJob(UUID jobId) {
        AnalysisJob job = getJobStatus(jobId);
        
        if (job.getStatus() != AnalysisJobStatus.FAILED && job.getStatus() != AnalysisJobStatus.CANCELLED) {
            throw new IllegalStateException("Only failed or cancelled jobs can be retried");
        }

        job.setStatus(AnalysisJobStatus.QUEUED);
        job.setProgress(0);
        job.setErrorMessage(null);
        job.setStartedAt(null);
        job.setCompletedAt(null);
        
        job = jobRepository.save(job);
        log.info("Retrying analysis job {}", jobId);

        jobScheduler.executeJob(job.getId());

        return job;
    }

    @Transactional
    public void updateProgress(UUID jobId, int progress) {
        AnalysisJob job = getJobStatus(jobId);
        job.setProgress(progress);
        if (progress >= 100) {
            job.setStatus(AnalysisJobStatus.COMPLETED);
            job.setCompletedAt(java.time.Instant.now());
        } else if (progress > 0 && job.getStatus() == AnalysisJobStatus.QUEUED) {
            job.setStatus(AnalysisJobStatus.IN_PROGRESS);
            job.setStartedAt(java.time.Instant.now());
        }
        jobRepository.save(job);
        log.debug("Updated job {} progress to {}%", jobId, progress);
    }
}
