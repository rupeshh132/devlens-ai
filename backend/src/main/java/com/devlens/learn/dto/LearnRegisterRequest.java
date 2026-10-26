package com.devlens.learn.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class LearnRegisterRequest {
    private String email;
    private String password;
    private String fullName;
    private String phone;
    private String examGoal;
    private LocalDate targetExamDate;
    private String otp;
    private String referralCode;
}
