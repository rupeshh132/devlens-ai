package com.devlens.api.repository;

import com.devlens.api.entity.Repository;
import com.devlens.api.entity.RepositoryStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface RepositoryRepository extends JpaRepository<Repository, UUID> {
    Page<Repository> findByUserIdAndStatusNot(UUID userId, RepositoryStatus status, Pageable pageable);
    
    Page<Repository> findByUserIdAndNameContainingIgnoreCaseAndStatusNot(UUID userId, String name, RepositoryStatus status, Pageable pageable);

    Optional<Repository> findByIdAndUserIdAndStatusNot(UUID id, UUID userId, RepositoryStatus status);

    boolean existsByUrlAndUserIdAndStatusNot(String url, UUID userId, RepositoryStatus status);
}
