package com.devlens.api.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ActivityDto {
    private String id;
    private String title;
    private String date;
    private String type;
}
