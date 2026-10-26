package com.devlens.api.controller;

import com.devlens.api.common.ApiResponse;
import com.devlens.api.dto.AuthResponse;
import com.devlens.api.dto.LoginRequest;
import com.devlens.api.dto.RegisterRequest;
import com.devlens.api.security.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.util.WebUtils;
import jakarta.servlet.http.Cookie;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthenticationService authenticationService;
    private final com.devlens.api.service.OtpService otpService;

    @PostMapping("/request-otp")
    public ResponseEntity<ApiResponse<java.util.Map<String, String>>> requestOtp(@Valid @RequestBody com.devlens.api.dto.OtpRequest request) {
        otpService.generateAndSendOtp(request.getEmail());
        return ResponseEntity.ok(ApiResponse.success(
            java.util.Map.of("email", request.getEmail()), 
            "OTP sent successfully to " + request.getEmail()
        ));
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<AuthResponse>> register(@Valid @RequestBody RegisterRequest request,
                                                              @RequestHeader(value = "User-Agent", defaultValue = "unknown") String deviceId) {
        log.info("REGISTER HIT: {}", request.getEmail());
        
        if (!otpService.verifyOtp(request.getEmail(), request.getOtp())) {
            return ResponseEntity.badRequest().body(ApiResponse.error(400, "Invalid or expired OTP"));
        }

        if (deviceId.length() > 250) deviceId = deviceId.substring(0, 250);
        try {
            AuthResponse response = authenticationService.register(
                    request.getFullName(), 
                    request.getEmail(), 
                    request.getPassword(), 
                    deviceId
            );
            return ResponseEntity.status(201)
                    .header(HttpHeaders.SET_COOKIE, authenticationService.createHttpOnlyCookie(response.getRefreshToken()).toString())
                    .body(ApiResponse.success(response, "User registered successfully"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(400, e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(@Valid @RequestBody LoginRequest request,
                                                           @RequestHeader(value = "User-Agent", defaultValue = "unknown") String deviceId) {
        if (deviceId.length() > 250) deviceId = deviceId.substring(0, 250);
        AuthResponse response = authenticationService.login(request.getEmail(), request.getPassword(), deviceId);
        
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, authenticationService.createHttpOnlyCookie(response.getRefreshToken()).toString())
                .body(ApiResponse.success(response, "Logged in successfully"));
    }

    @PostMapping("/refresh")
    public ResponseEntity<ApiResponse<AuthResponse>> refresh(HttpServletRequest request,
                                                             @RequestHeader(value = "User-Agent", defaultValue = "unknown") String deviceId) {
        if (deviceId.length() > 250) deviceId = deviceId.substring(0, 250);
        Cookie cookie = WebUtils.getCookie(request, "refresh_token");
        if (cookie == null || cookie.getValue().isEmpty()) {
            throw new AccessDeniedException("Refresh token is missing");
        }

        try {
            AuthResponse response = authenticationService.refreshToken(cookie.getValue(), deviceId);
            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, authenticationService.createHttpOnlyCookie(response.getRefreshToken()).toString())
                    .body(ApiResponse.success(response, "Token refreshed successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(401)
                    .header(HttpHeaders.SET_COOKIE, authenticationService.clearHttpOnlyCookie().toString())
                    .body(ApiResponse.error(401, "Invalid or expired refresh token"));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(HttpServletRequest request) {
        org.springframework.security.core.Authentication auth = org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.getName() != null && !auth.getName().equals("anonymousUser")) {
            authenticationService.clearActiveJwt(auth.getName());
        }

        Cookie cookie = WebUtils.getCookie(request, "refresh_token");
        if (cookie != null && !cookie.getValue().isEmpty()) {
            authenticationService.logout(cookie.getValue());
        }
        
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, authenticationService.clearHttpOnlyCookie().toString())
                .body(ApiResponse.success(null, "Logged out successfully"));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponse<Void>> forgotPassword(@Valid @RequestBody com.devlens.api.dto.auth.ForgotPasswordRequestDto request) {
        authenticationService.forgotPassword(request.getEmail());
        // Always return success even if email not found to prevent user enumeration
        return ResponseEntity.ok(ApiResponse.success(null, "If an account with that email exists, a password reset link has been sent."));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<ApiResponse<Void>> resetPassword(@Valid @RequestBody com.devlens.api.dto.auth.ResetPasswordRequestDto request) {
        authenticationService.resetPassword(request.getToken(), request.getNewPassword());
        return ResponseEntity.ok(ApiResponse.success(null, "Password has been successfully reset."));
    }
}
