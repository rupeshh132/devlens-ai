package com.devlens.api.integration.github;

import com.devlens.api.config.GitHubProperties;
import com.devlens.api.exception.GitHubIntegrationException;
import com.devlens.api.exception.GitHubRateLimitException;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

@Component
public class GitHubClient {

    private final RestClient restClient;

    public GitHubClient(GitHubProperties properties, RestClient.Builder restClientBuilder) {
        if (properties.getToken() != null && !properties.getToken().isBlank() && !properties.getToken().equals("mock-client-secret")) {
            restClientBuilder.defaultHeader("Authorization", "Bearer " + properties.getToken());
        }
        
        this.restClient = restClientBuilder
                .baseUrl(properties.getApiUrl())
                .defaultHeader("Accept", "application/vnd.github.v3+json")
                .defaultStatusHandler(
                        status -> status.isSameCodeAs(HttpStatusCode.valueOf(403)),
                        (request, response) -> {
                            throw new GitHubRateLimitException("GitHub API rate limit exceeded");
                        }
                )
                .defaultStatusHandler(
                        status -> status.isSameCodeAs(HttpStatusCode.valueOf(404)),
                        (request, response) -> {
                            throw new GitHubIntegrationException("GitHub repository not found or access denied");
                        }
                )
                .defaultStatusHandler(
                        HttpStatusCode::is4xxClientError,
                        (request, response) -> {
                            throw new GitHubIntegrationException("GitHub API client error: " + response.getStatusCode());
                        }
                )
                .defaultStatusHandler(
                        HttpStatusCode::is5xxServerError,
                        (request, response) -> {
                            throw new GitHubIntegrationException("GitHub API server error: " + response.getStatusCode());
                        }
                )
                .build();
    }

    public GitHubRepoDto getRepository(String owner, String repo) {
        return restClient.get()
                .uri("/repos/{owner}/{repo}", owner, repo)
                .retrieve()
                .body(GitHubRepoDto.class);
    }

    public Map<String, Long> getLanguages(String owner, String repo) {
        return restClient.get()
                .uri("/repos/{owner}/{repo}/languages", owner, repo)
                .retrieve()
                .body(new ParameterizedTypeReference<Map<String, Long>>() {});
    }

    public GitHubCommitDto getLastCommit(String owner, String repo, String branch) {
        List<GitHubCommitDto> commits = restClient.get()
                .uri("/repos/{owner}/{repo}/commits?sha={branch}&per_page=1", owner, repo, branch)
                .retrieve()
                .body(new ParameterizedTypeReference<List<GitHubCommitDto>>() {});
                
        return (commits != null && !commits.isEmpty()) ? commits.get(0) : null;
    }
}
