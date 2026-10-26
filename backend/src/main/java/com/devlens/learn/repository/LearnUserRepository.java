package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface LearnUserRepository extends JpaRepository<LearnUser, UUID> {
    
    Optional<LearnUser> findByEmailAndIsActiveTrue(String email);
    
    boolean existsByEmail(String email);

    Optional<LearnUser> findByReferralCodeIgnoreCase(String referralCode);

    java.util.List<LearnUser> findByReferredBy(UUID referredBy);
}
