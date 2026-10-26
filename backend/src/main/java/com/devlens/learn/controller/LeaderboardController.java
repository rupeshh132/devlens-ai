package com.devlens.learn.controller;

import com.devlens.learn.dto.DailyChallengeXpRequest;
import com.devlens.learn.security.LearnUserPrincipal;
import com.devlens.learn.service.LeaderboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/v1/learn/leaderboard")
@RequiredArgsConstructor
public class LeaderboardController {

    private final LeaderboardService leaderboardService;

    @GetMapping("/global")
    public ResponseEntity<?> getGlobalLeaderboard(
            @RequestParam(required = false) Integer month,
            @RequestParam(required = false) Integer year
    ) {
        LocalDate now = LocalDate.now();
        int m = month != null ? month : now.getMonthValue();
        int y = year != null ? year : now.getYear();
        return ResponseEntity.ok(leaderboardService.getLeaderboardForMonth(m, y));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @GetMapping("/me")
    public ResponseEntity<?> getMyRank(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestParam(required = false) Integer month,
            @RequestParam(required = false) Integer year
    ) {
        LocalDate now = LocalDate.now();
        int m = month != null ? month : now.getMonthValue();
        int y = year != null ? year : now.getYear();
        return ResponseEntity.ok(leaderboardService.getMyRankForMonth(principal.getId(), m, y));
    }

    @PreAuthorize("hasRole('LEARN_USER')")
    @PostMapping("/daily-challenge")
    public ResponseEntity<?> recordDailyChallenge(
            @AuthenticationPrincipal LearnUserPrincipal principal,
            @RequestBody DailyChallengeXpRequest request
    ) {
        return ResponseEntity.ok(leaderboardService.recordDailyChallengeXp(principal.getId(), request));
    }

    @GetMapping("/past-winners")
    public ResponseEntity<?> getPastWinners(
            @RequestParam int month,
            @RequestParam int year
    ) {
        return ResponseEntity.ok(leaderboardService.getPastWinners(month, year));
    }
}