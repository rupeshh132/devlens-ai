package com.devlens.api.rule;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RuleResult {
    private String ruleId;
    private RuleCategory category;
    private RuleSeverity severity;
    private String message;
    private String filePath;
    private Integer lineNumber;
}
