ALTER TABLE analysis_jobs ADD COLUMN score DOUBLE PRECISION;
ALTER TABLE analysis_jobs ADD COLUMN summary TEXT;

CREATE TABLE vulnerabilities (
    id UUID PRIMARY KEY,
    analysis_job_id UUID NOT NULL REFERENCES analysis_jobs(id) ON DELETE CASCADE,
    file_path VARCHAR(255) NOT NULL,
    line_number INTEGER,
    severity VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    suggested_fix TEXT
);
