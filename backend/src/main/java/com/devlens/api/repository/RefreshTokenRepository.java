package com.devlens.api.repository;

import com.devlens.api.entity.RefreshToken;
import com.devlens.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, UUID> {
    Optional<RefreshToken> findByToken(String token);
    Optional<RefreshToken> findByUserAndDeviceId(User user, String deviceId);
    void deleteByUser(User user);
    void deleteByToken(String token);
}
