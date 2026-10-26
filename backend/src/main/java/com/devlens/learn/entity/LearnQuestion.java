package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_questions")
public class LearnQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "topic_id", nullable = false)
    private UUID topicId; // Storing as UUID for simplicity in bulk insert

    @Column(name = "question_text", nullable = false, columnDefinition = "TEXT")
    private String questionText;

    @org.hibernate.annotations.JdbcTypeCode(org.hibernate.type.SqlTypes.JSON)
    @Column(name = "options_json", nullable = false, columnDefinition = "JSONB")
    private String optionsJson; // Storing options A,B,C,D as JSON string

    @Column(name = "correct_answer", nullable = false)
    private String correctAnswer;

    @Column(columnDefinition = "TEXT")
    private String explanation;

    private String difficulty = "MEDIUM";

    @Column(name = "source_year")
    private String sourceYear;

    @Column(name = "is_verified")
    private boolean isVerified = true; // Imported by admin, so verified by default

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
