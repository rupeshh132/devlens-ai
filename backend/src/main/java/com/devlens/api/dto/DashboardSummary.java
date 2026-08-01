package com.devlens.api.dto;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Data
@Builder
public class DashboardSummary {
    private long totalRepositories;
    private long activeAnalyses;
    private long completedAnalyses;
    private long failedAnalyses;
    private Double averageScore;
    private Instant generatedAt;
    
    private List<RecentRepository> recentRepositories;
    private List<RecentAnalysis> recentAnalyses;

    @Data
    @Builder
    public static class RecentRepository {
        private UUID id;
        private String name;
        private String language;
        private String lastAnalysis;
        private Double score;
        private String status;
    }

    @Data
    @Builder
    public static class RecentAnalysis {
        private String id;
        private String type;
        private String title;
        private String description;
        private String timestamp;
        private String repoName;
    }
}
