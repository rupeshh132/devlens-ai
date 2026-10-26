package com.devlens.api.repository.lms;

import com.devlens.api.entity.lms.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface EnrollmentRepository extends JpaRepository<Enrollment, UUID> {
    Optional<Enrollment> findByUserIdAndCourseId(UUID userId, UUID courseId);
    void deleteByCourseId(UUID courseId);

    long countByCourseId(UUID courseId);
    long countByUserId(UUID userId);
    java.util.List<Enrollment> findTop5ByUserIdOrderByEnrolledAtDesc(UUID userId);

    @org.springframework.data.jpa.repository.Query("SELECT e.course.id, COUNT(e) FROM Enrollment e GROUP BY e.course.id")
    java.util.List<Object[]> countEnrollmentsGroupByCourseId();
}

