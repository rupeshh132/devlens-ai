package com.devlens.api.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "repositories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Repository {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String owner; // GitHub username or org

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private String branch;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RepositoryVisibility visibility;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RepositoryProvider provider;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RepositoryStatus status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // Owner-based access

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @Column(name = "is_favorite", nullable = false)
    private boolean isFavorite = false;

    @Column(length = 100)
    private String language;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column
    private Integer stars = 0;
}
