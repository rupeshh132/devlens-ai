package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "learn_subjects")
public class LearnSubject {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "exam_type_id")
    private UUID examTypeId;

    private String name;

    private String code;

    @Column(name = "order_index")
    private Integer orderIndex = 0;

    @Column(name = "is_active")
    private boolean isActive = true;
}
