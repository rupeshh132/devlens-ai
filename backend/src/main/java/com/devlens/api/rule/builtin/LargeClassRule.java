package com.devlens.api.rule.builtin;

import com.devlens.api.ast.AstNode;
import com.devlens.api.ast.AstNodeType;
import com.devlens.api.ast.AstParser;
import com.devlens.api.rule.RuleCategory;
import com.devlens.api.rule.RuleResult;
import com.devlens.api.rule.RuleSeverity;
import org.springframework.stereotype.Component;

import java.nio.file.Path;
import java.util.List;

@Component
public class LargeClassRule extends AbstractAstRule {

    private static final int MAX_CLASS_LENGTH = 500;

    public LargeClassRule(AstParser astParser) {
        super(astParser);
    }

    @Override
    public String getId() {
        return "LARGE_CLASS";
    }

    @Override
    public String getName() {
        return "Large Class";
    }

    @Override
    public String getDescription() {
        return "Classes should not exceed " + MAX_CLASS_LENGTH + " lines of code.";
    }

    @Override
    public RuleCategory getCategory() {
        return RuleCategory.COMPLEXITY;
    }

    @Override
    public RuleSeverity getSeverity() {
        return RuleSeverity.MEDIUM;
    }

    @Override
    protected void evaluateNode(AstNode node, Path relativePath, List<RuleResult> results) {
        if (node.getType() == AstNodeType.CLASS) {
            int length = node.getEndLine() - node.getStartLine();
            if (length > MAX_CLASS_LENGTH) {
                results.add(RuleResult.builder()
                        .ruleId(getId())
                        .category(getCategory())
                        .severity(getSeverity())
                        .message(String.format("Class '%s' is too large (%d lines). Consider splitting it.", node.getName(), length))
                        .filePath(relativePath.toString())
                        .lineNumber(node.getStartLine())
                        .build());
            }
        }
    }
}
