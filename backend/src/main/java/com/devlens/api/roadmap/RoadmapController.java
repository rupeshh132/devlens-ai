package com.devlens.api.roadmap;

import com.devlens.api.common.ApiResponse;
import com.devlens.api.entity.User;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.security.UserPrincipal;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/roadmaps")
@RequiredArgsConstructor
public class RoadmapController {

    private final RoadmapService roadmapService;
    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<ApiResponse<Roadmap>> generateRoadmap(
            @RequestBody RoadmapRequest request,
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
                
        Roadmap roadmap = roadmapService.generateRoadmap(user, request.getTitle());
        return ResponseEntity.ok(ApiResponse.success(roadmap, "Roadmap generated successfully"));
    }

    @GetMapping("/latest")
    public ResponseEntity<ApiResponse<Roadmap>> getLatestRoadmap(
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
                
        try {
            Roadmap roadmap = roadmapService.getLatestRoadmap(user);
            return ResponseEntity.ok(ApiResponse.success(roadmap, "Latest roadmap retrieved"));
        } catch (RuntimeException e) {
            return ResponseEntity.ok(ApiResponse.success(null, "No roadmap found"));
        }
    }
}

@Data
class RoadmapRequest {
    private String title;
}
