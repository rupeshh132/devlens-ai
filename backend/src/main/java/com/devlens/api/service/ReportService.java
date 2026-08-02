package com.devlens.api.service;

import com.devlens.api.dto.ReportResponse;
import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.repository.AnalysisJobRepository;
import com.devlens.api.entity.Vulnerability;
import com.devlens.api.repository.VulnerabilityRepository;
import com.lowagie.text.Document;
import com.lowagie.text.Font;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.access.AccessDeniedException;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.time.Instant;
import java.util.UUID;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final AnalysisJobRepository analysisJobRepository;
    private final VulnerabilityRepository vulnerabilityRepository;

    @Transactional(readOnly = true)
    public ReportResponse getReport(UUID jobId, UUID userId) {
        AnalysisJob job = analysisJobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Analysis job not found"));

        if (!job.getRepository().getUser().getId().equals(userId)) {
            throw new AccessDeniedException("Unauthorized");
        }

        return ReportResponse.builder()
                .id(UUID.randomUUID())
                .analysisId(job.getId())
                .fileFormat("PDF")
                .storageUrl("/api/v1/analyses/" + job.getId() + "/report/pdf")
                .sizeBytes(1024L) // Mock size for now
                .generatedAt(Instant.now())
                .build();
    }

    @Transactional(readOnly = true)
    public InputStreamResource generatePdfReport(UUID jobId, UUID userId) {
        AnalysisJob job = analysisJobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Analysis job not found"));

        if (!job.getRepository().getUser().getId().equals(userId)) {
            throw new AccessDeniedException("Unauthorized");
        }

        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document document = new Document();
            PdfWriter.getInstance(document, out);
            document.open();

            Font titleFont = new Font(Font.HELVETICA, 24, Font.BOLD);
            Font headerFont = new Font(Font.HELVETICA, 16, Font.BOLD);
            Font normalFont = new Font(Font.HELVETICA, 12, Font.NORMAL);
            Font monoFont = new Font(Font.COURIER, 10, Font.NORMAL);

            document.add(new Paragraph("DevLens AI Code Analysis Report", titleFont));
            document.add(new Paragraph(" "));
            
            document.add(new Paragraph("Repository: " + job.getRepository().getName(), headerFont));
            document.add(new Paragraph("Score: " + (job.getScore() != null ? job.getScore() : "N/A") + "/100", headerFont));
            document.add(new Paragraph("Generated At: " + Instant.now().toString(), normalFont));
            document.add(new Paragraph(" "));
            
            document.add(new Paragraph("AI Summary", headerFont));
            document.add(new Paragraph(job.getSummary() != null ? job.getSummary() : "No summary available.", normalFont));
            document.add(new Paragraph(" "));

            document.add(new Paragraph("Identified Vulnerabilities & Suggestions", headerFont));
            document.add(new Paragraph(" "));

            List<Vulnerability> vulnerabilities = vulnerabilityRepository.findByAnalysisJobId(job.getId());

            if (vulnerabilities != null && !vulnerabilities.isEmpty()) {
                for (Vulnerability vuln : vulnerabilities) {
                    document.add(new Paragraph("File: " + vuln.getFilePath() + " (Line " + vuln.getLineNumber() + ")", new Font(Font.HELVETICA, 12, Font.BOLD)));
                    document.add(new Paragraph("Severity: " + vuln.getSeverity(), normalFont));
                    document.add(new Paragraph("Description: " + vuln.getDescription(), normalFont));
                    if (vuln.getSuggestedFix() != null && !vuln.getSuggestedFix().isEmpty()) {
                        document.add(new Paragraph("Suggested Fix:", normalFont));
                        document.add(new Paragraph(vuln.getSuggestedFix(), monoFont));
                    }
                    document.add(new Paragraph(" "));
                }
            } else {
                document.add(new Paragraph("No vulnerabilities detected! Great job.", normalFont));
            }

            document.close();
            return new InputStreamResource(new ByteArrayInputStream(out.toByteArray()));
        } catch (Exception e) {
            throw new RuntimeException("Failed to generate PDF report", e);
        }
    }
}
