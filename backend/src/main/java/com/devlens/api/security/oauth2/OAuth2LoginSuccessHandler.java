package com.devlens.api.security.oauth2;

import com.devlens.api.dto.AuthResponse;
import com.devlens.api.security.AuthenticationService;
import com.devlens.api.security.UserPrincipal;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;

@Component
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final AuthenticationService authenticationService;
    private final OAuthProperties oAuthProperties;

    public OAuth2LoginSuccessHandler(@org.springframework.context.annotation.Lazy AuthenticationService authenticationService, OAuthProperties oAuthProperties) {
        this.authenticationService = authenticationService;
        this.oAuthProperties = oAuthProperties;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        // Extract device id from request or generate a generic one for OAuth
        String deviceId = request.getHeader("User-Agent");
        if (deviceId == null) {
            deviceId = "OAuth2-Device";
        }

        // JWT + Refresh Token after login
        AuthResponse authResponse = authenticationService.loginWithOAuth(userPrincipal, deviceId);

        // HttpOnly cookie support
        ResponseCookie cookie = authenticationService.createHttpOnlyCookie(authResponse.getRefreshToken());
        response.addHeader("Set-Cookie", cookie.toString());

        String targetUrl = UriComponentsBuilder.fromUriString(oAuthProperties.getRedirectUri())
                .queryParam("token", authResponse.getAccessToken())
                .build().toUriString();

        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }
}
