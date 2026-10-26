package com.devlens.api.dto.admin;

import com.devlens.api.entity.UserStatus;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminUpdateStatusDto {
    @NotNull(message = "Status is required")
    private UserStatus status;
}
