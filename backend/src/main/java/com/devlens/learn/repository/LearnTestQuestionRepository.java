package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnTestQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnTestQuestionRepository extends JpaRepository<LearnTestQuestion, UUID> {
    List<LearnTestQuestion> findByMockTestIdOrderByOrderIndexAsc(UUID mockTestId);
}
