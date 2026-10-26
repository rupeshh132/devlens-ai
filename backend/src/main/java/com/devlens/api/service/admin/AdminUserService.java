package com.devlens.api.service.admin;

import com.devlens.api.dto.admin.*;
import com.devlens.api.entity.RepositoryStatus;
import com.devlens.api.entity.User;
import com.devlens.api.entity.UserRole;
import com.devlens.api.entity.UserStatus;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.api.repository.RefreshTokenRepository;
import com.devlens.api.repository.RepositoryRepository;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.repository.lms.EnrollmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminUserService {

    private final UserRepository userRepository;
    private final RepositoryRepository repositoryRepository;
    private final AnalysisJobRepository analysisJobRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    public Page<AdminDevUserDto> getUsers(String roleStr, String statusStr, String search, int page, int size) {
        UserRole role = null;
        if (roleStr != null && !roleStr.trim().isEmpty() && !"ALL".equalsIgnoreCase(roleStr)) {
            try {
                role = UserRole.valueOf(roleStr.trim().toUpperCase());
            } catch (IllegalArgumentException e) {
                log.warn("Invalid role filter: {}", roleStr);
            }
        }

        UserStatus status = null;
        if (statusStr != null && !statusStr.trim().isEmpty() && !"ALL".equalsIgnoreCase(statusStr)) {
            try {
                status = UserStatus.valueOf(statusStr.trim().toUpperCase());
            } catch (IllegalArgumentException e) {
                log.warn("Invalid status filter: {}", statusStr);
            }
        }

        String sanitizedSearch = (search != null && !search.trim().isEmpty()) ? search.trim() : null;
        PageRequest pageRequest = PageRequest.of(Math.max(0, page), Math.max(1, size), Sort.by(Sort.Direction.DESC, "createdAt"));

        final UserRole finalRole = role;
        final UserStatus finalStatus = status;

        org.springframework.data.jpa.domain.Specification<User> spec = (root, query, cb) -> {
            java.util.List<jakarta.persistence.criteria.Predicate> predicates = new java.util.ArrayList<>();
            predicates.add(cb.notEqual(root.get("status"), UserStatus.DELETED));
            if (finalRole != null) {
                predicates.add(cb.equal(root.get("role"), finalRole));
            }
            if (finalStatus != null) {
                predicates.add(cb.equal(root.get("status"), finalStatus));
            }
            if (sanitizedSearch != null) {
                String pattern = "%" + sanitizedSearch.toLowerCase() + "%";
                predicates.add(cb.or(
                    cb.like(cb.lower(root.get("email")), pattern),
                    cb.like(cb.lower(root.get("firstName")), pattern),
                    cb.like(cb.lower(root.get("lastName")), pattern)
                ));
            }
            return cb.and(predicates.toArray(new jakarta.persistence.criteria.Predicate[0]));
        };

        Page<User> usersPage = userRepository.findAll(spec, pageRequest);
        return usersPage.map(this::mapToDto);
    }

    @Transactional(readOnly = true)
    public AdminDevUserStatsDto getStats() {
        long totalUsers = userRepository.countByStatusNot(UserStatus.DELETED);
        long activeUsers = userRepository.countByStatus(UserStatus.ACTIVE);
        long suspendedUsers = userRepository.countByStatus(UserStatus.SUSPENDED);
        long adminUsers = userRepository.countByRole(UserRole.ADMIN);
        long totalRepos = repositoryRepository.count();
        long totalScans = analysisJobRepository.count();

        return AdminDevUserStatsDto.builder()
                .totalUsers(totalUsers)
                .activeUsers(activeUsers)
                .suspendedUsers(suspendedUsers)
                .adminUsers(adminUsers)
                .totalRepositories(totalRepos)
                .totalScans(totalScans)
                .build();
    }

    @Transactional(readOnly = true)
    public AdminDevUserDetailDto getUserDetails(UUID userId) {
        User user = userRepository.findByIdAndStatusNot(userId, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("Developer user not found with id: " + userId));

        AdminDevUserDto userDto = mapToDto(user);

        List<AdminDevRepoSummaryDto> repos = repositoryRepository.findTop5ByUserIdAndStatusNotOrderByCreatedAtDesc(userId, RepositoryStatus.DELETED)
                .stream()
                .map(r -> AdminDevRepoSummaryDto.builder()
                        .id(r.getId())
                        .name(r.getName())
                        .owner(r.getOwner())
                        .url(r.getUrl())
                        .branch(r.getBranch())
                        .provider(r.getProvider())
                        .visibility(r.getVisibility())
                        .status(r.getStatus())
                        .createdAt(r.getCreatedAt())
                        .build())
                .collect(Collectors.toList());

        List<AdminDevScanSummaryDto> scans = analysisJobRepository.findTop10ByRepositoryUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(s -> AdminDevScanSummaryDto.builder()
                        .id(s.getId())
                        .repositoryId(s.getRepository() != null ? s.getRepository().getId() : null)
                        .repositoryName(s.getRepository() != null ? s.getRepository().getName() : "Unknown")
                        .status(s.getStatus())
                        .progress(s.getProgress())
                        .score(s.getScore())
                        .startedAt(s.getStartedAt())
                        .completedAt(s.getCompletedAt())
                        .createdAt(s.getCreatedAt())
                        .build())
                .collect(Collectors.toList());

        List<AdminDevEnrollmentSummaryDto> enrollments = enrollmentRepository.findTop5ByUserIdOrderByEnrolledAtDesc(userId)
                .stream()
                .map(e -> AdminDevEnrollmentSummaryDto.builder()
                        .id(e.getId())
                        .courseId(e.getCourse() != null ? e.getCourse().getId() : null)
                        .courseTitle(e.getCourse() != null ? e.getCourse().getTitle() : "Unknown")
                        .enrolledAt(e.getEnrolledAt())
                        .status(e.getStatus())
                        .build())
                .collect(Collectors.toList());

        return AdminDevUserDetailDto.builder()
                .user(userDto)
                .repositories(repos)
                .recentScans(scans)
                .enrollments(enrollments)
                .build();
    }

    @Transactional
    public void updateRole(UUID userId, UserRole role) {
        User user = userRepository.findByIdAndStatusNot(userId, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        user.setRole(role);
        // Revoke active JWT so the user acquires a fresh token with updated authorities on next request
        user.setActiveJwtId(null);
        userRepository.save(user);
        log.info("Admin updated role for user {} to {}", userId, role);
    }

    @Transactional
    public void updateStatus(UUID userId, UserStatus status) {
        User user = userRepository.findByIdAndStatusNot(userId, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        user.setStatus(status);
        if (status == UserStatus.SUSPENDED) {
            user.setActiveJwtId(null);
            refreshTokenRepository.deleteByUser(user);
            log.warn("User {} suspended: active JWT and refresh tokens instantly purged", userId);
        }
        userRepository.save(user);
        log.info("Admin updated status for user {} to {}", userId, status);
    }

    @Transactional
    public void resetPassword(UUID userId, String newPassword) {
        User user = userRepository.findByIdAndStatusNot(userId, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setActiveJwtId(null);
        refreshTokenRepository.deleteByUser(user);
        userRepository.save(user);
        log.info("Admin reset password for user {}. All previous sessions terminated.", userId);
    }

    @Transactional
    public void adjustPoints(UUID userId, Integer points, String operation) {
        User user = userRepository.findByIdAndStatusNot(userId, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        if ("SET".equalsIgnoreCase(operation)) {
            user.setPoints(points);
        } else {
            int current = user.getPoints() != null ? user.getPoints() : 0;
            user.setPoints(Math.max(0, current + points));
        }
        userRepository.save(user);
        log.info("Admin adjusted points for user {} ({}: {})", userId, operation, points);
    }

    @Transactional
    public void updateProfile(UUID userId, AdminDevProfileUpdateDto dto) {
        User user = userRepository.findByIdAndStatusNot(userId, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        if (!user.getEmail().equalsIgnoreCase(dto.getEmail())) {
            if (userRepository.existsByEmailAndStatusNot(dto.getEmail(), UserStatus.DELETED)) {
                throw new IllegalArgumentException("Email " + dto.getEmail() + " is already in use by another developer account");
            }
            user.setEmail(dto.getEmail());
        }

        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        userRepository.save(user);
        log.info("Admin updated developer profile for user {}", userId);
    }

    private AdminDevUserDto mapToDto(User user) {
        String fullName = ((user.getFirstName() != null ? user.getFirstName() : "") + " " + (user.getLastName() != null ? user.getLastName() : "")).trim();
        long repoCount = repositoryRepository.countByUserIdAndStatusNot(user.getId(), RepositoryStatus.DELETED);
        long scanCount = analysisJobRepository.countByRepositoryUserId(user.getId());
        long enrollmentCount = enrollmentRepository.countByUserId(user.getId());

        return AdminDevUserDto.builder()
                .id(user.getId())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .fullName(fullName.isEmpty() ? user.getEmail() : fullName)
                .role(user.getRole())
                .status(user.getStatus())
                .points(user.getPoints() != null ? user.getPoints() : 0)
                .badges(user.getBadges())
                .repositoryCount(repoCount)
                .scanCount(scanCount)
                .enrolledCoursesCount(enrollmentCount)
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .build();
    }
}
