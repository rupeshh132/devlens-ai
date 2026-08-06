package com.devlens.api.integration.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GitHubCommitDto {
    private String sha;
    private CommitInfo commit;
    private Author author;

    @Data
    public static class CommitInfo {
        private String message;
        private Committer committer;
        private AuthorInfo author;
    }

    @Data
    public static class Committer {
        private String date;
    }

    @Data
    public static class AuthorInfo {
        private String name;
        private String date;
    }

    @Data
    public static class Author {
        private String login;
        @JsonProperty("avatar_url")
        private String avatarUrl;
    }
}
