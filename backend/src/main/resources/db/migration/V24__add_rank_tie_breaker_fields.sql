-- Add Tie-Breaker fields for All India Rank (AIR) in LearnTestAttempt
ALTER TABLE learn_test_attempts
ADD COLUMN correct_answers INTEGER DEFAULT 0,
ADD COLUMN wrong_answers INTEGER DEFAULT 0,
ADD COLUMN time_taken_seconds BIGINT DEFAULT 0;
