package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnMockTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Repository
public interface LearnMockTestRepository extends JpaRepository<LearnMockTest, UUID> {
    List<LearnMockTest> findByExamTypeId(UUID examTypeId);
    List<LearnMockTest> findByExamTypeIdIn(Collection<UUID> examTypeIds);
    List<LearnMockTest> findByExamTypeIdInAndSubjectIgnoreCase(Collection<UUID> examTypeIds, String subject);
    List<LearnMockTest> findByExamTypeIdInAndSubjectIgnoreCaseAndTestTypeIgnoreCase(Collection<UUID> examTypeIds, String subject, String testType);
    List<LearnMockTest> findBySubjectIgnoreCase(String subject);
}
