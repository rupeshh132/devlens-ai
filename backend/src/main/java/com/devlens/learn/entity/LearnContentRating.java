package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_content_ratings")
public class LearnContentRating {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_id", nullable = false)
    private UUID userId;

    @Column(name = "content_id", nullable = false)
    private UUID contentId;

    @Column(name = "is_helpful", nullable = false)
    private boolean isHelpful;

    @Column(name = "feedback_text")
    private String feedbackText;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
