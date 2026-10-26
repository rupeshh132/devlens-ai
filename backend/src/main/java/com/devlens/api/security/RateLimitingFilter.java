package com.devlens.api.security;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Filter to limit API requests per IP address using Bucket4j.
 * Standard endpoints: 100 requests / minute
 * AI/OTP endpoints: 5 requests / minute
 */
@Component
@Slf4j
public class RateLimitingFilter extends OncePerRequestFilter {

    private final Map<String, Bucket> standardBuckets = new ConcurrentHashMap<>();
    private final Map<String, Bucket> strictBuckets = new ConcurrentHashMap<>();

    private Bucket createNewStandardBucket() {
        Bandwidth limit = Bandwidth.builder()
                .capacity(100)
                .refillGreedy(100, Duration.ofMinutes(1))
                .build();
        return Bucket.builder().addLimit(limit).build();
    }

    private Bucket createNewStrictBucket() {
        Bandwidth limit = Bandwidth.builder()
                .capacity(5)
                .refillGreedy(5, Duration.ofMinutes(1))
                .build();
        return Bucket.builder().addLimit(limit).build();
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String uri = request.getRequestURI();
        
        // Skip rate limiting for static assets or non-API routes if any
        if (!uri.startsWith("/api/")) {
            filterChain.doFilter(request, response);
            return;
        }

        String clientIp = getClientIP(request);
        boolean isStrictEndpoint = isStrictEndpoint(uri);
        
        Bucket bucket;
        if (isStrictEndpoint) {
            bucket = strictBuckets.computeIfAbsent(clientIp, k -> createNewStrictBucket());
        } else {
            bucket = standardBuckets.computeIfAbsent(clientIp, k -> createNewStandardBucket());
        }

        if (bucket.tryConsume(1)) {
            filterChain.doFilter(request, response);
        } else {
            log.warn("Rate limit exceeded for IP: {} on endpoint: {}", clientIp, uri);
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.setContentType("application/json");
            response.getWriter().write("{\"error\": \"Too many requests. Please try again later.\"}");
        }
    }

    private boolean isStrictEndpoint(String uri) {
        return uri.contains("/auth/request-otp") ||
               uri.contains("/analysis") ||
               uri.contains("/llm") ||
               uri.contains("/interview");
    }

    private String getClientIP(HttpServletRequest request) {
        String xfHeader = request.getHeader("X-Forwarded-For");
        if (xfHeader == null || xfHeader.isEmpty()) {
            return request.getRemoteAddr();
        }
        return xfHeader.split(",")[0];
    }
}
