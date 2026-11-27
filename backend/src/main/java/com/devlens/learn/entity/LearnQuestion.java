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

    @Column(name = "topic_id")
    private UUID topicId; // Storing as UUID for simplicity in bulk insert

    @Column(name = "question_text", nullable = false, columnDefinition = "TEXT")
    private String questionText;

    @org.hibernate.annotations.JdbcTypeCode(org.hibernate.type.SqlTypes.JSON)
    @Column(name = "options_json", columnDefinition = "JSONB")
    private String optionsJson; // Storing options A,B,C,D as JSON string for MCQs

    @Column(name = "correct_answer")
    private String correctAnswer;

    @Column(name = "question_type")
    private String questionType = "MCQ"; // MCQ, SCQ, MSQ, NUMERICAL, INTEGER, PARAGRAPH, MATRIX_MATCH, VSA, SA, LA, CASE, ASSERTION_REASON, MAP

    private String subject;

    private String chapter;

    private Integer marks = 1;

    @Column(name = "negative_marks", precision = 5, scale = 2)
    private java.math.BigDecimal negativeMarks;

    @Column(name = "partial_marking_rule")
    private String partialMarkingRule;

    @Column(name = "tolerance_min", precision = 12, scale = 4)
    private java.math.BigDecimal toleranceMin;

    @Column(name = "tolerance_max", precision = 12, scale = 4)
    private java.math.BigDecimal toleranceMax;

    @Column(name = "syllabus_tag")
    private String syllabusTag;

    @Column(name = "model_answer", columnDefinition = "TEXT")
    private String modelAnswer;

    @Column(name = "marking_scheme_json", columnDefinition = "TEXT")
    private String markingSchemeJson;

    @Column(name = "case_passage", columnDefinition = "TEXT")
    private String casePassage;

    @Column(name = "parent_case_id")
    private UUID parentCaseId;

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
