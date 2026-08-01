package com.devlens.api.rule;

import com.devlens.api.scanner.IgnoreRules;
import com.devlens.api.scanner.ScanContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Slf4j
@Service
@RequiredArgsConstructor
public class RuleEngine {

    private final RuleRegistry ruleRegistry;

    public List<RuleResult> executeRules(ScanContext context) {
        log.info("Starting rule execution for repository {} in workspace {}",
                context.getRepositoryId(), context.getWorkspacePath());

        List<RuleResult> allFindings = new ArrayList<>();
        List<Rule> enabledRules = ruleRegistry.getEnabledRules();
        
        if (enabledRules.isEmpty()) {
            log.info("No active rules to execute.");
            return allFindings;
        }

        Path startPath = context.getWorkspacePath();

        if (!Files.exists(startPath) || !Files.isDirectory(startPath)) {
            log.error("Workspace path does not exist or is not a directory: {}", startPath);
            return allFindings;
        }

        try (Stream<Path> stream = Files.walk(startPath)) {
            stream.filter(Files::isRegularFile)
                  .filter(path -> !IgnoreRules.shouldIgnore(startPath.relativize(path)))
                  .forEach(file -> {
                      Path relativePath = startPath.relativize(file);
                      for (Rule rule : enabledRules) {
                          try {
                              List<RuleResult> findings = rule.execute(context, file, relativePath);
                              if (findings != null && !findings.isEmpty()) {
                                  allFindings.addAll(findings);
                              }
                          } catch (Exception e) {
                              log.warn("Rule {} failed to execute on file {}", rule.getId(), relativePath, e);
                          }
                      }
                  });
        } catch (IOException e) {
            log.error("Failed to walk workspace directory during rule execution: {}", startPath, e);
        }

        log.info("Finished rule execution for repository {}. Found {} total issues.",
                context.getRepositoryId(), allFindings.size());
        
        return allFindings;
    }
}
