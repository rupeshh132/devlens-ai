package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnContentItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnContentItemRepository extends JpaRepository<LearnContentItem, UUID> {
    List<LearnContentItem> findByTopicIdOrderByOrderIndexAsc(UUID topicId);
}
