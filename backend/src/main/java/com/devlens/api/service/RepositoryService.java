package com.devlens.api.service;

import com.devlens.api.dto.CommitResponse;
import com.devlens.api.dto.CreateRepositoryRequest;
import com.devlens.api.dto.RepositoryResponse;
import com.devlens.api.dto.UpdateRepositoryRequest;
import com.devlens.api.entity.Repository;
import com.devlens.api.entity.RepositoryStatus;
import com.devlens.api.entity.User;
import com.devlens.api.exception.DuplicateResourceException;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.integration.github.GitHubClient;
import com.devlens.api.integration.github.GitHubCommitDto;
import com.devlens.api.integration.github.GitHubMetadata;
import com.devlens.api.integration.github.GitHubService;
import com.devlens.api.mapper.RepositoryMapper;
import com.devlens.api.repository.RepositoryRepository;
import com.devlens.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RepositoryService {

    private final RepositoryRepository repositoryRepository;
    private final UserRepository userRepository;
    private final RepositoryMapper repositoryMapper;
    private final GitHubService gitHubService;
    private final GitHubClient gitHubClient;

    @Transactional
    public RepositoryResponse addRepository(UUID userId, CreateRepositoryRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (!gitHubService.validateUrl(request.getUrl())) {
            throw new IllegalArgumentException("Invalid GitHub URL format");
        }

        if (repositoryRepository.existsByUrlAndUserIdAndStatusNot(request.getUrl(), userId, RepositoryStatus.DELETED)) {
            throw new DuplicateResourceException("Repository with this URL already exists for the user");
        }

        Repository repository = repositoryMapper.toEntity(request);
        repository.setUser(user);
        repository.setStatus(RepositoryStatus.ACTIVE);

        repository = repositoryRepository.save(repository);
        return repositoryMapper.toResponse(repository);
    }

    @Transactional(readOnly = true)
    public Page<RepositoryResponse> listRepositories(UUID userId, String name, Pageable pageable) {
        Page<Repository> repositories;
        
        if (name != null && !name.isBlank()) {
            repositories = repositoryRepository.findByUserIdAndNameContainingIgnoreCaseAndStatusNot(
                    userId, name, RepositoryStatus.DELETED, pageable);
        } else {
            repositories = repositoryRepository.findByUserIdAndStatusNot(
                    userId, RepositoryStatus.DELETED, pageable);
        }

        return repositories.map(repositoryMapper::toResponse);
    }

    @Transactional(readOnly = true)
    public RepositoryResponse getRepository(UUID userId, UUID repositoryId) {
        Repository repository = getRepositoryEntity(userId, repositoryId);
        return repositoryMapper.toResponse(repository);
    }

    @Transactional
    public RepositoryResponse updateRepository(UUID userId, UUID repositoryId, UpdateRepositoryRequest request) {
        Repository repository = getRepositoryEntity(userId, repositoryId);

        if (request.getName() != null && !request.getName().isBlank()) {
            repository.setName(request.getName());
        }
        if (request.getBranch() != null && !request.getBranch().isBlank()) {
            repository.setBranch(request.getBranch());
        }
        if (request.getVisibility() != null) {
            repository.setVisibility(request.getVisibility());
        }

        repository = repositoryRepository.save(repository);
        return repositoryMapper.toResponse(repository);
    }

    @Transactional
    public void deleteRepository(UUID userId, UUID repositoryId) {
        Repository repository = getRepositoryEntity(userId, repositoryId);
        repository.setStatus(RepositoryStatus.DELETED);
        repositoryRepository.save(repository);
    }

    private Repository getRepositoryEntity(UUID userId, UUID repositoryId) {
        return repositoryRepository.findByIdAndUserIdAndStatusNot(repositoryId, userId, RepositoryStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("Repository not found or access denied"));
    }

    @Transactional
    public RepositoryResponse syncRepository(UUID userId, UUID repositoryId) {
        Repository repository = getRepositoryEntity(userId, repositoryId);
        
        GitHubMetadata metadata = gitHubService.syncRepository(repository.getUrl());
        
        repository.setName(metadata.getName());
        repository.setBranch(metadata.getDefaultBranch());
        repository.setVisibility(metadata.getVisibility());
        
        repository = repositoryRepository.save(repository);
        return repositoryMapper.toResponse(repository);
    }

    @Transactional(readOnly = true)
    public List<CommitResponse> getCommits(UUID userId, UUID repositoryId, int limit) {
        Repository repository = getRepositoryEntity(userId, repositoryId);
        GitHubService.GitHubRepoOwner repoInfo = gitHubService.extractOwnerAndRepo(repository.getUrl());
        String branch = repository.getBranch() != null ? repository.getBranch() : "main";
        List<GitHubCommitDto> commits = gitHubClient.getCommits(repoInfo.owner(), repoInfo.repo(), branch, limit);
        return commits.stream().map(c -> {
            String message = c.getCommit() != null ? c.getCommit().getMessage() : "";
            // Use first line of commit message only
            if (message.contains("\n")) message = message.substring(0, message.indexOf("\n"));
            String authorName = (c.getCommit() != null && c.getCommit().getAuthor() != null)
                    ? c.getCommit().getAuthor().getName()
                    : (c.getAuthor() != null ? c.getAuthor().getLogin() : "Unknown");
            String date = (c.getCommit() != null && c.getCommit().getCommitter() != null)
                    ? c.getCommit().getCommitter().getDate() : null;
            return new CommitResponse(c.getSha() != null ? c.getSha().substring(0, 7) : "", message, authorName, date);
        }).toList();
    }
}
