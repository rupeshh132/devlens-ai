package com.devlens.api.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class DatabaseHostLogger {

    private static final Logger log = LoggerFactory.getLogger(DatabaseHostLogger.class);

    @Value("${spring.datasource.url}")
    private String dbUrl;

    @EventListener(ApplicationReadyEvent.class)
    public void logDbHost() {
        if (dbUrl != null && dbUrl.startsWith("jdbc:postgresql://")) {
            String hostPart = dbUrl.substring("jdbc:postgresql://".length());
            int slashIndex = hostPart.indexOf('/');
            if (slashIndex != -1) {
                hostPart = hostPart.substring(0, slashIndex);
            }
            log.info("=======================================================");
            log.info("Application started. Connected to Database Host: {}", hostPart);
            log.info("=======================================================");
        }
    }
}
