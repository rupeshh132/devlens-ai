package com.devlens.api.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final CustomUserDetailsService customUserDetailsService;
    private final com.devlens.learn.security.LearnUserDetailsService learnUserDetailsService;
    private final com.devlens.api.repository.UserRepository userRepository;
    private final com.devlens.learn.repository.LearnUserRepository learnUserRepository;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userIdStr;
        
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }
        
        jwt = authHeader.substring(7);
        
        try {
            userIdStr = jwtService.extractUsername(jwt);
            if (userIdStr != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                java.util.UUID userId = java.util.UUID.fromString(userIdStr);
                String role = jwtService.extractClaim(jwt, claims -> claims.get("role", String.class));
                
                UserDetails userDetails;
                String expectedJti = null;
                
                if ("LEARN_USER".equals(role)) {
                    userDetails = this.learnUserDetailsService.loadUserById(userId);
                    com.devlens.learn.entity.LearnUser lUser = learnUserRepository.findById(userId).orElse(null);
                    if (lUser != null) {
                        expectedJti = lUser.getActiveJwtId();
                        if (!lUser.isActive()) {
                            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Account has been deactivated or suspended.");
                            return;
                        }
                    }
                } else {
                    userDetails = this.customUserDetailsService.loadUserById(userId);
                    com.devlens.api.entity.User dbUser = userRepository.findById(userId).orElse(null);
                    if (dbUser != null) {
                        expectedJti = dbUser.getActiveJwtId();
                        if (dbUser.getStatus() == com.devlens.api.entity.UserStatus.SUSPENDED) {
                            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Account has been suspended by administration.");
                            return;
                        }
                    }
                }
                
                String tokenJti = jwtService.extractJti(jwt);
                
                if (expectedJti != null && tokenJti != null && !expectedJti.equals(tokenJti)) {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Session expired due to login from another device.");
                    return;
                }
                
                if (jwtService.isTokenValid(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities()
                    );
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        } catch (Exception ex) {
            // Log token processing error if necessary, authentication context remains empty
        }
        
        filterChain.doFilter(request, response);
    }
}
