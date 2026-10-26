package com.devlens.api.dto;

import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UpdateProfileRequestDto {
    @Size(min = 2, max = 50, message = "First name must be between 2 and 50 characters")
    private String firstName;
    
    @Size(max = 50, message = "Last name must be less than 50 characters")
    private String lastName;

    @Size(min = 6, message = "Password must be at least 6 characters")
    private String newPassword;
}
