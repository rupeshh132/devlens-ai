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

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
