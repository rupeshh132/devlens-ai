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

@Slf4j
@Service
@RequiredArgsConstructor
public class GitCloneService {

    private final WorkspaceManager workspaceManager;

    public void cloneRepository(UUID repositoryId, String url, String branch) {
        Path workspace = workspaceManager.prepareWorkspace(repositoryId);
        log.info("Cloning repository {} into {}", url, workspace);

        try (Git git = Git.cloneRepository()
                .setURI(url)
                .setDirectory(workspace.toFile())
                .setBranch(branch)
                .call()) {
            log.info("Successfully cloned repository {}", repositoryId);
        } catch (GitAPIException e) {
            workspaceManager.cleanWorkspace(repositoryId);
            throw new GitOperationException("Failed to clone repository: " + url, e);
        }
    }

    public void pullLatest(UUID repositoryId, String url, String branch) {
        if (!workspaceManager.workspaceExists(repositoryId)) {
            log.info("Workspace not found or corrupted for repository {}. Re-cloning...", repositoryId);
            cloneRepository(repositoryId, url, branch);
            return;
        }

        Path workspace = workspaceManager.getWorkspacePath(repositoryId);
        log.info("Pulling latest changes for repository {} in {}", repositoryId, workspace);

        try (Git git = Git.open(workspace.toFile())) {
            git.pull().call();
            checkoutBranch(repositoryId, branch);
            log.info("Successfully pulled latest changes for repository {}", repositoryId);
        } catch (IOException | GitAPIException e) {
            log.warn("Failed to pull changes for repository {}. Re-cloning...", repositoryId, e);
            cloneRepository(repositoryId, url, branch);
        }
    }

    public void checkoutBranch(UUID repositoryId, String branch) {
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
