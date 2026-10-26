package com.devlens.learn.dto;

import lombok.Data;
import java.util.List;

@Data
public class CreatePyqPaperRequest {
    private String title;
    private String targetClass;
    private String subject;
    private Integer year;
    private String paperType;
    private String paperCode;
    private Integer totalMarks;
    private Integer durationMins;
    private String difficulty;
    private Boolean isFree;
    private Integer totalQuestions;
    private String pdfUrl;
    private String solutionPdfUrl;
    private List<String> generalInstructions;
}
