package com.devlens.learn.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminExamDto {
    private UUID id;
    private String name;
    private String slug;
    private String fullName;
    private String category;
    private String subCategory;
    private String conductingBody;
    private String requiredPlan;
    private String iconUrl;
    private Boolean isActive;
    private Integer displayOrder;
}
