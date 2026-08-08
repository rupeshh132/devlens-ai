package com.devlens.api.security;

import com.devlens.api.entity.RefreshToken;
import com.devlens.api.entity.User;
import com.devlens.api.repository.RefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RefreshTokenService {

    @Value("${security.jwt.refresh-expiration:604800000}")
    private long refreshTokenDurationMs;

    private final RefreshTokenRepository refreshTokenRepository;

    @Transactional
    public RefreshToken createOrUpdateRefreshToken(User user, String deviceId) {
        List<RefreshToken> existingTokens = refreshTokenRepository.findAllByUserAndDeviceId(user, deviceId);

        // If duplicate records exist for this device (e.g. from double-tap / network retry),
        // delete ALL of them and create a fresh one to avoid NonUniqueResultException crash.
        if (existingTokens.size() > 1) {
            refreshTokenRepository.deleteByUserAndDeviceId(user, deviceId);
            refreshTokenRepository.flush();
        }

        RefreshToken refreshToken;
        if (existingTokens.size() == 1) {
            // Normal case: update existing token for this device
            refreshToken = existingTokens.get(0);
            refreshToken.setToken(UUID.randomUUID().toString());
            refreshToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));
        } else {
            // No existing token (or duplicates were cleared above): create new
            refreshToken = RefreshToken.builder()
                    .user(user)
                    .deviceId(deviceId)
                    .token(UUID.randomUUID().toString())
                    .expiryDate(Instant.now().plusMillis(refreshTokenDurationMs))
                    .build();
        }

        return refreshTokenRepository.save(refreshToken);
    }

    @Transactional(readOnly = true)
    public Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    public RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new RuntimeException("Refresh token was expired. Please make a new signin request");
        }
        return token;
    }

    @Transactional
    public void deleteByToken(String token) {
        refreshTokenRepository.deleteByToken(token);
    }

    @Transactional
    public void deleteByUser(User user) {
        refreshTokenRepository.deleteByUser(user);
    }
}
