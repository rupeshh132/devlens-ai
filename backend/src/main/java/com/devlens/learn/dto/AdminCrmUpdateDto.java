package com.devlens.learn.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AdminCrmUpdateDto {
    @NotBlank(message = "CRM status is required")
    private String crmStatus;
    
    private String crmNotes;
}
