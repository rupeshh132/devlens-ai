package com.devlens.api.repository.lms;

import com.devlens.api.entity.lms.GamificationProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface GamificationProfileRepository extends JpaRepository<GamificationProfile, UUID> {
    Optional<GamificationProfile> findByUserId(UUID userId);
    List<GamificationProfile> findTop50ByOrderByTotalPointsDesc();
}
