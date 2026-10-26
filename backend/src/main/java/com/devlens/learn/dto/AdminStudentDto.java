package com.devlens.learn.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminStudentDto {
    private UUID id;
    private String fullName;
    private String email;
    private String phone;
    private String examGoal;
    private String subscriptionPlan;

    @JsonProperty("isPaidUser")
    private boolean isPaidUser;

    private LocalDateTime subscribedUntil;
    private LocalDateTime createdAt;
    private LocalDateTime lastLogin;
    
    // Engagement stats
    private int totalStudyMinutes;
    private int totalXp;
    private int testsTaken;
    private Double averageScore;
    
    // CRM tracking
    private String crmStatus;
    private String crmNotes;
    private LocalDateTime lastContactedAt;
    private int paywallHitCount;

    // Behavioral & struggle flags
    @JsonProperty("isLowScore")
    private boolean isLowScore;

    @JsonProperty("isHotLead")
    private boolean isHotLead;

    @JsonProperty("isGhost")
    private boolean isGhost;

    @JsonProperty("isAtRisk")
    private boolean isAtRisk;

    @JsonProperty("isNewStudent")
    private boolean isNewStudent;

    // Account state & governance
    @JsonProperty("isActive")
    private boolean isActive;

    @JsonProperty("isLeaderboardBanned")
    private boolean isLeaderboardBanned;

    // Explicit getters to guarantee exact serialization without boolean prefix stripping
    @JsonProperty("isPaidUser")
    public boolean getIsPaidUser() {
        return this.isPaidUser;
    }

    @JsonProperty("paidUser")
    public boolean getPaidUser() {
        return this.isPaidUser;
    }

    @JsonProperty("isLowScore")
    public boolean getIsLowScore() {
        return this.isLowScore;
    }

    @JsonProperty("isHotLead")
    public boolean getIsHotLead() {
        return this.isHotLead;
    }

    @JsonProperty("isGhost")
    public boolean getIsGhost() {
        return this.isGhost;
    }

    @JsonProperty("isAtRisk")
    public boolean getIsAtRisk() {
        return this.isAtRisk;
    }

    @JsonProperty("isNewStudent")
    public boolean getIsNewStudent() {
        return this.isNewStudent;
    }

    @JsonProperty("isActive")
    public boolean getIsActive() {
        return this.isActive;
    }

    @JsonProperty("isLeaderboardBanned")
    public boolean getIsLeaderboardBanned() {
        return this.isLeaderboardBanned;
    }
}
