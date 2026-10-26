package com.devlens.learn.controller;

import com.devlens.learn.dto.CreateLockerItemRequest;
import com.devlens.learn.dto.LockerItemResponse;
import com.devlens.learn.dto.UpdateLockerNoteRequest;
import com.devlens.learn.service.LearnLockerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/v1/learn/locker")
@RequiredArgsConstructor
public class LearnLockerController {

    private final LearnLockerService lockerService;

    @GetMapping
    public ResponseEntity<?> getLockerItems(Authentication authentication) {
        UUID userId = resolveUserId(authentication);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Unauthorized"));
        }
        List<LockerItemResponse> items = lockerService.getUserLockerItems(userId);
        return ResponseEntity.ok(items);
    }

    @PostMapping
    public ResponseEntity<?> saveLockerItem(
            Authentication authentication,
            @Valid @RequestBody CreateLockerItemRequest request) {
        UUID userId = resolveUserId(authentication);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Unauthorized"));
        }
        LockerItemResponse saved = lockerService.saveItem(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PostMapping("/sync")
    public ResponseEntity<?> syncLockerItems(
            Authentication authentication,
            @RequestBody List<CreateLockerItemRequest> requests) {
        UUID userId = resolveUserId(authentication);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Unauthorized"));
        }
        List<LockerItemResponse> items = lockerService.syncItems(userId, requests);
        return ResponseEntity.ok(items);
    }

    @PutMapping("/{id}/note")
    public ResponseEntity<?> updatePersonalNote(
            Authentication authentication,
            @PathVariable UUID id,
            @RequestBody UpdateLockerNoteRequest request) {
        UUID userId = resolveUserId(authentication);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Unauthorized"));
        }
        LockerItemResponse updated = lockerService.updateNote(userId, id, request.getPersonalNote());
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLockerItem(
            Authentication authentication,
            @PathVariable UUID id) {
        UUID userId = resolveUserId(authentication);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Unauthorized"));
        }
        lockerService.deleteItem(userId, id);
        return ResponseEntity.noContent().build();
    }

    private UUID resolveUserId(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }
        Object principal = authentication.getPrincipal();
        if (principal instanceof com.devlens.learn.security.LearnUserPrincipal l) {
            return l.getId();
        }
        if (principal instanceof com.devlens.api.security.UserPrincipal u) {
            return u.getId();
        }
        try {
            return UUID.fromString(authentication.getName());
        } catch (Exception ignored) {
        }
        return null;
    }
}
