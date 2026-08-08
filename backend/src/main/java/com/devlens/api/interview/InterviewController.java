package com.devlens.api.interview;

import com.devlens.api.common.ApiResponse;
import com.devlens.api.entity.User;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/interviews")
@RequiredArgsConstructor
public class InterviewController {

    private final InterviewService interviewService;
    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<ApiResponse<InterviewSessionResponse>> generateInterview(
            @AuthenticationPrincipal UserPrincipal userPrincipal,
            @RequestBody InterviewSessionRequest request) {

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        InterviewSession session = interviewService.generateInterviewSession(user, request);
        return ResponseEntity.ok(ApiResponse.success(
                InterviewSessionResponse.fromEntity(session),
                "Interview session generated successfully"));
    }

    @GetMapping("/latest")
    public ResponseEntity<ApiResponse<InterviewSessionResponse>> getLatestInterview(
            @AuthenticationPrincipal UserPrincipal userPrincipal) {

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Optional<InterviewSession> session = interviewService.getLatestSession(user);

        return session
                .map(s -> ResponseEntity.ok(ApiResponse.success(
                        InterviewSessionResponse.fromEntity(s),
                        "Latest interview session retrieved")))
                .orElseGet(() -> ResponseEntity.ok(ApiResponse.success(
                        null,
                        "No interview sessions found")));
    }
}
