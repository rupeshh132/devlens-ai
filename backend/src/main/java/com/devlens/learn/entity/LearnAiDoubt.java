package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "learn_ai_doubts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LearnAiDoubt {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "topic")
    private String topic;

    @Column(name = "question_text", columnDefinition = "TEXT", nullable = false)
    private String questionText;

    @Column(name = "ai_response", columnDefinition = "TEXT")
    private String aiResponse;

    @Column(name = "model")
    private String model;

    @Builder.Default
    @Column(name = "prompt_tokens")
    private Integer promptTokens = 0;

    @Builder.Default
    @Column(name = "completion_tokens")
    private Integer completionTokens = 0;

    @Builder.Default
    @Column(name = "total_tokens")
    private Integer totalTokens = 0;

    @Builder.Default
    @Column(name = "estimated_cost_usd", precision = 10, scale = 6)
    private java.math.BigDecimal estimatedCostUsd = java.math.BigDecimal.ZERO;

    @Builder.Default
    @Column(name = "estimated_cost_inr", precision = 10, scale = 4)
    private java.math.BigDecimal estimatedCostInr = java.math.BigDecimal.ZERO;

    @Builder.Default
    @Column(name = "latency_ms")
    private Long latencyMs = 0L;

    @Builder.Default
    @Column(name = "status")
    private String status = "SUCCESS";

    @Builder.Default
    @Column(name = "is_flagged")
    private Boolean isFlagged = false;

    @Column(name = "flag_reason")
    private String flagReason;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
