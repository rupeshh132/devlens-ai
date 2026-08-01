package com.devlens.api.scanner;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FileScanResult {
    private long totalLines;
    private long blankLines;
    private long commentLines;
    private String language;
}
