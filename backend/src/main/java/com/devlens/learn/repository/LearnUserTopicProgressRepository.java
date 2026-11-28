package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnUserTopicProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface LearnUserTopicProgressRepository extends JpaRepository<LearnUserTopicProgress, UUID> {
    List<LearnUserTopicProgress> findByUserId(UUID userId);
    Optional<LearnUserTopicProgress> findByUserIdAndTopicId(UUID userId, String topicId);
}
