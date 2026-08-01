package com.devlens.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.retry.annotation.EnableRetry;

@SpringBootApplication
@EnableRetry
public class DevLensApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(DevLensApiApplication.class, args);
    }
}
