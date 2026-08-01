package com.devlens.api.analysis;

public interface AnalysisStage {
    
    /**
     * @return The name of the stage (e.g., "Clone Repository", "Scan Files", "Execute Rules").
     */
    String getName();

    /**
     * Executes this stage in the analysis pipeline.
     * 
     * @param context the context carrying data between stages
     * @throws Exception if the stage fails critically
     */
    void execute(AnalysisContext context) throws Exception;
    
    /**
     * @return The weight of this stage for progress calculation (1-100).
     */
    int getProgressWeight();
}
