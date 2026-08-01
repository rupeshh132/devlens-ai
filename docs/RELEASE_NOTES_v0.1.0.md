# Release Notes - v0.1.0

We are thrilled to announce the inaugural v0.1.0 release of DevLens AI!

This MVP release brings the core architecture of our code analysis pipeline to life.

## Highlights
- **Seamless GitHub Onboarding:** Connect your GitHub account and instantly import your public/private repositories into our workspace.
- **Asynchronous Analysis:** Trigger an analysis pipeline that gracefully runs in the background.
- **Live Progress Updates:** Thanks to Server-Sent Events (SSE), you can watch the pipeline's progress stream directly into your browser in real time without refreshing.
- **Interactive Dashboard:** Gain immediate visibility into your entire repository portfolio and recent activity across your team.
- **PDF Export:** Generate and download summary analysis reports for offline sharing or compliance tracking.

## Technical Milestones
- **Zero N+1 Queries:** Extensively optimized JPA EntityGraphs ensure O(1) database queries on heavy dashboard aggregation.
- **Micro-Bundling:** Route-level code splitting using Vite ensures initial JavaScript payloads are kept below 500KB.
- **Production Hardened:** Sensitive Actuator and Exception telemetry has been masked, preventing infrastructure intelligence leakage.
- **Containerized Strategy:** Shipped with a full Docker-Compose manifest for immediate self-hosted deployment.

## Known Limitations
- Swagger API documentation remains exposed on `/swagger-ui.html`. If deploying to a highly sensitive production network, restrict this path via an Nginx proxy.
- PDF generation currently emits a boilerplate structural stub; full deep-analysis extraction will be added in v0.2.0.
