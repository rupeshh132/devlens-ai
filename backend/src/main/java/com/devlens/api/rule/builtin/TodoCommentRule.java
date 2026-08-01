package com.devlens.api.rule.builtin;

import com.devlens.api.rule.RuleCategory;
import com.devlens.api.rule.RuleResult;
import com.devlens.api.rule.RuleSeverity;
import org.springframework.stereotype.Component;

import java.nio.file.Path;
import java.util.List;

@Component
public class TodoCommentRule extends AbstractScannerRule {

    @Override
    public String getId() {
        return "TODO_COMMENT";
    }

    @Override
    public String getName() {
        return "TODO Comment Present";
    }

    @Override
    public String getDescription() {
        return "Code should not contain unresolved TODO comments.";
    }

    @Override
    public RuleCategory getCategory() {
        return RuleCategory.STYLE;
    }

    @Override
    public RuleSeverity getSeverity() {
        return RuleSeverity.INFO;
    }

    @Override
    protected void evaluateLine(String line, int lineNumber, Path relativePath, List<RuleResult> results) {
        if (line != null && (line.contains("TODO") || line.contains("FIXME"))) {
            results.add(RuleResult.builder()
                    .ruleId(getId())
                    .category(getCategory())
                    .severity(getSeverity())
                    .message("Found unresolved TODO/FIXME comment.")
                    .filePath(relativePath.toString())
                    .lineNumber(lineNumber)
                    .build());
        }
    }
}
