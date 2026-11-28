-- Persist per-question elapsed time (seconds) for speed autopsy & What-If negative-trap simulation
ALTER TABLE learn_test_attempts
    ADD COLUMN IF NOT EXISTS question_times_json JSONB DEFAULT '{}'::jsonb;
