package com.devlens.learn.service;

import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.learn.dto.*;
import com.devlens.learn.entity.LearnStudySession;
import com.devlens.learn.entity.LearnTestAttempt;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.entity.LearnXpLog;
import com.devlens.learn.repository.LearnStudySessionRepository;
import com.devlens.learn.repository.LearnTestAttemptRepository;
import com.devlens.learn.repository.LearnUserRepository;
import com.devlens.learn.repository.LearnXpLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class AdminStudentService {

    private final LearnUserRepository userRepository;
    private final LearnStudySessionRepository studySessionRepository;
    private final LearnTestAttemptRepository testAttemptRepository;
    private final LearnXpLogRepository xpLogRepository;
    private final PasswordEncoder passwordEncoder;
    private final JdbcTemplate jdbcTemplate;

    public List<AdminStudentDto> getStudents(String plan, String crmStatus, String examGoal, String search, int page, int size) {
        return getStudents(plan, crmStatus, examGoal, "ALL", search, page, size);
    }

    public List<AdminStudentDto> getStudents(String plan, String crmStatus, String examGoal, String status, String search, int page, int size) {
        StringBuilder sql = new StringBuilder("""
            SELECT 
                u.id, u.full_name, u.email, u.phone, u.exam_goal, 
                u.subscription_plan, u.subscribed_until, u.created_at, u.last_login,
                COALESCE(u.study_minutes, 0) AS total_study_minutes,
                COALESCE(u.total_xp, 0) AS total_xp,
                COALESCE(u.crm_status, 'NEW_LEAD') AS crm_status,
                u.crm_notes,
                u.last_contacted_at,
                COALESCE(u.paywall_hit_count, 0) AS paywall_hit_count,
                COALESCE(u.is_active, true) AS is_active,
                COALESCE(u.is_leaderboard_banned, false) AS is_leaderboard_banned,
                COUNT(DISTINCT ta.id) AS tests_taken,
                AVG(CASE WHEN ta.status = 'COMPLETED' THEN ta.score END) AS avg_score
            FROM learn_users u
            LEFT JOIN learn_test_attempts ta ON ta.user_id = u.id
            WHERE 1=1
        """);

        List<Object> params = new ArrayList<>();

        if (status != null && !status.equalsIgnoreCase("ALL")) {
            if ("ACTIVE".equalsIgnoreCase(status)) {
                sql.append(" AND COALESCE(u.is_active, true) = true");
            } else if ("SUSPENDED".equalsIgnoreCase(status)) {
                sql.append(" AND COALESCE(u.is_active, true) = false");
            }
        }

        if (plan != null && !plan.equalsIgnoreCase("ALL")) {
            if ("PAID".equalsIgnoreCase(plan)) {
                sql.append(" AND u.subscription_plan != 'FREE' AND (u.subscribed_until IS NULL OR u.subscribed_until > NOW())");
            } else if ("FREE".equalsIgnoreCase(plan)) {
                sql.append(" AND (u.subscription_plan = 'FREE' OR u.subscription_plan IS NULL OR (u.subscribed_until IS NOT NULL AND u.subscribed_until <= NOW()))");
            }
        }

        if (crmStatus != null && !crmStatus.equalsIgnoreCase("ALL")) {
            sql.append(" AND COALESCE(u.crm_status, 'NEW_LEAD') = ?");
            params.add(crmStatus.toUpperCase());
        }

        if (examGoal != null && !examGoal.equalsIgnoreCase("ALL")) {
            sql.append(" AND u.exam_goal = ?");
            params.add(examGoal);
        }

        if (search != null && !search.trim().isEmpty()) {
            String pattern = "%" + search.trim().toLowerCase() + "%";
            sql.append(" AND (LOWER(u.email) LIKE ? OR LOWER(COALESCE(u.full_name, '')) LIKE ? OR u.phone LIKE ?)");
            params.add(pattern);
            params.add(pattern);
            params.add(pattern);
        }

        sql.append("""
            GROUP BY u.id, u.full_name, u.email, u.phone, u.exam_goal, 
                     u.subscription_plan, u.subscribed_until, u.created_at, u.last_login,
                     u.study_minutes, u.total_xp, u.crm_status, u.crm_notes, u.last_contacted_at, u.paywall_hit_count,
                     u.is_active, u.is_leaderboard_banned
            ORDER BY u.created_at DESC
            LIMIT ? OFFSET ?
        """);

        params.add(Math.min(500, Math.max(1, size)));
        params.add(Math.max(0, page) * size);

        return jdbcTemplate.query(sql.toString(), (rs, rowNum) -> mapRowToDto(rs), params.toArray());
    }

    public AdminStudentStatsDto getStats() {
        String sql = """
            SELECT 
                COUNT(*) AS total_students,
                COUNT(CASE WHEN subscription_plan != 'FREE' AND (subscribed_until IS NULL OR subscribed_until > NOW()) THEN 1 END) AS paid_students,
                COUNT(CASE WHEN subscription_plan = 'FREE' OR subscription_plan IS NULL OR (subscribed_until IS NOT NULL AND subscribed_until <= NOW()) THEN 1 END) AS free_students,
                COUNT(CASE WHEN (subscription_plan = 'FREE' OR subscription_plan IS NULL) AND COALESCE(paywall_hit_count, 0) >= 2 THEN 1 END) AS hot_leads,
                COUNT(CASE WHEN COALESCE(last_login, created_at) < NOW() - INTERVAL '7 days' THEN 1 END) AS at_risk_students
            FROM learn_users
            WHERE is_active = true
        """;

        return jdbcTemplate.queryForObject(sql, (rs, rowNum) -> AdminStudentStatsDto.builder()
                .totalStudents(rs.getLong("total_students"))
                .paidStudents(rs.getLong("paid_students"))
                .freeStudents(rs.getLong("free_students"))
                .hotLeads(rs.getLong("hot_leads"))
                .atRiskStudents(rs.getLong("at_risk_students"))
                .strugglingStudents(0) // Can be refined from test scores
                .build());
    }

    @Transactional
    public void updateCrm(UUID studentId, AdminCrmUpdateDto dto) {
        LearnUser user = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        user.setCrmStatus(dto.getCrmStatus().toUpperCase());
        if (dto.getCrmNotes() != null) {
            user.setCrmNotes(dto.getCrmNotes());
        }
        user.setLastContactedAt(LocalDateTime.now());
        userRepository.save(user);
    }

    public Map<String, Object> getStudentActivity(UUID studentId) {
        LearnUser user = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        List<LearnStudySession> sessions = studySessionRepository.findByUserIdOrderByCreatedAtDesc(studentId);
        List<LearnTestAttempt> attempts = testAttemptRepository.findByUserIdOrderByStartedAtDesc(studentId);
        List<LearnXpLog> xpLogs = xpLogRepository.findByUserIdOrderByCreatedAtDesc(studentId);

        // Categorize XP Sources for full audit transparency
        int studyXp = 0;
        int dailyPyqXp = 0;
        int referralXp = 0;
        int mockTestXp = 0;
        int penaltiesXp = 0;
        int adminOverrideXp = 0;

        for (LearnXpLog log : xpLogs) {
            int pts = log.getPointsAwarded() != null ? log.getPointsAwarded() : 0;
            if (pts < 0) {
                penaltiesXp += pts; // negative (e.g. focus break penalty)
            } else if (log.getActivityType() == LearnXpLog.ActivityType.STUDY_TIME) {
                studyXp += pts;
            } else if (log.getActivityType() == LearnXpLog.ActivityType.DAILY_PYQ) {
                dailyPyqXp += pts;
            } else if (log.getActivityType() == LearnXpLog.ActivityType.REFERRAL) {
                referralXp += pts;
            } else if (log.getActivityType() == LearnXpLog.ActivityType.MOCK_TEST) {
                mockTestXp += pts;
            } else if (log.getActivityType() == LearnXpLog.ActivityType.ADMIN_OVERRIDE) {
                adminOverrideXp += pts;
            }
        }

        Map<String, Object> xpBreakdown = new LinkedHashMap<>();
        xpBreakdown.put("studyXp", studyXp);
        xpBreakdown.put("dailyPyqXp", dailyPyqXp);
        xpBreakdown.put("referralXp", referralXp);
        xpBreakdown.put("mockTestXp", mockTestXp);
        xpBreakdown.put("penaltiesXp", penaltiesXp);
        xpBreakdown.put("adminOverrideXp", adminOverrideXp);
        xpBreakdown.put("netCalculatedXp", studyXp + dailyPyqXp + referralXp + mockTestXp + penaltiesXp + adminOverrideXp);

        List<Map<String, Object>> recentXpLogDtos = xpLogs.stream().limit(25).map(l -> {
            Map<String, Object> m = new HashMap<>();
            m.put("id", l.getId());
            m.put("activityType", l.getActivityType() != null ? l.getActivityType().name() : "OTHER");
            m.put("points", l.getPointsAwarded());
            m.put("createdAt", l.getCreatedAt());
            return m;
        }).toList();

        Map<String, Object> result = new HashMap<>();
        result.put("studentId", user.getId());
        result.put("fullName", user.getFullName());
        result.put("email", user.getEmail());
        result.put("phone", user.getPhone());
        result.put("examGoal", user.getExamGoal());
        result.put("plan", user.getSubscriptionPlan());
        result.put("studyMinutes", user.getStudyMinutes());
        result.put("totalXp", user.getTotalXp());
        result.put("crmStatus", user.getCrmStatus());
        result.put("crmNotes", user.getCrmNotes());
        result.put("paywallHitCount", user.getPaywallHitCount());
        result.put("xpBreakdown", xpBreakdown);
        result.put("recentXpLogs", recentXpLogDtos);
        result.put("recentSessions", sessions.stream().limit(10).toList());
        result.put("recentTestAttempts", attempts.stream().limit(10).toList());

        String feedbackSql = """
            SELECT 
                r.id,
                r.content_id,
                COALESCE(i.title, 'Lesson Material') AS content_title,
                COALESCE(i.type, 'VIDEO') AS content_type,
                t.title AS topic_title,
                s.name AS subject_name,
                r.is_helpful,
                r.feedback_text,
                r.created_at
            FROM learn_content_ratings r
            JOIN learn_content_items i ON i.id = r.content_id
            JOIN learn_topics t ON t.id = i.topic_id
            JOIN learn_chapters c ON c.id = t.chapter_id
            JOIN learn_subjects s ON s.id = c.subject_id
            WHERE r.user_id = ?
            ORDER BY r.created_at DESC
            LIMIT 25
        """;
        List<Map<String, Object>> studentFeedbacks = jdbcTemplate.queryForList(feedbackSql, studentId);
        result.put("recentFeedbacks", studentFeedbacks);

        return result;
    }

    @Transactional
    public void recordPaywallHit(UUID studentId) {
        userRepository.findById(studentId).ifPresent(user -> {
            user.setPaywallHitCount((user.getPaywallHitCount() != null ? user.getPaywallHitCount() : 0) + 1);
            userRepository.save(user);
        });
    }

    private AdminStudentDto mapRowToDto(ResultSet rs) throws SQLException {
        Timestamp subUntil = rs.getTimestamp("subscribed_until");
        Timestamp createdAtTs = rs.getTimestamp("created_at");
        Timestamp lastLoginTs = rs.getTimestamp("last_login");
        Timestamp lastContactedTs = rs.getTimestamp("last_contacted_at");

        LocalDateTime createdAt = createdAtTs != null ? createdAtTs.toLocalDateTime() : null;
        LocalDateTime lastLogin = lastLoginTs != null ? lastLoginTs.toLocalDateTime() : null;
        LocalDateTime subscribedUntil = subUntil != null ? subUntil.toLocalDateTime() : null;
        LocalDateTime lastContactedAt = lastContactedTs != null ? lastContactedTs.toLocalDateTime() : null;

        String plan = rs.getString("subscription_plan");
        boolean isPaid = plan != null && !plan.equalsIgnoreCase("FREE") && (subscribedUntil == null || subscribedUntil.isAfter(LocalDateTime.now()));

        int studyMins = rs.getInt("total_study_minutes");
        int paywallHits = rs.getInt("paywall_hit_count");
        int testsTaken = rs.getInt("tests_taken");

        Double avgScore = null;
        double avgVal = rs.getDouble("avg_score");
        if (!rs.wasNull()) {
            avgScore = Math.round(avgVal * 10.0) / 10.0;
        }

        // Behavioral & struggle flags
        LocalDateTime effectiveLastLogin = lastLogin != null ? lastLogin : createdAt;
        boolean isNewStudent = createdAt != null && createdAt.isAfter(LocalDateTime.now().minusHours(24));
        boolean isLowScore = testsTaken > 0 && avgScore != null && avgScore < 40.0;
        boolean isHotLead = !isPaid && paywallHits >= 2;
        boolean isGhost = !isNewStudent && studyMins == 0 && testsTaken == 0;
        boolean isAtRisk = effectiveLastLogin != null && effectiveLastLogin.isBefore(LocalDateTime.now().minusDays(7));

        return AdminStudentDto.builder()
                .id(UUID.fromString(rs.getString("id")))
                .fullName(rs.getString("full_name") != null ? rs.getString("full_name") : "Anonymous")
                .email(rs.getString("email"))
                .phone(rs.getString("phone"))
                .examGoal(rs.getString("exam_goal") != null ? rs.getString("exam_goal") : "General")
                .subscriptionPlan(plan != null ? plan : "FREE")
                .isPaidUser(isPaid)
                .subscribedUntil(subscribedUntil)
                .createdAt(createdAt)
                .lastLogin(lastLogin)
                .totalStudyMinutes(studyMins)
                .totalXp(Math.max(0, rs.getInt("total_xp")))
                .testsTaken(testsTaken)
                .averageScore(avgScore)
                .crmStatus(rs.getString("crm_status"))
                .crmNotes(rs.getString("crm_notes"))
                .lastContactedAt(lastContactedAt)
                .paywallHitCount(paywallHits)
                .isLowScore(isLowScore)
                .isHotLead(isHotLead)
                .isGhost(isGhost)
                .isAtRisk(isAtRisk)
                .isNewStudent(isNewStudent)
                .isActive(rs.getBoolean("is_active"))
                .isLeaderboardBanned(rs.getBoolean("is_leaderboard_banned"))
                .build();
    }

    @Transactional
    public void updateSubscription(UUID studentId, AdminSubscriptionUpdateDto dto) {
        LearnUser user = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        String newPlan = dto.getPlan() != null ? dto.getPlan().trim().toUpperCase() : "FREE";
        user.setSubscriptionPlan(newPlan);

        LocalDateTime expiry = null;
        if (!"FREE".equals(newPlan)) {
            if (dto.getExpiryDate() != null && !dto.getExpiryDate().isBlank()) {
                try {
                    if (dto.getExpiryDate().contains("T")) {
                        expiry = LocalDateTime.parse(dto.getExpiryDate());
                    } else {
                        expiry = java.time.LocalDate.parse(dto.getExpiryDate()).atTime(23, 59, 59);
                    }
                } catch (Exception ex) {
                    expiry = LocalDateTime.now().plusDays(dto.getDurationDays() != null ? dto.getDurationDays() : 30);
                }
            } else if (dto.getDurationDays() != null && dto.getDurationDays() > 0) {
                expiry = LocalDateTime.now().plusDays(dto.getDurationDays());
            } else {
                expiry = LocalDateTime.now().plusDays(30); // Default 30 days
            }
        }
        user.setSubscribedUntil(expiry);

        String note = String.format("[Admin Sub %s]: Set to %s until %s. Reason: %s",
                java.time.LocalDate.now(),
                newPlan,
                expiry != null ? expiry.toLocalDate() : "Lifetime/Free",
                dto.getReason() != null && !dto.getReason().isBlank() ? dto.getReason() : "Direct Admin Override");

        user.setCrmNotes(note + (user.getCrmNotes() != null ? "\n" + user.getCrmNotes() : ""));
        if (!"FREE".equals(newPlan)) {
            user.setCrmStatus("CONVERTED_PRO");
        }
        userRepository.save(user);
    }

    @Transactional
    public void updateStatus(UUID studentId, AdminStatusUpdateDto dto) {
        LearnUser user = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        user.setActive(dto.isActive());
        if (!dto.isActive()) {
            user.setActiveJwtId(null); // Invalidate active session immediately
        }

        String action = dto.isActive() ? "REACTIVATED" : "SUSPENDED";
        String note = String.format("[Admin Account %s on %s]: %s",
                action,
                java.time.LocalDate.now(),
                dto.getBanReason() != null && !dto.getBanReason().isBlank() ? dto.getBanReason() : "No reason specified");

        user.setCrmNotes(note + (user.getCrmNotes() != null ? "\n" + user.getCrmNotes() : ""));
        userRepository.save(user);
    }

    @Transactional
    public void updateProfile(UUID studentId, AdminProfileUpdateDto dto) {
        LearnUser user = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        if (dto.getFullName() != null && !dto.getFullName().isBlank()) {
            user.setFullName(dto.getFullName().trim());
        }
        if (dto.getPhone() != null) {
            user.setPhone(dto.getPhone().trim());
        }
        if (dto.getExamGoal() != null && !dto.getExamGoal().isBlank()) {
            user.setExamGoal(dto.getExamGoal().trim());
        }

        userRepository.save(user);
    }

    @Transactional
    public Map<String, String> resetPassword(UUID studentId, AdminPasswordResetDto dto) {
        LearnUser user = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        String rawPassword;
        if (dto.isGenerateRandom() || dto.getNewPassword() == null || dto.getNewPassword().isBlank()) {
            String randomDigits = String.format("%04d", new java.util.Random().nextInt(10000));
            rawPassword = "PrepLens@" + randomDigits;
        } else {
            rawPassword = dto.getNewPassword().trim();
        }

        user.setPasswordHash(passwordEncoder.encode(rawPassword));
        user.setActiveJwtId(null); // Force re-login with new password

        String note = String.format("[Admin Password Reset on %s]", java.time.LocalDate.now());
        user.setCrmNotes(note + (user.getCrmNotes() != null ? "\n" + user.getCrmNotes() : ""));
        userRepository.save(user);

        return Map.of(
                "message", "Password successfully reset",
                "temporaryPassword", rawPassword
        );
    }

    @Transactional
    public Map<String, Object> adjustXp(UUID studentId, AdminXpAdjustDto dto) {
        LearnUser user = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        int currentXp = user.getTotalXp() != null ? user.getTotalXp() : 0;
        int newXp = Math.max(0, currentXp + dto.getXpDelta());
        user.setTotalXp(newXp);

        LearnXpLog log = new LearnXpLog();
        log.setUserId(studentId);
        log.setActivityType(LearnXpLog.ActivityType.ADMIN_OVERRIDE);
        log.setPointsAwarded(dto.getXpDelta());
        xpLogRepository.save(log);

        String note = String.format("[Admin XP Adjust %s]: %s%d XP. Reason: %s",
                java.time.LocalDate.now(),
                dto.getXpDelta() > 0 ? "+" : "",
                dto.getXpDelta(),
                dto.getReason() != null && !dto.getReason().isBlank() ? dto.getReason() : "Admin adjustment");

        user.setCrmNotes(note + (user.getCrmNotes() != null ? "\n" + user.getCrmNotes() : ""));
        userRepository.save(user);

        return Map.of(
                "message", "XP successfully adjusted",
                "previousXp", currentXp,
                "newXp", newXp,
                "delta", dto.getXpDelta()
        );
    }
}
