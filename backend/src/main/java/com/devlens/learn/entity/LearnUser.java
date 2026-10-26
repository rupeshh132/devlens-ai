package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_users")
public class LearnUser {

    @Column(name = "daily_free_doubts_used")
    private Integer dailyFreeDoubtsUsed = 0;

    @Column(name = "last_doubt_date")
    private java.time.LocalDate lastDoubtDate;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, name = "password_hash")
    private String passwordHash;

    @Column(name = "full_name")
    private String fullName;

    private String phone;

    @Column(name = "subscription_plan")
    private String subscriptionPlan = "FREE";

    @Column(name = "subscribed_until")
    private LocalDateTime subscribedUntil;

    @Column(name = "exam_goal")
    private String examGoal;

    @Column(name = "target_exam_date")
    private LocalDate targetExamDate;

    @Column(name = "current_study_plan_json", columnDefinition = "TEXT")
    private String currentStudyPlanJson;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "last_login")
    private LocalDateTime lastLogin;

    @Column(name = "active_jwt_id")
    private String activeJwtId;

    @Column(name = "is_active")
    private boolean isActive = true;
    
    @Column(name = "total_xp")
    private Integer totalXp = 0;
    
    @Column(name = "study_minutes")
    private Integer studyMinutes = 0;
    
    @Column(name = "referral_code", unique = true)
    private String referralCode;
    
    @Column(name = "referred_by")
    private UUID referredBy;

    @Column(name = "is_leaderboard_banned")
    private boolean isLeaderboardBanned = false;

    @Column(name = "crm_status")
    private String crmStatus = "NEW_LEAD";

    @Column(name = "crm_notes")
    private String crmNotes;

    @Column(name = "last_contacted_at")
    private LocalDateTime lastContactedAt;

    @Column(name = "paywall_hit_count")
    private Integer paywallHitCount = 0;

    public boolean isPaidUser() {
        return this.subscriptionPlan != null &&
               !this.subscriptionPlan.equalsIgnoreCase("FREE") &&
               (this.subscribedUntil == null || this.subscribedUntil.isAfter(java.time.LocalDateTime.now()));
    }
}
