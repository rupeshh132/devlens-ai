package com.devlens.api.interview;

import com.devlens.api.common.ApiResponse;
import com.devlens.api.entity.User;
import com.devlens.api.entity.UserStatus;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/interviews")
@RequiredArgsConstructor
public class InterviewController {

    private final InterviewService interviewService;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    private User getAuthenticatedUser(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        String userEmail = jwtService.extractUsername(token);
        return userRepository.findByEmailAndStatusNot(userEmail, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<InterviewSessionResponse>> generateInterview(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody InterviewSessionRequest request) {
        User user = getAuthenticatedUser(authHeader);
        InterviewSession session = interviewService.generateInterviewSession(user, request);
        return ResponseEntity.ok(ApiResponse.success(InterviewSessionResponse.fromEntity(session), "Interview session generated successfully"));
    }

    @GetMapping("/latest")
    public ResponseEntity<ApiResponse<InterviewSessionResponse>> getLatestInterview(
            @RequestHeader("Authorization") String authHeader) {
        User user = getAuthenticatedUser(authHeader);
        Optional<InterviewSession> session = interviewService.getLatestSession(user);
        
        return session.map(s -> ResponseEntity.ok(ApiResponse.success(InterviewSessionResponse.fromEntity(s), "Latest interview session retrieved")))
                .orElseGet(() -> ResponseEntity.ok(ApiResponse.success(null, "No interview sessions found")));
    }
}
