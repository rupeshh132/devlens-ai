package com.devlens.api.security.oauth2;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "app.oauth2")
public class OAuthProperties {
    private String redirectUri = "http://localhost:5173/oauth/callback";
}
