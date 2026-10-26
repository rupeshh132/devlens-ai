package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnChapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnChapterRepository extends JpaRepository<LearnChapter, UUID> {
    List<LearnChapter> findBySubjectIdOrderByOrderIndexAsc(UUID subjectId);
}
