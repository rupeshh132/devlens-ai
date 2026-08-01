package com.devlens.api.rule.builtin;

import com.devlens.api.rule.Rule;
import com.devlens.api.rule.RuleResult;
import com.devlens.api.scanner.ScanContext;
import lombok.extern.slf4j.Slf4j;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@Slf4j
public abstract class AbstractScannerRule implements Rule {

    @Override
    public boolean isEnabled() {
        return true; // Enabled by default
    }

    @Override
    public List<RuleResult> execute(ScanContext context, Path filePath, Path relativePath) {
        List<RuleResult> results = new ArrayList<>();
        
        if (!supports(filePath)) {
            return results;
        }

        try (BufferedReader reader = Files.newBufferedReader(filePath)) {
            String line;
            int lineNumber = 1;
            while ((line = reader.readLine()) != null) {
                evaluateLine(line, lineNumber, relativePath, results);
                lineNumber++;
            }
        } catch (IOException e) {
            log.warn("Failed to read file for scanner rule '{}': {}", getId(), filePath, e);
        }
        
        return results;
    }
    
    /**
     * Determines whether this rule should run for a given file.
     */
    protected boolean supports(Path filePath) {
        return true; // By default scan all text files, override to limit by extension
    }

    /**
     * Evaluates a single line of text.
     */
    protected abstract void evaluateLine(String line, int lineNumber, Path relativePath, List<RuleResult> results);
}
