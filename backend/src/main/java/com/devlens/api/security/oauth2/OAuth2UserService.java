package com.devlens.api.security.oauth2;

import com.devlens.api.entity.User;
import com.devlens.api.entity.UserStatus;
import com.devlens.api.repository.UserRepository;
import com.devlens.api.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;
    private final GitHubUserMapper gitHubUserMapper;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        
        return processOAuth2User(oAuth2User);
    }

    @org.springframework.transaction.annotation.Transactional
    public OAuth2User processOAuth2User(OAuth2User oAuth2User) {
        User mappedUser = gitHubUserMapper.mapToUser(oAuth2User);

        Optional<User> userOptional = userRepository.findByEmailAndStatusNot(mappedUser.getEmail(), UserStatus.DELETED);

        User user;
        if (userOptional.isPresent()) {
            user = userOptional.get();
            // Profile sync: Update name if provided
            user.setFirstName(mappedUser.getFirstName());
            user.setLastName(mappedUser.getLastName());
            user = userRepository.saveAndFlush(user);
        } else {
            // Auto user creation
            user = userRepository.saveAndFlush(mappedUser);
        }

        return UserPrincipal.create(user, oAuth2User.getAttributes());
    }
}
