package com.devlens.api.controller;

import com.devlens.api.common.ApiResponse;
import com.devlens.api.dto.ActivityDto;
import com.devlens.api.entity.User;
import com.devlens.api.entity.UserStatus;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.security.JwtService;
import com.devlens.api.service.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user/activities")
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    private User getAuthenticatedUser(String authHeader) {
        String token = authHeader.substring(7);
        String userEmail = jwtService.extractUsername(token);
        return userRepository.findByEmailAndStatusNot(userEmail, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ActivityDto>>> getRecentActivities(
            @RequestHeader("Authorization") String authHeader) {
        User user = getAuthenticatedUser(authHeader);
        List<ActivityDto> activities = activityService.getRecentActivities(user);
        return ResponseEntity.ok(ApiResponse.success(activities, "Recent activities retrieved successfully"));
    }
}
