package com.devlens.api.integration.git;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class WorkspaceService {

    private final WorkspaceManager workspaceManager;

    public WorkspaceStatus getWorkspaceStatus(UUID repositoryId) {
        return WorkspaceStatus.builder()
                .repositoryId(repositoryId)
                .exists(workspaceManager.workspaceExists(repositoryId))
                .diskUsageBytes(workspaceManager.getDiskUsage(repositoryId))
                .lastAccessTime(workspaceManager.getLastAccessTime(repositoryId))
                .build();
    }

    public void cleanWorkspace(UUID repositoryId) {
        workspaceManager.cleanWorkspace(repositoryId);
    }
}
