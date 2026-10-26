package com.devlens.api.dto.admin;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminAdjustPointsDto {
    @NotNull(message = "Points value is required")
    private Integer points;

    @Builder.Default
    private String operation = "ADD"; // "ADD" or "SET"

    private String reason;
}
