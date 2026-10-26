package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_test_attempts")
public class LearnTestAttempt {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "mock_test_id")
    private UUID mockTestId;

    @CreationTimestamp
    @Column(name = "started_at")
    private LocalDateTime startedAt;

    @Column(name = "submitted_at")
    private LocalDateTime submittedAt;

    private java.math.BigDecimal score;

    @org.hibernate.annotations.JdbcTypeCode(org.hibernate.type.SqlTypes.JSON)
    @Column(name = "answers_json", columnDefinition = "JSONB")
    private String answersJson; // Maps question UUID -> selected option A/B/C/D

    @org.hibernate.annotations.JdbcTypeCode(org.hibernate.type.SqlTypes.JSON)
    @Column(name = "topic_scores_json", columnDefinition = "JSONB")
    private String topicScoresJson; // Used for AI study plan generation

    private String status = "IN_PROGRESS"; // IN_PROGRESS, COMPLETED, EVALUATING

    @Column(name = "correct_answers")
    private Integer correctAnswers = 0;

    @Column(name = "wrong_answers")
    private Integer wrongAnswers = 0;

    @Column(name = "time_taken_seconds")
    private Long timeTakenSeconds = 0L;
}
