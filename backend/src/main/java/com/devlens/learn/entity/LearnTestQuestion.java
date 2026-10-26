package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "learn_test_questions")
public class LearnTestQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "mock_test_id")
    private UUID mockTestId;

    @Column(name = "question_id")
    private UUID questionId;

    @Column(name = "section_name")
    private String sectionName;

    private Integer marks = 2;

    @Column(name = "order_index")
    private Integer orderIndex = 0;
}
