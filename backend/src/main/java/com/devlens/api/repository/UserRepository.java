package com.devlens.api.repository;

import com.devlens.api.entity.User;
import com.devlens.api.entity.UserStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    
    Optional<User> findByEmailAndStatusNot(String email, UserStatus status);
    
    Optional<User> findByIdAndStatusNot(UUID id, UserStatus status);
    
    Page<User> findByStatusNot(UserStatus status, Pageable pageable);
    
    Page<User> findByEmailContainingIgnoreCaseAndStatusNot(String email, UserStatus status, Pageable pageable);
    
    boolean existsByEmailAndStatusNot(String email, UserStatus status);
}
