package com.devlens.api.controller;

import com.devlens.api.entity.Repository;
import com.devlens.api.repository.RepositoryRepository;
import com.devlens.api.service.AnalysisJobService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import org.springframework.beans.factory.annotation.Value;

@RestController
@RequestMapping("/api/v1/webhooks")
@RequiredArgsConstructor
@Slf4j
public class WebhookController {

    private final RepositoryRepository repositoryRepository;
    private final AnalysisJobService analysisJobService;
    private final ObjectMapper objectMapper;

    @Value("${GITHUB_WEBHOOK_SECRET:dummy_webhook_secret}")
    private String githubWebhookSecret;

    private boolean verifySignature(String payload, String signature) {
        if (signature == null || !signature.startsWith("sha256=")) {
            return false;
        }
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(githubWebhookSecret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            mac.init(secretKeySpec);
            byte[] hmacBytes = mac.doFinal(payload.getBytes(StandardCharsets.UTF_8));
            
            StringBuilder sb = new StringBuilder("sha256=");
            for (byte b : hmacBytes) {
                sb.append(String.format("%02x", b));
            }
            
            String expectedSignature = sb.toString();
            return MessageDigest.isEqual(expectedSignature.getBytes(), signature.getBytes());
        } catch (Exception e) {
            log.error("Error verifying webhook signature", e);
            return false;
        }
    }

    @PostMapping("/github")
    public ResponseEntity<String> handleGithubWebhook(
            @RequestHeader(value = "X-GitHub-Event", required = false) String eventType,
            @RequestHeader(value = "X-Hub-Signature-256", required = false) String signature,
            @RequestBody String payload) {

        if (!verifySignature(payload, signature)) {
            log.warn("Invalid or missing webhook signature");
            return ResponseEntity.status(401).body("Invalid or missing webhook signature");
        }

        log.info("Received GitHub Webhook Event: {}", eventType);

        if (!"push".equals(eventType)) {
            // We only care about push events for auto-analysis
            return ResponseEntity.ok("Ignored non-push event");
        }

        try {
            JsonNode rootNode = objectMapper.readTree(payload);
            JsonNode repoNode = rootNode.path("repository");
            
            if (repoNode.isMissingNode()) {
                return ResponseEntity.badRequest().body("Missing repository data in payload");
            }

            String cloneUrl = repoNode.path("clone_url").asText();
            String fullName = repoNode.path("full_name").asText();

            log.info("Push event detected for repository: {} ({})", fullName, cloneUrl);

            // Find all repositories matching this clone URL or name
            // (Assuming URL is the primary match, but falling back to name could work)
            List<Repository> matchedRepos = repositoryRepository.findByUrl(cloneUrl);
            
            if (matchedRepos.isEmpty()) {
                log.info("Repository not found in DevLens database. Ignoring webhook.");
                return ResponseEntity.ok("Repository not tracked by DevLens");
            }

            for (Repository repo : matchedRepos) {
                log.info("Queueing new Analysis Job for repository ID: {}", repo.getId());
                analysisJobService.queueJob(repo.getId());
            }

            return ResponseEntity.ok("Analysis triggered successfully");

        } catch (Exception e) {
            log.error("Error processing GitHub webhook", e);
            return ResponseEntity.internalServerError().body("Error processing webhook");
        }
    }
}
