package com.devlens.learn.security;

import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.repository.LearnUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LearnUserDetailsService implements UserDetailsService {

    private final LearnUserRepository learnUserRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        LearnUser user = learnUserRepository.findByEmailAndIsActiveTrue(email)
                .orElseThrow(() -> new UsernameNotFoundException("LearnUser not found with email : " + email));
        return LearnUserPrincipal.create(user);
    }

    @Transactional(readOnly = true)
    public UserDetails loadUserById(UUID id) throws UsernameNotFoundException {
        LearnUser user = learnUserRepository.findById(id)
                .filter(LearnUser::isActive)
                .orElseThrow(() -> new UsernameNotFoundException("LearnUser not found with id : " + id));
        return LearnUserPrincipal.create(user);
    }
}
