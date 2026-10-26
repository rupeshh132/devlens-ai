package com.devlens.learn.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
public class LearnProfileResponse {
    private UUID id;
    private String fullName;
    private String email;
    private String phone;
    private String examGoal;
    
    @JsonProperty("isPaidUser")
    private boolean isPaidUser;
    
    private String subscriptionPlan;
    private LocalDateTime subscribedUntil;
    private LocalDateTime joinedDate;
    
    // Explicit dual getters to prevent Jackson boolean prefix stripping issues
    @JsonProperty("isPaidUser")
    public boolean getIsPaidUser() {
        return this.isPaidUser;
    }

    @JsonProperty("paidUser")
    public boolean getPaidUser() {
        return this.isPaidUser;
    }
    
    // Stats
    private long totalTestsTaken;
    private double averageAccuracy; // percentage
    private int studyHours;
    private int studyMinutes;
    private String studyTimeFormatted;
    private String globalRank;
    private int xpPoints;
    
    // Transactions
    private List<TransactionDto> transactions;

    @Data
    public static class TransactionDto {
        private String id;
        private LocalDateTime date;
        private String plan;
        private Integer amount;
        private String status;
    }
}
