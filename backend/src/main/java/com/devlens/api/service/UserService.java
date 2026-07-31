package com.devlens.api.service;

import com.devlens.api.dto.CreateUserRequest;
import com.devlens.api.dto.UpdateUserRequest;
import com.devlens.api.dto.UserResponse;
import com.devlens.api.entity.User;
import com.devlens.api.entity.UserStatus;
import com.devlens.api.exception.DuplicateResourceException;
import com.devlens.api.exception.ResourceNotFoundException;
import com.devlens.api.mapper.UserMapper;
import com.devlens.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Transactional
    public UserResponse createUser(CreateUserRequest request) {
        if (userRepository.existsByEmailAndStatusNot(request.getEmail(), UserStatus.DELETED)) {
            throw new DuplicateResourceException("User with email " + request.getEmail() + " already exists");
        }
        
        User user = userMapper.toEntity(request);
        User savedUser = userRepository.save(user);
        
        return userMapper.toResponse(savedUser);
    }

    @Transactional(readOnly = true)
    public UserResponse getUserById(UUID id) {
        User user = userRepository.findByIdAndStatusNot(id, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));
        return userMapper.toResponse(user);
    }

    @Transactional(readOnly = true)
    public Page<UserResponse> getUsers(String email, Pageable pageable) {
        Page<User> users;
        if (email != null && !email.isBlank()) {
            users = userRepository.findByEmailContainingIgnoreCaseAndStatusNot(email, UserStatus.DELETED, pageable);
        } else {
            users = userRepository.findByStatusNot(UserStatus.DELETED, pageable);
        }
        return users.map(userMapper::toResponse);
    }

    @Transactional
    public UserResponse updateUser(UUID id, UpdateUserRequest request) {
        User user = userRepository.findByIdAndStatusNot(id, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));
        
        userMapper.updateUserFromRequest(request, user);
        User updatedUser = userRepository.save(user);
        
        return userMapper.toResponse(updatedUser);
    }

    @Transactional
    public void deleteUser(UUID id) {
        User user = userRepository.findByIdAndStatusNot(id, UserStatus.DELETED)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));
        
        user.setStatus(UserStatus.DELETED);
        userRepository.save(user);
    }
}
