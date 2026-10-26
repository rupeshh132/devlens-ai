package com.devlens.api.repository;

import com.devlens.api.entity.User;
import com.devlens.api.entity.UserStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID>, JpaSpecificationExecutor<User> {
    
    Optional<User> findByEmailAndStatusNot(String email, UserStatus status);
    
    Optional<User> findByIdAndStatusNot(UUID id, UserStatus status);
    
    Page<User> findByStatusNot(UserStatus status, Pageable pageable);
    
    Page<User> findByEmailContainingIgnoreCaseAndStatusNot(String email, UserStatus status, Pageable pageable);
    
    boolean existsByEmailAndStatusNot(String email, UserStatus status);

    long countByStatus(UserStatus status);

    long countByRole(com.devlens.api.entity.UserRole role);

    long countByStatusNot(UserStatus status);

    @org.springframework.data.jpa.repository.Query("SELECT u FROM User u WHERE u.status != :deletedStatus " +
           "AND (:role IS NULL OR u.role = :role) " +
           "AND (:status IS NULL OR u.status = :status) " +
           "AND (:search IS NULL OR LOWER(u.email) LIKE LOWER(CONCAT('%', :search, '%')) " +
           "     OR LOWER(u.firstName) LIKE LOWER(CONCAT('%', :search, '%')) " +
           "     OR LOWER(u.lastName) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<User> findAdminUsers(
            @org.springframework.data.repository.query.Param("deletedStatus") UserStatus deletedStatus,
            @org.springframework.data.repository.query.Param("role") com.devlens.api.entity.UserRole role,
            @org.springframework.data.repository.query.Param("status") UserStatus status,
            @org.springframework.data.repository.query.Param("search") String search,
            Pageable pageable
    );
}
