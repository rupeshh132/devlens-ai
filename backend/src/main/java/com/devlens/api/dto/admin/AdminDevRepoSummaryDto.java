package com.devlens.api.dto.admin;

import com.devlens.api.entity.RepositoryProvider;
import com.devlens.api.entity.RepositoryStatus;
import com.devlens.api.entity.RepositoryVisibility;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDevRepoSummaryDto {
    private UUID id;
    private String name;
    private String owner;
    private String url;
    private String branch;
    private RepositoryProvider provider;
    private RepositoryVisibility visibility;
    private RepositoryStatus status;
    private Instant createdAt;
}
