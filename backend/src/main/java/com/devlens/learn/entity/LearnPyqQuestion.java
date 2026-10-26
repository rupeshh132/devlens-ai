package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_pyq_questions")
public class LearnPyqQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "paper_id", nullable = false)
    private UUID paperId;

    @Column(name = "q_num", nullable = false)
    private Integer questionNumber;

    @Column(length = 10, nullable = false)
    private String section = "A";

    @Column(nullable = false)
    private Integer marks = 1;

    @Column(length = 255)
    private String topic;

    @Column(name = "question_text", nullable = false, columnDefinition = "TEXT")
    private String questionText;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "options_json", columnDefinition = "jsonb")
    private String optionsJson = "[]";

    @Column(name = "correct_option", length = 20)
    private String correctOption;

    @Column(name = "model_answer", columnDefinition = "TEXT")
    private String modelAnswer;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "step_marking_json", columnDefinition = "jsonb")
    private String stepMarkingJson = "[]";

    @Column(name = "examiner_tip", columnDefinition = "TEXT")
    private String examinerTip;

    @Column(name = "common_pitfall", columnDefinition = "TEXT")
    private String commonPitfall;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
