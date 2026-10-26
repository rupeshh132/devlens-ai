package com.devlens.learn.controller;

import com.devlens.learn.service.LeaderboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/admin/gamification")
@RequiredArgsConstructor
public class AdminGamificationController {

    private final LeaderboardService leaderboardService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/leaderboard")
    public ResponseEntity<?> getLeaderboard(
            @RequestParam int month,
            @RequestParam int year,
            @RequestParam(defaultValue = "0") int minXp
    ) {
        return ResponseEntity.ok(leaderboardService.getLeaderboardForMonth(month, year, true));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/ban/{userId}")
    public ResponseEntity<?> banUser(@PathVariable UUID userId) {
        leaderboardService.banUser(userId);
        return ResponseEntity.ok(Map.of("message", "User banned from leaderboard"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/unban/{userId}")
    public ResponseEntity<?> unbanUser(@PathVariable UUID userId) {
        leaderboardService.unbanUser(userId);
        return ResponseEntity.ok(Map.of("message", "User unbanned"));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/publish")
    public ResponseEntity<?> publishWinners(
            @RequestParam int month,
            @RequestParam int year,
            @RequestParam(defaultValue = "0") int minXp
    ) {
        boolean success = leaderboardService.publishWinners(month, year, minXp);
        if (success) {
            return ResponseEntity.ok(Map.of("message", "Winners successfully published for " + month + "/" + year));
        } else {
            return ResponseEntity.badRequest().body(Map.of("error", "Winners already published for this month."));
        }
    }
}