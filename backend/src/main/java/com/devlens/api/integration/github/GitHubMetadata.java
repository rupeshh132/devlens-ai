package com.devlens.api.integration.github;

import com.devlens.api.entity.RepositoryVisibility;
import lombok.Data;

import java.util.Map;

@Data
public class GitHubMetadata {
    private String name;
    private String owner;
    private String url;
    private String defaultBranch;
    private RepositoryVisibility visibility;
    private String primaryLanguage;
    private String description;
    private Integer stars;
    private Map<String, Long> languages;
    private String lastCommitSha;
    private String lastCommitMessage;
    private String lastCommitDate;
}
