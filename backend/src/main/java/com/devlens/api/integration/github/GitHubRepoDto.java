package com.devlens.api.integration.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GitHubRepoDto {
    private String name;
    private GitHubOwner owner;
    
    @JsonProperty("html_url")
    private String htmlUrl;
    
    @JsonProperty("default_branch")
    private String defaultBranch;
    
    @JsonProperty("private")
    private boolean isPrivate;
    
    private String language;
    private String description;

    @JsonProperty("stargazers_count")
    private Integer stargazersCount;

    @Data
    public static class GitHubOwner {
        private String login;
    }
}
