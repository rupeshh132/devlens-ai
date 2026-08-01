package com.devlens.api.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "app.github")
public class GitHubProperties {
    private String apiUrl = "https://api.github.com";
    private String token; // Optional, can be injected via env variables
}
