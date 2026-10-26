package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnXpLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface LearnXpLogRepository extends JpaRepository<LearnXpLog, UUID> {
    List<LearnXpLog> findByUserId(UUID userId);

    List<LearnXpLog> findByUserIdOrderByCreatedAtDesc(UUID userId);

    boolean existsByUserIdAndActivityTypeAndCreatedAtBetween(
            UUID userId,
            LearnXpLog.ActivityType activityType,
            LocalDateTime startOfDay,
            LocalDateTime endOfDay
    );
}
