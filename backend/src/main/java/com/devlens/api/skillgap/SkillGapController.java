package com.devlens.api.skillgap;

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
@RequestMapping("/api/v1/skill-gap")
@RequiredArgsConstructor
public class SkillGapController {

    private final SkillGapService skillGapService;
    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<ApiResponse<SkillGapAnalysis>> generateAnalysis(
            @RequestBody SkillGapRequest request,
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
                
        SkillGapAnalysis analysis = skillGapService.analyzeSkillGap(user, request.getTargetRole());
        return ResponseEntity.ok(ApiResponse.success(analysis, "Skill gap analysis generated successfully"));
    }

    @GetMapping("/latest")
    public ResponseEntity<ApiResponse<SkillGapAnalysis>> getLatestAnalysis(
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        
        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
                
        try {
            SkillGapAnalysis analysis = skillGapService.getLatestAnalysis(user);
            return ResponseEntity.ok(ApiResponse.success(analysis, "Latest skill gap analysis retrieved"));
        } catch (RuntimeException e) {
            return ResponseEntity.ok(ApiResponse.success(null, "No analysis found"));
        }
    }
}

@Data
class SkillGapRequest {
    private String targetRole;
}
