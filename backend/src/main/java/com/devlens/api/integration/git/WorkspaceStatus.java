package com.devlens.api.integration.git;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
@Builder
public class WorkspaceStatus {
    private UUID repositoryId;
    private boolean exists;
    private long diskUsageBytes;
    private Instant lastAccessTime;
}
