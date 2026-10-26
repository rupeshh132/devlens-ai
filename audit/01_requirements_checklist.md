# DevLens AI - Requirements Checklist

Extracted from the Master Business Blueprint. These IDs will be referenced in the Compliance Matrix.

## 1. Authentication & Security (R-AUTH)
- **R-AUTH-01:** Dual Auth Flow (Developer vs Student/Learn).
- **R-AUTH-02:** GitHub OAuth integration with STRICTLY "read-only" scopes.
- **R-AUTH-03:** "Ghost User" prevention (OTP / Link Verification enforcement).
- **R-AUTH-04:** Concurrent Session Limiter (Max 1 device per user to prevent account sharing).
- **R-AUTH-05:** JWT Blacklisting (Invalidate tokens in DB/Redis on logout).

## 2. Core Business Workflows (R-BIZ)
- **R-BIZ-01:** Credit-based Economy (Razorpay top-up, burn credits per action).
- **R-BIZ-02:** Freemium Friction (Free: 1 Repo/month, 10 min interview. Pro: Unlimited/Deep).
- **R-BIZ-03:** B2B Recruiter Dashboard (Search developers by verified score).
- **R-BIZ-04:** Affiliate & Promo Engine (Unique promo codes, automated commission tracking).
- **R-BIZ-05:** Affiliate Cooling Period (15-day hold on commission to prevent chargeback fraud).
- **R-BIZ-06:** Tax Compliance (Auto deduct 5% TDS on agent commission payouts).
- **R-BIZ-07:** Payment Idempotency & Locking (Prevent Razorpay double-spending webhooks).

## 3. AI & Analysis Engine (R-AI)
- **R-AI-01:** Automated GitHub repository syncing and scoring.
- **R-AI-02:** Ephemeral Processing (Code must NEVER be stored in the DB, process in RAM only).
- **R-AI-03:** "Authorship" Filter (Verify total commits by user to prevent fork-cheating).
- **R-AI-04:** AI API Cost Protections (Rate limiting, Repo size caps: max 50 files/10k lines).
- **R-AI-05:** Prompt Injection Defense (Strip comments via Regex before sending to LLM).
- **R-AI-06:** AI Appeal System (Allow users to appeal scores for higher-LLM review).
- **R-AI-07:** Golden Test Dataset (Nightly cron job to detect AI model drift/hallucinations).
- **R-AI-08:** Asynchronous Processing (Job Scheduler / Queue for AI processing to prevent thread blocking).

## 4. EdTech / Learn Portal (R-EDU)
- **R-EDU-01:** Learn Module (Courses, Topics, Questions).
- **R-EDU-02:** Mock Test Engine (Submit answers, timed exams).
- **R-EDU-03:** Anti-Piracy Watermarking (Stamp Email + Mobile diagonally on generated PDFs).
- **R-EDU-04:** Server-Side Clock Enforcement (Prevent client-side `Date.now()` cheating for exams).
- **R-EDU-05:** Rank Tie-Breaker Algorithm (Score -> Time -> Accuracy precision).
- **R-EDU-06:** Optimized UI ("Sasta Android" proof - stripped animations, React.memo).
- **R-EDU-07:** Asynchronous/Batched Mock Test Submissions (Queueing to prevent DB crash on Admit Card day).

## 5. Infrastructure & Architecture (R-INFRA)
- **R-INFRA-01:** Decoupled Storage (AWS S3 / Supabase Storage for files/resumes, NO local `/uploads`).
- **R-INFRA-02:** DTO Projections (Prevent memory overload from massive JPA nested fetching).
- **R-INFRA-03:** API Gateway / Rate Limiting (Prevent DDoS / API extortion).
