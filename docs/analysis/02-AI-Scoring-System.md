# AI Scoring System

## 1. Overall Scoring Philosophy
The DevLens AI Scoring System is designed to provide developers and engineering managers with an objective, holistic view of a repository's health. The philosophy is rooted in identifying not just functional correctness, but long-term sustainability, security, and architectural soundness. The score acts as a north star, guiding teams towards technical excellence without being overly punitive for minor stylistic deviations.

## 2. Score Range
The overall health score operates on a standard scale from **0 to 100**, where 100 represents a theoretically perfect, flawless codebase, and 0 represents a fundamentally broken or critically insecure system.

## 3 & 4. Categories and Weight Percentages
The overall score is a weighted average of several distinct categories. The weights reflect the relative impact of each category on the long-term success and safety of the software.

| Category          | Weight | Description |
|-------------------|--------|-------------|
| **Security**      | 25%    | Absence of vulnerabilities, secure coding practices, and dependency safety. |
| **Architecture**  | 20%    | Structural design, separation of concerns, scalability, and anti-pattern avoidance. |
| **Code Quality**  | 15%    | Readability, cyclomatic complexity, adherence to language idioms, and consistency. |
| **Performance**   | 15%    | Resource efficiency, algorithmic complexity, and potential bottlenecks. |
| **Maintainability**| 10%   | Ease of modifying the code, technical debt, and modularity. |
| **Testing**       | 10%    | Test coverage, test quality, and resilience against regressions. |
| **Documentation** | 5%     | Presence of clear READMEs, inline comments, and API documentation. |

## 5. Formula for Calculating Overall Score
The final score is calculated using a weighted sum of the individual category scores (C), each multiplied by its respective weight percentage (W).

```
Overall Score = Σ (Category Score × Category Weight)
```

*Example Calculation:*
If a repository scores 90 in Security (25%), 80 in Architecture (20%), and 85 in Code Quality (15%):
`(90 × 0.25) + (80 × 0.20) + (85 × 0.15) ...`

## 6. Score Interpretation
The overall score maps to specific health tiers to help teams quickly assess the state of the repository.

| Score Range | Tier | Interpretation |
|-------------|------|----------------|
| **90–100**  | Excellent | High-quality, secure, and easily maintainable codebase. Production ready. |
| **80–89**   | Very Good | Solid codebase with minor technical debt or isolated issues. |
| **70–79**   | Good | Functional but requires refactoring or has noticeable gaps in testing/security. |
| **60–69**   | Needs Improvement | Significant architectural flaws, security risks, or high technical debt. |
| **Below 60**| Critical | Unstable, insecure, or highly unmaintainable. Requires immediate intervention. |

## 7. Severity Levels
Individual issues flagged by the AI are categorized by severity. This helps developers triage the generated report.

| Severity | Description |
|----------|-------------|
| **Critical** | Immediate action required. Severe security vulnerabilities or system-crashing bugs. |
| **High**     | Major architectural flaws or significant performance bottlenecks. |
| **Medium**   | Standard bugs, moderate technical debt, or missing test coverage for core logic. |
| **Low**      | Minor inefficiencies, complex but working code, or stylistic inconsistencies. |
| **Info**     | General observations, best practice suggestions, or statistical data. |

## 8. Recommendation Priority
To streamline the developer workflow, the AI assigns an actionable priority to its recommendations:

*   **Must Fix:** Critical or High severity issues that block deployments or pose active risks.
*   **Should Fix:** Medium severity issues that degrade maintainability or performance over time.
*   **Nice to Have:** Low severity or Info items that improve elegance and developer experience but aren't strictly necessary.

## 9. Confidence Score
Because the analysis relies on Generative AI, each finding includes a **Confidence Score (0-100%)**.
*   **High Confidence (>90%):** The AI is certain based on well-established patterns (e.g., exposed API keys, classic SQL injection).
*   **Medium Confidence (70-89%):** The AI suspects an issue based on context but requires human verification (e.g., potential race conditions).
*   **Low Confidence (<70%):** The AI suggests a highly subjective architectural improvement that might depend on unprovided business logic.

## 10. Sample Scoring Examples

### Example 1: The Modern Microservice
*   **Context:** A newly written Node.js microservice with high test coverage and strict linting.
*   **Scores:** Security: 95, Architecture: 92, Code Quality: 88, Performance: 90, Maintainability: 95, Testing: 90, Documentation: 85.
*   **Overall Score:** **91.8 (Excellent)**
*   **AI Note:** "Clean architecture, but missing pagination on the `/users` endpoint."

### Example 2: The Legacy Monolith
*   **Context:** A 5-year-old Java application with heavy technical debt and outdated dependencies.
*   **Scores:** Security: 65, Architecture: 55, Code Quality: 60, Performance: 70, Maintainability: 50, Testing: 45, Documentation: 40.
*   **Overall Score:** **58.2 (Critical)**
*   **AI Note:** "Must Fix: 12 high-severity vulnerabilities found in outdated Maven dependencies."

### Example 3: The Rapid Prototype
*   **Context:** A fast-moving Python Django project built for a hackathon. Works well but lacks tests.
*   **Scores:** Security: 75, Architecture: 70, Code Quality: 80, Performance: 85, Maintainability: 75, Testing: 20, Documentation: 60.
*   **Overall Score:** **70.0 (Good)**
*   **AI Note:** "Should Fix: Core logic lacks unit tests. Implementing `pytest` is highly recommended."

## 11. Future Extensibility
The scoring system is built on a modular formula. Adding new categories (e.g., "Accessibility" or "Green Computing") can be achieved without breaking historical data or the underlying architecture.
*   **Normalized Weights:** When a new category is introduced, the system can dynamically recalculate the percentage weights so they always sum to 100%, based on a predefined configuration file.
*   **Opt-In Categories:** Users can toggle specific categories on or off depending on the project type (e.g., ignoring "Accessibility" for backend APIs), and the formula will redistribute the weights proportionally among active categories.
