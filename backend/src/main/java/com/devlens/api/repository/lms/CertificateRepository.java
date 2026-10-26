package com.devlens.api.repository.lms;

import com.devlens.api.entity.lms.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, UUID> {
    List<Certificate> findByUserId(UUID userId);
    Optional<Certificate> findByUserIdAndCourseId(UUID userId, UUID courseId);
    void deleteByCourseId(UUID courseId);

    long countByCourseId(UUID courseId);

    @org.springframework.data.jpa.repository.Query("SELECT c.course.id, COUNT(c) FROM Certificate c GROUP BY c.course.id")
    java.util.List<Object[]> countCertificatesGroupByCourseId();
}

