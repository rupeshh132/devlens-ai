package com.devlens.api.service;

import com.devlens.api.entity.User;
import com.devlens.api.repository.UserRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class GamificationService {

    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    @Transactional
    public void awardPoints(User user, int pointsToAdd) {
        if (user == null) return;
        
        int currentPoints = user.getPoints() != null ? user.getPoints() : 0;
        int newPoints = currentPoints + pointsToAdd;
        user.setPoints(newPoints);
        
        log.info("Awarded {} points to user {}. New total: {}", pointsToAdd, user.getEmail(), newPoints);
        
        updateBadges(user, newPoints);
        
        userRepository.save(user);
    }

    private void updateBadges(User user, int totalPoints) {
        try {
            List<String> currentBadges = new ArrayList<>();
            if (user.getBadges() != null && !user.getBadges().isEmpty() && !user.getBadges().equals("[]")) {
                currentBadges = objectMapper.readValue(user.getBadges(), new TypeReference<List<String>>() {});
            }

            boolean badgesUpdated = false;

            if (totalPoints >= 50 && !currentBadges.contains("Novice")) {
                currentBadges.add("Novice");
                badgesUpdated = true;
            }
            if (totalPoints >= 100 && !currentBadges.contains("Rising Star")) {
                currentBadges.add("Rising Star");
                badgesUpdated = true;
            }
            if (totalPoints >= 250 && !currentBadges.contains("Pro Developer")) {
                currentBadges.add("Pro Developer");
                badgesUpdated = true;
            }
            if (totalPoints >= 500 && !currentBadges.contains("Elite Hacker")) {
                currentBadges.add("Elite Hacker");
                badgesUpdated = true;
            }

            if (badgesUpdated) {
                user.setBadges(objectMapper.writeValueAsString(currentBadges));
                log.info("User {} earned new badges. Total badges: {}", user.getEmail(), currentBadges.size());
            }
        } catch (Exception e) {
            log.error("Failed to parse or update badges for user {}", user.getId(), e);
        }
    }
}
