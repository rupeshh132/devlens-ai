package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_mock_tests")
public class LearnMockTest {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "exam_type_id")
    private UUID examTypeId;

    private String title;
    
    @Column(name = "duration_mins")
    private Integer durationMins;

    @Column(name = "total_marks")
    private Integer totalMarks;

    @Column(name = "negative_marking")
    private java.math.BigDecimal negativeMarking;

    @Column(name = "is_free")
    private boolean isFree;

    private String subject;

    @Column(name = "test_type")
    private String testType = "FULL";

    @Column(name = "class_level")
    private String classLevel = "Class 9";

    @Column(columnDefinition = "TEXT")
    private String instructions;

    @Column(name = "blueprint_json", columnDefinition = "TEXT")
    private String blueprintJson;

    @Column(name = "paper_pair_id")
    private UUID paperPairId;

    @Column(name = "paper_number")
    private Short paperNumber;

    @Column(name = "syllabus_version")
    private String syllabusVersion;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
