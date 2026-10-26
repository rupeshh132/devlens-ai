package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnTopic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnTopicRepository extends JpaRepository<LearnTopic, UUID> {
    List<LearnTopic> findByChapterIdOrderByOrderIndexAsc(UUID chapterId);
}
