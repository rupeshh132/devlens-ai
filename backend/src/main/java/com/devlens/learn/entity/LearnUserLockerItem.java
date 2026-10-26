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
@Table(name = "learn_user_locker_items")
public class LearnUserLockerItem {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_id", nullable = false)
    private UUID userId;

    @Column(name = "item_type", nullable = false, length = 32)
    private String itemType = "NOTE"; // NOTE, QUESTION, FORMULA

    @Column(nullable = false, length = 512)
    private String title;

    @Column(length = 512)
    private String subtitle;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "tags_json", columnDefinition = "jsonb")
    private String tagsJson = "[]";

    @Column(name = "personal_note", columnDefinition = "TEXT")
    private String personalNote;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "meta_json", columnDefinition = "jsonb")
    private String metaJson = "{}";

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
