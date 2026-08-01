package com.devlens.api.scanner;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

@Slf4j
@Service
@RequiredArgsConstructor
public class ScannerService {

    private final FileScanner fileScanner;

    public ScanResult scanWorkspace(ScanContext context) {
        log.info("Starting static code scan for repository {} in workspace {}", 
                context.getRepositoryId(), context.getWorkspacePath());
        
        ScanResult result = new ScanResult();
        Path startPath = context.getWorkspacePath();

        if (!Files.exists(startPath) || !Files.isDirectory(startPath)) {
            log.error("Workspace path does not exist or is not a directory: {}", startPath);
            return result;
        }

        try (Stream<Path> stream = Files.walk(startPath)) {
            stream.filter(Files::isRegularFile)
                  .filter(path -> !IgnoreRules.shouldIgnore(startPath.relativize(path)))
                  .forEach(file -> {
                      FileScanResult fileResult = fileScanner.scanFile(file);
                      result.addFileResult(fileResult);
                  });
        } catch (IOException e) {
            log.error("Failed to walk workspace directory: {}", startPath, e);
        }

        log.info("Finished static code scan for repository {}. Scanned {} files, {} total lines.", 
                context.getRepositoryId(), result.getTotalFiles(), result.getTotalLines());
        
        return result;
    }
}
