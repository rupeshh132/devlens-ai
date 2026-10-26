package com.devlens.api.dto.lms;

import com.devlens.api.entity.lms.Course;
import com.devlens.api.entity.lms.Module;
import com.devlens.api.entity.lms.UserProgress;
import lombok.Data;

import java.util.List;

@Data
public class CoursePlayDto {
    private Course course;
    private List<Module> modules;
    private List<UserProgress> userProgress;
}
