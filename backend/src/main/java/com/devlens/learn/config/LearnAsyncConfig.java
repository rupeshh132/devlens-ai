package com.devlens.learn.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class LearnAsyncConfig {

    @Bean(name = "mockTestSubmissionExecutor")
    public Executor mockTestSubmissionExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5); // Handles regular load
        executor.setMaxPoolSize(20); // Scales up during Admit Card surge
        executor.setQueueCapacity(10000); // Holds up to 10k submissions in memory queue
        executor.setThreadNamePrefix("MockTestQueue-");
        executor.initialize();
        return executor;
    }
}
