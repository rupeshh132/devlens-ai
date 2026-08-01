package com.devlens.api.scanner;

import lombok.Builder;
import lombok.Data;

import java.nio.file.Path;
import java.util.UUID;

@Data
@Builder
public class ScanContext {
    private UUID repositoryId;
    private Path workspacePath;
    private UUID jobId;
}
