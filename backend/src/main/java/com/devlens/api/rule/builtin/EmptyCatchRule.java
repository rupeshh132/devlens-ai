package com.devlens.api.rule.builtin;

import com.devlens.api.rule.Rule;
import com.devlens.api.rule.RuleCategory;
import com.devlens.api.rule.RuleResult;
import com.devlens.api.rule.RuleSeverity;
import com.devlens.api.scanner.ScanContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@Component
public class EmptyCatchRule implements Rule {

    // Regex to find catch block with nothing inside (allows whitespace/comments but no actual code)
    // catch (Exception e) { }
    // Or catch (Exception e) { /* ignored */ }
    private static final Pattern EMPTY_CATCH_PATTERN = Pattern.compile(
            "catch\\s*\\([^)]+\\)\\s*\\{\\s*(?://.*|/\\*.*\\*/\\s*)*\\}", Pattern.DOTALL
    );

    @Override
    public String getId() {
        return "EMPTY_CATCH";
    }

    @Override
    public String getName() {
        return "Empty Catch Block";
    }

    @Override
    public String getDescription() {
        return "Catch blocks should not be empty. Exceptions should be handled or logged.";
    }

    @Override
    public RuleCategory getCategory() {
        return RuleCategory.BEST_PRACTICE;
    }

    @Override
    public RuleSeverity getSeverity() {
        return RuleSeverity.HIGH;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public List<RuleResult> execute(ScanContext context, Path filePath, Path relativePath) {
        List<RuleResult> results = new ArrayList<>();
        
        if (!filePath.toString().endsWith(".java")) {
            return results;
        }

        try {
            String content = Files.readString(filePath);
            Matcher matcher = EMPTY_CATCH_PATTERN.matcher(content);
            
            while (matcher.find()) {
                // Approximate line number by counting newlines up to the match
                int lineNumber = getLineNumber(content, matcher.start());
                results.add(RuleResult.builder()
                        .ruleId(getId())
                        .category(getCategory())
                        .severity(getSeverity())
                        .message("Empty catch block detected.")
                        .filePath(relativePath.toString())
                        .lineNumber(lineNumber)
                        .build());
            }
        } catch (IOException e) {
            log.warn("Failed to read file for rule '{}': {}", getId(), filePath, e);
        }
        
        return results;
    }
    
    private int getLineNumber(String content, int index) {
        int lines = 1;
        for (int i = 0; i < index && i < content.length(); i++) {
            if (content.charAt(i) == '\n') {
                lines++;
            }
        }
        return lines;
    }
}
