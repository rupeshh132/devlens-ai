package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnMockTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnMockTestRepository extends JpaRepository<LearnMockTest, UUID> {
    List<LearnMockTest> findByExamTypeId(UUID examTypeId);
}
