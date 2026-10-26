package com.devlens.api.repository.lms;

import com.devlens.api.entity.lms.UserProgress;
import com.devlens.api.entity.lms.ProgressStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserProgressRepository extends JpaRepository<UserProgress, UUID> {
    List<UserProgress> findByStatus(ProgressStatus status);
    long countByStatus(ProgressStatus status);
    Optional<UserProgress> findByUserIdAndModuleId(UUID userId, UUID moduleId);
    List<UserProgress> findByUserIdAndModuleCourseId(UUID userId, UUID courseId);
    void deleteByModuleId(UUID moduleId);

    long countByModuleCourseIdAndStatus(UUID courseId, ProgressStatus status);

    @org.springframework.data.jpa.repository.Query("SELECT p.module.course.id, COUNT(p) FROM UserProgress p WHERE p.status = com.devlens.api.entity.lms.ProgressStatus.PENDING_REVIEW GROUP BY p.module.course.id")
    java.util.List<Object[]> countPendingSubmissionsGroupByCourseId();

    @org.springframework.data.jpa.repository.Query("SELECT p FROM UserProgress p WHERE p.projectRepoUrl IS NOT NULL ORDER BY p.id DESC")
    List<UserProgress> findAllProjectSubmissions();

    @org.springframework.data.jpa.repository.Query("SELECT p FROM UserProgress p WHERE p.projectRepoUrl IS NOT NULL AND p.status = :status ORDER BY p.id DESC")
    List<UserProgress> findProjectSubmissionsByStatus(@org.springframework.data.repository.query.Param("status") ProgressStatus status);

    @org.springframework.data.jpa.repository.Query("SELECT COUNT(p) FROM UserProgress p WHERE p.projectRepoUrl IS NOT NULL AND p.status = :status")
    long countProjectSubmissionsByStatus(@org.springframework.data.repository.query.Param("status") ProgressStatus status);
}

