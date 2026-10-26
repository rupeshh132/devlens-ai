package com.devlens.learn.controller;

import com.devlens.learn.entity.LearnPyqPaper;
import com.devlens.learn.service.LearnPyqService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/learn/pyq")
@RequiredArgsConstructor
public class LearnPyqController {

    private final LearnPyqService pyqService;

    @GetMapping
    public ResponseEntity<List<LearnPyqPaper>> getPapers(
            @RequestParam(required = false) String targetClass,
            @RequestParam(required = false) String subject,
            @RequestParam(required = false) Integer year) {
        List<LearnPyqPaper> papers = pyqService.getPapers(targetClass, subject, year);
        return ResponseEntity.ok(papers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPaperWithQuestions(@PathVariable String id) {
        try {
            UUID uuid = UUID.fromString(id);
            Map<String, Object> details = pyqService.getPaperWithQuestions(uuid);
            return ResponseEntity.ok(details);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(org.springframework.http.HttpStatus.NOT_FOUND)
                    .body(Map.of("error", "Paper not found with ID: " + id));
        }
    }
}
