package com.devlens.learn.controller;

import com.devlens.learn.dto.LearnAuthResponse;
import com.devlens.learn.dto.LearnLoginRequest;
import com.devlens.learn.dto.LearnRegisterRequest;
import com.devlens.learn.service.LearnAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/learn/auth")
@RequiredArgsConstructor
public class LearnAuthController {

    private final LearnAuthService learnAuthService;
    private final com.devlens.api.service.OtpService otpService;

    @PostMapping("/request-otp")
    public ResponseEntity<?> requestOtp(@RequestBody com.devlens.api.dto.OtpRequest request) {
        otpService.generateAndSendOtp(request.getEmail());
        return ResponseEntity.ok().body(java.util.Map.of(
            "message", "OTP sent successfully to " + request.getEmail(),
            "email", request.getEmail()
        ));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody LearnRegisterRequest request) {
        if (!otpService.verifyOtp(request.getEmail(), request.getOtp())) {
            return ResponseEntity.badRequest().body("Invalid or expired OTP");
        }
        return ResponseEntity.ok(learnAuthService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<LearnAuthResponse> login(@RequestBody LearnLoginRequest request) {
        return ResponseEntity.ok(learnAuthService.login(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        org.springframework.security.core.Authentication auth = org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.getName() != null && !auth.getName().equals("anonymousUser")) {
            learnAuthService.clearActiveJwt(auth.getName());
        }
        return ResponseEntity.ok().body("Logged out successfully");
    }
}
