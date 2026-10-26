package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnSubjectRepository extends JpaRepository<LearnSubject, UUID> {
    List<LearnSubject> findByExamTypeIdOrderByOrderIndexAsc(UUID examTypeId);
}
