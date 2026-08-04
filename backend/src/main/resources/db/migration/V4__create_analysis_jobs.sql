-- V4__create_analysis_jobs.sql
-- Create analysis_jobs table

CREATE TABLE analysis_jobs (
    id UUID PRIMARY KEY,
    repository_id UUID NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    branch VARCHAR(255),
    commit_sha VARCHAR(255),
    triggered_by UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_analysis_jobs_repository_id FOREIGN KEY (repository_id) REFERENCES repositories(id) ON DELETE CASCADE,
    CONSTRAINT fk_analysis_jobs_triggered_by FOREIGN KEY (triggered_by) REFERENCES users(id) ON DELETE SET NULL
);
