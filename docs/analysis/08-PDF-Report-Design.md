# PDF Report Design

This document outlines the structure, visual components, and branding guidelines for the DevLens AI PDF Analysis Report. This report serves as the final, shareable artifact of a repository scan, designed to be read by both developers and engineering management.

---

## 1. Report Structure

The generated PDF report follows a strict, logical progression from high-level summaries down to granular code-level details.

1.  **Cover Page:** Title, Repository Name, Analysis Date, and an aesthetic introductory graphic.
2.  **Repository Information & Metadata:** High-level details about the scan context (Commit SHA, Branch, etc.).
3.  **Executive Summary:** A brief AI-generated paragraph summarizing the repository's overall state.
4.  **Overall Health Score:** The primary metric (0-100) and its tier (e.g., "Good", "Critical").
5.  **Category Scores:** Breakdown of the 7 core categories (Security, Architecture, etc.).
6.  **Top Findings:** Quick-hit list of the most critical "Must Fix" items to prioritize immediately.
7.  **Detailed Findings:** Grouped by category, containing the bulk of the AI analysis, evidence, and recommendations.
8.  **AI Recommendations:** Strategic, long-term refactoring advice extending beyond single lines of code.
9.  **Trend Analysis:** Historical comparison charting the current score against previous scans.
10. **Appendix:** Explanation of the scoring system methodology and glossary of terms.

---

## 2. Visual Components

The report utilizes data visualization heavily to break up text and quickly convey health status to non-technical stakeholders.

*   **Score Gauge:** A semi-circle speedometer gauge indicating the Overall Health Score. Color-coded (Red < 60, Yellow 60-79, Green > 80).
*   **Progress Bars:** Horizontal bars for individual Category Scores.
*   **Pie Charts:** Used for "Severity Distribution" (e.g., 5 Critical, 12 High, 20 Medium).
*   **Bar Charts:** Used for comparing lines of code, test coverage, or technical debt ratios.
*   **Timeline:** A line graph demonstrating the Trend Analysis over the last 5 scans.

### Wireframe: Executive Dashboard Page
```text
+-------------------------------------------------------------+
|  DevLens AI                                 Report v1.0.0   |
|-------------------------------------------------------------|
|                                                             |
|  [ Score Gauge: 72/100 ]     REPOSITORY METADATA            |
|  (Good)                      - Repository: user/repo-name   |
|                              - Branch: main                 |
|                              - Commit SHA: 8f4a9b2          |
|  SEVERITY DISTRIBUTION       - Analysis Date: 2026-07-31    |
|  (Pie Chart)                 - Analysis Time: 45 seconds    |
|  [Red] 2 Critical                                           |
|  [Org] 5 High                                               |
|  [Ylw] 14 Medium             EXECUTIVE SUMMARY              |
|                              "The repository shows strong   |
|                              foundations in Architecture,   |
|                              but has critical security      |
|                              vulnerabilities in the auth    |
|                              module..."                     |
+-------------------------------------------------------------+
```

---

## 3. Finding Layout

Each specific finding identified by the AI is presented using a standardized card layout. This ensures readability and immediate actionability for developers.

### Finding Layout Template
*   **Title:** Concise description of the issue.
*   **Severity:** Badge (Critical, High, Medium, Low, Info).
*   **Confidence:** Percentage (e.g., 95% Confidence).
*   **Affected Files:** `path/to/file.ts:L45`
*   **Evidence:** The actual snippet of code that triggered the finding.
*   **Explanation:** AI-generated reasoning of *why* this is a problem.
*   **Recommendation:** Step-by-step fix.
*   **References:** Links to OWASP, CWE, or language documentation.

### Example Finding (Rendered)

| **SQL Injection Vulnerability** | **Severity:** 🔴 CRITICAL | **Confidence:** 98% |
| :--- | :--- | :--- |
| **File:** | `src/api/users.js` (Line 114) | |
| **Evidence:** | `const query = "SELECT * FROM users WHERE email = '" + req.body.email + "'";` | |
| **Explanation:** | User input is directly concatenated into the SQL string, allowing malicious actors to bypass authentication or drop tables by passing payloads like `' OR 1=1 --`. | |
| **Recommendation:** | Switch to parameterized queries. E.g., `db.query("SELECT * FROM users WHERE email = $1", [req.body.email])` | |
| **References:** | [OWASP Top 10 - Injection](https://owasp.org/www-project-top-ten/) | |

---

## 4. Report Metadata

To ensure the report serves as a valid historical audit artifact, every PDF includes the following immutable metadata in the header/footer section:

*   **Repository Name:** `github.com/rupeshh132/devlens-ai`
*   **Branch:** `main`
*   **Commit SHA:** Full 40-character Git SHA (e.g., `a1b2c3d4e5f6g7h8i9j0...`)
*   **Analysis Date:** ISO 8601 UTC timestamp.
*   **AI Model Used:** `Gemini-1.5-Pro`
*   **Analysis Duration:** Total processing time taken (e.g., `1m 24s`)
*   **Generator Version:** The backend engine version (e.g., `v2.4.1`)

---

## 5. Export Formats

While this document focuses on the PDF layout, the underlying data structure supports multiple export targets:

*   **PDF:** The primary, shareable, stylized document. Rendered via a headless browser (Puppeteer) or a dedicated PDF generation library on the backend.
*   **Print (CSS):** Specific `@media print` CSS rules applied to the frontend React application ensure the web dashboard can be cleanly printed directly from the browser (hiding navbars, forcing logical page breaks).
*   **JSON:** A raw data dump of the analysis results for ingestion by CI/CD tools or internal BI dashboards.
*   **Future HTML Export:** A standalone, interactive HTML file that does not require a DevLens AI account or server to view.

---

## 6. Branding & Typography

The report must look premium and instantly recognizable as a DevLens AI product.

*   **Logo:** DevLens AI wordmark and icon placed prominently on the cover and subtly in page footers.
*   **Themes:** 
    *   *Default (Print-Friendly):* Light background, dark text to save printer ink and ensure maximum readability.
    *   *Digital (Dark Mode):* Optional dark theme export optimized for screen-only viewing.
*   **Typography:**
    *   *Headers:* `Inter` or `Outfit` (Bold, Sans-Serif) for modern, clean section titles.
    *   *Body:* `Inter` (Regular) for high legibility in dense paragraphs.
    *   *Code Blocks:* `Fira Code` or `JetBrains Mono` for all evidence snippets, complete with basic syntax highlighting.

---

## 7. Accessibility

The PDF is generated following strict accessibility standards (PDF/UA):

*   **Readable Colors:** All text meets WCAG AA contrast ratios (at least 4.5:1 against backgrounds).
*   **Color Independence:** Severities are not communicated by color alone. Badges include explicit text ("CRITICAL") and distinct icons.
*   **Printable Layout:** Margins are set to standard A4/US Letter safe zones. Avoidance of edge-to-edge dark backgrounds to prevent printer bleeding.
*   **Alt Text:** All charts (Pie, Bar) include hidden descriptive text for screen readers parsing the PDF.

---

## 8. Future Extensibility

The reporting engine architecture is designed to support B2B Enterprise features in the future:

*   **Custom Themes:** Allowing enterprise customers to change primary brand colors to match their internal corporate guidelines.
*   **White-Label Reports:** Replacing the DevLens AI logo with the customer's company logo for agency/consulting use cases.
*   **Organization Branding:** Adding custom cover pages, legal disclaimers, or standard operating procedure (SOP) appendices based on the organization's internal compliance requirements.
