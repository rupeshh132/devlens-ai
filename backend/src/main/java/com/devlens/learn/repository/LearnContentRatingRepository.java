package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnContentRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface LearnContentRatingRepository extends JpaRepository<LearnContentRating, UUID> {
    Optional<LearnContentRating> findByUserIdAndContentId(UUID userId, UUID contentId);
    long countByContentIdAndIsHelpfulTrue(UUID contentId);
    long countByContentIdAndIsHelpfulFalse(UUID contentId);
}
