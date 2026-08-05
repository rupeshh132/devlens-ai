package com.devlens.api.roadmap;

import com.devlens.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RoadmapRepository extends JpaRepository<Roadmap, UUID> {
    List<Roadmap> findByUserOrderByCreatedAtDesc(User user);
    Optional<Roadmap> findFirstByUserOrderByCreatedAtDesc(User user);
}
