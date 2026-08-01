package com.devlens.api.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "app.git")
public class GitProperties {
    private String workspaceDir = "workspaces";
    private int retentionDays = 7;
    private String cleanupCron = "0 0 2 * * ?"; // Default: 2 AM daily
}
