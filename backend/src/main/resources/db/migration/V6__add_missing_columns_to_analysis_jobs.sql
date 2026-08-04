-- V6__add_missing_columns_to_analysis_jobs.sql
-- Adds all columns required by AnalysisJob JPA entity that may be missing
-- from the pre-existing analysis_jobs table.
-- Uses IF NOT EXISTS so this migration is safe to run even if some columns already exist.

ALTER TABLE analysis_jobs ADD COLUMN IF NOT EXISTS progress INTEGER NOT NULL DEFAULT 0;
ALTER TABLE analysis_jobs ADD COLUMN IF NOT EXISTS error_message TEXT;
ALTER TABLE analysis_jobs ADD COLUMN IF NOT EXISTS score DOUBLE PRECISION;
ALTER TABLE analysis_jobs ADD COLUMN IF NOT EXISTS summary TEXT;
ALTER TABLE analysis_jobs ADD COLUMN IF NOT EXISTS started_at TIMESTAMP WITH TIME ZONE;
ALTER TABLE analysis_jobs ADD COLUMN IF NOT EXISTS completed_at TIMESTAMP WITH TIME ZONE;
ALTER TABLE analysis_jobs ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE;
ALTER TABLE analysis_jobs ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE;

-- Backfill created_at/updated_at for any existing rows that have NULL
UPDATE analysis_jobs SET created_at = NOW() WHERE created_at IS NULL;
UPDATE analysis_jobs SET updated_at = NOW() WHERE updated_at IS NULL;
