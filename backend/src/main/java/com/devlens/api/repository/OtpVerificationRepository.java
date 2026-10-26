package com.devlens.api.repository;

import com.devlens.api.entity.OtpVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface OtpVerificationRepository extends JpaRepository<OtpVerification, UUID> {
    Optional<OtpVerification> findTopByEmailOrderByCreatedAtDesc(String email);
    
    @Modifying
    @Transactional
    void deleteByEmail(String email);
}
