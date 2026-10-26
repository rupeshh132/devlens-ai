package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnTestAttempt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnTestAttemptRepository extends JpaRepository<LearnTestAttempt, UUID> {
    List<LearnTestAttempt> findByUserIdOrderByStartedAtDesc(UUID userId);

    @org.springframework.data.jpa.repository.Query("SELECT a FROM LearnTestAttempt a WHERE a.mockTestId = :mockTestId AND a.status = 'COMPLETED' " +
           "ORDER BY a.score DESC, a.timeTakenSeconds ASC, a.wrongAnswers ASC")
    List<LearnTestAttempt> getLeaderboard(@org.springframework.data.repository.query.Param("mockTestId") UUID mockTestId);
}
