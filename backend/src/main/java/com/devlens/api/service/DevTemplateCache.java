package com.devlens.api.service;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class DevTemplateCache {

    private final Map<String, String> skillGapCache = new HashMap<>();
    private final Map<String, String> roadmapCache = new HashMap<>();
    private final Map<String, String> interviewQuestionsCache = new HashMap<>();

    public DevTemplateCache() {
        initSkillGapTemplates();
        initRoadmapTemplates();
        initInterviewTemplates();
    }

    public String getSkillGap(String targetRole) {
        if (targetRole == null) targetRole = "Java";
        String key = targetRole.toUpperCase();
        if (key.contains("JAVA")) return skillGapCache.get("JAVA");
        if (key.contains("REACT") || key.contains("FRONTEND")) return skillGapCache.get("REACT");
        if (key.contains("DEVOPS") || key.contains("CLOUD")) return skillGapCache.get("DEVOPS");
        if (key.contains("PYTHON") || key.contains("DATA")) return skillGapCache.get("PYTHON");
        return skillGapCache.get("JAVA");
    }

    public String getRoadmap(String title) {
        if (title == null) title = "Java";
        String key = title.toUpperCase();
        if (key.contains("JAVA")) return roadmapCache.get("JAVA");
        if (key.contains("REACT") || key.contains("FRONTEND")) return roadmapCache.get("REACT");
        if (key.contains("DEVOPS") || key.contains("CLOUD")) return roadmapCache.get("DEVOPS");
        return roadmapCache.get("JAVA");
    }

    public String getInterviewQuestions(String targetRole) {
        if (targetRole == null) targetRole = "Java";
        String key = targetRole.toUpperCase();
        if (key.contains("REACT")) return interviewQuestionsCache.get("REACT");
        if (key.contains("DEVOPS")) return interviewQuestionsCache.get("DEVOPS");
        return interviewQuestionsCache.get("JAVA");
    }

    private void initSkillGapTemplates() {
        skillGapCache.put("JAVA", """
        {
          "overallMatchPercentage": 75,
          "matchedSkills": ["Java 17", "Spring Boot", "REST APIs", "SQL", "Git"],
          "missingSkills": ["Microservices", "Docker", "Redis Caching", "Kafka Messaging"],
          "projectIdeas": [
            {
              "title": "E-Commerce Microservice Engine",
              "description": "Build an event-driven microservices architecture using Spring Cloud, Kafka, and Redis caching.",
              "skillsTargeted": ["Microservices", "Docker", "Redis Caching", "Kafka"]
            }
          ],
          "recommendations": [
            "Learn Docker containerization for Java Spring Boot apps.",
            "Implement Kafka pub/sub messaging for asynchronous service communication."
          ]
        }
        """);

        skillGapCache.put("REACT", """
        {
          "overallMatchPercentage": 80,
          "matchedSkills": ["React 18", "TypeScript", "Tailwind CSS", "REST API Integration"],
          "missingSkills": ["Next.js (SSR)", "Redux Toolkit / Zustand", "Jest & React Testing Library"],
          "projectIdeas": [
            {
              "title": "Real-Time SaaS Dashboard",
              "description": "Build a responsive Next.js dashboard with server-side rendering and state management.",
              "skillsTargeted": ["Next.js", "Zustand", "Testing"]
            }
          ],
          "recommendations": [
            "Master Next.js App Router for server-side rendering.",
            "Write component unit tests using React Testing Library."
          ]
        }
        """);

        skillGapCache.put("DEVOPS", """
        {
          "overallMatchPercentage": 70,
          "matchedSkills": ["Linux CLI", "Git", "Docker", "Shell Scripting"],
          "missingSkills": ["Kubernetes (K8s)", "Terraform IaC", "Jenkins / GitHub Actions CI/CD", "Prometheus"],
          "projectIdeas": [
            {
              "title": "Automated AWS CI/CD Pipeline",
              "description": "Provision AWS infrastructure using Terraform and deploy K8s clusters via GitHub Actions.",
              "skillsTargeted": ["Kubernetes", "Terraform", "GitHub Actions"]
            }
          ],
          "recommendations": [
            "Learn Infrastructure as Code (IaC) using Terraform.",
            "Deploy multi-container apps on Kubernetes clusters."
          ]
        }
        """);

        skillGapCache.put("PYTHON", """
        {
          "overallMatchPercentage": 78,
          "matchedSkills": ["Python 3", "FastAPI", "Pandas", "PostgreSQL"],
          "missingSkills": ["Vector DBs (Pinecone/Chroma)", "LangChain / LLM APIs", "Celery Task Queue"],
          "projectIdeas": [
            {
              "title": "AI Document Q&A Search Engine",
              "description": "Build a RAG pipeline using FastAPI, LangChain, and a vector database.",
              "skillsTargeted": ["LangChain", "Vector DB", "FastAPI"]
            }
          ],
          "recommendations": [
            "Understand Retrieval-Augmented Generation (RAG) for AI apps.",
            "Use Celery for asynchronous background jobs."
          ]
        }
        """);
    }

    private void initRoadmapTemplates() {
        roadmapCache.put("JAVA", """
        {
          "milestones": [
            {
              "title": "Milestone 1: Spring Boot & Microservices Deep Dive",
              "description": "Build scalable Spring Boot REST APIs, configure Spring Cloud API Gateway, and Eureka Service Discovery.",
              "estimatedTime": "2 weeks",
              "status": "pending",
              "resources": ["Spring Boot Official Docs", "Baeldung Spring Cloud Guide"]
            },
            {
              "title": "Milestone 2: Containerization & Message Queues",
              "description": "Containerize Spring Boot apps with Docker and integrate Apache Kafka for event-driven messaging.",
              "estimatedTime": "2 weeks",
              "status": "pending",
              "resources": ["Docker for Java Developers", "Kafka Crash Course"]
            }
          ]
        }
        """);

        roadmapCache.put("REACT", """
        {
          "milestones": [
            {
              "title": "Milestone 1: Next.js App Router & SSR",
              "description": "Master Server Components, Server Actions, and Next.js routing patterns.",
              "estimatedTime": "2 weeks",
              "status": "pending",
              "resources": ["Next.js Documentation", "React Server Components Guide"]
            }
          ]
        }
        """);

        roadmapCache.put("DEVOPS", """
        {
          "milestones": [
            {
              "title": "Milestone 1: Kubernetes & Helm Charts",
              "description": "Deploy Pods, Deployments, Services, and Ingress controllers on K8s.",
              "estimatedTime": "2 weeks",
              "status": "pending",
              "resources": ["Kubernetes Official Docs", "Helm Package Manager"]
            }
          ]
        }
        """);
    }

    private void initInterviewTemplates() {
        interviewQuestionsCache.put("JAVA", """
        {
          "questions": [
            {
              "question": "What is the difference between HashMap and ConcurrentHashMap in Java?",
              "expectedAnswer": "HashMap is not thread-safe. ConcurrentHashMap uses bucket-level locking (concurrent segments) allowing multiple threads to read and write without blocking the entire map.",
              "difficulty": "Medium"
            },
            {
              "question": "Explain Spring Boot Dependency Injection and @Autowired annotation.",
              "expectedAnswer": "Spring IoC container manages bean lifecycles and injects dependencies via Constructor, Setter, or Field injection.",
              "difficulty": "Easy"
            }
          ]
        }
        """);

        interviewQuestionsCache.put("REACT", """
        {
          "questions": [
            {
              "question": "Explain the difference between useEffect and useLayoutEffect in React.",
              "expectedAnswer": "useEffect runs asynchronously after DOM mutations are painted. useLayoutEffect runs synchronously before screen paint.",
              "difficulty": "Medium"
            }
          ]
        }
        """);

        interviewQuestionsCache.put("DEVOPS", """
        {
          "questions": [
            {
              "question": "What is the difference between a Docker Image and a Docker Container?",
              "expectedAnswer": "An image is a read-only blueprint containing app code and dependencies. A container is a running instance of an image.",
              "difficulty": "Easy"
            }
          ]
        }
        """);
    }
}
