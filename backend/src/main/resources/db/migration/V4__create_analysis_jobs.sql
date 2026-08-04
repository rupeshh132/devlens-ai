-- V4__create_analysis_jobs.sql
-- Create analysis_jobs table matching AnalysisJob entity exactly

CREATE TABLE IF NOT EXISTS analysis_jobs (
    id UUID PRIMARY KEY,
    repository_id UUID NOT NULL,
    status VARCHAR(50) NOT NULL,
    progress INTEGER NOT NULL DEFAULT 0,
    error_message TEXT,
    score DOUBLE PRECISION,
    summary TEXT,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL,

    CONSTRAINT fk_analysis_jobs_repository FOREIGN KEY (repository_id) REFERENCES repositories(id) ON DELETE CASCADE
);
