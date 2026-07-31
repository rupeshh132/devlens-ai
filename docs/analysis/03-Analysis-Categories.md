# Analysis Categories

This document defines the specific categories, metrics, and thresholds used by the DevLens AI engine to evaluate a repository's health.

---

## 1. Architecture

### Purpose
To evaluate the foundational structure of the application, ensuring it is scalable, modular, and resilient to change.

### What is analyzed
*   **Folder Structure:** Logical organization of files by feature or domain.
*   **Layer Separation:** Clear boundaries between routing, business logic, and data access.
*   **SOLID Principles:** Adherence to single responsibility, open-closed, and dependency inversion principles.
*   **Design Patterns:** Proper application of factories, singletons, observers, etc.
*   **Coupling & Cohesion:** Low coupling between distinct modules, and high cohesion within them.

### Metrics & Thresholds

| Metric | Pass | Warning | Critical |
| :--- | :--- | :--- | :--- |
| **Cyclic Dependencies** | 0 occurrences | 1-2 occurrences | > 2 occurrences |
| **File Depth** | ≤ 4 levels deep | 5-6 levels deep | > 6 levels deep |
| **Layer Violations** | 0 instances | 1-3 instances | > 3 instances |

### Sample Findings
*   *Warning:* The data access layer is directly importing from the HTTP routing layer.
*   *Critical:* 3 cyclic dependency loops detected between `UserService` and `AuthService`.

### AI Recommendations
*   "Extract the shared authentication logic into an independent module or interface to break the cyclic dependency between `UserService` and `AuthService`."

### Example Output
```json
{
  "category": "Architecture",
  "score": 75,
  "findings": [
    {
      "severity": "High",
      "priority": "Must Fix",
      "title": "Layer Violation Detected",
      "description": "Database models are being directly exposed in the API response in src/routes/users.ts without DTO mapping."
    }
  ]
}
```

---

## 2. Code Quality

### Purpose
To ensure code is readable, idiomatic, consistent, and easy for new developers to understand and modify without introducing bugs.

### What is analyzed
*   **Naming:** Clarity and descriptiveness of variables, functions, and classes.
*   **Readability:** Formatting, consistent styling, and logical flow.
*   **Complexity:** Cyclomatic complexity of functions and classes.
*   **Duplicate Code:** Repeating logic that should be abstracted.
*   **Dead Code:** Unused variables, functions, or imports.
*   **Large Files:** Overly long source code files.
*   **Large Functions:** Functions that span too many lines and do too many things (God functions).

### Metrics & Thresholds

| Metric | Pass | Warning | Critical |
| :--- | :--- | :--- | :--- |
| **Cyclomatic Complexity** | ≤ 10 per function | 11-20 per function | > 20 per function |
| **Function Length** | ≤ 50 lines | 51-100 lines | > 100 lines |
| **File Length** | ≤ 300 lines | 301-600 lines | > 600 lines |
| **Duplication Rate** | ≤ 5% of codebase | 6-10% of codebase | > 10% of codebase |

### Sample Findings
*   *Critical:* Function `processOrder` in `orders.ts` has a cyclomatic complexity of 35 and spans 250 lines.
*   *Warning:* 15 unused imports detected across the `src/utils/` directory.

### AI Recommendations
*   "Refactor `processOrder` by extracting the payment validation and inventory deduction logic into separate, testable helper functions."

### Example Output
```json
{
  "category": "Code Quality",
  "score": 60,
  "findings": [
    {
      "severity": "Medium",
      "priority": "Should Fix",
      "title": "High Function Complexity",
      "description": "Function 'calculateTaxes' exceeds complexity limits (18). Consider simplifying nested switch statements.",
      "file": "src/services/billing.js",
      "line": 145
    }
  ]
}
```

---

## 3. Security

### Purpose
To identify vulnerabilities, exposed secrets, and insecure practices that could lead to data breaches or unauthorized access.

### What is analyzed
*   **Secrets:** Hardcoded API keys, passwords, and tokens.
*   **SQL Injection Risks:** Unsanitized database queries and raw string interpolations.
*   **XSS Risks:** Unsanitized user inputs rendered directly in the UI.
*   **Authentication:** Weak password hashing, missing CSRF tokens, or improper session validation.
*   **Authorization:** Missing role checks on privileged REST endpoints.
*   **Dependency Vulnerabilities:** Outdated packages with known CVEs.

### Metrics & Thresholds

| Metric | Pass | Warning | Critical |
| :--- | :--- | :--- | :--- |
| **Exposed Secrets** | 0 occurrences | - | ≥ 1 occurrence |
| **Injection Risks** | 0 occurrences | - | ≥ 1 occurrence |
| **Vulnerable Dependencies**| 0 High/Critical CVEs | 1-3 Low/Med CVEs | ≥ 1 High/Critical CVE |

### Sample Findings
*   *Critical:* Hardcoded AWS Secret Access Key found in `config.js`.
*   *Critical:* SQL query constructed using string concatenation with raw user input.

### AI Recommendations
*   "Remove the AWS credentials from `config.js`, revoke the key immediately in the AWS console, and migrate to environment variables (`process.env.AWS_SECRET_KEY`)."

### Example Output
```json
{
  "category": "Security",
  "score": 30,
  "findings": [
    {
      "severity": "Critical",
      "priority": "Must Fix",
      "title": "Hardcoded Credentials",
      "description": "Stripe API Secret key found hardcoded.",
      "file": "src/payments/stripe.js",
      "line": 12
    }
  ]
}
```

---

## 4. Performance

### Purpose
To identify bottlenecks, memory leaks, and inefficient operations that degrade application speed, responsiveness, and scale.

### What is analyzed
*   **Expensive Loops:** Nested loops (`O(n^2)` or worse) on large data structures.
*   **Rendering:** React/frontend re-rendering loops or missing memoization (`useMemo`, `React.memo`).
*   **API Calls:** N+1 query problems, missing pagination, or un-batched network requests.
*   **Bundle Size:** Bloated JavaScript bundles, unoptimized imports, or large static assets.
*   **Lazy Loading:** Missing code splitting for heavy application routes or components.
*   **Memory Usage:** Unclosed streams, event listener leaks, or unbounded caches.

### Metrics & Thresholds

| Metric | Pass | Warning | Critical |
| :--- | :--- | :--- | :--- |
| **N+1 Query Risks** | 0 instances | 1-2 instances | > 2 instances |
| **Render Blocking Tasks**| 0 instances | 1-3 instances | > 3 instances |
| **Max Bundle Size (Est)**| ≤ 200KB initial | 201KB - 500KB | > 500KB initial |

### Sample Findings
*   *High:* Found a potential N+1 query in `getUsers()`. An API call is made inside a `.map()` loop instead of fetching in bulk.
*   *Medium:* Heavy library `moment.js` is imported globally instead of lazy-loaded or replaced with a lighter alternative like `date-fns`.

### AI Recommendations
*   "Refactor the user loop to collect all `userIds` into an array, and perform a single `WHERE id IN (...)` bulk database query."

### Example Output
```json
{
  "category": "Performance",
  "score": 85,
  "findings": [
    {
      "severity": "Medium",
      "priority": "Should Fix",
      "title": "N+1 Query Pattern",
      "description": "Making sequential database calls inside a loop. Use a bulk lookup or DataLoader.",
      "file": "src/resolvers/PostResolver.ts",
      "line": 56
    }
  ]
}
```

---

## 5. Testing

### Purpose
To gauge the robustness and reliability of the codebase by evaluating test coverage, test quality, and resilience against regressions.

### What is analyzed
*   **Coverage:** Percentage of lines, functions, and branches covered by the test suite.
*   **Unit Tests:** Isolation, assertions, and validity of individual function tests.
*   **Integration Tests:** End-to-end flows spanning multiple modules and database layers.
*   **Mocking:** Proper use of stubs/mocks vs. brittle tests relying on live external APIs.
*   **Edge Cases:** Testing for nulls, empty arrays, out-of-bounds inputs, and API failure states.

### Metrics & Thresholds

| Metric | Pass | Warning | Critical |
| :--- | :--- | :--- | :--- |
| **Line Coverage** | ≥ 80% | 50% - 79% | < 50% |
| **Branch Coverage** | ≥ 75% | 40% - 74% | < 40% |
| **Failing Tests** | 0 tests | - | ≥ 1 test |

### Sample Findings
*   *Warning:* The `calculateDiscount` function is tested for the happy path, but lacks edge case tests for negative numbers or 0.
*   *Critical:* 0% test coverage detected in the `/src/auth/` directory.

### AI Recommendations
*   "Add unit tests for `calculateDiscount` handling scenarios where `cartTotal` is negative, 0, or exceeds the maximum discount threshold."

### Example Output
```json
{
  "category": "Testing",
  "score": 65,
  "findings": [
    {
      "severity": "High",
      "priority": "Must Fix",
      "title": "Missing Core Tests",
      "description": "Authentication middleware has no unit tests verifying token expiration handling.",
      "file": "tests/middleware/auth.test.js",
      "confidence": 95
    }
  ]
}
```

---

## 6. Documentation

### Purpose
To ensure the project is onboarding-friendly, maintainable, and understandable for both new engineers and external consumers.

### What is analyzed
*   **README:** Presence of project description, tech stack, architecture summary, and contribution guidelines.
*   **API Docs:** Swagger/OpenAPI specifications or documented GraphQL schemas.
*   **Comments:** JSDoc/inline comments explaining *why* complex logic exists, not just *what* it does.
*   **Setup Guide:** Clear steps for running the app locally, configuring the database, and setting environment variables.
*   **Examples:** Usage examples for public utility functions or published components.

### Metrics & Thresholds

| Metric | Pass | Warning | Critical |
| :--- | :--- | :--- | :--- |
| **README Presence** | Detailed & Complete| Exists but sparse | Missing completely |
| **Docstring Coverage**| ≥ 70% of public APIs | 30% - 69% | < 30% |
| **Env Var Documentation**| `.env.example` exists | Outdated example | Missing entirely |

### Sample Findings
*   *Warning:* The `README.md` is missing local setup instructions for running the required Redis container.
*   *Medium:* Complex regex in `emailValidator.ts` lacks comments explaining the specific edge cases it handles.

### AI Recommendations
*   "Add a JSDoc comment above the email regex explaining that it specifically filters out trailing periods and sub-domain addresses per RFC-5322."

### Example Output
```json
{
  "category": "Documentation",
  "score": 80,
  "findings": [
    {
      "severity": "Low",
      "priority": "Nice to Have",
      "title": "Missing Setup Instructions",
      "description": "README does not explain how to populate the required .env variables."
    }
  ]
}
```

---

## 7. Maintainability

### Purpose
To identify accumulating technical debt, evaluate how easy it is to modify or extend the codebase, and spot broad refactoring opportunities.

### What is analyzed
*   **Technical Debt:** Quick-and-dirty solutions, deprecated library usage, or aging syntax.
*   **Code Smells:** Magic strings/numbers, long parameter lists, or "shotgun surgery" patterns (where one change requires touching many files).
*   **Refactoring Opportunities:** Code blocks that could be abstracted into reusable hooks, classes, services, or utilities.
*   **Reusability:** Extent to which UI components and domain logic are generic and modular.

### Metrics & Thresholds

| Metric | Pass | Warning | Critical |
| :--- | :--- | :--- | :--- |
| **TODO/FIXME Tags** | ≤ 5 unresolved | 6 - 20 unresolved | > 20 unresolved |
| **Magic Numbers** | ≤ 2 per file | 3 - 5 per file | > 5 per file |
| **Parameter Counts** | ≤ 3 params | 4 - 5 params | > 5 params |

### Sample Findings
*   *Low:* 14 unresolved `// TODO: fix this later` comments found scattered across the legacy controllers.
*   *Medium:* The `UserCard` component contains inline SVG icons and hardcoded colors that should be moved to the theme configuration to ensure visual consistency.

### AI Recommendations
*   "Extract the 3 identical API fetch implementations in `Dashboard.tsx`, `Profile.tsx`, and `Settings.tsx` into a single reusable custom hook `useFetchData()`."

### Example Output
```json
{
  "category": "Maintainability",
  "score": 72,
  "findings": [
    {
      "severity": "Medium",
      "priority": "Should Fix",
      "title": "Magic Numbers Detected",
      "description": "Hardcoded value '86400000' found multiple times. Extract to a constant like 'ONE_DAY_IN_MS'.",
      "file": "src/utils/time.ts"
    }
  ]
}
```
