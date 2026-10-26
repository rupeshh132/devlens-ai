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
    
    long countByRepositoryUserId(UUID userId);
    long countByRepositoryUserIdAndStatusIn(UUID userId, List<AnalysisJobStatus> statuses);
    long countByRepositoryUserIdAndStatus(UUID userId, AnalysisJobStatus status);
    
    long countByCreatedAtAfter(java.time.Instant date);
    
    @org.springframework.data.jpa.repository.Query(value = "SELECT * FROM analysis_jobs WHERE status = 'QUEUED' ORDER BY created_at ASC LIMIT 1 FOR UPDATE SKIP LOCKED", nativeQuery = true)
    Optional<AnalysisJob> findNextPendingJob();
    
    Optional<AnalysisJob> findFirstByRepositoryIdOrderByCreatedAtDesc(UUID repositoryId);

    @EntityGraph(attributePaths = {"repository"})
    List<AnalysisJob> findTop10ByRepositoryUserIdOrderByCreatedAtDesc(UUID userId);
}
