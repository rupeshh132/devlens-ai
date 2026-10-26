package com.devlens.api.entity.lms;

import com.devlens.api.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;

@Entity
@Table(name = "user_progress")
@Data
@NoArgsConstructor
public class UserProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "module_id", nullable = false)
    private Module module;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProgressStatus status;

    @Column(name = "project_repo_url", length = 1024)
    private String projectRepoUrl;

    @Column(name = "project_deploy_url", length = 1024)
    private String projectDeployUrl;

    @Column(name = "mock_test_score")
    private Integer mockTestScore;

    @Column(name = "rejection_reason", columnDefinition = "TEXT")
    private String rejectionReason;
}
