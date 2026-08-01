package com.devlens.api.integration.github;

import lombok.Data;

@Data
public class GitHubCommitDto {
    private String sha;
    private CommitInfo commit;
    
    @Data
    public static class CommitInfo {
        private String message;
        private Committer committer;
    }
    
    @Data
    public static class Committer {
        private String date;
    }
}
