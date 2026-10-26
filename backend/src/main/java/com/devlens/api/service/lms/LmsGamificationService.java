package com.devlens.api.service.lms;

import com.devlens.api.entity.lms.GamificationProfile;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.repository.lms.GamificationProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LmsGamificationService {

    private final GamificationProfileRepository gamificationProfileRepository;
    private final UserRepository userRepository;

    @Transactional
    public GamificationProfile applyFocusBreakPenalty(UUID userId) {
        GamificationProfile profile = gamificationProfileRepository.findByUserId(userId)
                .orElseGet(() -> {
                    GamificationProfile newProfile = new GamificationProfile();
                    newProfile.setUser(userRepository.findById(userId).orElseThrow());
                    newProfile.setTotalPoints(0);
                    newProfile.setFocusFails(0);
                    return newProfile;
                });

        profile.setTotalPoints(profile.getTotalPoints() - 20);
        profile.setFocusFails(profile.getFocusFails() + 1);
        
        return gamificationProfileRepository.save(profile);
    }

    public GamificationProfile getProfile(UUID userId) {
        return gamificationProfileRepository.findByUserId(userId)
                .orElseGet(() -> {
                    GamificationProfile newProfile = new GamificationProfile();
                    newProfile.setUser(userRepository.findById(userId).orElseThrow());
                    newProfile.setTotalPoints(0);
                    newProfile.setFocusFails(0);
                    return gamificationProfileRepository.save(newProfile);
                });
    }

    @Transactional
    public GamificationProfile awardPoints(UUID userId, int points) {
        GamificationProfile profile = getProfile(userId);
        profile.setTotalPoints(profile.getTotalPoints() + points);
        return gamificationProfileRepository.save(profile);
    }

    public List<GamificationProfile> getLeaderboard() {
        return gamificationProfileRepository.findTop50ByOrderByTotalPointsDesc();
    }
}
