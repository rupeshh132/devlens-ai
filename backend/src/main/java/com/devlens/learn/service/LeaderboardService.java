package com.devlens.learn.service;

import com.devlens.learn.dto.DailyChallengeXpRequest;
import com.devlens.learn.entity.LearnLeaderboardWinner;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.entity.LearnXpLog;
import com.devlens.learn.repository.LearnLeaderboardWinnerRepository;
import com.devlens.learn.repository.LearnUserRepository;
import com.devlens.learn.repository.LearnXpLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LeaderboardService {

    private final LearnUserRepository userRepository;
    private final LearnXpLogRepository xpLogRepository;
    private final LearnLeaderboardWinnerRepository winnerRepository;
    private final com.devlens.learn.repository.LearnStudySessionRepository studySessionRepository;

    @Transactional
    public synchronized Map<String, Object> recordDailyChallengeXp(UUID userId, DailyChallengeXpRequest req) {
        LearnUser user = userRepository.findById(userId).orElseThrow();
        int currentXp = user.getTotalXp() != null ? user.getTotalXp() : 0;
        if (user.isLeaderboardBanned()) {
            return Map.of("alreadyAwarded", false, "awardedXp", 0, "totalXp", currentXp);
        }

        LocalDate today = LocalDate.now();
        LocalDateTime startOfDay = today.atStartOfDay();
        LocalDateTime endOfDay = today.plusDays(1).atStartOfDay();

        boolean alreadyAwarded = xpLogRepository.existsByUserIdAndActivityTypeAndCreatedAtBetween(
                userId,
                LearnXpLog.ActivityType.DAILY_PYQ,
                startOfDay,
                endOfDay
        );

        if (alreadyAwarded) {
            return Map.of(
                    "alreadyAwarded", true,
                    "awardedXp", 0,
                    "totalXp", currentXp,
                    "message", "Daily PYQ challenge already recorded for today"
            );
        }

        int points = req.isCorrect() ? 50 : 25;
        awardXp(userId, LearnXpLog.ActivityType.DAILY_PYQ, points);

        int updatedXp = user.getTotalXp() != null ? user.getTotalXp() : (currentXp + points);

        return Map.of(
                "alreadyAwarded", false,
                "awardedXp", points,
                "totalXp", updatedXp,
                "message", "Daily PYQ challenge XP awarded successfully"
        );
    }

    @Transactional
    public synchronized void awardXp(UUID userId, LearnXpLog.ActivityType type, int points) {
        LearnUser user = userRepository.findById(userId).orElseThrow();
        if (user.isLeaderboardBanned()) return; // Don't award XP if banned
        
        LearnXpLog log = new LearnXpLog();
        log.setUserId(userId);
        log.setActivityType(type);
        log.setPointsAwarded(points);
        xpLogRepository.save(log);
        
        int totalLogSum = xpLogRepository.findByUserId(userId).stream()
                .mapToInt(LearnXpLog::getPointsAwarded)
                .sum();
        user.setTotalXp(Math.max(0, totalLogSum));
        userRepository.save(user);
    }

    public List<Map<String, Object>> getLeaderboardForMonth(int month, int year) {
        return getLeaderboardForMonth(month, year, false);
    }

    public List<Map<String, Object>> getLeaderboardForMonth(int month, int year, boolean includeBanned) {
        // Fetch all ACTIVE users (conditionally including banned for admin view)
        List<LearnUser> allUsers = userRepository.findAll().stream()
                .filter(LearnUser::isActive)
                .filter(u -> includeBanned || !u.isLeaderboardBanned())
                .collect(Collectors.toList());
                
        List<Map<String, Object>> rankedUsers = new ArrayList<>();
        
        for (LearnUser user : allUsers) {
            Map<String, Object> stats = calculateEffectiveXpAndStats(user.getId(), month, year);
            int effectiveXp = (int) stats.get("effectiveXp");
            
            if (effectiveXp > 0) {
                Map<String, Object> map = new HashMap<>(stats);
                map.put("id", user.getId());
                map.put("name", user.getFullName() != null ? user.getFullName() : "Anonymous");
                map.put("examGoal", user.getExamGoal() != null ? user.getExamGoal() : "General");
                map.put("studyMinutes", stats.get("studyMinutes") != null ? stats.get("studyMinutes") : 0);
                map.put("score", effectiveXp);
                map.put("isPaidUser", user.isPaidUser());
                map.put("subscriptionPlan", user.getSubscriptionPlan());
                map.put("isBanned", user.isLeaderboardBanned());
                rankedUsers.add(map);
            }
        }
        
        // TIE-BREAKER LOGIC
        // 1. effectiveXp (Desc)
        // 2. studyMinutes (Desc)
        // 3. lastActivityTime (Asc)
        rankedUsers.sort((m1, m2) -> {
            int xp1 = (int) m1.get("effectiveXp");
            int xp2 = (int) m2.get("effectiveXp");
            if (xp1 != xp2) return Integer.compare(xp2, xp1);
            
            int sm1 = (int) m1.get("studyMinutes");
            int sm2 = (int) m2.get("studyMinutes");
            if (sm1 != sm2) return Integer.compare(sm2, sm1);
            
            LocalDateTime d1 = (LocalDateTime) m1.get("lastActivityTime");
            LocalDateTime d2 = (LocalDateTime) m2.get("lastActivityTime");
            if (d1 != null && d2 != null && !d1.equals(LocalDateTime.MIN) && !d2.equals(LocalDateTime.MIN)) {
                return d1.compareTo(d2);
            }
            return 0;
        });

        // TIE-BREAKER & ANOMALY ENRICHMENT
        for (int i = 0; i < rankedUsers.size(); i++) {
            Map<String, Object> current = rankedUsers.get(i);
            int xp = (int) current.get("effectiveXp");
            int studyMins = (int) current.get("studyMinutes");
            int rawRefXp = (int) current.get("referralXp");
            int earnedStudyXp = (int) current.get("earnedXp");

            // 1. Check for ties with adjacent ranks
            boolean tiedWithPrev = i > 0 && ((int) rankedUsers.get(i - 1).get("effectiveXp")) == xp;
            boolean tiedWithNext = (i + 1 < rankedUsers.size()) && ((int) rankedUsers.get(i + 1).get("effectiveXp")) == xp;

            if (tiedWithPrev || tiedWithNext) {
                current.put("isTied", true);
                if (tiedWithPrev) {
                    Map<String, Object> prev = rankedUsers.get(i - 1);
                    int prevStudy = (int) prev.get("studyMinutes");
                    if (prevStudy > studyMins) {
                        current.put("tieResolution", "Resolved by Monthly Study Time (" + prevStudy + "m vs " + studyMins + "m)");
                    } else {
                        current.put("tieResolution", "Resolved by Activity Completion Speed");
                    }
                }
            } else {
                current.put("isTied", false);
            }

            // 2. Anomaly / Anti-Cheat flags
            if (xp >= 100 && studyMins == 0) {
                current.put("anomaly", "HIGH_XP_ZERO_STUDY");
            } else if (rawRefXp > 400 && earnedStudyXp < 40) {
                current.put("anomaly", "REFERRAL_SPIKE");
            } else {
                current.put("anomaly", null);
            }
        }
        
        return rankedUsers.stream().limit(50).collect(Collectors.toList());
    }
    
    public Map<String, Object> getMyRankForMonth(UUID userId, int month, int year) {
        LearnUser user = userRepository.findById(userId).orElseThrow();
        if (user.isLeaderboardBanned()) {
            Map<String, Object> bannedRes = new HashMap<>();
            bannedRes.put("score", 0);
            bannedRes.put("isBanned", true);
            return bannedRes;
        }
        
        Map<String, Object> stats = calculateEffectiveXpAndStats(userId, month, year);
        int effectiveXp = (int) stats.get("effectiveXp");
        
        // Auto-generate referral code if null
        if (user.getReferralCode() == null) {
            String baseName = user.getFullName() != null ? user.getFullName().replaceAll("\\s+","").toUpperCase() : "STUDENT";
            if (baseName.length() > 5) baseName = baseName.substring(0, 5);
            String code = baseName + (1000 + new Random().nextInt(9000));
            user.setReferralCode(code);
            userRepository.save(user);
        }
        
        // Calculate user position, podium thresholds, and gap
        List<Map<String, Object>> leaderboard = getLeaderboardForMonth(month, year);
        int myRank = -1;
        // In Model 1, only active Pro users qualify for an All-India Rank
        if (user.isPaidUser()) {
            for (int i = 0; i < leaderboard.size(); i++) {
                if (userId.equals(leaderboard.get(i).get("id"))) {
                    myRank = i + 1;
                    break;
                }
            }
        }

        int rank1Xp = leaderboard.size() > 0 ? (int) leaderboard.get(0).get("effectiveXp") : 0;
        int rank2Xp = leaderboard.size() > 1 ? (int) leaderboard.get(1).get("effectiveXp") : 0;
        int rank3Xp = leaderboard.size() > 2 ? (int) leaderboard.get(2).get("effectiveXp") : 0;
        
        int gapToPodium = 0;
        if (myRank > 3) {
            gapToPodium = Math.max(1, (rank3Xp - effectiveXp) + 1);
        } else if (myRank == 2) {
            gapToPodium = Math.max(1, (rank1Xp - effectiveXp) + 1);
        } else if (myRank == 1 && leaderboard.size() > 1) {
            gapToPodium = effectiveXp - rank2Xp; // lead buffer over 2nd place
        }

        // Days remaining in target month
        java.time.YearMonth ym = java.time.YearMonth.of(year, month);
        int totalDays = ym.lengthOfMonth();
        int currentDay = java.time.LocalDate.now().getDayOfMonth();
        int daysRemaining = Math.max(0, totalDays - currentDay);

        // Fetch referred friends who upgraded to Pro
        List<LearnUser> referredStudents = userRepository.findByReferredBy(userId);
        List<Map<String, Object>> referralHistory = new ArrayList<>();
        int paidReferralCount = 0;

        for (LearnUser student : referredStudents) {
            if (student.isPaidUser()) {
                paidReferralCount++;
                Map<String, Object> item = new HashMap<>();
                String rawName = student.getFullName() != null && !student.getFullName().isBlank() 
                        ? student.getFullName() 
                        : "Friend";
                String[] parts = rawName.trim().split("\\s+");
                String maskedName = parts[0];
                if (parts.length > 1) {
                    maskedName += " " + parts[parts.length - 1].charAt(0) + ".";
                }
                item.put("friendName", maskedName);
                item.put("examGoal", student.getExamGoal() != null ? student.getExamGoal() : "PRO");
                item.put("xpEarned", 200);
                item.put("status", "PRO Active");
                referralHistory.add(item);
            }
        }

        Map<String, Object> res = new HashMap<>();
        res.put("score", effectiveXp);
        res.put("myRank", myRank > 0 ? myRank : null);
        res.put("rank1Xp", rank1Xp);
        res.put("rank2Xp", rank2Xp);
        res.put("rank3Xp", rank3Xp);
        res.put("gapToPodium", gapToPodium);
        res.put("daysRemaining", daysRemaining);
        res.put("referralCode", user.getReferralCode());
        res.put("isBanned", false);
        res.put("isPaidUser", user.isPaidUser());
        res.put("referralCount", paidReferralCount);
        res.put("referralXpEarned", paidReferralCount * 200);
        res.put("referralHistory", referralHistory);
        return res;
    }

    private Map<String, Object> calculateEffectiveXpAndStats(UUID userId, int targetMonth, int targetYear) {
        List<LearnXpLog> logs = xpLogRepository.findByUserId(userId).stream()
                .filter(l -> l.getCreatedAt().getMonthValue() == targetMonth && l.getCreatedAt().getYear() == targetYear)
                .collect(Collectors.toList());
        
        int nonReferralXp = 0;
        int referralXp = 0;
        LocalDateTime lastActivity = null;
        
        for (LearnXpLog log : logs) {
            if (log.getActivityType() == LearnXpLog.ActivityType.REFERRAL) {
                referralXp += log.getPointsAwarded();
            } else {
                nonReferralXp += log.getPointsAwarded();
            }
            if (lastActivity == null || log.getCreatedAt().isAfter(lastActivity)) {
                lastActivity = log.getCreatedAt();
            }
        }
        
        // Max allowable referral XP is 25% of Non-Referral XP (making it 20% of total)
        int maxAllowableReferralXp = (int) (nonReferralXp * 0.25);
        int acceptedReferralXp = Math.min(referralXp, maxAllowableReferralXp);
        boolean isReferralCapped = referralXp > maxAllowableReferralXp;

        // Calculate true monthly study minutes for target month and year strictly from FOCUS_TIMER sessions
        int monthlyStudyMinutes = 0;
        try {
            monthlyStudyMinutes = studySessionRepository.findByUserId(userId).stream()
                    .filter(s -> s.getCreatedAt() != null 
                            && s.getCreatedAt().getMonthValue() == targetMonth 
                            && s.getCreatedAt().getYear() == targetYear
                            && "FOCUS_TIMER".equalsIgnoreCase(s.getSessionType()))
                    .mapToInt(s -> s.getDurationMinutes() != null ? s.getDurationMinutes() : 0)
                    .sum();
        } catch (Exception e) {
            // Silently fallback if study sessions query has issues
        }

        // Secondary fallback to STUDY_TIME xp logs in target month (excluding legacy passive logs)
        if (monthlyStudyMinutes == 0) {
            monthlyStudyMinutes = logs.stream()
                    .filter(l -> l.getActivityType() == LearnXpLog.ActivityType.STUDY_TIME && l.getPointsAwarded() != 5)
                    .mapToInt(l -> Math.max(0, l.getPointsAwarded()))
                    .sum();
        }

        // Safe fallback for current month if student has user.getStudyMinutes()
        LocalDate now = LocalDate.now();
        if (monthlyStudyMinutes == 0 && targetMonth == now.getMonthValue() && targetYear == now.getYear()) {
            LearnUser u = userRepository.findById(userId).orElse(null);
            if (u != null && u.getStudyMinutes() != null && u.getStudyMinutes() > 0) {
                monthlyStudyMinutes = u.getStudyMinutes();
            }
        }
        
        Map<String, Object> stats = new HashMap<>();
        stats.put("effectiveXp", nonReferralXp + acceptedReferralXp);
        stats.put("earnedXp", nonReferralXp);
        stats.put("referralXp", referralXp);
        stats.put("acceptedReferralXp", acceptedReferralXp);
        stats.put("isReferralCapped", isReferralCapped);
        stats.put("studyMinutes", monthlyStudyMinutes);
        stats.put("lastActivityTime", lastActivity != null ? lastActivity : LocalDateTime.MIN);
        return stats;
    }

    // WINNER DECLARATION
    public boolean publishWinners(int month, int year, int minXp) {
        if (winnerRepository.existsByMonthAndYear(month, year)) {
            return false; // Already published
        }

        List<Map<String, Object>> leaderboard = getLeaderboardForMonth(month, year).stream()
                .filter(u -> ((int) u.get("effectiveXp")) >= minXp)
                .filter(u -> Boolean.TRUE.equals(u.get("isPaidUser")))
                .collect(Collectors.toList());
        int limit = Math.min(3, leaderboard.size());
        
        for (int i = 0; i < limit; i++) {
            Map<String, Object> data = leaderboard.get(i);
            LearnLeaderboardWinner w = new LearnLeaderboardWinner();
            w.setUserId((UUID) data.get("id"));
            w.setMonth(month);
            w.setYear(year);
            w.setRank(i + 1);
            w.setTotalXp((int) data.get("effectiveXp"));
            w.setStudyMinutes((int) data.get("studyMinutes"));
            winnerRepository.save(w);
        }
        return true;
    }

    public List<Map<String, Object>> getPastWinners(int month, int year) {
        return winnerRepository.findByMonthAndYearOrderByRankAsc(month, year).stream().map(w -> {
            Map<String, Object> m = new HashMap<>();
            m.put("rank", w.getRank());
            m.put("totalXp", w.getTotalXp());
            m.put("studyMinutes", w.getStudyMinutes());
            userRepository.findById(w.getUserId()).ifPresent(u -> m.put("name", u.getFullName()));
            return m;
        }).collect(Collectors.toList());
    }

    // ADMIN BAN CONTROLS
    public void banUser(UUID userId) {
        userRepository.findById(userId).ifPresent(u -> {
            u.setLeaderboardBanned(true);
            userRepository.save(u);
        });
    }

    public void unbanUser(UUID userId) {
        userRepository.findById(userId).ifPresent(u -> {
            u.setLeaderboardBanned(false);
            userRepository.save(u);
        });
    }
}