package com.devlens.api.integration.git;

import com.devlens.api.config.GitProperties;
import com.devlens.api.exception.GitOperationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.FileSystemUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class WorkspaceManager {

    private final GitProperties gitProperties;

    public Path getWorkspacePath(UUID repositoryId) {
        return Paths.get(gitProperties.getWorkspaceDir(), repositoryId.toString()).toAbsolutePath().normalize();
    }

    public boolean workspaceExists(UUID repositoryId) {
        Path workspace = getWorkspacePath(repositoryId);
        return Files.exists(workspace) && Files.isDirectory(workspace) && Files.exists(workspace.resolve(".git"));
    }

    public void cleanWorkspace(UUID repositoryId) {
        Path workspace = getWorkspacePath(repositoryId);
        if (Files.exists(workspace)) {
            try {
                FileSystemUtils.deleteRecursively(workspace);
                log.info("Cleaned up workspace for repository: {}", repositoryId);
            } catch (IOException e) {
                log.error("Failed to clean up workspace for repository: {}", repositoryId, e);
                throw new GitOperationException("Failed to clean workspace directory", e);
            }
        }
    }
    
    public Path prepareWorkspace(UUID repositoryId) {
        cleanWorkspace(repositoryId);
        Path workspace = getWorkspacePath(repositoryId);
        try {
            Files.createDirectories(workspace);
            return workspace;
        } catch (IOException e) {
            throw new GitOperationException("Failed to create workspace directory", e);
        }
    }
}
