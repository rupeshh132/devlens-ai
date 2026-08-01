package com.devlens.api.ast;

import lombok.Data;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@Data
public class AstContext {
    private Path filePath;
    private boolean successful;
    private String errorMessage;
    
    private List<AstNode> nodes = new ArrayList<>();
    
    public void addNode(AstNode node) {
        if (node != null) {
            nodes.add(node);
        }
    }
}
