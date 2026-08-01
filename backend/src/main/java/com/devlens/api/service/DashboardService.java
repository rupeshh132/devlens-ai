package com.devlens.api.service;

import com.devlens.api.dto.DashboardSummary;
import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.entity.AnalysisJobStatus;
import com.devlens.api.entity.Repository;
import com.devlens.api.entity.RepositoryStatus;
import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.api.repository.RepositoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.time.Duration;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final RepositoryRepository repositoryRepository;
    private final AnalysisJobRepository analysisJobRepository;

    @Transactional(readOnly = true)
    public DashboardSummary getSummary(UUID userId) {
        long totalRepositories = repositoryRepository.countByUserIdAndStatusNot(userId, RepositoryStatus.DELETED);
        
        long activeAnalyses = analysisJobRepository.countByRepositoryUserIdAndStatusIn(
                userId, List.of(AnalysisJobStatus.QUEUED, AnalysisJobStatus.IN_PROGRESS));
        long completedAnalyses = analysisJobRepository.countByRepositoryUserIdAndStatus(userId, AnalysisJobStatus.COMPLETED);
        long failedAnalyses = analysisJobRepository.countByRepositoryUserIdAndStatus(userId, AnalysisJobStatus.FAILED);

        // Dummy average score for now, could be dynamic in the future based on real scan results
        Double averageScore = totalRepositories > 0 ? 85.0 : null;

        List<Repository> topRepositories = repositoryRepository.findTop5ByUserIdAndStatusNotOrderByCreatedAtDesc(userId, RepositoryStatus.DELETED);
        List<AnalysisJob> recentJobs = analysisJobRepository.findTop10ByRepositoryUserIdOrderByCreatedAtDesc(userId);

        return DashboardSummary.builder()
                .totalRepositories(totalRepositories)
                .activeAnalyses(activeAnalyses)
                .completedAnalyses(completedAnalyses)
                .failedAnalyses(failedAnalyses)
                .averageScore(averageScore)
                .generatedAt(Instant.now())
                .recentRepositories(topRepositories.stream().map(this::mapRepository).collect(Collectors.toList()))
                .recentAnalyses(recentJobs.stream().map(this::mapActivity).collect(Collectors.toList()))
                .build();
    }

    private DashboardSummary.RecentRepository mapRepository(Repository repo) {
        // Find latest analysis job for this repository to check status
        AnalysisJob latestJob = analysisJobRepository.findFirstByRepositoryIdOrderByCreatedAtDesc(repo.getId()).orElse(null);
        
        String status = "Healthy";
        String lastAnalysisStr = "Never";
        Double score = 90.0;
        
        if (latestJob != null) {
            if (latestJob.getStatus() == AnalysisJobStatus.IN_PROGRESS || latestJob.getStatus() == AnalysisJobStatus.QUEUED) {
                status = "Analyzing";
                score = null;
            } else if (latestJob.getStatus() == AnalysisJobStatus.FAILED) {
                status = "Critical";
                score = 0.0;
            } else {
                status = "Healthy";
                score = 90.0;
            }
            
            Instant completed = latestJob.getCompletedAt();
            if (completed != null) {
                Duration diff = Duration.between(completed, Instant.now());
                if (diff.toMinutes() < 60) {
                    lastAnalysisStr = diff.toMinutes() + " mins ago";
                } else if (diff.toHours() < 24) {
                    lastAnalysisStr = diff.toHours() + " hours ago";
                } else {
                    lastAnalysisStr = diff.toDays() + " days ago";
                }
            } else {
                lastAnalysisStr = "Just now";
            }
        }

        return DashboardSummary.RecentRepository.builder()
                .id(repo.getId())
                .name(repo.getName())
                // Hardcode language for now since repo doesn't store language explicitly
                .language("Unknown") 
                .lastAnalysis(lastAnalysisStr)
                .score(score)
                .status(status)
                .build();
    }

    private DashboardSummary.RecentAnalysis mapActivity(AnalysisJob job) {
        String type = "analysis_completed";
        String title = "Analysis Completed";
        String description = "Analysis finished for " + job.getRepository().getName();
        
        if (job.getStatus() == AnalysisJobStatus.FAILED) {
            type = "security_alert";
            title = "Analysis Failed";
            description = "Failed to analyze " + job.getRepository().getName();
        } else if (job.getStatus() == AnalysisJobStatus.IN_PROGRESS) {
            type = "analysis_started";
            title = "Analysis Started";
            description = "Started scanning " + job.getRepository().getName();
        }

        String timestamp = "Just now";
        if (job.getCompletedAt() != null) {
            Duration diff = Duration.between(job.getCompletedAt(), Instant.now());
            if (diff.toMinutes() > 0) timestamp = diff.toMinutes() + " mins ago";
        } else {
            Duration diff = Duration.between(job.getCreatedAt(), Instant.now());
            if (diff.toMinutes() > 0) timestamp = diff.toMinutes() + " mins ago";
        }

        return DashboardSummary.RecentAnalysis.builder()
                .id(job.getId().toString())
                .type(type)
                .title(title)
                .description(description)
                .timestamp(timestamp)
                .repoName(job.getRepository().getName())
                .build();
    }
}
