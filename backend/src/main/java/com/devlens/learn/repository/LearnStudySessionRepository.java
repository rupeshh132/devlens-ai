package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnStudySession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;
import java.util.List;

@Repository
public interface LearnStudySessionRepository extends JpaRepository<LearnStudySession, UUID> {
    List<LearnStudySession> findByUserId(UUID userId);
    List<LearnStudySession> findByUserIdOrderByCreatedAtDesc(UUID userId);
}
