package com.devlens.api.security;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "security.jwt")
public class JwtProperties {
    private String secretKey = "defaultSecretKeyThatIsAtLeast32BytesLongForHS256Algorithm";
    private long expiration = 86400000; // 24 hours in milliseconds
}
