package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(
    name = "learn_user_topic_progress",
    uniqueConstraints = @UniqueConstraint(name = "uq_learn_user_topic_progress", columnNames = {"user_id", "topic_id"})
)
public class LearnUserTopicProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_id", nullable = false)
    private UUID userId;

    @Column(name = "topic_id", nullable = false, length = 160)
    private String topicId;

    @Column(name = "exam_goal", length = 80)
    private String examGoal;

    @CreationTimestamp
    @Column(name = "completed_at", nullable = false, updatable = false)
    private LocalDateTime completedAt;
}
