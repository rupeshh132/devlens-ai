package com.devlens.learn.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TaskUpdateDto {
    @NotBlank(message = "taskId is required")
    private String taskId;

    @NotNull(message = "completed status is required")
    private Boolean completed;
}
