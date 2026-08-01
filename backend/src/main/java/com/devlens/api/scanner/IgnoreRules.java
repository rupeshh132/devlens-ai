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
            ".vscode"
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
        return false;
    }
}
