package com.devlens.learn;

import com.devlens.api.DevLensApiApplication;
import com.devlens.learn.dto.CreatePyqPaperRequest;
import com.devlens.learn.entity.LearnPyqPaper;
import com.devlens.learn.service.LearnPyqService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;

import java.util.List;
import java.util.UUID;

@SpringBootTest(classes = DevLensApiApplication.class)
public class LearnPyqServiceTest {

    @Autowired
    private LearnPyqService pyqService;

    @Test
    public void testPyqWorkflow() {
        // 1. Create a paper for Class 11 Physics
        CreatePyqPaperRequest request = new CreatePyqPaperRequest();
        request.setTitle("CBSE Class 11 Physics Annual Exam 2024 (Automated Test)");
        request.setTargetClass("Class 11");
        request.setSubject("Physics");
        request.setYear(2024);
        request.setPaperType("BOARD_EXAM");
        request.setPaperCode("55/1/1-TEST");
        request.setTotalMarks(70);
        request.setDurationMins(180);
        request.setDifficulty("MODERATE");
        request.setIsFree(true);

        LearnPyqPaper created = pyqService.createPaper(request);
        Assertions.assertNotNull(created.getId(), "Paper ID should not be null after creation");
        Assertions.assertEquals("Class 11", created.getTargetClass());
        Assertions.assertEquals("Physics", created.getSubject());
        Assertions.assertEquals(2024, created.getYear());

        UUID paperId = created.getId();

        // 2. Upload a mock PDF
        MockMultipartFile mockPdf = new MockMultipartFile(
                "file",
                "sample-physics.pdf",
                "application/pdf",
                "%PDF-1.4 test content".getBytes()
        );
        LearnPyqPaper withPdf = pyqService.uploadPaperPdf(paperId, mockPdf);
        Assertions.assertNotNull(withPdf.getPdfUrl(), "Paper PDF URL should be populated after upload");

        // 3. Query papers by targetClass
        List<LearnPyqPaper> papers = pyqService.getPapers("Class 11", "Physics", 2024);
        Assertions.assertFalse(papers.isEmpty(), "Papers list for Class 11 Physics should not be empty");
        boolean found = papers.stream().anyMatch(p -> p.getId().equals(paperId));
        Assertions.assertTrue(found, "Created paper should be found in query results");

        // 4. Clean up test paper
        pyqService.deletePaper(paperId);

        // 5. Verify deletion
        Assertions.assertThrows(RuntimeException.class, () -> {
            pyqService.getPaperById(paperId);
        });
        System.out.println("=== LEARN PYQ SERVICE TEST PASSED SUCCESSFULLY ===");
    }
}
