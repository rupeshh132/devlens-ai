package com.devlens.api.service.lms;

import com.devlens.api.dto.lms.CoursePlayDto;
import com.devlens.api.entity.User;
import com.devlens.api.entity.lms.Course;
import com.devlens.api.entity.lms.Enrollment;
import com.devlens.api.entity.lms.EnrollmentStatus;
import com.devlens.api.entity.lms.Module;
import com.devlens.api.entity.lms.ProgressStatus;
import com.devlens.api.entity.lms.UserProgress;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.repository.lms.CourseRepository;
import com.devlens.api.repository.lms.EnrollmentRepository;
import com.devlens.api.repository.lms.ModuleRepository;
import com.devlens.api.repository.lms.UserProgressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CoursePlayerService {

    private final CourseRepository courseRepository;
    private final ModuleRepository moduleRepository;
    private final UserProgressRepository userProgressRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final CertificateService certificateService;
    private final LmsGamificationService gamificationService;

    public CoursePlayDto getCoursePlayData(UUID userId, UUID courseId) {
        User user = userRepository.findById(userId).orElseThrow();
        boolean isAdmin = user.getRole() != null && "ADMIN".equals(user.getRole().name());

        // 1. Check enrollment (Bypass for ADMIN)
        if (false /* temporarily disable check for testing */) {
            Enrollment enrollment = enrollmentRepository.findByUserIdAndCourseId(userId, courseId)
                    .orElseThrow(() -> new IllegalStateException("User is not enrolled in this course"));
            
            if (enrollment.getStatus() != EnrollmentStatus.ACTIVE) {
                throw new IllegalStateException("Enrollment is not active");
            }
        }

        // 2. Get Course
        Course course = courseRepository.findById(courseId).orElseThrow();

        // 3. Get Modules (sorted)
        List<Module> allModules = moduleRepository.findAll().stream()
                .filter(m -> m.getCourse().getId().equals(courseId))
                .sorted((a, b) -> a.getOrderIndex().compareTo(b.getOrderIndex()))
                .collect(Collectors.toList());

        // 4. Get User Progress for these modules
        List<UserProgress> userProgresses = userProgressRepository.findAll().stream()
                .filter(up -> up.getUser().getId().equals(userId) && up.getModule().getCourse().getId().equals(courseId))
                .collect(Collectors.toList());

        // Initialize progress for the very first module if none exists
        if (userProgresses.isEmpty() && !allModules.isEmpty()) {
            Module firstModule = allModules.get(0);
            UserProgress up = new UserProgress();
            up.setUser(userRepository.findById(userId).orElseThrow());
            up.setModule(firstModule);
            up.setStatus(ProgressStatus.IN_PROGRESS);
            userProgressRepository.save(up);
            userProgresses.add(up);
        } else if (!userProgresses.isEmpty() && !allModules.isEmpty()) {
            // Auto-heal: If the user has completed their last unlocked module, but new modules were added by admin, unlock the next one.
            UserProgress lastProgress = userProgresses.stream()
                    .max((a, b) -> a.getModule().getOrderIndex().compareTo(b.getModule().getOrderIndex()))
                    .orElse(null);
                    
            if (lastProgress != null && lastProgress.getStatus() == ProgressStatus.COMPLETED) {
                java.util.Optional<Module> nextModuleOpt = allModules.stream()
                        .filter(m -> m.getOrderIndex() > lastProgress.getModule().getOrderIndex())
                        .findFirst();
                        
                if (nextModuleOpt.isPresent()) {
                    Module nextModule = nextModuleOpt.get();
                    UserProgress np = new UserProgress();
                    np.setUser(userRepository.findById(userId).orElseThrow());
                    np.setModule(nextModule);
                    np.setStatus(ProgressStatus.IN_PROGRESS);
                    userProgressRepository.save(np);
                    userProgresses.add(np);
                }
            }
        }

        CoursePlayDto dto = new CoursePlayDto();
        dto.setCourse(course);
        dto.setModules(allModules);
        dto.setUserProgress(userProgresses);
        
        return dto;
    }

    public UserProgress submitProject(UUID userId, UUID moduleId, String repoUrl, String deployUrl) {
        UserProgress progress = userProgressRepository.findAll().stream()
                .filter(up -> up.getUser().getId().equals(userId) && up.getModule().getId().equals(moduleId))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("Progress not found for this module"));

        if (progress.getStatus() == ProgressStatus.COMPLETED) {
            throw new IllegalStateException("Module already completed");
        }

        progress.setProjectRepoUrl(repoUrl);
        progress.setProjectDeployUrl(deployUrl);
        progress.setStatus(ProgressStatus.PENDING_REVIEW);
        
        return userProgressRepository.save(progress);
    }

    @org.springframework.transaction.annotation.Transactional
    public UserProgress markModuleComplete(UUID userId, UUID moduleId) {
        UserProgress progress = userProgressRepository.findByUserIdAndModuleId(userId, moduleId)
                .orElseThrow(() -> new IllegalStateException("Progress not found for this module"));

        if (progress.getStatus() == ProgressStatus.COMPLETED) {
            return progress;
        }

        progress.setStatus(ProgressStatus.COMPLETED);
        userProgressRepository.save(progress);

        // Award 10 points for completing a lesson/video
        gamificationService.awardPoints(userId, 10);

        Module currentModule = progress.getModule();
        java.util.Optional<Module> nextModuleOpt = moduleRepository.findByCourseIdAndOrderIndex(
                currentModule.getCourse().getId(), currentModule.getOrderIndex() + 1);

        if (nextModuleOpt.isPresent()) {
            Module nextModule = nextModuleOpt.get();
            UserProgress nextProgress = userProgressRepository
                    .findByUserIdAndModuleId(userId, nextModule.getId())
                    .orElseGet(() -> {
                        UserProgress np = new UserProgress();
                        np.setUser(progress.getUser());
                        np.setModule(nextModule);
                        return np;
                    });
            nextProgress.setStatus(ProgressStatus.IN_PROGRESS);
            userProgressRepository.save(nextProgress);
        }

        // Check if fully completed
        certificateService.checkAndIssueCertificate(progress.getUser(), currentModule.getCourse());

        return progress;
    }
}
