package com.devlens.api.interview;

import com.devlens.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface InterviewSessionRepository extends JpaRepository<InterviewSession, UUID> {
    List<InterviewSession> findAllByUserOrderByCreatedAtDesc(User user);
    Optional<InterviewSession> findFirstByUserOrderByCreatedAtDesc(User user);
}
