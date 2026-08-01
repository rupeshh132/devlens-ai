package com.devlens.api.dto;

import com.devlens.api.entity.RepositoryProvider;
import com.devlens.api.entity.RepositoryVisibility;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.URL;

@Data
public class CreateRepositoryRequest {
    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Owner is required")
    private String owner;

    @NotBlank(message = "URL is required")
    @URL(message = "URL must be valid")
    private String url;

    @NotBlank(message = "Branch is required")
    private String branch;

    @NotNull(message = "Visibility is required")
    private RepositoryVisibility visibility;

    @NotNull(message = "Provider is required")
    private RepositoryProvider provider;
}
