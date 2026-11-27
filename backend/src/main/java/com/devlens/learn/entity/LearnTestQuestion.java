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

    @Column(name = "internal_choice_group")
    private String internalChoiceGroup;

    @Column(name = "question_sub_num")
    private String questionSubNum;

    @Column(name = "negative_marks", precision = 5, scale = 2)
    private java.math.BigDecimal negativeMarks;

    @Column(name = "subject_label")
    private String subjectLabel;
}
