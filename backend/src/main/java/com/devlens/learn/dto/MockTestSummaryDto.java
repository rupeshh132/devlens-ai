package com.devlens.learn.dto;

import lombok.Data;
import java.util.UUID;
import java.math.BigDecimal;

@Data
public class MockTestSummaryDto {
    private UUID id;
    private String title;
    private Integer durationMins;
    private Integer totalMarks;
    private boolean isFree;
    private boolean taken;
    private BigDecimal score;
    private String subject;
    private String testType;
    private String classLevel;
    private Integer questionCount;
    private UUID paperPairId;
    private Short paperNumber;
}
