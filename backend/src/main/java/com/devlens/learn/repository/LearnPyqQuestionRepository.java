package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnPyqQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnPyqQuestionRepository extends JpaRepository<LearnPyqQuestion, UUID> {

    List<LearnPyqQuestion> findByPaperIdOrderByQuestionNumberAsc(UUID paperId);

    long countByPaperId(UUID paperId);

    void deleteByPaperId(UUID paperId);
}
