package com.devlens.api.rule;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class RuleRegistry {

    private final Map<String, Rule> rules = new ConcurrentHashMap<>();
    
    // Allows injection of all spring beans that implement the Rule interface
    public RuleRegistry(List<Rule> injectedRules) {
        if (injectedRules != null) {
            for (Rule rule : injectedRules) {
                registerRule(rule);
            }
        }
    }

    public void registerRule(Rule rule) {
        log.info("Registering rule: {} [{}]", rule.getId(), rule.getName());
        rules.put(rule.getId(), rule);
    }

    public Rule getRule(String ruleId) {
        return rules.get(ruleId);
    }

    public List<Rule> getAllRules() {
        return new ArrayList<>(rules.values());
    }

    public List<Rule> getEnabledRules() {
        return rules.values().stream()
                .filter(Rule::isEnabled)
                .collect(Collectors.toList());
    }

    public List<Rule> getRulesByCategory(RuleCategory category) {
        return rules.values().stream()
                .filter(r -> r.getCategory() == category)
                .collect(Collectors.toList());
    }
}
