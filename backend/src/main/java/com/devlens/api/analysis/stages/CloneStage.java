package com.devlens.api.analysis.stages;

import com.devlens.api.analysis.AnalysisContext;
import com.devlens.api.analysis.AnalysisStage;
import com.devlens.api.integration.git.GitCloneService;
import com.devlens.api.integration.git.WorkspaceManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.nio.file.Path;

@Slf4j
@Component
@Order(1)
@RequiredArgsConstructor
public class CloneStage implements AnalysisStage {

    private final GitCloneService gitCloneService;
    private final WorkspaceManager workspaceManager;

    @Override
    public String getName() {
        return "Clone Repository";
    }

    @Override
    public void execute(AnalysisContext context) throws Exception {
        log.info("Starting CloneStage for repository: {}", context.getRepository().getId());
        gitCloneService.pullLatest(
                context.getRepository().getId(),
                context.getRepository().getUrl(),
                context.getRepository().getBranch()
        );
        Path workspacePath = workspaceManager.getWorkspacePath(context.getRepository().getId());
        context.setWorkspacePath(workspacePath);
    }

    @Override
    public int getProgressWeight() {
        return 30; // 30% of total job progress
    }
}
