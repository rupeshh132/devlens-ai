package com.devlens.api.scanner;

import java.nio.file.Path;
import java.util.Set;

public class IgnoreRules {
    private static final Set<String> IGNORED_DIRECTORIES = Set.of(
            ".git",
            "node_modules",
            "target",
            "build",
            "dist",
            ".idea",
            ".vscode",
            "workspaces",
            ".system_generated"
    );

    private static final Set<String> IGNORED_EXTENSIONS = Set.of(
            "png", "jpg", "jpeg", "gif", "ico", "bmp", "svg", "webp",
            "pdf", "doc", "docx", "zip", "tar", "gz", "7z", "jar", "war",
            "exe", "dll", "so", "dylib", "class", "pyc", "o", "obj",
            "woff", "woff2", "ttf", "eot", "otf",
            "mp4", "mp3", "wav", "avi", "mov", "mkv",
            "db", "sqlite", "log", "lock"
    );

    public static boolean shouldIgnore(Path path) {
        if (path == null) {
            return true;
        }
        for (Path part : path) {
            if (IGNORED_DIRECTORIES.contains(part.toString())) {
                return true;
            }
        }

        String filename = path.getFileName().toString().toLowerCase();
        int dotIndex = filename.lastIndexOf('.');
        if (dotIndex > 0 && dotIndex < filename.length() - 1) {
            String ext = filename.substring(dotIndex + 1);
            if (IGNORED_EXTENSIONS.contains(ext)) {
                return true;
            }
        }

        return false;
    }
}
