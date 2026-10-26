package com.devlens.learn.service;

import com.devlens.learn.dto.CreateLockerItemRequest;
import com.devlens.learn.dto.LockerItemResponse;
import com.devlens.learn.entity.LearnUserLockerItem;
import com.devlens.learn.repository.LearnUserLockerItemRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class LearnLockerService {

    private final LearnUserLockerItemRepository repository;
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
                .build();
    }
}
