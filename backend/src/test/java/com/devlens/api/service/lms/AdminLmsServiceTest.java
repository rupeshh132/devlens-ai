package com.devlens.api.service.lms;

import com.devlens.api.entity.User;
import com.devlens.api.entity.lms.Course;
import com.devlens.api.entity.lms.GamificationProfile;
import com.devlens.api.entity.lms.Module;
import com.devlens.api.entity.lms.ProgressStatus;
import com.devlens.api.entity.lms.UserProgress;
import com.devlens.api.repository.lms.CourseRepository;
import com.devlens.api.repository.lms.GamificationProfileRepository;
import com.devlens.api.repository.lms.ModuleRepository;
import com.devlens.api.repository.lms.UserProgressRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AdminLmsServiceTest {

    @Mock
    private UserProgressRepository userProgressRepository;
    @Mock
    private GamificationProfileRepository gamificationProfileRepository;
    @Mock
    private ModuleRepository moduleRepository;
    @Mock
    private CourseRepository courseRepository;
    @Mock
    private CertificateService certificateService;
    @Mock
    private com.devlens.api.service.MailService mailService;

    @InjectMocks
    private AdminLmsService adminLmsService;

    private User user;
    private Course course;
    private Module currentModule;
    private UserProgress progress;
    private UUID submissionId;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(UUID.randomUUID());

        course = new Course();
        course.setId(UUID.randomUUID());

        currentModule = new Module();
        currentModule.setId(UUID.randomUUID());
        currentModule.setCourse(course);
        currentModule.setOrderIndex(1);

        submissionId = UUID.randomUUID();
        progress = new UserProgress();
        progress.setId(submissionId);
        progress.setUser(user);
        progress.setModule(currentModule);
        progress.setStatus(ProgressStatus.PENDING_REVIEW);
    }

    @Test
    void testApproveLastModule_Success() {
        when(userProgressRepository.findById(submissionId)).thenReturn(Optional.of(progress));
        when(gamificationProfileRepository.findByUserId(user.getId())).thenReturn(Optional.empty());
        
        // Return empty for next module (simulating last module)
        when(moduleRepository.findByCourseIdAndOrderIndex(course.getId(), 2)).thenReturn(Optional.empty());

        assertDoesNotThrow(() -> adminLmsService.approveSubmission(submissionId));

        verify(userProgressRepository, times(1)).save(progress);
        assertEquals(ProgressStatus.COMPLETED, progress.getStatus());

        // Verify gamification profile was created and saved
        verify(gamificationProfileRepository, times(1)).save(argThat(profile -> 
            profile.getUser().getId().equals(user.getId()) && profile.getTotalPoints() == 100
        ));

        // Verify next progress was NOT created
        verify(userProgressRepository, times(1)).save(any()); // Only the current progress save should happen
    }

    @Test
    void testApproveDoubleSubmission_ThrowsConflict() {
        progress.setStatus(ProgressStatus.COMPLETED); // Already processed
        when(userProgressRepository.findById(submissionId)).thenReturn(Optional.of(progress));

        ResponseStatusException ex = assertThrows(ResponseStatusException.class, 
            () -> adminLmsService.approveSubmission(submissionId));
        
        assertEquals(409, ex.getStatusCode().value());
        assertTrue(ex.getMessage().contains("Submission already processed"));
    }
}
