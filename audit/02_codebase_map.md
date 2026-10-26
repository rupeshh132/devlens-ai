# DevLens AI - Codebase Map

## Tech Stack
- **Backend:** Spring Boot (Java), Spring Security, Hibernate/JPA, PostgreSQL, Flyway, Groq/Gemini API integration.
- **Frontend:** React, Vite, Tailwind CSS, TypeScript, Lucide Icons.
- **Database:** PostgreSQL (Supabase).

## Backend Structure (`backend/src/main/java/com/devlens/api/`)
- `controller/`: REST API endpoints (Auth, Repository, Analysis, Admin, Learn modules).
- `entity/`: Database models (User, Repository, AnalysisJob, TestAttempt, Course, etc.).
- `repository/`: Spring Data JPA interfaces.
- `service/`: Core business logic (AnalysisJobService, JobScheduler, AuthService, RazorpayService).
- `integration/`: Third-party services (GitHubService, SupabaseStorageService).
- `security/`: Spring Security configurations, JWT filters.
- `analysis/` & `scanner/`: AI LLM parsing logic and prompt handling.
- `scheduler/`: Scheduled cron jobs (e.g., GoldenDatasetCronJob).

## Frontend Structure (`frontend/src/`)
- `pages/`: UI pages mapped to routes (Dashboard, Landing, Admin, Learn/Tests).
- `layouts/`: Master wrappers (AuthLayout, AdminLayout, PublicLayout).
- `lib/`: Utilities like API clients (`learn-api.ts`, `api.ts`), Supabase clients.
- `components/`: Reusable UI elements (Buttons, Modals, Forms).
- `features/`: Domain-specific components (e.g., Interview interface, Score cards).
- `routes/`: React Router definitions.

## Notable Gaps & Initial Observations (vs Blueprint)
1. **Missing WebRTC**: Blueprint mentions "WebRTC/Sockets for real-time vibe" for AI Mock Interviews, but no explicit WebRTC signaling server logic is found at the top level (likely mocked or missing).
2. **Plagiarism Checking**: Mentioned in blueprint, but needs verification if the `scanner/` directory actually cross-checks Internet code or just uses LLM assumptions.
3. **API Gateway / DDoS Protection**: Blueprint mentions `Spring Cloud Gateway` or `Bucket4j`, but standard structure doesn't explicitly show Gateway services; it might be missing or handled via simple Filters.

*(Further deep-dive in Phase 4 will confirm exact API implementation gaps).*
