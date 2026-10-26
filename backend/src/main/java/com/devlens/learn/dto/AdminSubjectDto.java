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
public class AdminSubjectDto {
    private UUID id;
    private UUID examTypeId;
    private String name;
    private String code;
    private Integer orderIndex;
    private Boolean isActive;
}
