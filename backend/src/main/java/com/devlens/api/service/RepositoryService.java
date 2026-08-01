package com.devlens.api.service;

import com.devlens.api.dto.CreateRepositoryRequest;
import com.devlens.api.dto.RepositoryResponse;
import com.devlens.api.dto.UpdateRepositoryRequest;
import com.devlens.api.entity.Repository;
import com.devlens.api.entity.RepositoryStatus;
import com.devlens.api.entity.User;
import com.devlens.api.exception.DuplicateResourceException;
import com.devlens.api.exception.ResourceNotFoundException;
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

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RepositoryService {

    private final RepositoryRepository repositoryRepository;
    private final UserRepository userRepository;
    private final RepositoryMapper repositoryMapper;
    private final GitHubService gitHubService;

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
}
