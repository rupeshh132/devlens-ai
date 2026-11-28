package com.devlens.learn.service;

import com.devlens.learn.dto.CreateLockerItemRequest;
import com.devlens.learn.dto.LockerItemResponse;
import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.entity.LearnUserLockerItem;
import com.devlens.learn.repository.LearnUserLockerItemRepository;
import com.devlens.learn.repository.LearnUserRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnLockerService {

    private static final int FREE_DAILY_DRILL_LIMIT = 1;

    private final LearnUserLockerItemRepository repository;
    private final LearnUserRepository userRepository;
    private final ObjectMapper objectMapper;

    @Transactional(readOnly = true)
    public List<LockerItemResponse> getUserLockerItems(UUID userId) {
        return repository.findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public LockerItemResponse saveItem(UUID userId, CreateLockerItemRequest req) {
        Optional<LearnUserLockerItem> existingOpt = repository.findByUserIdAndTitleIgnoreCase(userId, req.getTitle().trim());
        LearnUserLockerItem item = existingOpt.orElseGet(() -> {
            LearnUserLockerItem n = new LearnUserLockerItem();
            n.setUserId(userId);
            n.setTitle(req.getTitle().trim());
            n.setReviewStage(0);
            n.setConsecutiveCorrect(0);
            n.setNextReviewAt(LocalDateTime.now());
            return n;
        });

        item.setItemType(req.getType() != null ? req.getType().toUpperCase() : "NOTE");
        item.setSubtitle(req.getSubtitle());
        item.setContent(req.getContent());

        if (req.getPersonalNote() != null) {
            item.setPersonalNote(req.getPersonalNote());
        }

        try {
            if (req.getTags() != null) {
                item.setTagsJson(objectMapper.writeValueAsString(req.getTags()));
            }
            if (req.getMeta() != null) {
                item.setMetaJson(objectMapper.writeValueAsString(req.getMeta()));
            }
        } catch (Exception e) {
            log.warn("Error serializing JSON for locker item: {}", e.getMessage());
        }

        LearnUserLockerItem saved = repository.save(item);
        return mapToResponse(saved);
    }

    @Transactional
    public LockerItemResponse updateNote(UUID userId, UUID itemId, String personalNote) {
        LearnUserLockerItem item = repository.findByIdAndUserId(itemId, userId)
                .orElseThrow(() -> new IllegalArgumentException("Locker item not found"));
        item.setPersonalNote(personalNote);
        LearnUserLockerItem saved = repository.save(item);
        return mapToResponse(saved);
    }

    @Transactional
    public void deleteItem(UUID userId, UUID itemId) {
        repository.deleteByIdAndUserId(itemId, userId);
    }

    @Transactional
    public List<LockerItemResponse> syncItems(UUID userId, List<CreateLockerItemRequest> requests) {
        if (requests == null || requests.isEmpty()) {
            return getUserLockerItems(userId);
        }
        for (CreateLockerItemRequest req : requests) {
            saveItem(userId, req);
        }
        return getUserLockerItems(userId);
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getDueReviewSummary(UUID userId) {
        LocalDateTime now = LocalDateTime.now();
        List<LockerItemResponse> allItems = getUserLockerItems(userId);

        List<LockerItemResponse> dueItems = allItems.stream()
                .filter(i -> i.getReviewStage() == null || i.getReviewStage() < 4)
                .filter(i -> i.getNextReviewAt() == null || !i.getNextReviewAt().isAfter(now))
                .sorted((a, b) -> Boolean.compare(isMistakeItem(b), isMistakeItem(a)))
                .collect(Collectors.toList());

        long healedCount = allItems.stream()
                .filter(i -> i.getReviewStage() != null && i.getReviewStage() >= 4)
                .count();

        LearnUser user = userRepository.findById(userId).orElse(null);
        boolean isPro = user != null && user.isPaidUser();
        LocalDate today = LocalDate.now();
        int usedToday = (user != null && today.equals(user.getLastDrillDate()) && user.getDailyFreeDrillsUsed() != null)
                ? user.getDailyFreeDrillsUsed() : 0;
        int drillsRemaining = isPro ? 999 : Math.max(0, FREE_DAILY_DRILL_LIMIT - usedToday);

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("dueItems", dueItems);
        res.put("dueCount", dueItems.size());
        res.put("healedCount", healedCount);
        res.put("isPro", isPro);
        res.put("dailyDrillsUsed", usedToday);
        res.put("dailyDrillLimit", isPro ? -1 : FREE_DAILY_DRILL_LIMIT);
        res.put("drillsRemaining", drillsRemaining);
        return res;
    }

    @Transactional
    public Map<String, Object> startRedemptionDrill(UUID userId) {
        LearnUser user = userRepository.findById(userId)
                .orElseThrow(() -> new com.devlens.api.exception.ResourceNotFoundException("User not found"));
        boolean isPro = user.isPaidUser();
        LocalDate today = LocalDate.now();
        int usedToday = (today.equals(user.getLastDrillDate()) && user.getDailyFreeDrillsUsed() != null)
                ? user.getDailyFreeDrillsUsed() : 0;

        if (!isPro && usedToday >= FREE_DAILY_DRILL_LIMIT) {
            throw new IllegalStateException("FREE_DRILL_LIMIT_REACHED");
        }

        if (!isPro) {
            user.setDailyFreeDrillsUsed(usedToday + 1);
            user.setLastDrillDate(today);
            userRepository.save(user);
            usedToday = usedToday + 1;
        }

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("allowed", true);
        res.put("isPro", isPro);
        res.put("dailyDrillsUsed", usedToday);
        res.put("dailyDrillLimit", isPro ? -1 : FREE_DAILY_DRILL_LIMIT);
        res.put("drillsRemaining", isPro ? 999 : Math.max(0, FREE_DAILY_DRILL_LIMIT - usedToday));
        return res;
    }

    @Transactional
    public LockerItemResponse recordReviewOutcome(UUID userId, UUID itemId, boolean remembered) {
        LearnUserLockerItem item = repository.findByIdAndUserId(itemId, userId)
                .orElseThrow(() -> new IllegalArgumentException("Locker item not found"));
        LocalDateTime now = LocalDateTime.now();
        item.setLastReviewedAt(now);

        if (remembered) {
            int stage = item.getReviewStage() != null ? item.getReviewStage() : 0;
            int consec = (item.getConsecutiveCorrect() != null ? item.getConsecutiveCorrect() : 0) + 1;
            item.setConsecutiveCorrect(consec);

            if (consec >= 2 || stage >= 3) {
                item.setReviewStage(4);
                item.setNextReviewAt(now.plusDays(30));
            } else if (stage == 0) {
                item.setReviewStage(1);
                item.setNextReviewAt(now.plusDays(1));
            } else if (stage == 1) {
                item.setReviewStage(2);
                item.setNextReviewAt(now.plusDays(3));
            } else {
                item.setReviewStage(3);
                item.setNextReviewAt(now.plusDays(7));
            }
        } else {
            item.setConsecutiveCorrect(0);
            item.setReviewStage(1);
            item.setNextReviewAt(now.plusDays(1));
        }

        return mapToResponse(repository.save(item));
    }

    private boolean isMistakeItem(LockerItemResponse item) {
        if (item.getMeta() != null && Boolean.TRUE.equals(item.getMeta().get("mistake"))) {
            return true;
        }
        return item.getTags() != null && item.getTags().stream()
                .anyMatch(t -> t != null && t.toLowerCase().contains("mistake"));
    }

    private LockerItemResponse mapToResponse(LearnUserLockerItem entity) {
        List<String> tags = Collections.emptyList();
        Map<String, Object> meta = Collections.emptyMap();

        try {
            if (entity.getTagsJson() != null && !entity.getTagsJson().isBlank()) {
                tags = objectMapper.readValue(entity.getTagsJson(), new TypeReference<List<String>>() {});
            }
            if (entity.getMetaJson() != null && !entity.getMetaJson().isBlank()) {
                meta = objectMapper.readValue(entity.getMetaJson(), new TypeReference<Map<String, Object>>() {});
            }
        } catch (Exception e) {
            log.debug("Error deserializing locker item JSON: {}", e.getMessage());
        }

        return LockerItemResponse.builder()
                .id(entity.getId())
                .type(entity.getItemType())
                .title(entity.getTitle())
                .subtitle(entity.getSubtitle())
                .content(entity.getContent())
                .tags(tags)
                .personalNote(entity.getPersonalNote())
                .meta(meta)
                .savedAt(entity.getCreatedAt())
                .reviewStage(entity.getReviewStage() != null ? entity.getReviewStage() : 0)
                .consecutiveCorrect(entity.getConsecutiveCorrect() != null ? entity.getConsecutiveCorrect() : 0)
                .nextReviewAt(entity.getNextReviewAt())
                .lastReviewedAt(entity.getLastReviewedAt())
                .build();
    }
}
