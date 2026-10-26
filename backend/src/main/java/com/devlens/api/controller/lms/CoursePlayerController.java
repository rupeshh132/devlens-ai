package com.devlens.api.controller.lms;

import com.devlens.api.dto.lms.CoursePlayDto;
import com.devlens.api.security.UserPrincipal;
import com.devlens.api.service.lms.CoursePlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/courses")
@RequiredArgsConstructor
public class CoursePlayerController {

    private final CoursePlayerService coursePlayerService;
    private final com.devlens.api.repository.lms.CourseRepository courseRepository;

    @GetMapping
    public ResponseEntity<java.util.List<com.devlens.api.entity.lms.Course>> getAllCourses() {
        return ResponseEntity.ok(courseRepository.findAll());
    }

    @GetMapping("/{courseId}/play")
    public ResponseEntity<CoursePlayDto> getCoursePlayData(
            @PathVariable UUID courseId,
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        CoursePlayDto data = coursePlayerService.getCoursePlayData(userPrincipal.getId(), courseId);
        return ResponseEntity.ok(data);
    }

    @PostMapping("/modules/{moduleId}/submit")
    public ResponseEntity<?> submitProject(
            @PathVariable UUID moduleId,
            @RequestBody com.devlens.api.dto.lms.ProjectSubmissionDto dto,
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        return ResponseEntity.ok(coursePlayerService.submitProject(
                userPrincipal.getId(), 
                moduleId, 
                dto.getProjectRepoUrl(), 
                dto.getProjectDeployUrl()
        ));
    }

    @PostMapping("/modules/{moduleId}/complete")
    public ResponseEntity<?> markModuleComplete(
            @PathVariable UUID moduleId,
            @AuthenticationPrincipal UserPrincipal userPrincipal) {
        return ResponseEntity.ok(coursePlayerService.markModuleComplete(userPrincipal.getId(), moduleId));
    }
}
