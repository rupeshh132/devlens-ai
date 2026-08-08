package com.devlens.api.repository;

import com.devlens.api.entity.RefreshToken;
import com.devlens.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, UUID> {
    Optional<RefreshToken> findByToken(String token);
    // Returns List to safely handle duplicate device records (e.g. from double-tap / network retry)
    List<RefreshToken> findAllByUserAndDeviceId(User user, String deviceId);
    void deleteByUser(User user);
    void deleteByToken(String token);
    void deleteByUserAndDeviceId(User user, String deviceId);
}
