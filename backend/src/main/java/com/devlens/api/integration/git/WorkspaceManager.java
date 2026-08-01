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
import java.nio.file.attribute.FileTime;
import java.time.Instant;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Stream;

@Slf4j
@Component
@RequiredArgsConstructor
public class WorkspaceManager {

    private final GitProperties gitProperties;
    private final ConcurrentHashMap<UUID, Lock> workspaceLocks = new ConcurrentHashMap<>();

    public Path getWorkspacePath(UUID repositoryId) {
        return Paths.get(gitProperties.getWorkspaceDir(), repositoryId.toString()).toAbsolutePath().normalize();
    }

    public Lock getLock(UUID repositoryId) {
        return workspaceLocks.computeIfAbsent(repositoryId, k -> new ReentrantLock());
    }

    public boolean workspaceExists(UUID repositoryId) {
        Path workspace = getWorkspacePath(repositoryId);
        return Files.exists(workspace) && Files.isDirectory(workspace) && Files.exists(workspace.resolve(".git"));
    }

    public void cleanWorkspace(UUID repositoryId) {
        Lock lock = getLock(repositoryId);
        lock.lock();
        try {
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
        } finally {
            lock.unlock();
            workspaceLocks.remove(repositoryId); // Clean up the lock to avoid memory leak
        }
    }
    
    public Path prepareWorkspace(UUID repositoryId) {
        Lock lock = getLock(repositoryId);
        lock.lock();
        try {
            cleanWorkspace(repositoryId);
            Path workspace = getWorkspacePath(repositoryId);
            try {
                Files.createDirectories(workspace);
                return workspace;
            } catch (IOException e) {
                throw new GitOperationException("Failed to create workspace directory", e);
            }
        } finally {
            lock.unlock();
        }
    }

    public void recordAccess(UUID repositoryId) {
        Path workspace = getWorkspacePath(repositoryId);
        if (Files.exists(workspace)) {
            try {
                Files.setLastModifiedTime(workspace, FileTime.from(Instant.now()));
            } catch (IOException e) {
                log.warn("Failed to update last access time for workspace: {}", repositoryId, e);
            }
        }
    }

    public Instant getLastAccessTime(UUID repositoryId) {
        Path workspace = getWorkspacePath(repositoryId);
        if (Files.exists(workspace)) {
            try {
                return Files.getLastModifiedTime(workspace).toInstant();
            } catch (IOException e) {
                log.warn("Failed to read last access time for workspace: {}", repositoryId, e);
            }
        }
        return null;
    }

    public long getDiskUsage(UUID repositoryId) {
        Path workspace = getWorkspacePath(repositoryId);
        if (!Files.exists(workspace)) return 0;
        
        try (Stream<Path> stream = Files.walk(workspace)) {
            return stream.filter(Files::isRegularFile)
                    .mapToLong(p -> {
                        try {
                            return Files.size(p);
                        } catch (IOException e) {
                            return 0L;
                        }
                    })
                    .sum();
        } catch (IOException e) {
            log.warn("Failed to calculate disk usage for workspace: {}", repositoryId, e);
            return 0L;
        }
    }
}
