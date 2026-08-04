-- V5__create_vulnerabilities_table.sql
-- Create vulnerabilities table (score and summary already in analysis_jobs from V4)

CREATE TABLE IF NOT EXISTS vulnerabilities (
    id UUID PRIMARY KEY,
    analysis_job_id UUID NOT NULL REFERENCES analysis_jobs(id) ON DELETE CASCADE,
    file_path VARCHAR(255) NOT NULL,
    line_number INTEGER,
    severity VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    suggested_fix TEXT
);
