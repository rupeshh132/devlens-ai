package com.devlens.api.integration.git;

import com.devlens.api.exception.GitOperationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Path;
import java.util.UUID;
import java.util.concurrent.locks.Lock;

@Slf4j
@Service
@RequiredArgsConstructor
public class GitCloneService {

    private final WorkspaceManager workspaceManager;

    public void cloneRepository(UUID repositoryId, String url, String branch) {
        Lock lock = workspaceManager.getLock(repositoryId);
        lock.lock();
        try {
            Path workspace = workspaceManager.prepareWorkspace(repositoryId);
            log.info("Cloning repository {} into {}", url, workspace);

            try (Git git = Git.cloneRepository()
                    .setURI(url)
                    .setDirectory(workspace.toFile())
                    .setBranch(branch)
                    .call()) {
                log.info("Successfully cloned repository {}", repositoryId);
                workspaceManager.recordAccess(repositoryId);
            } catch (GitAPIException e) {
                workspaceManager.cleanWorkspace(repositoryId);
                throw new GitOperationException("Failed to clone repository: " + url, e);
            }
        } finally {
            lock.unlock();
        }
    }

    public void pullLatest(UUID repositoryId, String url, String branch) {
        Lock lock = workspaceManager.getLock(repositoryId);
        lock.lock();
        try {
            if (!workspaceManager.workspaceExists(repositoryId)) {
                log.info("Workspace not found or corrupted for repository {}. Re-cloning...", repositoryId);
                // Temporarily release lock to call cloneRepository which re-acquires it
                lock.unlock();
                try {
                    cloneRepository(repositoryId, url, branch);
                } finally {
                    lock.lock(); // Re-acquire to satisfy finally block semantics below, or just return
                }
                return;
            }

            Path workspace = workspaceManager.getWorkspacePath(repositoryId);
            log.info("Pulling latest changes for repository {} in {}", repositoryId, workspace);

            try (Git git = Git.open(workspace.toFile())) {
                git.pull().call();
                checkoutBranchInternal(repositoryId, branch);
                log.info("Successfully pulled latest changes for repository {}", repositoryId);
                workspaceManager.recordAccess(repositoryId);
            } catch (IOException | GitAPIException e) {
                log.warn("Failed to pull changes for repository {}. Re-cloning...", repositoryId, e);
                // Temporarily release lock
                lock.unlock();
                try {
                    cloneRepository(repositoryId, url, branch);
                } finally {
                    lock.lock();
                }
            }
        } finally {
            lock.unlock();
        }
    }

    public void checkoutBranch(UUID repositoryId, String branch) {
        Lock lock = workspaceManager.getLock(repositoryId);
        lock.lock();
        try {
            checkoutBranchInternal(repositoryId, branch);
            workspaceManager.recordAccess(repositoryId);
        } finally {
            lock.unlock();
        }
    }

    private void checkoutBranchInternal(UUID repositoryId, String branch) {
        Path workspace = workspaceManager.getWorkspacePath(repositoryId);
        try (Git git = Git.open(workspace.toFile())) {
            git.checkout()
                    .setName(branch)
                    .call();
        } catch (IOException | GitAPIException e) {
            throw new GitOperationException("Failed to checkout branch: " + branch, e);
        }
    }

    public void deleteWorkspace(UUID repositoryId) {
        workspaceManager.cleanWorkspace(repositoryId);
    }
}
