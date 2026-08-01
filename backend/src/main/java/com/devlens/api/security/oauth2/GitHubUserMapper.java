package com.devlens.api.security.oauth2;

import com.devlens.api.entity.User;
import com.devlens.api.entity.UserRole;
import com.devlens.api.entity.UserStatus;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class GitHubUserMapper {

    public User mapToUser(OAuth2User oAuth2User) {
        Map<String, Object> attributes = oAuth2User.getAttributes();
        
        String email = (String) attributes.get("email");
        if (email == null) {
            // Some users hide their email on GitHub, use login + @github.com placeholder
            String login = (String) attributes.get("login");
            email = login + "@users.noreply.github.com";
        }

        String name = (String) attributes.get("name");
        if (name == null || name.isBlank()) {
            name = (String) attributes.get("login");
        }

        String[] nameParts = name.split(" ", 2);
        String firstName = nameParts[0];
        String lastName = nameParts.length > 1 ? nameParts[1] : "";

        return User.builder()
                .email(email)
                .firstName(firstName)
                .lastName(lastName)
                .role(UserRole.USER) // Role assignment (USER)
                .status(UserStatus.ACTIVE)
                .build();
    }
}
