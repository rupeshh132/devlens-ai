package com.devlens.api.scanner;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Slf4j
@Component
public class FileScanner {

    public FileScanResult scanFile(Path file) {
        long totalLines = 0;
        long blankLines = 0;
        long commentLines = 0;
        String extension = getExtension(file.getFileName().toString());

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
        } catch (IOException e) {
            log.warn("Failed to read file: {}", file, e);
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
            case "h", "hpp" -> "C/C++ Header";
            case "cs" -> "C#";
            case "rb" -> "Ruby";
            case "php" -> "PHP";
            case "html", "htm" -> "HTML";
            case "css" -> "CSS";
            case "xml" -> "XML";
            case "json" -> "JSON";
            case "md" -> "Markdown";
            case "yaml", "yml" -> "YAML";
            case "sh", "bash" -> "Shell";
            case "sql" -> "SQL";
            default -> "Unknown";
        };
    }

    private boolean isCommentLine(String trimmedLine, String extension) {
        // Very basic comment detection (single-line comments only for simplicity in foundation)
        return switch (extension) {
            case "java", "js", "ts", "cpp", "c", "cs", "php", "go" -> trimmedLine.startsWith("//");
            case "py", "rb", "sh", "bash", "yaml", "yml" -> trimmedLine.startsWith("#");
            case "html", "xml" -> trimmedLine.startsWith("<!--");
            case "css" -> trimmedLine.startsWith("/*");
            case "sql" -> trimmedLine.startsWith("--");
            default -> false;
        };
    }
}
