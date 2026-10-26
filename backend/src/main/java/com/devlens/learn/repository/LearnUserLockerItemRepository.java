package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnUserLockerItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface LearnUserLockerItemRepository extends JpaRepository<LearnUserLockerItem, UUID> {

    List<LearnUserLockerItem> findByUserIdOrderByCreatedAtDesc(UUID userId);

    Optional<LearnUserLockerItem> findByIdAndUserId(UUID id, UUID userId);

    Optional<LearnUserLockerItem> findByUserIdAndTitleIgnoreCase(UUID userId, String title);

    void deleteByIdAndUserId(UUID id, UUID userId);

    long countByUserId(UUID userId);
}
