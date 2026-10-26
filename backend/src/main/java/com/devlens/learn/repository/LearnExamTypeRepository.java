package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnExamType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface LearnExamTypeRepository extends JpaRepository<LearnExamType, UUID> {
    
    Optional<LearnExamType> findBySlug(String slug);
    
    Optional<LearnExamType> findByNameIgnoreCase(String name);
    
    List<LearnExamType> findByIsActiveTrueOrderByDisplayOrderAsc();
    
    List<LearnExamType> findByCategoryAndIsActiveTrueOrderByDisplayOrderAsc(String category);
}
