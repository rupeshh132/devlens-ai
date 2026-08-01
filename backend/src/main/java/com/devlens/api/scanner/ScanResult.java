package com.devlens.api.scanner;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class ScanResult {
    private long totalFiles = 0;
    private long totalLines = 0;
    private long blankLines = 0;
    private long commentLines = 0;
    private Map<String, Integer> languageDistribution = new HashMap<>();

    public void addFileResult(FileScanResult fileResult) {
        this.totalFiles++;
        this.totalLines += fileResult.getTotalLines();
        this.blankLines += fileResult.getBlankLines();
        this.commentLines += fileResult.getCommentLines();
        
        String language = fileResult.getLanguage();
        if (language != null) {
            this.languageDistribution.merge(language, 1, Integer::sum);
        }
    }
}
