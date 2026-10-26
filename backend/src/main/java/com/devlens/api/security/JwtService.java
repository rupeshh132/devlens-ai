package com.devlens.api.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final JwtProperties jwtProperties;

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        String jti = java.util.UUID.randomUUID().toString();
        extraClaims.put("jti", jti);
        String subjectId = "";
        if (userDetails instanceof UserPrincipal) {
            subjectId = ((UserPrincipal) userDetails).getId().toString();
        } else if (userDetails instanceof com.devlens.learn.security.LearnUserPrincipal) {
            subjectId = ((com.devlens.learn.security.LearnUserPrincipal) userDetails).getId().toString();
        } else {
            subjectId = userDetails.getUsername();
        }
        
        return Jwts.builder()
                .claims(extraClaims)
                .subject(subjectId)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + jwtProperties.getExpiration()))
                .signWith(getSignInKey())
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String userIdString = extractUsername(token);
        if (userDetails instanceof UserPrincipal) {
            UserPrincipal userPrincipal = (UserPrincipal) userDetails;
            return (userIdString.equals(userPrincipal.getId().toString())) && !isTokenExpired(token);
        } else if (userDetails instanceof com.devlens.learn.security.LearnUserPrincipal) {
            com.devlens.learn.security.LearnUserPrincipal learnPrincipal = (com.devlens.learn.security.LearnUserPrincipal) userDetails;
            return (userIdString.equals(learnPrincipal.getId().toString())) && !isTokenExpired(token);
        }
        return false;
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    
    public String extractJti(String token) {
        return extractClaim(token, Claims::getId);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey getSignInKey() {
        byte[] keyBytes = jwtProperties.getSecretKey().getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
