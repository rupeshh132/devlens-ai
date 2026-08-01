package com.devlens.api.service;

import com.devlens.api.dto.ReportResponse;
import com.devlens.api.entity.AnalysisJob;
import com.devlens.api.repository.AnalysisJobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.access.AccessDeniedException;

import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final AnalysisJobRepository analysisJobRepository;

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

        // Generating a dummy PDF for now to fulfill the requirement without a heavy PDF library
        String safeRepoName = job.getRepository().getName().replace("(", "\\(").replace(")", "\\)");
        String dummyPdfContent = "%PDF-1.4\n" +
                "1 0 obj\n" +
                "<< /Type /Catalog /Pages 2 0 R >>\n" +
                "endobj\n" +
                "2 0 obj\n" +
                "<< /Type /Pages /Kids [3 0 R] /Count 1 >>\n" +
                "endobj\n" +
                "3 0 obj\n" +
                "<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>\n" +
                "endobj\n" +
                "4 0 obj\n" +
                "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\n" +
                "endobj\n" +
                "5 0 obj\n" +
                "<< /Length 64 >>\n" +
                "stream\n" +
                "BT\n" +
                "/F1 24 Tf\n" +
                "100 700 Td\n" +
                "(DevLens AI Report: " + safeRepoName + ") Tj\n" +
                "ET\n" +
                "endstream\n" +
                "endobj\n" +
                "xref\n" +
                "0 6\n" +
                "0000000000 65535 f \n" +
                "0000000009 00000 n \n" +
                "0000000058 00000 n \n" +
                "0000000115 00000 n \n" +
                "0000000223 00000 n \n" +
                "0000000311 00000 n \n" +
                "trailer\n" +
                "<< /Size 6 /Root 1 0 R >>\n" +
                "startxref\n" +
                "426\n" +
                "%%EOF";

        byte[] pdfBytes = dummyPdfContent.getBytes(StandardCharsets.UTF_8);
        return new InputStreamResource(new ByteArrayInputStream(pdfBytes));
    }
}
