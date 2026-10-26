package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnQuestionRepository extends JpaRepository<LearnQuestion, UUID> {
    List<LearnQuestion> findByTopicId(UUID topicId);
}
