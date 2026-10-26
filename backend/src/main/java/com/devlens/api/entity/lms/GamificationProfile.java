package com.devlens.api.entity.lms;

import com.devlens.api.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;

@Entity
@Table(name = "gamification_profile")
@Data
@NoArgsConstructor
public class GamificationProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(name = "total_points", nullable = false)
    private Integer totalPoints = 0;

    @Column(name = "focus_fails", nullable = false)
    private Integer focusFails = 0;
}
