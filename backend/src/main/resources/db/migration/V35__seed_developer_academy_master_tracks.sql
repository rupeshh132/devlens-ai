-- V35__seed_developer_academy_master_tracks.sql
-- Clean up legacy test dummy courses if present
DELETE FROM course WHERE LOWER(TRIM(title)) IN ('sdsfd', 'dgdfghf') OR title ILIKE '%test course%';

-- Track 1: Master in Full Stack Java Development
INSERT INTO course (id, title, description, price, is_published, created_at)
VALUES (
    'a0000000-0000-0000-0000-000000000001',
    'Master in Full Stack Java Development',
    'Master Core Java 21, Spring Boot 3 microservices, React 18, and PostgreSQL. Build a production-grade E-Commerce Banking Engine and get AI-reviewed.',
    99900,
    TRUE,
    CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

-- Track 1 Modules
INSERT INTO module (id, course_id, title, order_index, content_url, text_content, type)
VALUES
    ('b0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'Core Java 21, OOP & Functional Streams', 1, 'https://www.youtube.com/embed/grEKMHjyxr8', '# Core Java 21\nMaster Virtual Threads, Records, Sealed Classes, Generics, and Streams API.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000001', 'Spring Boot 3, RESTful APIs & Spring Data JPA', 2, 'https://www.youtube.com/embed/9SGDpanrc8U', '# Spring Boot 3 & JPA\nBuild production REST controllers, DTO patterns, Exception Handling, and Hibernate relationships.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000001', 'PostgreSQL Schema Design, Indexing & Flyway Migrations', 3, 'https://www.youtube.com/embed/qw--VYLpxG4', '# PostgreSQL & Flyway\nDatabase normalization, ACID transactions, complex joins, and versioned database migrations.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000004', 'a0000000-0000-0000-0000-000000000001', 'Microservices Architecture, Docker Containers & Spring Cloud', 4, 'https://www.youtube.com/embed/mSnpq-64HnQ', '# Microservices\nEureka Service Discovery, API Gateway, Circuit Breaker (Resilience4j), and Docker Compose setup.', 'VIDEO'),
    ('b0000000-0000-0000-0000-000000000005', 'a0000000-0000-0000-0000-000000000001', 'React 18 & Vite Frontend Integration with Spring Security JWT', 5, 'https://www.youtube.com/embed/bMknfKXIFA8', '# React & Spring Security\nJWT stateless authentication, Axios interceptors, protected route layout, and Tailwind CSS UI.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000006', 'a0000000-0000-0000-0000-000000000001', 'Capstone Project: Banking & E-Commerce API Engine', 6, 'https://github.com/devlens-ai/spring-boot-banking-engine-starter', '# Capstone Project: Enterprise Banking API\n\n### Deliverables:\n1. Account creation & double-entry ledger\n2. Idempotent transfer endpoints\n3. Docker Compose with PostgreSQL\n4. Submit your GitHub repository for admin review.', 'PROJECT')
ON CONFLICT (id) DO NOTHING;


-- Track 2: Master in DevOps & Cloud Engineering
INSERT INTO course (id, title, description, price, is_published, created_at)
VALUES (
    'a0000000-0000-0000-0000-000000000002',
    'Master in DevOps & Cloud Engineering',
    'Learn Linux, Docker, Kubernetes, AWS, Terraform, and CI/CD. Build an automated multi-cloud deployment pipeline.',
    99900,
    TRUE,
    CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

-- Track 2 Modules
INSERT INTO module (id, course_id, title, order_index, content_url, text_content, type)
VALUES
    ('b0000000-0000-0000-0000-000000000007', 'a0000000-0000-0000-0000-000000000002', 'Linux System Administration, Bash Scripting & SSH Security', 1, 'https://www.youtube.com/embed/s3ii48qYBxA', '# Linux Essentials\nProcess management, user permissions, networking tools (netstat, curl, iptables), and Bash automation.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000008', 'a0000000-0000-0000-0000-000000000002', 'Docker Containerization & Production Multi-Stage Builds', 2, 'https://www.youtube.com/embed/fqMOX6JJhGo', '# Docker & Containers\nWriting minimal Dockerfiles, layer caching, volume mounts, Docker networking, and security scanning.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000009', 'a0000000-0000-0000-0000-000000000002', 'Kubernetes Cluster Architecture, Deployments & Ingress', 3, 'https://www.youtube.com/embed/X48VuDVv0do', '# Kubernetes Orchestration\nPods, ReplicaSets, Deployments, Services (ClusterIP/NodePort), ConfigMaps, Secrets, and Nginx Ingress.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000010', 'a0000000-0000-0000-0000-000000000002', 'AWS Cloud Infrastructure: EC2, S3, RDS, VPC & IAM Security', 4, 'https://www.youtube.com/embed/k1RI5locZE4', '# AWS Architecture\nDesigning high-availability VPCs, public/private subnets, Security Groups, IAM least-privilege roles, and S3 static hosting.', 'VIDEO'),
    ('b0000000-0000-0000-0000-000000000011', 'a0000000-0000-0000-0000-000000000002', 'Terraform Infrastructure as Code (IaC) & GitHub Actions CI/CD', 5, 'https://www.youtube.com/embed/SLB_c_ayRMo', '# Terraform & CI/CD\nHCL syntax, Terraform state backends, reusable modules, and automated GitHub Actions deployment workflows.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000012', 'a0000000-0000-0000-0000-000000000002', 'Capstone Project: Multi-Cloud Kubernetes CI/CD Pipeline', 6, 'https://github.com/devlens-ai/devops-k8s-cicd-starter', '# Capstone Project: Automated CI/CD Pipeline\n\n### Deliverables:\n1. Automated test and build workflow\n2. Push Docker image to container registry\n3. Deploy to Kubernetes cluster via ArgoCD/Helm\n4. Submit your GitHub repository for admin review.', 'PROJECT')
ON CONFLICT (id) DO NOTHING;


-- Track 3: Master in AI & Data Engineering
INSERT INTO course (id, title, description, price, is_published, created_at)
VALUES (
    'a0000000-0000-0000-0000-000000000003',
    'Master in AI & Data Engineering',
    'Build real LLM apps with Python, FastAPI, Pandas, Groq AI API, and Vector DBs (Chroma). Create an AI Document Q&A Search Engine.',
    99900,
    TRUE,
    CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

-- Track 3 Modules
INSERT INTO module (id, course_id, title, order_index, content_url, text_content, type)
VALUES
    ('b0000000-0000-0000-0000-000000000013', 'a0000000-0000-0000-0000-000000000003', 'Modern Python 3.12 for Data Engineering & Async Pipelines', 1, 'https://www.youtube.com/embed/eWRfhZUzrAc', '# Python 3.12 for Data\nType hinting, async/await event loops, generator pipelines, dataclasses, and performance profiling.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000014', 'a0000000-0000-0000-0000-000000000003', 'FastAPI High-Performance Async Microservices & Pydantic V2', 2, 'https://www.youtube.com/embed/0rsHGhft2eQ', '# FastAPI & Pydantic\nAsync endpoints, dependency injection, OpenAPI documentation, and high-throughput API gateways.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000015', 'a0000000-0000-0000-0000-000000000003', 'Pandas & Polars Data Processing, Cleaning & Feature Pipelines', 3, 'https://www.youtube.com/embed/vmEHCJofslg', '# Data Engineering\nDataframe operations, memory optimization, chunked file processing, and ETL transformation scripts.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000016', 'a0000000-0000-0000-0000-000000000003', 'Vector Databases, Embeddings & Semantic Search (Chroma DB)', 4, 'https://www.youtube.com/embed/klTvEwg3oJ8', '# Vector DBs & Embeddings\nCosine similarity, dense text embeddings, vector indexing, and persistent ChromaDB collections.', 'VIDEO'),
    ('b0000000-0000-0000-0000-000000000017', 'a0000000-0000-0000-0000-000000000003', 'Groq AI API, LangChain & Autonomous LLM Agent Architecture', 5, 'https://www.youtube.com/embed/tcqEUSNCn8I', '# LLMs & AI Agents\nUltra-fast Groq Llama-3 inference, prompt templates, retrieval augmented generation, and output parsers.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000018', 'a0000000-0000-0000-0000-000000000003', 'Capstone Project: Enterprise RAG Document Q&A Search Engine', 6, 'https://github.com/devlens-ai/ai-rag-search-engine-starter', '# Capstone Project: RAG Search Engine\n\n### Deliverables:\n1. PDF/Document ingestion and chunking pipeline\n2. Vector embedding and retrieval layer\n3. Conversational QA interface with source citations\n4. Submit your GitHub repository for admin review.', 'PROJECT')
ON CONFLICT (id) DO NOTHING;


-- Track 4: Master in Full Stack MERN Development
INSERT INTO course (id, title, description, price, is_published, created_at)
VALUES (
    'a0000000-0000-0000-0000-000000000004',
    'Master in Full Stack MERN Development',
    'Master MongoDB, Express.js, React 18, Node.js, and Tailwind CSS. Build a real-time SaaS Collaboration tool with WebSockets.',
    99900,
    TRUE,
    CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO NOTHING;

-- Track 4 Modules
INSERT INTO module (id, course_id, title, order_index, content_url, text_content, type)
VALUES
    ('b0000000-0000-0000-0000-000000000019', 'a0000000-0000-0000-0000-000000000004', 'MongoDB Schema Design, Indexing & Mongoose Aggregation Pipeline', 1, 'https://www.youtube.com/embed/ofme2o29ngU', '# MongoDB Architecture\nDocument modelling, schema validation, compound indexes, aggregation pipelines, and Atlas configuration.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000020', 'a0000000-0000-0000-0000-000000000004', 'Express.js Enterprise Architecture, Middleware & Security Hardening', 2, 'https://www.youtube.com/embed/7H_QH9nipNs', '# Express.js REST APIs\nMiddleware chains, CORS, Helmet security headers, rate limiting, and centralized error handling.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000021', 'a0000000-0000-0000-0000-000000000004', 'React 18 Advanced Hooks, Custom Hooks & Tailwind CSS System', 3, 'https://www.youtube.com/embed/w7ejDZ8SWv8', '# React 18 Architecture\nComponent composition, custom data fetching hooks, optimistic UI updates, and Tailwind UI components.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000022', 'a0000000-0000-0000-0000-000000000004', 'Node.js Async Runtime, Event Loop & JWT Authentication Flow', 4, 'https://www.youtube.com/embed/Oe421EPjeBE', '# Node.js Runtime\nNon-blocking I/O, event loop mechanics, bcrypt hashing, JWT access/refresh token pattern in HttpOnly cookies.', 'VIDEO'),
    ('b0000000-0000-0000-0000-000000000023', 'a0000000-0000-0000-0000-000000000004', 'Socket.io Real-Time Event Streaming & Collaborative Presence', 5, 'https://www.youtube.com/embed/ZKEqqIO7n-k', '# WebSockets & Real-Time\nSocket.io rooms, bi-directional events, heartbeat ping/pong, and collaborative presence tracking.', 'LESSON'),
    ('b0000000-0000-0000-0000-000000000024', 'a0000000-0000-0000-0000-000000000004', 'Capstone Project: Real-time SaaS Collaboration & Whiteboard Tool', 6, 'https://github.com/devlens-ai/mern-saas-collaboration-starter', '# Capstone Project: Real-Time SaaS Tool\n\n### Deliverables:\n1. Multi-tenant workspace and room creation\n2. Live collaborative document / canvas state sync\n3. Role-based member access control\n4. Submit your GitHub repository for admin review.', 'PROJECT')
ON CONFLICT (id) DO NOTHING;
