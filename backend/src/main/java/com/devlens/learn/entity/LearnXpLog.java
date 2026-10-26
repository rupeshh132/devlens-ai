package com.devlens.learn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "learn_xp_logs")
public class LearnXpLog {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_id", nullable = false)
    private UUID userId;

    @Enumerated(EnumType.STRING)
    @Column(name = "activity_type", nullable = false)
    private ActivityType activityType;

    @Column(name = "points_awarded", nullable = false)
    private Integer pointsAwarded;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public enum ActivityType {
        STUDY_TIME,
        ROADMAP_MODULE,
        MOCK_TEST,
        REFERRAL,
        ADMIN_OVERRIDE,
        DAILY_PYQ
    }
}
