package com.devlens.api.service.lms;

import com.devlens.api.entity.User;
import com.devlens.api.entity.lms.Certificate;
import com.devlens.api.entity.lms.Course;
import com.devlens.api.entity.lms.Module;
import com.devlens.api.entity.lms.ProgressStatus;
import com.devlens.api.entity.lms.UserProgress;
import com.devlens.api.repository.lms.CertificateRepository;
import com.devlens.api.repository.lms.ModuleRepository;
import com.devlens.api.repository.lms.UserProgressRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class CertificateService {

    private final CertificateRepository certificateRepository;
    private final ModuleRepository moduleRepository;
    private final UserProgressRepository userProgressRepository;

    @Transactional
    public void checkAndIssueCertificate(User user, Course course) {
        // Check if a certificate already exists
        if (certificateRepository.findByUserIdAndCourseId(user.getId(), course.getId()).isPresent()) {
            return;
        }

        // Get all modules for this course
        List<Module> allModules = moduleRepository.findByCourseIdOrderByOrderIndexAsc(course.getId());
        if (allModules.isEmpty()) return;

        // Get all user progress for this course
        List<UserProgress> userProgresses = userProgressRepository.findByUserIdAndModuleCourseId(user.getId(), course.getId());

        // Check if every module has a COMPLETED progress
        boolean allCompleted = true;
        for (Module mod : allModules) {
            boolean isCompleted = userProgresses.stream()
                    .anyMatch(p -> p.getModule().getId().equals(mod.getId()) && p.getStatus() == ProgressStatus.COMPLETED);
            if (!isCompleted) {
                allCompleted = false;
                break;
            }
        }

        if (allCompleted) {
            log.info("User {} completed all modules for Course {}. Issuing certificate.", user.getEmail(), course.getTitle());
            Certificate cert = Certificate.builder()
                    .user(user)
                    .course(course)
                    // URL could be generated here, or we can just render the UI dynamically on the frontend.
                    .certificateUrl(null) 
                    .build();
            certificateRepository.save(cert);
        }
    }
}
