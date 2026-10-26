package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.SqlTypes;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_pyq_papers")
public class LearnPyqPaper {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, length = 500)
    private String title;

    @Column(name = "target_class", nullable = false, length = 50)
    private String targetClass;

    @Column(nullable = false, length = 100)
    private String subject;

    @Column(nullable = false)
    private Integer year;

    @Column(name = "paper_type", nullable = false, length = 50)
    private String paperType = "BOARD_EXAM";

    @Column(name = "paper_code", length = 100)
    private String paperCode;

    @Column(name = "total_marks", nullable = false)
    private Integer totalMarks = 80;

    @Column(name = "duration_mins", nullable = false)
    private Integer durationMins = 180;

    @Column(length = 50)
    private String difficulty = "MODERATE";

    @Column(name = "is_free")
    private boolean isFree = true;

    @Column(name = "total_questions")
    private Integer totalQuestions = 0;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "general_instructions", columnDefinition = "jsonb")
    private String generalInstructions = "[]";

    @Column(name = "pdf_url", columnDefinition = "TEXT")
    private String pdfUrl;

    @Column(name = "solution_pdf_url", columnDefinition = "TEXT")
    private String solutionPdfUrl;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
