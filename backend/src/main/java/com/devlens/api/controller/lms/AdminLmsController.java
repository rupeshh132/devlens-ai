package com.devlens.api.controller.lms;

import com.devlens.api.dto.lms.CourseAdminResponseDto;
import com.devlens.api.dto.lms.CourseRequestDto;
import com.devlens.api.dto.lms.ModuleRequestDto;
import com.devlens.api.dto.lms.RejectSubmissionRequestDto;
import com.devlens.api.dto.lms.SubmissionAdminResponseDto;
import com.devlens.api.entity.lms.Course;
import com.devlens.api.entity.lms.Module;
import com.devlens.api.entity.lms.UserProgress;
import com.devlens.api.service.lms.AdminLmsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminLmsController {

    private final AdminLmsService adminLmsService;
    private final com.devlens.api.repository.lms.CourseRepository courseRepository;
    private final com.devlens.api.repository.lms.ModuleRepository moduleRepository;

    @GetMapping("/courses")
    public ResponseEntity<List<CourseAdminResponseDto>> getAllCourses() {
        return ResponseEntity.ok(adminLmsService.getAllCoursesWithStats());
    }

    @PatchMapping("/courses/{id}/toggle-publish")
    public ResponseEntity<CourseAdminResponseDto> togglePublishCourse(@PathVariable UUID id) {
        return ResponseEntity.ok(adminLmsService.togglePublishCourse(id));
    }

    @PostMapping("/courses/{id}/clone")
    public ResponseEntity<CourseAdminResponseDto> cloneCourse(@PathVariable UUID id) {
        return ResponseEntity.ok(adminLmsService.cloneCourse(id));
    }


    @PostMapping("/courses")
    public ResponseEntity<Course> createCourse(@RequestBody CourseRequestDto dto) {
        return ResponseEntity.ok(adminLmsService.createCourse(dto));
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable UUID id, @RequestBody CourseRequestDto dto) {
        return ResponseEntity.ok(adminLmsService.updateCourse(id, dto));
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable UUID id) {
        adminLmsService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/courses/seed-official-tracks")
    public ResponseEntity<List<CourseAdminResponseDto>> seedOfficialTracks() {
        return ResponseEntity.ok(adminLmsService.seedOfficialDeveloperTracks());
    }


    @GetMapping("/courses/{courseId}/modules")
    public ResponseEntity<List<Module>> getCourseModules(@PathVariable UUID courseId) {
        return ResponseEntity.ok(moduleRepository.findByCourseIdOrderByOrderIndexAsc(courseId));
    }

    @PostMapping("/modules")
    public ResponseEntity<Module> createModule(@RequestBody ModuleRequestDto dto) {
        return ResponseEntity.ok(adminLmsService.createModule(dto));
    }

    @PutMapping("/modules/{id}")
    public ResponseEntity<Module> updateModule(@PathVariable UUID id, @RequestBody ModuleRequestDto dto) {
        return ResponseEntity.ok(adminLmsService.updateModule(id, dto));
    }

    @DeleteMapping("/modules/{id}")
    public ResponseEntity<Void> deleteModule(@PathVariable UUID id) {
        adminLmsService.deleteModule(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/submissions")
    public ResponseEntity<List<SubmissionAdminResponseDto>> getSubmissions(
            @RequestParam(required = false, defaultValue = "PENDING_REVIEW") String status) {
        return ResponseEntity.ok(adminLmsService.getSubmissions(status));
    }

    @GetMapping("/submissions/stats")
    public ResponseEntity<java.util.Map<String, Object>> getSubmissionStats() {
        return ResponseEntity.ok(adminLmsService.getSubmissionStats());
    }

    @PostMapping("/submissions/seed-sample")
    public ResponseEntity<List<SubmissionAdminResponseDto>> seedSampleSubmission() {
        return ResponseEntity.ok(adminLmsService.seedSampleSubmission());
    }

    @PostMapping("/submissions/{id}/approve")
    public ResponseEntity<Void> approveSubmission(@PathVariable UUID id) {
        adminLmsService.approveSubmission(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/submissions/{id}/reject")
    public ResponseEntity<Void> rejectSubmission(@PathVariable UUID id, @RequestBody RejectSubmissionRequestDto dto) {
        adminLmsService.rejectSubmission(id, dto.getReason());
        return ResponseEntity.ok().build();
    }
}
