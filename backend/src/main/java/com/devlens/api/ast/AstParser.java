package com.devlens.api.ast;

import java.nio.file.Path;

public interface AstParser {
    AstContext parse(Path filePath);
    boolean supports(Path filePath);
}
