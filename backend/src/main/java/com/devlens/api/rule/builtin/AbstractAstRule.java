package com.devlens.api.rule.builtin;

import com.devlens.api.ast.AstContext;
import com.devlens.api.ast.AstNode;
import com.devlens.api.ast.AstParser;
import com.devlens.api.rule.Rule;
import com.devlens.api.scanner.ScanContext;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public abstract class AbstractAstRule implements Rule {

    private final AstParser astParser;

    protected AbstractAstRule(AstParser astParser) {
        this.astParser = astParser;
    }

    @Override
    public boolean isEnabled() {
        return true; // Enabled by default
    }

    @Override
    public List<com.devlens.api.rule.RuleResult> execute(ScanContext context, Path filePath, Path relativePath) {
        List<com.devlens.api.rule.RuleResult> results = new ArrayList<>();
        
        if (astParser.supports(filePath)) {
            AstContext astContext = astParser.parse(filePath);
            if (astContext.isSuccessful()) {
                for (AstNode node : astContext.getNodes()) {
                    evaluateNode(node, relativePath, results);
                }
            }
        }
        
        return results;
    }

    protected abstract void evaluateNode(AstNode node, Path relativePath, List<com.devlens.api.rule.RuleResult> results);
}
