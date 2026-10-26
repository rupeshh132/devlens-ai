package com.devlens.api.entity.lms;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;

@Entity
@Table(name = "module")
@Data
@NoArgsConstructor
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @com.fasterxml.jackson.annotation.JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Column(nullable = false)
    private String title;

    @Column(name = "order_index", nullable = false)
    private Integer orderIndex;

    @Column(name = "content_url", length = 1024)
    private String contentUrl;

    @Column(name = "text_content", columnDefinition = "TEXT")
    private String textContent;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ModuleType type;
}
