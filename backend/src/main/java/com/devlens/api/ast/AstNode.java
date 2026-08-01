package com.devlens.api.ast;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AstNode {
    private AstNodeType type;
    private String name;
    private int startLine;
    private int endLine;
    
    // Optional: store the parent or fully qualified name if needed
    private String details;
}
