package com.devlens.api.scanner;

import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.entity.Vulnerability;
import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.api.repository.VulnerabilityRepository;
import com.devlens.api.service.GeminiClientService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

@Slf4j
@Service
@RequiredArgsConstructor
public class ScannerService {

    private final FileScanner fileScanner;
    private final GeminiClientService geminiClientService;
    private final ObjectMapper objectMapper;
    private final AnalysisJobRepository jobRepository;
    private final VulnerabilityRepository vulnerabilityRepository;

    @Transactional
    public ScanResult scanWorkspace(ScanContext context) {
        log.info("Starting static code scan for repository {} in workspace {}", 
                context.getRepositoryId(), context.getWorkspacePath());
        
        ScanResult result = new ScanResult();
        Path startPath = context.getWorkspacePath();

        if (!Files.exists(startPath) || !Files.isDirectory(startPath)) {
            log.error("Workspace path does not exist or is not a directory: {}", startPath);
            return result;
        }

        StringBuilder codeBuilder = new StringBuilder();

        try (Stream<Path> stream = Files.walk(startPath)) {
            stream.filter(Files::isRegularFile)
                  .filter(path -> !IgnoreRules.shouldIgnore(startPath.relativize(path)))
                  .forEach(file -> {
                      FileScanResult fileResult = fileScanner.scanFile(file);
                      result.addFileResult(fileResult);

                      // Concatenate code for AI analysis
                      String fileName = startPath.relativize(file).toString();
                      if (fileName.endsWith(".java") || fileName.endsWith(".ts") || fileName.endsWith(".js") || fileName.endsWith(".py")) {
                          try {
                              String content = Files.readString(file);
                              codeBuilder.append("--- FILE: ").append(fileName).append(" ---\n");
                              codeBuilder.append(content).append("\n\n");
                          } catch (Exception ignored) {}
                      }
                  });
        } catch (IOException e) {
            log.error("Failed to walk workspace directory: {}", startPath, e);
        }

        log.info("Finished basic static code scan. Now starting AI Analysis...");

        try {
            // Truncate to avoid huge prompts for MVP
            String codeContent = codeBuilder.toString();
            if (codeContent.length() > 50000) {
                codeContent = codeContent.substring(0, 50000);
            }

            String aiResultJson = geminiClientService.analyzeCode(codeContent);
            JsonNode root = objectMapper.readTree(aiResultJson);

            AnalysisJob job = jobRepository.findById(context.getJobId()).orElseThrow();
            if (root.has("score")) {
                job.setScore(root.get("score").asDouble());
            }
            if (root.has("summary")) {
                job.setSummary(root.get("summary").asText());
            }
            jobRepository.save(job);

            if (root.has("vulnerabilities") && root.get("vulnerabilities").isArray()) {
                for (JsonNode vulnNode : root.get("vulnerabilities")) {
                    Vulnerability vulnerability = Vulnerability.builder()
                            .analysisJob(job)
                            .filePath(vulnNode.path("filePath").asText("Unknown"))
                            .lineNumber(vulnNode.path("lineNumber").asInt(0))
                            .severity(vulnNode.path("severity").asText("INFO"))
                            .description(vulnNode.path("description").asText("No description"))
                            .suggestedFix(vulnNode.path("suggestedFix").asText(""))
                            .build();
                    vulnerabilityRepository.save(vulnerability);
                }
            }

        } catch (Exception e) {
            log.error("AI Analysis failed", e);
        }

        log.info("Finished static code scan for repository {}. Scanned {} files, {} total lines.", 
                context.getRepositoryId(), result.getTotalFiles(), result.getTotalLines());
        
        return result;
    }
}
