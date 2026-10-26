package com.devlens.api.service;

import com.devlens.api.exception.AiRateLimitException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Optimized AI client service — powered by Groq Dual-Model Architecture:
 * 1. FAST_MODEL (llama-3.1-8b-instant): 14,400 TPM capacity for light tasks (ATS score, Interview questions, Skill gap)
 * 2. HEAVY_MODEL (llama-3.3-70b-versatile): Deep intelligence for Code Security Audits and Resume Tailoring
 */
@Service
@Slf4j
public class GroqClientService {

    public static final String FAST_MODEL = "openai/gpt-oss-20b";
    public static final String HEAVY_MODEL = "openai/gpt-oss-120b";

    private final RestClient restClient;
    private final String groqApiUrl;
    private final String groqApiKey;
    private final String defaultGroqModel;
    private final ObjectMapper objectMapper;
    private final com.devlens.api.security.PromptSanitizer promptSanitizer;

    public GroqClientService(
            @Value("${groq.api.url}") String groqApiUrl,
            @Value("${groq.api.key}") String groqApiKey,
            @Value("${groq.api.model:openai/gpt-oss-120b}") String defaultGroqModel,
            ObjectMapper objectMapper,
            com.devlens.api.security.PromptSanitizer promptSanitizer) {
        this.restClient = RestClient.builder().build();
        this.groqApiUrl = groqApiUrl;
        this.groqApiKey = groqApiKey;
        this.defaultGroqModel = defaultGroqModel;
        this.objectMapper = objectMapper;
        this.promptSanitizer = promptSanitizer;
    }

    @lombok.Data
    @lombok.AllArgsConstructor
    @lombok.NoArgsConstructor
    @lombok.Builder
    public static class GroqCallResult {
        private String content;
        private String model;
        private int promptTokens;
        private int completionTokens;
        private int totalTokens;
        private long latencyMs;
    }

    // ─── Dual-Model Shared Helper ────────────────────────────────────────────
    public GroqCallResult callGroqWithUsage(String prompt, String context, String targetModel) {
        long startTime = System.currentTimeMillis();
        String selectedModel = (targetModel != null) ? targetModel : defaultGroqModel;
        log.info("Calling Groq AI [{}] using model {}", context, selectedModel);

        Map<String, Object> message = new HashMap<>();
        message.put("role", "user");
        message.put("content", prompt);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", selectedModel);
        requestBody.put("messages", List.of(message));
        requestBody.put("temperature", 0.7);
        requestBody.put("max_tokens", 4096);

        try {
            String responseStr = restClient.post()
                    .uri(groqApiUrl)
                    .header("Authorization", "Bearer " + groqApiKey)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(requestBody)
                    .retrieve()
                    .body(String.class);

            long latency = System.currentTimeMillis() - startTime;
            JsonNode rootNode = objectMapper.readTree(responseStr);

            if (rootNode.has("error")) {
                String errorType = rootNode.path("error").path("type").asText("");
                String errorMsg = rootNode.path("error").path("message").asText("Unknown AI error");
                if (errorType.contains("rate_limit") || errorMsg.contains("rate limit") || errorMsg.contains("429")) {
                    log.warn("Groq rate limit reached for [{}] model [{}]: {}", context, selectedModel, errorMsg);
                    throw new AiRateLimitException(errorMsg);
                }
                throw new RuntimeException("Groq API error: " + errorMsg);
            }

            String content = rootNode
                    .path("choices").get(0)
                    .path("message")
                    .path("content")
                    .asText("").trim();

            if (content.isEmpty()) {
                throw new RuntimeException("Empty response from Groq AI for [" + context + "]");
            }

            if (content.startsWith("```json")) {
                content = content.substring(7);
            }
            if (content.startsWith("```")) {
                content = content.substring(3);
            }
            if (content.endsWith("```")) {
                content = content.substring(0, content.length() - 3);
            }

            JsonNode usageNode = rootNode.path("usage");
            int promptTokens = usageNode.path("prompt_tokens").asInt(0);
            int completionTokens = usageNode.path("completion_tokens").asInt(0);
            int totalTokens = usageNode.path("total_tokens").asInt(promptTokens + completionTokens);
            String usedModel = rootNode.path("model").asText(selectedModel);

            return GroqCallResult.builder()
                    .content(content.trim())
                    .model(usedModel)
                    .promptTokens(promptTokens)
                    .completionTokens(completionTokens)
                    .totalTokens(totalTokens)
                    .latencyMs(latency)
                    .build();

        } catch (AiRateLimitException e) {
            throw e;
        } catch (Exception e) {
            if (e.getMessage() != null && (e.getMessage().contains("429") || e.getMessage().contains("rate_limit"))) {
                log.warn("Groq 429 detected via exception for [{}]", context);
                throw new AiRateLimitException("AI quota exceeded. Please try again in a few minutes.");
            }
            if (!FAST_MODEL.equals(selectedModel) && e.getMessage() != null && 
                    (e.getMessage().contains("404") || e.getMessage().contains("model_not_found") || e.getMessage().contains("does not exist"))) {
                log.warn("Model [{}] returned 404/not found for [{}]. Falling back to FAST_MODEL [{}]", selectedModel, context, FAST_MODEL);
                return callGroqWithUsage(prompt, context, FAST_MODEL);
            }
            log.error("Error communicating with Groq AI for [{}]", context, e);
            throw new RuntimeException("Failed to call Groq AI [" + context + "]: " + e.getMessage(), e);
        }
    }

    private String callGroq(String prompt, String context, String targetModel) {
        return callGroqWithUsage(prompt, context, targetModel).getContent();
    }

    private String callGroq(String prompt, String context) {
        return callGroq(prompt, context, defaultGroqModel);
    }

    // ─── Code Token Trimmer ──────────────────────────────────────────────────
    private String trimCodeForAnalysis(String codeContent) {
        if (codeContent == null) return "";
        // Strip single-line comments, multi-line comments, and blank lines
        return codeContent
                .replaceAll("/\\*[\\s\\S]*?\\*/", "")
                .replaceAll("//.*", "")
                .replaceAll("(?m)^[ \t]*\r?\n", "")
                .trim();
    }

    // ─── Public API Methods with Dual-Model Routing ──────────────────────────

    public String analyzeCode(String codeContent) {
        String trimmedCode = trimCodeForAnalysis(codeContent);

        String prompt = "You are a Senior Security Engineer and Code Reviewer. Analyze the following code and return ONLY a valid JSON response (no markdown, no backticks, no other text) with the following structure:\n" +
                "{\n" +
                "  \"score\": (a double between 0.0 and 100.0, representing code quality and security),\n" +
                "  \"summary\": \"A short overall summary of the code quality\",\n" +
                "  \"vulnerabilities\": [\n" +
                "    {\n" +
                "      \"filePath\": \"(the file name if known, else Unknown)\",\n" +
                "      \"lineNumber\": (approximate line number if applicable, else 0),\n" +
                "      \"severity\": \"(HIGH, MEDIUM, LOW, INFO)\",\n" +
                "      \"description\": \"Description of the bug or vulnerability\",\n" +
                "      \"suggestedFix\": \"How to fix it\"\n" +
                "    }\n" +
                "  ]\n" +
                "}\n\n" +
                "Code to analyze:\n\n" + trimmedCode;

        // Heavy model for deep code analysis
        return callGroq(prompt, "Code Analysis", HEAVY_MODEL);
    }

    public String analyzeSkillGap(String resumeText, String targetRole) {
        String prompt = "You are an Expert Career Coach and Technical Recruiter. " +
                "Analyze the candidate's resume against their target role: '" + promptSanitizer.sanitize(targetRole) + "'.\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"overallMatchPercentage\": (integer between 0 and 100),\n" +
                "  \"matchedSkills\": [\"skill1\", \"skill2\"],\n" +
                "  \"missingSkills\": [\"skill3\", \"skill4\"],\n" +
                "  \"projectIdeas\": [\n" +
                "    {\n" +
                "      \"title\": \"Project Name\",\n" +
                "      \"description\": \"Description of what to build\",\n" +
                "      \"skillsTargeted\": [\"skill3\", \"skill4\"]\n" +
                "    }\n" +
                "  ],\n" +
                "  \"recommendations\": [\"recommendation 1\", \"recommendation 2\"]\n" +
                "}\n\n" +
                "Candidate Resume:\n" + promptSanitizer.sanitize(resumeText);

        // Fast model (14,400 TPM capacity) for quick skill gap feedback
        return callGroq(prompt, "Skill Gap Analysis", FAST_MODEL);
    }

    public String generateRoadmap(String title, String gapReportJson) {
        String prompt = "You are a Technical Mentor and Career Planner. " +
                "Generate a detailed step-by-step roadmap for: '" + promptSanitizer.sanitize(title) + "'.\n" +
                "Use the following Skill Gap Analysis as context:\n" + promptSanitizer.sanitize(gapReportJson) + "\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"milestones\": [\n" +
                "    {\n" +
                "      \"title\": \"Milestone Title\",\n" +
                "      \"description\": \"Detailed description of what to learn\",\n" +
                "      \"estimatedTime\": \"e.g. 2 weeks\",\n" +
                "      \"status\": \"pending\",\n" +
                "      \"resources\": [\"Resource 1 URL or Name\", \"Resource 2 URL or Name\"]\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";

        return callGroq(prompt, "Roadmap Generation", FAST_MODEL);
    }

    public String generateInterviewQuestions(String targetRole, String skillsJson) {
        String prompt = "You are an Expert Technical Interviewer. " +
                "Generate a list of 5 technical interview questions for a candidate applying for the role: '" + promptSanitizer.sanitize(targetRole) + "'.\n" +
                "Use the following skills as context:\n" + promptSanitizer.sanitize(skillsJson) + "\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"questions\": [\n" +
                "    {\n" +
                "      \"question\": \"The interview question text\",\n" +
                "      \"expectedAnswer\": \"A brief summary of what a good answer should cover\",\n" +
                "      \"difficulty\": \"Easy | Medium | Hard\"\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";

        return callGroq(prompt, "Interview Questions", FAST_MODEL);
    }

    public String analyzeResume(String resumeText) {
        String prompt = "You are an Expert ATS (Applicant Tracking System) and Technical Recruiter. " +
                "Analyze the following resume text and return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"atsScore\": (a number between 0.0 and 100.0 representing the overall resume strength),\n" +
                "  \"suggestions\": [\"Specific suggestion 1\", \"Specific suggestion 2\", \"Specific suggestion 3\"]\n" +
                "}\n\n" +
                "Candidate Resume:\n" + promptSanitizer.sanitize(resumeText);

        return callGroq(prompt, "Resume Analysis", FAST_MODEL);
    }

    public String tailorResume(String resumeText, String jobDescription) {
        String prompt = "You are an expert ATS Resume Specialist and Career Coach.\n" +
                "Your task is to tailor an existing resume to a specific job description.\n\n" +
                "RULES:\n" +
                "1. Keep all factual information (company names, dates, degrees) from the original resume UNCHANGED.\n" +
                "2. Rewrite the SUMMARY and each EXPERIENCE bullet point to highlight relevant skills and use keywords from the job description.\n" +
                "3. Reorder the skills list to put the most relevant skills first.\n" +
                "4. Use strong action verbs and quantify achievements wherever possible.\n" +
                "5. Do NOT invent experience or skills the candidate does not have.\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this EXACT structure:\n" +
                "{\n" +
                "  \"matchScore\": (integer 0-100, how well the resume matches the JD AFTER tailoring),\n" +
                "  \"jobTitle\": \"(extracted target job title from the JD)\",\n" +
                "  \"tailoredSummary\": \"(A 2-3 sentence professional summary optimized for the JD)\",\n" +
                "  \"keySkills\": [\"skill1\", \"skill2\", \"skill3\"],\n" +
                "  \"experiences\": [\n" +
                "    {\n" +
                "      \"company\": \"Company Name (from original resume)\",\n" +
                "      \"role\": \"Role Title (from original resume)\",\n" +
                "      \"duration\": \"Duration (from original resume)\",\n" +
                "      \"bullets\": [\"Tailored bullet point 1\", \"Tailored bullet point 2\", \"Tailored bullet point 3\"]\n" +
                "    }\n" +
                "  ],\n" +
                "  \"educations\": [\n" +
                "    {\n" +
                "      \"degree\": \"Degree Name\",\n" +
                "      \"institution\": \"Institution Name\",\n" +
                "      \"year\": \"Year\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"missingKeywords\": [\"keyword1\", \"keyword2\"]\n" +
                "}\n\n" +
                "ORIGINAL RESUME:\n" + promptSanitizer.sanitize(resumeText) + "\n\n" +
                "TARGET JOB DESCRIPTION:\n" + promptSanitizer.sanitize(jobDescription);

        return callGroq(prompt, "Resume Tailoring", HEAVY_MODEL);
    }

    public String evaluateInterviewAnswers(String questionsAnswersJson) {
        String prompt = "You are an Expert Technical Interviewer. " +
                "You have just conducted an interview. I will provide you with a set of 5 questions, the expected answers, and the candidate's actual typed answers.\n" +
                "Evaluate the candidate's answers based on accuracy, completeness, and understanding of the core concepts.\n\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"overallScore\": (integer between 0 and 100, representing the overall performance),\n" +
                "  \"feedback\": [\n" +
                "    {\n" +
                "      \"question\": \"The exact question text\",\n" +
                "      \"score\": (integer between 0 and 100 for this specific answer),\n" +
                "      \"feedback\": \"Brief feedback explaining what they did well and what they missed\"\n" +
                "    }\n" +
                "  ]\n" +
                "}\n\n" +
                "Interview Data:\n" + promptSanitizer.sanitize(questionsAnswersJson);

        return callGroq(prompt, "Interview Evaluation", FAST_MODEL);
    }

    public GroqCallResult solveDoubtWithUsage(String topic, String userQuestion) {
        String prompt = "You are an Expert Personal Academic Tutor for a student studying '" + topic + "'. " +
            "The student has asked this doubt:\n" + userQuestion + "\n\n" +
            "Formatting & Quality Guidelines:\n" +
            "1. Start with a direct, clear 1-2 sentence core answer.\n" +
            "2. Break down the concept into clean sections using markdown headings (e.g. ### Key Concept, ### Simple Analogy, ### Important Exam Tip).\n" +
            "3. Use structured bullet points and **bold keywords** for effortless reading.\n" +
            "4. If comparing concepts, keep tables compact with 2-3 columns maximum, or use neat bulleted comparisons.\n" +
            "5. Keep the explanation engaging, concise, easy to digest, and avoid long unbroken walls of text.";
        return callGroqWithUsage(prompt, "AI Doubt Solver", defaultGroqModel);
    }

    public String solveDoubt(String topic, String userQuestion) {
        return solveDoubtWithUsage(topic, userQuestion).getContent();
    }

    public String generateStudyPlan(String examGoal, String examDate, String weakTopics, String strongTopics, String dailyHours) {
        String prompt = "You are an Expert Academic Planner and Tutor. " +
                "Create a comprehensive 'Master Syllabus Roadmap' for a student preparing for: '" + promptSanitizer.sanitize(examGoal) + "'.\n" +
                "The study plan MUST cover the entire official syllabus and subjects for '" + promptSanitizer.sanitize(examGoal) + "'.\n" +
                "Target Exam Date: " + (examDate != null ? promptSanitizer.sanitize(examDate) : "Unknown") + ".\n" +
                "Focus Areas / Weak Topics: " + promptSanitizer.sanitize(weakTopics) + ".\n" +
                "Revision Areas / Strong Topics: " + promptSanitizer.sanitize(strongTopics) + ".\n" +
                "CRITICAL TIME CONSTRAINT: The student can only study for " + promptSanitizer.sanitize(dailyHours) + " hours per day. Be realistic about what can be completed in this time.\n" +
                  "WARNING: DO NOT copy the example topics. You MUST output real chapters and topics strictly belonging to the official syllabus for '" + promptSanitizer.sanitize(examGoal) + "'.\n" +
                "Return ONLY a valid JSON response (no markdown, no backticks, no other text) with this exact structure:\n" +
                "{\n" +
                "  \"plan_title\": \"Master Roadmap for " + promptSanitizer.sanitize(examGoal) + "\",\n" +
                "  \"estimated_duration\": \"Estimated time based on hours\",\n" +
                "  \"modules\": [\n" +
                "    {\n" +
                "      \"module_name\": \"Phase 1: Introduction to <Subject Name>\",\n" +
                "      \"duration\": \"Week 1-2\",\n" +
                "      \"tasks\": [\n" +
                "        {\"id\": \"t1\", \"title\": \"<Chapter exactly from their syllabus>\", \"completed\": false}\n" +
                "      ]\n" +
                "    }\n" +
                "  ]\n" +
                "}";

        return callGroq(prompt, "Study Plan Generation", HEAVY_MODEL);
    }

    public String extractPyqQuestions(String paperText, String targetClass, String subject, Integer year) {
        String prompt = "You are an expert CBSE paper author and senior board evaluator.\n" +
                "Extract questions from the following exam paper text for Class: '" + promptSanitizer.sanitize(targetClass) + "', Subject: '" + promptSanitizer.sanitize(subject) + "', Year: " + year + ".\n" +
                "Organize questions into authentic CBSE sections: Section A (1-mark MCQs/objective), Section B (2-mark short answers), Section C (3-mark short answers), Section D (5-mark long answers/derivations), Section E (4-mark case studies).\n" +
                "For EACH extracted question, output a JSON object with:\n" +
                "- qNum: (integer, e.g. 1, 2, 3...)\n" +
                "- section: ('A', 'B', 'C', 'D', or 'E')\n" +
                "- marks: (integer: 1, 2, 3, 4, or 5)\n" +
                "- topic: (topic/chapter name, e.g. 'Laws of Motion' or 'Chemical Bonding')\n" +
                "- questionText: (the complete, clear question text without garbled artifacts)\n" +
                "- options: (array of 4 option strings like [\"A) ...\", \"B) ...\", \"C) ...\", \"D) ...\"] if MCQ, else empty array [])\n" +
                "- correctOption: (e.g. 'A', 'B', 'C', 'D' if MCQ, else null)\n" +
                "- modelAnswer: (complete step-by-step scoring answer explaining derivations, calculations, or concepts)\n" +
                "- stepMarking: (array of objects showing marks distribution, e.g. [{\"step\": \"Writing formula\", \"marks\": \"1 Mark\"}, {\"step\": \"Calculation & correct answer with unit\", \"marks\": \"1 Mark\"}])\n" +
                "- examinerTip: (practical advice on how to secure full marks according to CBSE marking guidelines)\n" +
                "- commonPitfall: (common error or calculation slip that students make)\n\n" +
                "Return ONLY a valid JSON array of objects. No markdown formatting, no backticks, no introduction or trailing prose.\n\n" +
                "Question Paper Content:\n" + promptSanitizer.sanitize(paperText);

        return callGroq(prompt, "PYQ Question Extraction", HEAVY_MODEL);
    }

    public String generateSamplePaperQuestions(String targetClass, String subject, Integer year) {
        String prompt = "You are an expert senior CBSE examiner and curriculum author.\n" +
                "Generate an authentic, complete set of standard CBSE Board Examination questions for Class: '" + promptSanitizer.sanitize(targetClass) + "', Subject: '" + promptSanitizer.sanitize(subject) + "', Year: " + year + ".\n" +
                "Structure the questions into standard CBSE Sections (Section A: MCQs 1 mark each, Section B: 2-mark short answers, Section C: 3-mark numericals/conceptual, Section D: 5-mark derivations, Section E: 4-mark case study).\n" +
                "Generate 8 to 12 realistic questions covering key core chapters from the official CBSE syllabus for " + promptSanitizer.sanitize(targetClass) + " " + promptSanitizer.sanitize(subject) + ".\n" +
                "For EACH question, output a JSON object with:\n" +
                "- qNum: (integer, 1, 2, 3...)\n" +
                "- section: ('A', 'B', 'C', 'D', or 'E')\n" +
                "- marks: (integer: 1, 2, 3, 4, or 5)\n" +
                "- topic: (topic/chapter name from CBSE syllabus)\n" +
                "- questionText: (the complete, well-formed question text)\n" +
                "- options: (array of 4 option strings like [\"A) ...\", \"B) ...\", \"C) ...\", \"D) ...\"] if MCQ in Section A, else [])\n" +
                "- correctOption: (e.g. 'A', 'B', 'C', or 'D' if MCQ, else null)\n" +
                "- modelAnswer: (complete step-by-step model answer explaining formulas, derivations, or concepts)\n" +
                "- stepMarking: (array of objects showing marks distribution, e.g. [{\"step\": \"Formula and substitution\", \"marks\": \"1 Mark\"}, {\"step\": \"Final result with unit\", \"marks\": \"1 Mark\"}])\n" +
                "- examinerTip: (practical advice on how to secure full marks according to CBSE marking guidelines)\n" +
                "- commonPitfall: (common error or calculation slip students make)\n\n" +
                "Return ONLY a valid JSON array of objects. No markdown formatting, no backticks, no introduction or trailing prose.";

        return callGroq(prompt, "PYQ Question Auto-Generation", HEAVY_MODEL);
    }
}
