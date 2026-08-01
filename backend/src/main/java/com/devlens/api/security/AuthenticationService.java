package com.devlens.api.security;

import com.devlens.api.dto.AuthResponse;
import com.devlens.api.entity.RefreshToken;
import com.devlens.api.entity.User;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final RefreshTokenService refreshTokenService;
    private final UserRepository userRepository;

    public AuthResponse login(String email, String password, String deviceId) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        String accessToken = jwtService.generateToken(userPrincipal);
        
        // Single active refresh token per device - handled internally by createOrUpdateRefreshToken
        RefreshToken refreshToken = refreshTokenService.createOrUpdateRefreshToken(user, deviceId);

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getToken())
                .build();
    }

    public AuthResponse loginWithOAuth(UserPrincipal userPrincipal, String deviceId) {
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        String accessToken = jwtService.generateToken(userPrincipal);
        
        RefreshToken refreshToken = refreshTokenService.createOrUpdateRefreshToken(user, deviceId);

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getToken())
                .build();
    }

    public AuthResponse refreshToken(String requestRefreshToken, String deviceId) {
        return refreshTokenService.findByToken(requestRefreshToken)
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    // Refresh token rotation
                    RefreshToken newRefreshToken = refreshTokenService.createOrUpdateRefreshToken(user, deviceId);
                    
                    UserPrincipal userPrincipal = UserPrincipal.create(user);
                    String accessToken = jwtService.generateToken(userPrincipal);
                    
                    return AuthResponse.builder()
                            .accessToken(accessToken)
                            .refreshToken(newRefreshToken.getToken())
                            .build();
                })
                .orElseThrow(() -> new RuntimeException("Refresh token is not in database!"));
    }

    public void logout(String refreshToken) {
        refreshTokenService.deleteByToken(refreshToken);
    }
    
    public void revokeAllUserTokens(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        refreshTokenService.deleteByUser(user);
    }

    public ResponseCookie createHttpOnlyCookie(String token) {
        return ResponseCookie.from("refresh_token", token)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(7 * 24 * 60 * 60) // 7 days
                .sameSite("Strict")
                .build();
    }

    public ResponseCookie clearHttpOnlyCookie() {
        return ResponseCookie.from("refresh_token", "")
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(0)
                .sameSite("Strict")
                .build();
    }
}
