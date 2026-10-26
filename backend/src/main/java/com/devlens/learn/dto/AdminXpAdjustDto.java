package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminXpAdjustDto {
    private int xpDelta; // e.g. +100 or -50
    private String reason; // audit reason
}
