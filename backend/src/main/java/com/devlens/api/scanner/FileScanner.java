package com.devlens.api.scanner;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.MalformedInputException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Set;

@Slf4j
@Component
public class FileScanner {

    private static final Set<String> BINARY_EXTENSIONS = Set.of(
            "png", "jpg", "jpeg", "gif", "ico", "bmp", "svg", "webp",
            "pdf", "doc", "docx", "zip", "tar", "gz", "7z", "jar", "war",
            "exe", "dll", "so", "dylib", "class", "pyc", "o", "obj",
            "woff", "woff2", "ttf", "eot", "otf",
            "mp4", "mp3", "wav", "avi", "mov", "mkv",
            "db", "sqlite"
    );

    public FileScanResult scanFile(Path file) {
        long totalLines = 0;
        long blankLines = 0;
        long commentLines = 0;
        String extension = getExtension(file.getFileName().toString());

        if (BINARY_EXTENSIONS.contains(extension)) {
            return FileScanResult.builder()
                    .totalLines(0)
                    .blankLines(0)
                    .commentLines(0)
                    .language("Binary")
                    .build();
        }

        try (BufferedReader reader = Files.newBufferedReader(file)) {
            String line;
            while ((line = reader.readLine()) != null) {
                totalLines++;
                String trimmed = line.trim();

                if (trimmed.isEmpty()) {
                    blankLines++;
                } else if (isCommentLine(trimmed, extension)) {
                    commentLines++;
                }
            }
        } catch (MalformedInputException e) {
            // Log as debug/info without filling stack traces for binary or non-UTF8 files
            log.debug("Skipping binary/non-UTF8 file: {}", file.getFileName());
        } catch (IOException e) {
            log.warn("Failed to read file: {}", file.getFileName());
        }

        return FileScanResult.builder()
                .totalLines(totalLines)
                .blankLines(blankLines)
                .commentLines(commentLines)
                .language(detectLanguage(extension))
                .build();
    }

    private String getExtension(String fileName) {
        int dotIndex = fileName.lastIndexOf('.');
        if (dotIndex > 0 && dotIndex < fileName.length() - 1) {
            return fileName.substring(dotIndex + 1).toLowerCase();
        }
        return "";
    }

    private String detectLanguage(String extension) {
        return switch (extension) {
            case "java" -> "Java";
            case "js" -> "JavaScript";
            case "ts" -> "TypeScript";
            case "py" -> "Python";
            case "go" -> "Go";
            case "cpp", "cxx", "cc" -> "C++";
            case "c" -> "C";
            case "cs" -> "C#";
            case "html" -> "HTML";
            case "css" -> "CSS";
            case "json" -> "JSON";
            case "xml" -> "XML";
            case "yml", "yaml" -> "YAML";
            case "md" -> "Markdown";
            case "sql" -> "SQL";
            case "sh", "bash" -> "Shell";
            default -> "Text";
        };
    }

    private boolean isCommentLine(String line, String extension) {
        return switch (extension) {
            case "java", "js", "ts", "cpp", "c", "cs", "go" ->
                    line.startsWith("//") || line.startsWith("/*") || line.startsWith("*");
            case "py", "sh", "bash", "yml", "yaml" ->
                    line.startsWith("#");
            case "html", "xml" ->
                    line.startsWith("<!--");
            case "sql" ->
                    line.startsWith("--") || line.startsWith("/*");
            default -> false;
        };
    }
}
