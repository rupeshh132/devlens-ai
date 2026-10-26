package com.devlens.learn.controller;

import com.devlens.learn.dto.LearnProfileResponse;
import com.devlens.learn.security.LearnUserPrincipal;
import com.devlens.learn.service.LearnProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/learn/profile")
@RequiredArgsConstructor
public class LearnProfileController {

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/analytics/heatmap")
    public ResponseEntity<?> getHeatmap(@AuthenticationPrincipal LearnUserPrincipal principal) {
        try {
            return ResponseEntity.ok(profileService.getWeaknessHeatmap(principal.getId()));
        } catch (RuntimeException ex) {
            if ("PRO_ONLY".equals(ex.getMessage())) {
                return ResponseEntity.status(403).body(java.util.Map.of("error", "This feature is only available for Pro users."));
            }
            throw ex;
        }
    }


    private final LearnProfileService profileService;

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping
    public ResponseEntity<LearnProfileResponse> getProfile(@AuthenticationPrincipal LearnUserPrincipal principal) {
        LearnProfileResponse profile = profileService.getProfile(principal.getId());
        return ResponseEntity.ok(profile);
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/study-plan")
    public ResponseEntity<?> getStudyPlan(@AuthenticationPrincipal LearnUserPrincipal principal) {
        String planJson = profileService.getStudyPlan(principal.getId());
        if (planJson == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(planJson); // planJson is already a JSON string
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @PutMapping("/study-plan/task")
    public ResponseEntity<?> updateStudyPlanTask(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @jakarta.validation.Valid @RequestBody com.devlens.learn.dto.TaskUpdateDto request) {
        profileService.updateStudyPlanTask(principal.getId(), request.getTaskId(), request.getCompleted());
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @PutMapping("/phone")
    public ResponseEntity<?> updatePhone(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestBody java.util.Map<String, String> body) {
        String phone = body != null ? body.get("phone") : null;
        profileService.updatePhone(principal.getId(), phone);
        return ResponseEntity.ok(java.util.Map.of("message", "Phone number updated successfully"));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @org.springframework.web.bind.annotation.PostMapping("/paywall-hit")
    public ResponseEntity<?> recordPaywallHit(@AuthenticationPrincipal LearnUserPrincipal principal) {
        profileService.recordPaywallHit(principal.getId());
        return ResponseEntity.ok().build();
    }
}
