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

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<AuthResponse>> register(@Valid @RequestBody RegisterRequest request,
                                                              @RequestHeader(value = "User-Agent", defaultValue = "unknown") String deviceId) {
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
        AuthResponse response = authenticationService.login(request.getEmail(), request.getPassword(), deviceId);
        
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, authenticationService.createHttpOnlyCookie(response.getRefreshToken()).toString())
                .body(ApiResponse.success(response, "Logged in successfully"));
    }

    @PostMapping("/refresh")
    public ResponseEntity<ApiResponse<AuthResponse>> refresh(HttpServletRequest request,
                                                             @RequestHeader(value = "User-Agent", defaultValue = "unknown") String deviceId) {
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
        Cookie cookie = WebUtils.getCookie(request, "refresh_token");
        if (cookie != null && !cookie.getValue().isEmpty()) {
            authenticationService.logout(cookie.getValue());
        }
        
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, authenticationService.clearHttpOnlyCookie().toString())
                .body(ApiResponse.success(null, "Logged out successfully"));
    }
}
