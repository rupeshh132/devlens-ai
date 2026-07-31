package com.devlens.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String accessToken;
    // We typically return the refresh token here so the controller can put it in an HttpOnly cookie
    private String refreshToken; 
}
