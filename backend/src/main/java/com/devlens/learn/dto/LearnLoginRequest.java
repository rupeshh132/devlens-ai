package com.devlens.learn.dto;

import lombok.Data;

@Data
public class LearnLoginRequest {
    private String email;
    private String password;
}
