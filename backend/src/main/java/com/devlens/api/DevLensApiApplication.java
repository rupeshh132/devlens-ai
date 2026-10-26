package com.devlens.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.retry.annotation.EnableRetry;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(scanBasePackages = "com.devlens")
@EnableJpaRepositories(basePackages = "com.devlens")
@EntityScan(basePackages = "com.devlens")
@EnableRetry
@EnableScheduling
public class DevLensApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(DevLensApiApplication.class, args);
    }
}
