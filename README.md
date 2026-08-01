# DevLens AI

DevLens AI is a comprehensive static analysis and repository insight platform. It allows users to seamlessly connect their GitHub repositories, run on-demand deep analysis, and generate downloadable PDF reports regarding codebase health, active vulnerabilities, and architecture insights.

## Features
- **GitHub Integration:** 1-Click repository synchronization via OAuth2.
- **On-Demand Analysis:** Trigger long-running codebase parsing asynchronously.
- **Real-Time Progress:** View analysis progress via Server-Sent Events (SSE).
- **Dashboard:** At-a-glance visualization of your repository portfolio.
- **Reporting:** Exportable PDF documentation of code health.

## Tech Stack
- **Backend:** Java 21, Spring Boot 3, Spring Data JPA, Spring Security (OAuth2).
- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, React Query.
- **Database:** PostgreSQL.

## Architecture
The application runs as a decoupled monolith. The backend acts as an API and SSE emitter while managing asynchronous job execution. The frontend is a static SPA served via Nginx (in production) or Vite (in development), communicating with the backend over REST and SSE.

## Local Setup

### Requirements
- JDK 21
- Node.js 20+
- PostgreSQL 15+

### Running the Backend
1. Create a `devlens` PostgreSQL database.
2. Navigate into `backend/`.
3. Set your environment variables (see Environment Variables section).
4. Run `./mvnw spring-boot:run`.

### Running the Frontend
1. Navigate into `frontend/`.
2. Run `npm install`.
3. Run `npm run dev`.

## Environment Variables
Copy the `.env.example` file to `.env` in the root and fill in your secrets.
- `DB_PASSWORD`: Your local database password.
- `JWT_SECRET`: A 256-bit secure random string.
- `GITHUB_CLIENT_ID` / `SECRET`: Generate an OAuth application in GitHub settings.

## Docker Setup
You can run the entire stack locally using Docker Compose:
```bash
docker-compose up --build -d
```

## Running Tests
**Backend:**
```bash
cd backend
./mvnw test
```
**Frontend:**
```bash
cd frontend
npm run lint
```

## API Documentation
Once the backend is running, the OpenAPI Swagger interface is available at:
`http://localhost:8080/swagger-ui.html`

## Deployment
See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for full production deployment instructions.

## Screenshots placeholders
![Dashboard Placeholder](docs/dashboard-placeholder.png)
![Analysis Placeholder](docs/analysis-placeholder.png)

## License
MIT License
