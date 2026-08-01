package com.devlens.api.rule;

import com.devlens.api.scanner.ScanContext;

import java.nio.file.Path;
import java.util.List;

public interface Rule {
    String getId();
    String getName();
    String getDescription();
    RuleCategory getCategory();
    RuleSeverity getSeverity();
    boolean isEnabled();
    
    /**
     * Executes the rule against a specific file.
     *
     * @param context the scanning context
     * @param filePath the absolute path to the file being scanned
     * @param relativePath the relative path of the file within the repository
     * @return a list of findings (RuleResult) if the rule is violated, or an empty list.
     */
    List<RuleResult> execute(ScanContext context, Path filePath, Path relativePath);
}
