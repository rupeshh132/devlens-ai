package com.devlens.api.integration.github;

import com.devlens.api.entity.RepositoryVisibility;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class GitHubMapper {

    public GitHubMetadata mapToMetadata(GitHubRepoDto repoDto, Map<String, Long> languages, GitHubCommitDto lastCommit) {
        GitHubMetadata metadata = new GitHubMetadata();
        
        metadata.setName(repoDto.getName());
        metadata.setOwner(repoDto.getOwner() != null ? repoDto.getOwner().getLogin() : "");
        metadata.setUrl(repoDto.getHtmlUrl());
        metadata.setDefaultBranch(repoDto.getDefaultBranch());
        metadata.setVisibility(repoDto.isPrivate() ? RepositoryVisibility.PRIVATE : RepositoryVisibility.PUBLIC);
        
        metadata.setPrimaryLanguage(repoDto.getLanguage());
        metadata.setDescription(repoDto.getDescription());
        metadata.setStars(repoDto.getStargazersCount() != null ? repoDto.getStargazersCount() : 0);
        
        metadata.setLanguages(languages);
        
        if (lastCommit != null) {
            metadata.setLastCommitSha(lastCommit.getSha());
            if (lastCommit.getCommit() != null) {
                metadata.setLastCommitMessage(lastCommit.getCommit().getMessage());
                if (lastCommit.getCommit().getCommitter() != null) {
                    metadata.setLastCommitDate(lastCommit.getCommit().getCommitter().getDate());
                }
            }
        }
        
        return metadata;
    }
}
