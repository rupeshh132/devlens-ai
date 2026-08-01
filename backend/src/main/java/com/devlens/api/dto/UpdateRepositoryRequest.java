package com.devlens.api.dto;

import com.devlens.api.entity.RepositoryVisibility;
import lombok.Data;

@Data
public class UpdateRepositoryRequest {
    private String name;
    private String branch;
    private RepositoryVisibility visibility;
}
