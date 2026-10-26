package com.devlens.learn.service;

import com.devlens.api.security.JwtService;
import com.devlens.learn.dto.LearnAuthResponse;
import com.devlens.learn.dto.LearnLoginRequest;
import com.devlens.learn.dto.LearnRegisterRequest;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnUserRepository;
import com.devlens.learn.security.LearnUserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LearnAuthService {

    private final LearnUserRepository learnUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public LearnAuthResponse register(LearnRegisterRequest request) {
        String cleanEmail = request.getEmail() != null ? request.getEmail().trim().toLowerCase() : "";
        if (learnUserRepository.existsByEmail(cleanEmail)) {
            throw new com.devlens.api.exception.DuplicateResourceException("Email already registered in Learn platform. Please sign in instead.");
        }

        LearnUser user = new LearnUser();
        user.setEmail(cleanEmail);
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setFullName(request.getFullName() != null ? request.getFullName().trim() : null);
        String cleanPhone = request.getPhone() != null && !request.getPhone().trim().isEmpty() ? request.getPhone().trim() : null;
        user.setPhone(cleanPhone);
        user.setExamGoal(request.getExamGoal());
        user.setTargetExamDate(request.getTargetExamDate());
        user.setLastLogin(LocalDateTime.now());
        
        if (request.getReferralCode() != null && !request.getReferralCode().trim().isEmpty()) {
            Optional<LearnUser> referrer = learnUserRepository.findByReferralCodeIgnoreCase(request.getReferralCode().trim());
            if (referrer.isPresent()) {
                user.setReferredBy(referrer.get().getId());
            }
        }

        LearnUser savedUser = learnUserRepository.save(user);

        return buildAuthResponse(savedUser);
    }

    public LearnAuthResponse login(LearnLoginRequest request) {
        String cleanEmail = request.getEmail() != null ? request.getEmail().trim().toLowerCase() : "";
        LearnUser user = learnUserRepository.findByEmailAndIsActiveTrue(cleanEmail)
                .orElseThrow(() -> new org.springframework.security.authentication.BadCredentialsException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new org.springframework.security.authentication.BadCredentialsException("Invalid email or password");
        }

        user.setLastLogin(LocalDateTime.now());
        learnUserRepository.save(user);

        return buildAuthResponse(user);
    }

    public void clearActiveJwt(String email) {
        learnUserRepository.findByEmailAndIsActiveTrue(email).ifPresent(user -> {
            user.setActiveJwtId(null);
            learnUserRepository.save(user);
        });
    }

    private LearnAuthResponse buildAuthResponse(LearnUser user) {
        LearnUserPrincipal principal = LearnUserPrincipal.create(user);
        
        java.util.Map<String, Object> claims = new java.util.HashMap<>();
        claims.put("role", "LEARN_USER");
        
        String token = jwtService.generateToken(claims, principal);
        
        String jti = jwtService.extractJti(token);
        user.setActiveJwtId(jti);
        learnUserRepository.save(user);

        return LearnAuthResponse.builder()
                .token(token)
                .email(user.getEmail())
                .fullName(user.getFullName())
                .subscriptionPlan(user.getSubscriptionPlan())
                .examGoal(user.getExamGoal())
                .build();
    }
}
