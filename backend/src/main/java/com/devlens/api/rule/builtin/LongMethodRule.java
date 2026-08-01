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
public class LongMethodRule extends AbstractAstRule {

    private static final int MAX_METHOD_LENGTH = 50;

    public LongMethodRule(AstParser astParser) {
        super(astParser);
    }

    @Override
    public String getId() {
        return "LONG_METHOD";
    }

    @Override
    public String getName() {
        return "Long Method";
    }

    @Override
    public String getDescription() {
        return "Methods should not exceed " + MAX_METHOD_LENGTH + " lines of code.";
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
        if (node.getType() == AstNodeType.METHOD) {
            int length = node.getEndLine() - node.getStartLine();
            if (length > MAX_METHOD_LENGTH) {
                results.add(RuleResult.builder()
                        .ruleId(getId())
                        .category(getCategory())
                        .severity(getSeverity())
                        .message(String.format("Method '%s' is too long (%d lines). Consider refactoring.", node.getName(), length))
                        .filePath(relativePath.toString())
                        .lineNumber(node.getStartLine())
                        .build());
            }
        }
    }
}
