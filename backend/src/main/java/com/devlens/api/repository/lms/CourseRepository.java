package com.devlens.api.repository.lms;

import com.devlens.api.entity.lms.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface CourseRepository extends JpaRepository<Course, UUID> {
}
