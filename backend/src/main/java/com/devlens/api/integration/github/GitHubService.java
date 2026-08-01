package com.devlens.api.integration.github;

import com.devlens.api.exception.GitHubIntegrationException;
import com.devlens.api.exception.GitHubRateLimitException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@Service
@RequiredArgsConstructor
public class GitHubService {

    private final GitHubClient gitHubClient;
    private final GitHubMapper gitHubMapper;

    private static final Pattern GITHUB_URL_PATTERN = Pattern.compile("^https://github\\.com/([^/]+)/([^/]+)/?$");

    public boolean validateUrl(String url) {
        if (url == null || url.isBlank()) return false;
        Matcher matcher = GITHUB_URL_PATTERN.matcher(url);
        return matcher.matches();
    }

    public GitHubRepoOwner extractOwnerAndRepo(String url) {
        Matcher matcher = GITHUB_URL_PATTERN.matcher(url);
        if (!matcher.matches()) {
            throw new GitHubIntegrationException("Invalid GitHub URL format. Must be https://github.com/owner/repo");
        }
        return new GitHubRepoOwner(matcher.group(1), matcher.group(2).replace(".git", ""));
    }

    @Retryable(
            retryFor = {GitHubRateLimitException.class, GitHubIntegrationException.class},
            maxAttempts = 3,
            backoff = @Backoff(delay = 2000, multiplier = 2)
    )
    public GitHubMetadata syncRepository(String url) {
        GitHubRepoOwner repoInfo = extractOwnerAndRepo(url);
        
        log.info("Syncing repository: {}/{}", repoInfo.owner(), repoInfo.repo());
        
        GitHubRepoDto repoDto = gitHubClient.getRepository(repoInfo.owner(), repoInfo.repo());
        
        Map<String, Long> languages = gitHubClient.getLanguages(repoInfo.owner(), repoInfo.repo());
        
        GitHubCommitDto lastCommit = null;
        if (repoDto.getDefaultBranch() != null) {
            lastCommit = gitHubClient.getLastCommit(repoInfo.owner(), repoInfo.repo(), repoDto.getDefaultBranch());
        }
        
        return gitHubMapper.mapToMetadata(repoDto, languages, lastCommit);
    }
    
    public record GitHubRepoOwner(String owner, String repo) {}
}
