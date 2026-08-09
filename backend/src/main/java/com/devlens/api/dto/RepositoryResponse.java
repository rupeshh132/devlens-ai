package com.devlens.api.dto;

import com.devlens.api.entity.RepositoryProvider;
import com.devlens.api.entity.RepositoryStatus;
import com.devlens.api.entity.RepositoryVisibility;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class RepositoryResponse {
    private UUID id;
    private String name;
    private String owner;
    private String url;
    private String branch;
    private RepositoryVisibility visibility;
    private RepositoryProvider provider;
    private RepositoryStatus status;
    private boolean isFavorite;
    private String language;
    private String description;
    private Integer stars;
    private Double lastAnalysisScore;
    private Instant lastAnalyzedAt;
    private Instant createdAt;
    private Instant updatedAt;
}
