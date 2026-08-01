# Deployment Guide

DevLens AI is orchestrated via Docker Compose, making production deployments highly predictable and simple.

## Architecture
- **Nginx (Frontend Router):** Listens on port 80. Serves static React files and acts as a reverse proxy for all `/api/` traffic.
- **Spring Boot (Backend):** Isolated on the docker network. Exposes 8080 internally.
- **PostgreSQL 15:** Persists all relational data and session mappings.

## Deployment Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rupeshh132/devlens-ai.git
   cd devlens-ai
   ```
2. **Environment Variables:**
   Copy the example file and populate it with your production secrets.
   ```bash
   cp .env.example .env
   vim .env
   ```
   **CRITICAL:** Ensure `JWT_SECRET` is a secure 256-bit key. Ensure your `GITHUB_CLIENT_ID` matches your production GitHub OAuth application settings.

3. **Start the Stack:**
   ```bash
   docker-compose up --build -d
   ```
   This will boot the database, build the Spring Boot fat JAR, compile the Vite production bundle, and launch the Nginx proxy.

4. **Verify Deployment:**
   - App: `http://<your-server-ip>/`
   - API: `http://<your-server-ip>/api/v1/actuator/health`

## Updating / Redeploying
To pull the latest changes and apply a zero-downtime-ish restart:
```bash
git pull origin main
docker-compose build
docker-compose up -d
```
