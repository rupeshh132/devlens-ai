package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminProfileUpdateDto {
    private String fullName;
    private String phone;
    private String examGoal;
}
