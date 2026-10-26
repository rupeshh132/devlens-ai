package com.devlens.api.service.lms;

import com.devlens.api.dto.lms.CourseAdminResponseDto;
import com.devlens.api.dto.lms.CourseRequestDto;
import com.devlens.api.dto.lms.ModuleRequestDto;
import com.devlens.api.dto.lms.SubmissionAdminResponseDto;
import com.devlens.api.entity.lms.*;
import com.devlens.api.entity.lms.Module;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.repository.lms.CourseRepository;
import com.devlens.api.repository.lms.GamificationProfileRepository;
import com.devlens.api.repository.lms.ModuleRepository;
import com.devlens.api.repository.lms.UserProgressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AdminLmsService {

    private final CourseRepository courseRepository;
    private final ModuleRepository moduleRepository;
    private final UserProgressRepository userProgressRepository;
    private final GamificationProfileRepository gamificationProfileRepository;
    private final CertificateService certificateService;
    private final com.devlens.api.service.MailService mailService;
    private final com.devlens.api.repository.lms.EnrollmentRepository enrollmentRepository;
    private final com.devlens.api.repository.lms.CertificateRepository certificateRepository;
    private final UserRepository userRepository;

    @Transactional
    public void deleteCourse(UUID courseId) {
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new org.springframework.web.server.ResponseStatusException(
            org.springframework.http.HttpStatus.NOT_FOUND, "Course not found"));

        certificateRepository.deleteByCourseId(courseId);
        enrollmentRepository.deleteByCourseId(courseId);

        List<Module> modules = moduleRepository.findByCourseIdOrderByOrderIndexAsc(courseId);
        for (Module m : modules) {
            userProgressRepository.deleteByModuleId(m.getId());
        }
        moduleRepository.deleteAll(modules);

        courseRepository.delete(course);
    }

    @Transactional
    public void deleteModule(UUID moduleId) {
        Module module = moduleRepository.findById(moduleId).orElseThrow(() -> new org.springframework.web.server.ResponseStatusException(
            org.springframework.http.HttpStatus.NOT_FOUND, "Module not found"));

        userProgressRepository.deleteByModuleId(moduleId);
        moduleRepository.delete(module);
    }

    public Course createCourse(CourseRequestDto dto) {
        Course course = new Course();
        course.setTitle(dto.getTitle());
        course.setDescription(dto.getDescription());
        course.setPrice(dto.getPrice());
        if (dto.getIsPublished() != null) {
            course.setIsPublished(dto.getIsPublished());
        }
        return courseRepository.save(course);
    }

    public Course updateCourse(UUID id, CourseRequestDto dto) {
        Course course = courseRepository.findById(id).orElseThrow();
        if (dto.getTitle() != null) course.setTitle(dto.getTitle());
        if (dto.getDescription() != null) course.setDescription(dto.getDescription());
        if (dto.getPrice() != null) course.setPrice(dto.getPrice());
        if (dto.getIsPublished() != null) course.setIsPublished(dto.getIsPublished());
        return courseRepository.save(course);
    }

    public List<CourseAdminResponseDto> getAllCoursesWithStats() {
        List<Course> courses = courseRepository.findAll();
        List<Module> allModules = moduleRepository.findAllWithCourse();
        java.util.Map<UUID, List<Module>> modulesByCourseId = allModules.stream()
                .filter(m -> m.getCourse() != null && m.getCourse().getId() != null)
                .collect(java.util.stream.Collectors.groupingBy(m -> m.getCourse().getId()));

        java.util.Map<UUID, Long> enrollmentsMap = new java.util.HashMap<>();
        for (Object[] row : enrollmentRepository.countEnrollmentsGroupByCourseId()) {
            if (row[0] != null && row[1] != null) {
                enrollmentsMap.put((UUID) row[0], ((Number) row[1]).longValue());
            }
        }

        java.util.Map<UUID, Long> certificatesMap = new java.util.HashMap<>();
        for (Object[] row : certificateRepository.countCertificatesGroupByCourseId()) {
            if (row[0] != null && row[1] != null) {
                certificatesMap.put((UUID) row[0], ((Number) row[1]).longValue());
            }
        }

        java.util.Map<UUID, Long> pendingMap = new java.util.HashMap<>();
        for (Object[] row : userProgressRepository.countPendingSubmissionsGroupByCourseId()) {
            if (row[0] != null && row[1] != null) {
                pendingMap.put((UUID) row[0], ((Number) row[1]).longValue());
            }
        }

        return courses.stream().map(c -> {
            List<Module> courseModules = modulesByCourseId.getOrDefault(c.getId(), java.util.Collections.emptyList());
            long total = courseModules.size();
            long lessons = courseModules.stream().filter(m -> m.getType() == ModuleType.LESSON).count();
            long videos = courseModules.stream().filter(m -> m.getType() == ModuleType.VIDEO).count();
            long projects = courseModules.stream().filter(m -> m.getType() == ModuleType.PROJECT).count();
            long mockTests = courseModules.stream().filter(m -> m.getType() == ModuleType.MOCK_TEST).count();

            long enrolled = enrollmentsMap.getOrDefault(c.getId(), 0L);
            long certificates = certificatesMap.getOrDefault(c.getId(), 0L);
            long pending = pendingMap.getOrDefault(c.getId(), 0L);

            return CourseAdminResponseDto.builder()
                    .id(c.getId())
                    .title(c.getTitle())
                    .description(c.getDescription())
                    .price(c.getPrice())
                    .isPublished(c.getIsPublished())
                    .createdAt(c.getCreatedAt())
                    .totalModules(total)
                    .lessonsCount(lessons)
                    .videosCount(videos)
                    .projectsCount(projects)
                    .mockTestsCount(mockTests)
                    .enrolledCount(enrolled)
                    .certificatesCount(certificates)
                    .pendingSubmissionsCount(pending)
                    .build();
        }).collect(java.util.stream.Collectors.toList());
    }

    @Transactional
    public CourseAdminResponseDto togglePublishCourse(UUID courseId) {
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.NOT_FOUND, "Course not found"));
        course.setIsPublished(course.getIsPublished() == null || !course.getIsPublished());
        Course saved = courseRepository.save(course);

        List<Module> courseModules = moduleRepository.findByCourseIdOrderByOrderIndexAsc(courseId);
        long total = courseModules.size();
        long lessons = courseModules.stream().filter(m -> m.getType() == ModuleType.LESSON).count();
        long videos = courseModules.stream().filter(m -> m.getType() == ModuleType.VIDEO).count();
        long projects = courseModules.stream().filter(m -> m.getType() == ModuleType.PROJECT).count();
        long mockTests = courseModules.stream().filter(m -> m.getType() == ModuleType.MOCK_TEST).count();

        long enrolled = enrollmentRepository.countByCourseId(saved.getId());
        long certificates = certificateRepository.countByCourseId(saved.getId());
        long pending = userProgressRepository.countByModuleCourseIdAndStatus(saved.getId(), ProgressStatus.PENDING_REVIEW);

        return CourseAdminResponseDto.builder()
                .id(saved.getId())
                .title(saved.getTitle())
                .description(saved.getDescription())
                .price(saved.getPrice())
                .isPublished(saved.getIsPublished())
                .createdAt(saved.getCreatedAt())
                .totalModules(total)
                .lessonsCount(lessons)
                .videosCount(videos)
                .projectsCount(projects)
                .mockTestsCount(mockTests)
                .enrolledCount(enrolled)
                .certificatesCount(certificates)
                .pendingSubmissionsCount(pending)
                .build();
    }

    @Transactional
    public CourseAdminResponseDto cloneCourse(UUID courseId) {
        Course original = courseRepository.findById(courseId).orElseThrow(() -> new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.NOT_FOUND, "Course not found"));

        Course clonedCourse = new Course();
        clonedCourse.setTitle("Copy of " + original.getTitle());
        clonedCourse.setDescription(original.getDescription());
        clonedCourse.setPrice(original.getPrice());
        clonedCourse.setIsPublished(false); // Default to Draft mode
        Course savedCourse = courseRepository.save(clonedCourse);

        List<Module> originalModules = moduleRepository.findByCourseIdOrderByOrderIndexAsc(courseId);
        List<Module> clonedModules = new java.util.ArrayList<>();
        for (Module m : originalModules) {
            Module cm = new Module();
            cm.setCourse(savedCourse);
            cm.setTitle(m.getTitle());
            cm.setOrderIndex(m.getOrderIndex());
            cm.setContentUrl(m.getContentUrl());
            cm.setTextContent(m.getTextContent());
            cm.setType(m.getType());
            clonedModules.add(cm);
        }
        if (!clonedModules.isEmpty()) {
            moduleRepository.saveAll(clonedModules);
        }

        long total = clonedModules.size();
        long lessons = clonedModules.stream().filter(m -> m.getType() == ModuleType.LESSON).count();
        long videos = clonedModules.stream().filter(m -> m.getType() == ModuleType.VIDEO).count();
        long projects = clonedModules.stream().filter(m -> m.getType() == ModuleType.PROJECT).count();
        long mockTests = clonedModules.stream().filter(m -> m.getType() == ModuleType.MOCK_TEST).count();

        return CourseAdminResponseDto.builder()
                .id(savedCourse.getId())
                .title(savedCourse.getTitle())
                .description(savedCourse.getDescription())
                .price(savedCourse.getPrice())
                .isPublished(savedCourse.getIsPublished())
                .createdAt(savedCourse.getCreatedAt())
                .totalModules(total)
                .lessonsCount(lessons)
                .videosCount(videos)
                .projectsCount(projects)
                .mockTestsCount(mockTests)
                .enrolledCount(0L)
                .certificatesCount(0L)
                .pendingSubmissionsCount(0L)
                .build();
    }




    public Module createModule(ModuleRequestDto dto) {
        Course course = courseRepository.findById(dto.getCourseId()).orElseThrow();
        Module module = new Module();
        module.setCourse(course);
        module.setTitle(dto.getTitle());
        module.setOrderIndex(dto.getOrderIndex());
        module.setContentUrl(dto.getContentUrl());
        module.setTextContent(dto.getTextContent());
        module.setType(ModuleType.valueOf(dto.getType()));
        return moduleRepository.save(module);
    }

    public Module updateModule(UUID id, ModuleRequestDto dto) {
        Module module = moduleRepository.findById(id).orElseThrow();
        if (dto.getTitle() != null) module.setTitle(dto.getTitle());
        if (dto.getOrderIndex() != null) module.setOrderIndex(dto.getOrderIndex());
        if (dto.getContentUrl() != null) module.setContentUrl(dto.getContentUrl());
        if (dto.getTextContent() != null) module.setTextContent(dto.getTextContent());
        if (dto.getType() != null) module.setType(ModuleType.valueOf(dto.getType()));
        return moduleRepository.save(module);
    }

    public List<UserProgress> getPendingSubmissions() {
        return userProgressRepository.findByStatus(ProgressStatus.PENDING_REVIEW);
    }

    public SubmissionAdminResponseDto toSubmissionDto(UserProgress p) {
        String studentName = (p.getUser() != null) 
            ? ((p.getUser().getFirstName() != null ? p.getUser().getFirstName() : "") + " " + 
               (p.getUser().getLastName() != null ? p.getUser().getLastName() : "")).trim()
            : "Unknown Student";
        if (studentName.isEmpty()) studentName = "DevLens Student";

        String email = p.getUser() != null ? p.getUser().getEmail() : "student@devlens.ai";
        String moduleTitle = p.getModule() != null ? p.getModule().getTitle() : "Capstone Project";
        String courseTitle = (p.getModule() != null && p.getModule().getCourse() != null) 
            ? p.getModule().getCourse().getTitle() 
            : "Developer Academy Track";

        return SubmissionAdminResponseDto.builder()
                .id(p.getId())
                .userId(p.getUser() != null ? p.getUser().getId() : null)
                .userName(studentName)
                .userEmail(email)
                .moduleId(p.getModule() != null ? p.getModule().getId() : null)
                .moduleTitle(moduleTitle)
                .courseId((p.getModule() != null && p.getModule().getCourse() != null) ? p.getModule().getCourse().getId() : null)
                .courseTitle(courseTitle)
                .status(p.getStatus())
                .projectRepoUrl(p.getProjectRepoUrl())
                .projectDeployUrl(p.getProjectDeployUrl())
                .rejectionReason(p.getRejectionReason())
                .user(SubmissionAdminResponseDto.UserNestedDto.builder()
                        .id(p.getUser() != null ? p.getUser().getId() : null)
                        .email(email)
                        .fullName(studentName)
                        .build())
                .module(SubmissionAdminResponseDto.ModuleNestedDto.builder()
                        .id(p.getModule() != null ? p.getModule().getId() : null)
                        .title(moduleTitle)
                        .courseTitle(courseTitle)
                        .build())
                .build();
    }

    public List<SubmissionAdminResponseDto> getSubmissions(String statusFilter) {
        List<UserProgress> list;
        if (statusFilter == null || statusFilter.equalsIgnoreCase("PENDING") || statusFilter.equalsIgnoreCase("PENDING_REVIEW")) {
            list = userProgressRepository.findByStatus(ProgressStatus.PENDING_REVIEW);
        } else if (statusFilter.equalsIgnoreCase("ALL")) {
            list = userProgressRepository.findAllProjectSubmissions();
        } else if (statusFilter.equalsIgnoreCase("COMPLETED") || statusFilter.equalsIgnoreCase("APPROVED")) {
            list = userProgressRepository.findProjectSubmissionsByStatus(ProgressStatus.COMPLETED);
        } else if (statusFilter.equalsIgnoreCase("REJECTED")) {
            list = userProgressRepository.findProjectSubmissionsByStatus(ProgressStatus.REJECTED);
        } else {
            list = userProgressRepository.findByStatus(ProgressStatus.PENDING_REVIEW);
        }
        return list.stream().map(this::toSubmissionDto).collect(java.util.stream.Collectors.toList());
    }

    public java.util.Map<String, Object> getSubmissionStats() {
        long pending = userProgressRepository.countByStatus(ProgressStatus.PENDING_REVIEW);
        long approved = userProgressRepository.countProjectSubmissionsByStatus(ProgressStatus.COMPLETED);
        long rejected = userProgressRepository.countProjectSubmissionsByStatus(ProgressStatus.REJECTED);
        long total = pending + approved + rejected;

        java.util.Map<String, Object> stats = new java.util.HashMap<>();
        stats.put("pendingCount", pending);
        stats.put("approvedCount", approved);
        stats.put("rejectedCount", rejected);
        stats.put("totalCount", total);
        return stats;
    }

    @Transactional
    public List<SubmissionAdminResponseDto> seedSampleSubmission() {
        com.devlens.api.entity.User user = userRepository.findAll().stream().findFirst().orElse(null);
        if (user == null) {
            throw new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.BAD_REQUEST, "No user available to associate with sample submission.");
        }

        Module projectModule = moduleRepository.findAll().stream()
                .filter(m -> m.getType() == ModuleType.PROJECT)
                .findFirst()
                .orElseGet(() -> moduleRepository.findAll().stream().findFirst().orElse(null));

        if (projectModule == null) {
            throw new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.BAD_REQUEST, "No module found. Please seed or create developer tracks first.");
        }

        UserProgress progress = userProgressRepository.findByUserIdAndModuleId(user.getId(), projectModule.getId())
                .orElseGet(() -> {
                    UserProgress np = new UserProgress();
                    np.setUser(user);
                    np.setModule(projectModule);
                    return np;
                });

        progress.setStatus(ProgressStatus.PENDING_REVIEW);
        progress.setProjectRepoUrl("https://github.com/developer-demo/cloud-saas-platform");
        progress.setProjectDeployUrl("https://cloud-saas-platform-demo.vercel.app");
        progress.setRejectionReason(null);
        userProgressRepository.save(progress);

        return getSubmissions("PENDING_REVIEW");
    }

    @Transactional
    public void approveSubmission(UUID submissionId) {
        UserProgress progress = userProgressRepository.findById(submissionId).orElseThrow();
        if (progress.getStatus() != ProgressStatus.PENDING_REVIEW) {
            throw new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.CONFLICT, "Submission already processed");
        }

        // 1. Mark as completed
        progress.setStatus(ProgressStatus.COMPLETED);
        userProgressRepository.save(progress);

        // 2. Add points to GamificationProfile (Lazy create if missing)
        GamificationProfile profile = gamificationProfileRepository.findByUserId(progress.getUser().getId())
                .orElseGet(() -> {
                    GamificationProfile newProfile = new GamificationProfile();
                    newProfile.setUser(progress.getUser());
                    newProfile.setTotalPoints(0);
                    newProfile.setFocusFails(0);
                    return newProfile;
                });
        profile.setTotalPoints(profile.getTotalPoints() + 100); // 100 points for project approval
        gamificationProfileRepository.save(profile);

        // 3. Unlock next module or log completion
        Module currentModule = progress.getModule();
        java.util.Optional<Module> nextModuleOpt = moduleRepository.findByCourseIdAndOrderIndex(
                currentModule.getCourse().getId(), currentModule.getOrderIndex() + 1);

        if (nextModuleOpt.isPresent()) {
            Module nextModule = nextModuleOpt.get();
            UserProgress nextProgress = userProgressRepository
                    .findByUserIdAndModuleId(progress.getUser().getId(), nextModule.getId())
                    .orElseGet(() -> {
                        UserProgress np = new UserProgress();
                        np.setUser(progress.getUser());
                        np.setModule(nextModule);
                        return np;
                    });
            nextProgress.setStatus(ProgressStatus.IN_PROGRESS);
            userProgressRepository.save(nextProgress);
        } else {
            // Last module completed, no next module to unlock
            org.slf4j.LoggerFactory.getLogger(AdminLmsService.class).info("Course completed, no next module to unlock for user: {}", progress.getUser().getId());
        }

        // 4. Check and issue certificate if course is fully completed
        certificateService.checkAndIssueCertificate(progress.getUser(), currentModule.getCourse());

        // 5. Send approval email
        mailService.sendProjectReviewedEmail(
                progress.getUser().getEmail(),
                progress.getUser().getFirstName(),
                currentModule.getTitle(),
                "COMPLETED",
                null
        );
    }

    @Transactional
    public void rejectSubmission(UUID submissionId, String reason) {
        UserProgress progress = userProgressRepository.findById(submissionId).orElseThrow();
        if (progress.getStatus() != ProgressStatus.PENDING_REVIEW) {
            throw new org.springframework.web.server.ResponseStatusException(
                org.springframework.http.HttpStatus.CONFLICT, "Submission already processed");
        }
        
        progress.setStatus(ProgressStatus.REJECTED);
        progress.setRejectionReason(reason);
        userProgressRepository.save(progress);

        // Send rejection email
        mailService.sendProjectReviewedEmail(
                progress.getUser().getEmail(),
                progress.getUser().getFirstName(),
                progress.getModule().getTitle(),
                "REJECTED",
                reason
        );
    }

    @Transactional
    public List<CourseAdminResponseDto> seedOfficialDeveloperTracks() {
        // 1. Safely remove dummy test courses ("sdsfd", "dgdfghf")
        List<Course> existingCourses = courseRepository.findAll();
        for (Course c : existingCourses) {
            String title = c.getTitle() != null ? c.getTitle().trim().toLowerCase() : "";
            if (title.equals("sdsfd") || title.equals("dgdfghf") || title.contains("test course")) {
                deleteCourse(c.getId());
            }
        }

        // Re-fetch existing courses after cleanup
        List<Course> activeCourses = courseRepository.findAll();

        // 2. Track 1: Java Full Stack
        seedTrackIfNotExists(
            activeCourses,
            "Master in Full Stack Java Development",
            "Master Core Java 21, Spring Boot 3 microservices, React 18, and PostgreSQL. Build a production-grade E-Commerce Banking Engine and get AI-reviewed.",
            99900,
            Arrays.asList(
                new ModuleSeedData("Core Java 21, OOP & Functional Streams", 1, "https://www.youtube.com/embed/grEKMHjyxr8", "# Core Java 21\nMaster Virtual Threads, Records, Sealed Classes, Generics, and Streams API.", ModuleType.LESSON),
                new ModuleSeedData("Spring Boot 3, RESTful APIs & Spring Data JPA", 2, "https://www.youtube.com/embed/9SGDpanrc8U", "# Spring Boot 3 & JPA\nBuild production REST controllers, DTO patterns, Exception Handling, and Hibernate relationships.", ModuleType.LESSON),
                new ModuleSeedData("PostgreSQL Schema Design, Indexing & Flyway Migrations", 3, "https://www.youtube.com/embed/qw--VYLpxG4", "# PostgreSQL & Flyway\nDatabase normalization, ACID transactions, complex joins, and versioned database migrations.", ModuleType.LESSON),
                new ModuleSeedData("Microservices Architecture, Docker Containers & Spring Cloud", 4, "https://www.youtube.com/embed/mSnpq-64HnQ", "# Microservices\nEureka Service Discovery, API Gateway, Circuit Breaker (Resilience4j), and Docker Compose setup.", ModuleType.VIDEO),
                new ModuleSeedData("React 18 & Vite Frontend Integration with Spring Security JWT", 5, "https://www.youtube.com/embed/bMknfKXIFA8", "# React & Spring Security\nJWT stateless authentication, Axios interceptors, protected route layout, and Tailwind CSS UI.", ModuleType.LESSON),
                new ModuleSeedData("Capstone Project: Banking & E-Commerce API Engine", 6, "https://github.com/devlens-ai/spring-boot-banking-engine-starter", "# Capstone Project: Enterprise Banking API\n\n### Deliverables:\n1. Account creation & double-entry ledger\n2. Idempotent transfer endpoints\n3. Docker Compose with PostgreSQL\n4. Submit your GitHub repository for admin review.", ModuleType.PROJECT)
            )
        );

        // 3. Track 2: DevOps & Cloud
        seedTrackIfNotExists(
            activeCourses,
            "Master in DevOps & Cloud Engineering",
            "Learn Linux, Docker, Kubernetes, AWS, Terraform, and CI/CD. Build an automated multi-cloud deployment pipeline.",
            99900,
            Arrays.asList(
                new ModuleSeedData("Linux System Administration, Bash Scripting & SSH Security", 1, "https://www.youtube.com/embed/s3ii48qYBxA", "# Linux Essentials\nProcess management, user permissions, networking tools (netstat, curl, iptables), and Bash automation.", ModuleType.LESSON),
                new ModuleSeedData("Docker Containerization & Production Multi-Stage Builds", 2, "https://www.youtube.com/embed/fqMOX6JJhGo", "# Docker & Containers\nWriting minimal Dockerfiles, layer caching, volume mounts, Docker networking, and security scanning.", ModuleType.LESSON),
                new ModuleSeedData("Kubernetes Cluster Architecture, Deployments & Ingress", 3, "https://www.youtube.com/embed/X48VuDVv0do", "# Kubernetes Orchestration\nPods, ReplicaSets, Deployments, Services (ClusterIP/NodePort), ConfigMaps, Secrets, and Nginx Ingress.", ModuleType.LESSON),
                new ModuleSeedData("AWS Cloud Infrastructure: EC2, S3, RDS, VPC & IAM Security", 4, "https://www.youtube.com/embed/k1RI5locZE4", "# AWS Architecture\nDesigning high-availability VPCs, public/private subnets, Security Groups, IAM least-privilege roles, and S3 static hosting.", ModuleType.VIDEO),
                new ModuleSeedData("Terraform Infrastructure as Code (IaC) & GitHub Actions CI/CD", 5, "https://www.youtube.com/embed/SLB_c_ayRMo", "# Terraform & CI/CD\nHCL syntax, Terraform state backends, reusable modules, and automated GitHub Actions deployment workflows.", ModuleType.LESSON),
                new ModuleSeedData("Capstone Project: Multi-Cloud Kubernetes CI/CD Pipeline", 6, "https://github.com/devlens-ai/devops-k8s-cicd-starter", "# Capstone Project: Automated CI/CD Pipeline\n\n### Deliverables:\n1. Automated test and build workflow\n2. Push Docker image to container registry\n3. Deploy to Kubernetes cluster via ArgoCD/Helm\n4. Submit your GitHub repository for admin review.", ModuleType.PROJECT)
            )
        );

        // 4. Track 3: AI & Data Engineering
        seedTrackIfNotExists(
            activeCourses,
            "Master in AI & Data Engineering",
            "Build real LLM apps with Python, FastAPI, Pandas, Groq AI API, and Vector DBs (Chroma). Create an AI Document Q&A Search Engine.",
            99900,
            Arrays.asList(
                new ModuleSeedData("Modern Python 3.12 for Data Engineering & Async Pipelines", 1, "https://www.youtube.com/embed/eWRfhZUzrAc", "# Python 3.12 for Data\nType hinting, async/await event loops, generator pipelines, dataclasses, and performance profiling.", ModuleType.LESSON),
                new ModuleSeedData("FastAPI High-Performance Async Microservices & Pydantic V2", 2, "https://www.youtube.com/embed/0rsHGhft2eQ", "# FastAPI & Pydantic\nAsync endpoints, dependency injection, OpenAPI documentation, and high-throughput API gateways.", ModuleType.LESSON),
                new ModuleSeedData("Pandas & Polars Data Processing, Cleaning & Feature Pipelines", 3, "https://www.youtube.com/embed/vmEHCJofslg", "# Data Engineering\nDataframe operations, memory optimization, chunked file processing, and ETL transformation scripts.", ModuleType.LESSON),
                new ModuleSeedData("Vector Databases, Embeddings & Semantic Search (Chroma DB)", 4, "https://www.youtube.com/embed/klTvEwg3oJ8", "# Vector DBs & Embeddings\nCosine similarity, dense text embeddings, vector indexing, and persistent ChromaDB collections.", ModuleType.VIDEO),
                new ModuleSeedData("Groq AI API, LangChain & Autonomous LLM Agent Architecture", 5, "https://www.youtube.com/embed/tcqEUSNCn8I", "# LLMs & AI Agents\nUltra-fast Groq Llama-3 inference, prompt templates, retrieval augmented generation, and output parsers.", ModuleType.LESSON),
                new ModuleSeedData("Capstone Project: Enterprise RAG Document Q&A Search Engine", 6, "https://github.com/devlens-ai/ai-rag-search-engine-starter", "# Capstone Project: RAG Search Engine\n\n### Deliverables:\n1. PDF/Document ingestion and chunking pipeline\n2. Vector embedding and retrieval layer\n3. Conversational QA interface with source citations\n4. Submit your GitHub repository for admin review.", ModuleType.PROJECT)
            )
        );

        // 5. Track 4: Full Stack MERN
        seedTrackIfNotExists(
            activeCourses,
            "Master in Full Stack MERN Development",
            "Master MongoDB, Express.js, React 18, Node.js, and Tailwind CSS. Build a real-time SaaS Collaboration tool with WebSockets.",
            99900,
            Arrays.asList(
                new ModuleSeedData("MongoDB Schema Design, Indexing & Mongoose Aggregation Pipeline", 1, "https://www.youtube.com/embed/ofme2o29ngU", "# MongoDB Architecture\nDocument modelling, schema validation, compound indexes, aggregation pipelines, and Atlas configuration.", ModuleType.LESSON),
                new ModuleSeedData("Express.js Enterprise Architecture, Middleware & Security Hardening", 2, "https://www.youtube.com/embed/7H_QH9nipNs", "# Express.js REST APIs\nMiddleware chains, CORS, Helmet security headers, rate limiting, and centralized error handling.", ModuleType.LESSON),
                new ModuleSeedData("React 18 Advanced Hooks, Custom Hooks & Tailwind CSS System", 3, "https://www.youtube.com/embed/w7ejDZ8SWv8", "# React 18 Architecture\nComponent composition, custom data fetching hooks, optimistic UI updates, and Tailwind UI components.", ModuleType.LESSON),
                new ModuleSeedData("Node.js Async Runtime, Event Loop & JWT Authentication Flow", 4, "https://www.youtube.com/embed/Oe421EPjeBE", "# Node.js Runtime\nNon-blocking I/O, event loop mechanics, bcrypt hashing, JWT access/refresh token pattern in HttpOnly cookies.", ModuleType.VIDEO),
                new ModuleSeedData("Socket.io Real-Time Event Streaming & Collaborative Presence", 5, "https://www.youtube.com/embed/ZKEqqIO7n-k", "# WebSockets & Real-Time\nSocket.io rooms, bi-directional events, heartbeat ping/pong, and collaborative presence tracking.", ModuleType.LESSON),
                new ModuleSeedData("Capstone Project: Real-time SaaS Collaboration & Whiteboard Tool", 6, "https://github.com/devlens-ai/mern-saas-collaboration-starter", "# Capstone Project: Real-Time SaaS Tool\n\n### Deliverables:\n1. Multi-tenant workspace and room creation\n2. Live collaborative document / canvas state sync\n3. Role-based member access control\n4. Submit your GitHub repository for admin review.", ModuleType.PROJECT)
            )
        );

        return getAllCoursesWithStats();
    }

    private void seedTrackIfNotExists(List<Course> existingCourses, String title, String description, int price, List<ModuleSeedData> modules) {
        boolean exists = existingCourses.stream().anyMatch(c -> c.getTitle() != null && c.getTitle().equalsIgnoreCase(title));
        if (exists) return;

        Course course = new Course();
        course.setTitle(title);
        course.setDescription(description);
        course.setPrice(price);
        course.setIsPublished(true);
        Course savedCourse = courseRepository.save(course);

        for (ModuleSeedData m : modules) {
            Module module = new Module();
            module.setCourse(savedCourse);
            module.setTitle(m.title);
            module.setOrderIndex(m.orderIndex);
            module.setContentUrl(m.contentUrl);
            module.setTextContent(m.textContent);
            module.setType(m.type);
            moduleRepository.save(module);
        }
    }

    private static class ModuleSeedData {
        String title;
        int orderIndex;
        String contentUrl;
        String textContent;
        ModuleType type;

        ModuleSeedData(String title, int orderIndex, String contentUrl, String textContent, ModuleType type) {
            this.title = title;
            this.orderIndex = orderIndex;
            this.contentUrl = contentUrl;
            this.textContent = textContent;
            this.type = type;
        }
    }
}
