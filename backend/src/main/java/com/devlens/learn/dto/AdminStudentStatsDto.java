package com.devlens.learn.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AdminStudentStatsDto {
    private long totalStudents;
    private long paidStudents;
    private long freeStudents;
    private long hotLeads;
    private long strugglingStudents;
    private long atRiskStudents;
}
