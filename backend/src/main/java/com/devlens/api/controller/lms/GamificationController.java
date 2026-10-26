package com.devlens.api.controller.lms;

import com.devlens.api.entity.lms.GamificationProfile;
import com.devlens.api.security.UserPrincipal;
import com.devlens.api.service.lms.LmsGamificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/gamification")
@RequiredArgsConstructor
public class GamificationController {

    private final LmsGamificationService gamificationService;

    @PostMapping("/focus-break")
    public ResponseEntity<?> applyFocusBreakPenalty(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        GamificationProfile profile = gamificationService.applyFocusBreakPenalty(userPrincipal.getId());
        java.util.Map<String, Object> map = new java.util.HashMap<>();
        map.put("id", profile.getId());
        map.put("totalPoints", profile.getTotalPoints());
        map.put("focusFails", profile.getFocusFails());
        return ResponseEntity.ok(map);
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getMyProfile(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        GamificationProfile profile = gamificationService.getProfile(userPrincipal.getId());
        java.util.Map<String, Object> map = new java.util.HashMap<>();
        map.put("id", profile.getId());
        map.put("totalPoints", profile.getTotalPoints());
        map.put("focusFails", profile.getFocusFails());
        java.util.Map<String, String> userMap = new java.util.HashMap<>();
        if (profile.getUser() != null) {
            userMap.put("email", profile.getUser().getEmail());
        }
        map.put("user", userMap);
        return ResponseEntity.ok(map);
    }

    @GetMapping("/leaderboard")
    public ResponseEntity<?> getLeaderboard() {
        return ResponseEntity.ok(gamificationService.getLeaderboard().stream().map(profile -> {
            java.util.Map<String, Object> map = new java.util.HashMap<>();
            map.put("id", profile.getId());
            map.put("totalPoints", profile.getTotalPoints());
            map.put("focusFails", profile.getFocusFails());
            java.util.Map<String, String> userMap = new java.util.HashMap<>();
            if (profile.getUser() != null) {
                userMap.put("email", profile.getUser().getEmail());
            }
            map.put("user", userMap);
            return map;
        }).collect(java.util.stream.Collectors.toList()));
    }
}
