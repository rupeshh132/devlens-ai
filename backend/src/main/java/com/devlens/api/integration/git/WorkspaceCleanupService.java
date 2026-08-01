package com.devlens.api.integration.git;

import com.devlens.api.config.GitProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.UUID;
import java.util.stream.Stream;

@Slf4j
@Service
@RequiredArgsConstructor
public class WorkspaceCleanupService {

    private final GitProperties gitProperties;
    private final WorkspaceManager workspaceManager;

    @Scheduled(cron = "#{@gitProperties.cleanupCron}")
    public void cleanupStaleWorkspaces() {
        log.info("Starting scheduled workspace cleanup...");
        
        Path baseDir = Paths.get(gitProperties.getWorkspaceDir());
        if (!Files.exists(baseDir) || !Files.isDirectory(baseDir)) {
            log.info("Workspace directory does not exist, skipping cleanup");
            return;
        }

        Instant cutoffTime = Instant.now().minus(gitProperties.getRetentionDays(), ChronoUnit.DAYS);
        int cleanedCount = 0;

        try (Stream<Path> stream = Files.list(baseDir)) {
            for (Path workspacePath : (Iterable<Path>) stream::iterator) {
                if (Files.isDirectory(workspacePath)) {
                    try {
                        UUID repositoryId = UUID.fromString(workspacePath.getFileName().toString());
                        Instant lastAccess = workspaceManager.getLastAccessTime(repositoryId);
                        
                        if (lastAccess != null && lastAccess.isBefore(cutoffTime)) {
                            log.info("Workspace {} has not been accessed since {}. Cleaning up...", repositoryId, lastAccess);
                            workspaceManager.cleanWorkspace(repositoryId);
                            cleanedCount++;
                        }
                    } catch (IllegalArgumentException e) {
                        log.warn("Found invalid workspace directory name: {}", workspacePath.getFileName());
                    }
                }
            }
        } catch (IOException e) {
            log.error("Failed to list workspaces during cleanup", e);
        }

        log.info("Scheduled workspace cleanup finished. Cleaned {} stale workspaces.", cleanedCount);
    }
}
