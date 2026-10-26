package com.devlens.api.repository.lms;

import com.devlens.api.entity.lms.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
import java.util.Optional;

public interface ModuleRepository extends JpaRepository<Module, UUID> {
    java.util.List<Module> findByCourseIdOrderByOrderIndexAsc(UUID courseId);
    Optional<Module> findByCourseIdAndOrderIndex(UUID courseId, Integer orderIndex);
    void deleteByCourseId(UUID courseId);

    @org.springframework.data.jpa.repository.Query("SELECT m FROM Module m JOIN FETCH m.course")
    java.util.List<Module> findAllWithCourse();
}

