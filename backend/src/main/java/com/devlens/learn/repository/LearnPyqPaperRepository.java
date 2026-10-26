package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnPyqPaper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnPyqPaperRepository extends JpaRepository<LearnPyqPaper, UUID> {

    List<LearnPyqPaper> findAllByOrderByYearDescCreatedAtDesc();

    List<LearnPyqPaper> findByTargetClassOrderByYearDescCreatedAtDesc(String targetClass);

    List<LearnPyqPaper> findByTargetClassAndSubjectOrderByYearDescCreatedAtDesc(String targetClass, String subject);

    List<LearnPyqPaper> findByTargetClassAndYearOrderByCreatedAtDesc(String targetClass, Integer year);

    List<LearnPyqPaper> findByTargetClassAndSubjectAndYearOrderByCreatedAtDesc(String targetClass, String subject, Integer year);
}

