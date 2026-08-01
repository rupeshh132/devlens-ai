package com.devlens.api.repository;

import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.entity.AnalysisJobStatus;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface AnalysisJobRepository extends JpaRepository<AnalysisJob, UUID> {
    List<AnalysisJob> findByRepositoryId(UUID repositoryId);
    List<AnalysisJob> findByStatus(AnalysisJobStatus status);
    
    long countByRepositoryUserIdAndStatusIn(UUID userId, List<AnalysisJobStatus> statuses);
    long countByRepositoryUserIdAndStatus(UUID userId, AnalysisJobStatus status);
    
    Optional<AnalysisJob> findFirstByRepositoryIdOrderByCreatedAtDesc(UUID repositoryId);

    @EntityGraph(attributePaths = {"repository"})
    List<AnalysisJob> findTop10ByRepositoryUserIdOrderByCreatedAtDesc(UUID userId);
}
