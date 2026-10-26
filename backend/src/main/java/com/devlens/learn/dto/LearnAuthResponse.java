package com.devlens.learn.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LearnAuthResponse {
    private String token;
    private String email;
    private String fullName;
    private String subscriptionPlan;
    private String examGoal;
}
