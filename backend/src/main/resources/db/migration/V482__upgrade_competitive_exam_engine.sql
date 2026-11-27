-- V482__upgrade_competitive_exam_engine.sql
-- Adds competitive exam support columns for JEE Mains (Numerical Section B),
-- JEE Advanced (MSQ partial marking, decimal tolerance, Dual-Paper pairing),
-- and NEET UG (NMC 2026 subject stats & syllabus tags) without breaking existing CBSE rows.

ALTER TABLE learn_questions
    ADD COLUMN IF NOT EXISTS negative_marks NUMERIC(5,2),
    ADD COLUMN IF NOT EXISTS partial_marking_rule VARCHAR(50),
    ADD COLUMN IF NOT EXISTS tolerance_min NUMERIC(12,4),
    ADD COLUMN IF NOT EXISTS tolerance_max NUMERIC(12,4),
    ADD COLUMN IF NOT EXISTS syllabus_tag VARCHAR(40);

ALTER TABLE learn_test_questions
    ADD COLUMN IF NOT EXISTS negative_marks NUMERIC(5,2),
    ADD COLUMN IF NOT EXISTS subject_label VARCHAR(80);

ALTER TABLE learn_mock_tests
    ADD COLUMN IF NOT EXISTS paper_pair_id UUID,
    ADD COLUMN IF NOT EXISTS paper_number SMALLINT,
    ADD COLUMN IF NOT EXISTS syllabus_version VARCHAR(50);

ALTER TABLE learn_test_attempts
    ADD COLUMN IF NOT EXISTS subject_stats_json JSONB;

CREATE INDEX IF NOT EXISTS idx_learn_mock_tests_exam_type_id ON learn_mock_tests(exam_type_id);
CREATE INDEX IF NOT EXISTS idx_learn_mock_tests_pair_id ON learn_mock_tests(paper_pair_id) WHERE paper_pair_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_learn_questions_qtype_subject ON learn_questions(question_type, subject);
