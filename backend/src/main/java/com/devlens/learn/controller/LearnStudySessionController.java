package com.devlens.learn.controller;

import com.devlens.learn.dto.StudySessionRequest;
import com.devlens.learn.entity.LearnStudySession;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnStudySessionRepository;
import com.devlens.learn.repository.LearnUserRepository;
import com.devlens.learn.service.LeaderboardService;
import com.devlens.learn.entity.LearnXpLog;
import com.devlens.learn.security.LearnUserPrincipal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/learn/analytics/session")
@RequiredArgsConstructor
public class LearnStudySessionController {

    private final LearnUserRepository userRepository;
    private final LearnStudySessionRepository sessionRepository;
    private final LeaderboardService leaderboardService;

    // REAL-TIME MEMORY TRACKING FOR LIVE STATS
    private static final ConcurrentHashMap<UUID, ActiveStudentInfo> activeStudents = new ConcurrentHashMap<>();

    @Data
    @AllArgsConstructor
    public static class ActiveStudentInfo {
        private String name;
        private String examGoal;
        private LocalDateTime lastPing;
    }

    @PostMapping("/ping")
    public ResponseEntity<?> pingActiveSession(@AuthenticationPrincipal LearnUserPrincipal principal) {
        userRepository.findById(principal.getId()).ifPresent(user -> {
            activeStudents.put(user.getId(), new ActiveStudentInfo(
                    user.getFullName() != null ? user.getFullName() : "Student",
                    user.getExamGoal() != null ? user.getExamGoal() : "General",
                    LocalDateTime.now()
            ));
        });
        return ResponseEntity.ok().build();
    }

    @GetMapping("/live-stats")
    public ResponseEntity<?> getLiveStats(@AuthenticationPrincipal LearnUserPrincipal principal) {
        // Clean up inactive users (no ping in last 2 minutes)
        LocalDateTime twoMinsAgo = LocalDateTime.now().minusMinutes(2);
        activeStudents.entrySet().removeIf(entry -> entry.getValue().getLastPing().isBefore(twoMinsAgo));

        // Get user's exam goal
        String userGoal = userRepository.findById(principal.getId())
                .map(LearnUser::getExamGoal).orElse("General");

        // Find how many people are in the same goal
        List<ActiveStudentInfo> sameGoalStudents = activeStudents.values().stream()
                .filter(info -> info.getExamGoal().equals(userGoal) || userGoal.equals("General"))
                .collect(Collectors.toList());

        // Always show at least 1 (themselves) if they are active, but let's count actuals
        int count = sameGoalStudents.size();
        
        // Get up to 3 names for avatars (excluding the user themselves if possible, or just random)
        List<String> names = sameGoalStudents.stream()
                .map(ActiveStudentInfo::getName)
                .limit(3)
                .collect(Collectors.toList());

        return ResponseEntity.ok(Map.of(
                "activeCount", count > 0 ? count : 1, // fallback to 1 so they see themselves
                "activeNames", names
        ));
    }

    @PostMapping("/penalty")
    public ResponseEntity<?> applyPenalty(@AuthenticationPrincipal LearnUserPrincipal principal) {
        LearnUser user = userRepository.findById(principal.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        int penaltyXp = -20; // 20 XP penalty for breaking focus

        // Record XP in logs
        leaderboardService.awardXp(user.getId(), LearnXpLog.ActivityType.STUDY_TIME, penaltyXp);

        return ResponseEntity.ok(Map.of(
                "message", "Focus broken! Penalty applied.",
                "penalty", penaltyXp,
                "totalXp", user.getTotalXp()
        ));
    }


    @PostMapping("/log")
    public ResponseEntity<?> logSession(@AuthenticationPrincipal LearnUserPrincipal principal,
                                        @RequestBody StudySessionRequest request) {
        LearnUser user = userRepository.findById(principal.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        
        int duration = Math.min(120, Math.max(1, request.getDurationMinutes()));

        // --- SECURITY & ANTI-CHEAT ---
        java.time.LocalDate today = java.time.LocalDate.now();
        java.util.List<LearnStudySession> allSessions = sessionRepository.findByUserId(user.getId());
        
        // 1. Prevent Multi-Tab / Script Spamming (Rate Limiting)
        java.util.Optional<LearnStudySession> lastSession = allSessions.stream()
                .max(java.util.Comparator.comparing(LearnStudySession::getCreatedAt));
                
        if (lastSession.isPresent()) {
            long secondsSinceLast = java.time.Duration.between(lastSession.get().getCreatedAt(), java.time.LocalDateTime.now()).getSeconds();
            if (secondsSinceLast < 10) { // Reject if a session was logged less than 10 seconds ago
                return ResponseEntity.status(429).body(java.util.Map.of("error", "Too many requests. Please close duplicate tabs."));
            }
        }
        
        // 2. Daily XP Cap (Prevent Infinite XP Farming)
        int xpToday = allSessions.stream()
                .filter(s -> s.getCreatedAt() != null && s.getCreatedAt().toLocalDate().equals(today))
                .mapToInt(s -> s.getEarnedXp() != null ? s.getEarnedXp() : 0)
                .sum();
                
        if (xpToday > 1000) { // Cap at 1000 XP per day from studying (~16 hours max)
            return ResponseEntity.status(403).body(java.util.Map.of("error", "Daily XP limit of 1000 reached. Take a rest!"));
        }
        // --- END SECURITY ---


        // REJECT PASSIVE / BACKGROUND SESSIONS
        if ("PASSIVE".equalsIgnoreCase(request.getSessionType())) {
            return ResponseEntity.badRequest().body(Map.of("error", "Passive website browsing cannot be logged as study time. Please use Focus Mode."));
        }

        // STRICT MODE XP LOGIC
        int xp = duration; // 1 XP per minute standard
        if ("FOCUS_TIMER".equalsIgnoreCase(request.getSessionType())) {
            if (request.isWasStrict()) {
                xp = (int) (duration * 1.5); // Kept focus!
            } else {
                xp = duration; // Lost multiplier due to tab switch
            }
        } else if ("LECTURE".equalsIgnoreCase(request.getSessionType())) {
            xp = 50;
        } else if ("NOTES".equalsIgnoreCase(request.getSessionType())) {
            xp = 20;
        }

        // Save session
        LearnStudySession session = new LearnStudySession();
        session.setUserId(user.getId());
        session.setDurationMinutes("FOCUS_TIMER".equalsIgnoreCase(request.getSessionType()) ? duration : 0);
        session.setSessionType(request.getSessionType());
        session.setEarnedXp(xp);
        sessionRepository.save(session);

        // Update totals: ONLY FOCUS_TIMER sessions contribute to Study Time!
        int totalFocusMinutes = sessionRepository.findByUserId(user.getId()).stream()
                .filter(s -> "FOCUS_TIMER".equalsIgnoreCase(s.getSessionType()))
                .mapToInt(s -> s.getDurationMinutes() != null ? s.getDurationMinutes() : 0)
                .sum();
        user.setStudyMinutes(totalFocusMinutes);
        userRepository.save(user);

        // Record XP in logs so it appears on the Leaderboard
        leaderboardService.awardXp(user.getId(), LearnXpLog.ActivityType.STUDY_TIME, xp);

        // Remove from active tracking as they completed the block (optional, but good practice)
        if ("FOCUS_TIMER".equalsIgnoreCase(request.getSessionType())) {
            activeStudents.remove(user.getId());
        }

        return ResponseEntity.ok(Map.of(
                "message", "Session logged successfully",
                "earnedXp", xp,
                "totalStudyMinutes", user.getStudyMinutes(),
                "totalXp", user.getTotalXp(),
                "wasStrict", request.isWasStrict()
        ));
    }
}
