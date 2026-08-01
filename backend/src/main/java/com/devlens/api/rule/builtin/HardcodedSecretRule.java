package com.devlens.api.rule.builtin;

import com.devlens.api.rule.RuleCategory;
import com.devlens.api.rule.RuleResult;
import com.devlens.api.rule.RuleSeverity;
import org.springframework.stereotype.Component;

import java.nio.file.Path;
import java.util.List;
import java.util.regex.Pattern;

@Component
public class HardcodedSecretRule extends AbstractScannerRule {

    // A very basic regex to catch common hardcoded secrets (tokens, passwords, keys)
    private static final Pattern SECRET_PATTERN = Pattern.compile(
            "(?i)(password|secret|api_key|apikey|token|auth)\\s*(=|:)\\s*[\"'][^\"']+[\"']"
    );

    @Override
    public String getId() {
        return "HARDCODED_SECRET";
    }

    @Override
    public String getName() {
        return "Hardcoded Secret";
    }

    @Override
    public String getDescription() {
        return "Code should not contain hardcoded secrets or credentials.";
    }

    @Override
    public RuleCategory getCategory() {
        return RuleCategory.SECURITY;
    }

    @Override
    public RuleSeverity getSeverity() {
        return RuleSeverity.CRITICAL;
    }

    @Override
    protected void evaluateLine(String line, int lineNumber, Path relativePath, List<RuleResult> results) {
        if (line != null && SECRET_PATTERN.matcher(line).find()) {
            results.add(RuleResult.builder()
                    .ruleId(getId())
                    .category(getCategory())
                    .severity(getSeverity())
                    .message("Potential hardcoded secret detected.")
                    .filePath(relativePath.toString())
                    .lineNumber(lineNumber)
                    .build());
        }
    }
}
