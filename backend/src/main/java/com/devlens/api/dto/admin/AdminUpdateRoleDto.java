package com.devlens.api.dto.admin;

import com.devlens.api.entity.UserRole;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminUpdateRoleDto {
    @NotNull(message = "Role is required")
    private UserRole role;
}
