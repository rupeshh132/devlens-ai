-- V455: Add mock test blueprint and subjective question support for Class 9 Real-Format Tests

-- 1. Modify learn_questions to support all CBSE question types and allow subjective questions
ALTER TABLE learn_questions ALTER COLUMN topic_id DROP NOT NULL;
ALTER TABLE learn_questions ALTER COLUMN options_json DROP NOT NULL;
ALTER TABLE learn_questions ALTER COLUMN correct_answer DROP NOT NULL;

ALTER TABLE learn_questions ADD COLUMN IF NOT EXISTS question_type VARCHAR(30) DEFAULT 'MCQ';
ALTER TABLE learn_questions ADD COLUMN IF NOT EXISTS subject VARCHAR(50);
ALTER TABLE learn_questions ADD COLUMN IF NOT EXISTS chapter VARCHAR(150);
ALTER TABLE learn_questions ADD COLUMN IF NOT EXISTS marks INT DEFAULT 1;
ALTER TABLE learn_questions ADD COLUMN IF NOT EXISTS model_answer TEXT;
ALTER TABLE learn_questions ADD COLUMN IF NOT EXISTS marking_scheme_json TEXT;
ALTER TABLE learn_questions ADD COLUMN IF NOT EXISTS case_passage TEXT;
ALTER TABLE learn_questions ADD COLUMN IF NOT EXISTS parent_case_id UUID;

-- 2. Modify learn_mock_tests to support subject categorization, blueprints, and instructions
ALTER TABLE learn_mock_tests ADD COLUMN IF NOT EXISTS subject VARCHAR(50);
ALTER TABLE learn_mock_tests ADD COLUMN IF NOT EXISTS test_type VARCHAR(50) DEFAULT 'FULL';
ALTER TABLE learn_mock_tests ADD COLUMN IF NOT EXISTS class_level VARCHAR(20) DEFAULT 'Class 9';
ALTER TABLE learn_mock_tests ADD COLUMN IF NOT EXISTS instructions TEXT;
ALTER TABLE learn_mock_tests ADD COLUMN IF NOT EXISTS blueprint_json TEXT;

-- 3. Modify learn_test_questions to support internal choices and sub-numbering
ALTER TABLE learn_test_questions ADD COLUMN IF NOT EXISTS internal_choice_group VARCHAR(50);
ALTER TABLE learn_test_questions ADD COLUMN IF NOT EXISTS question_sub_num VARCHAR(20);

-- 4. Create performance indexes for rapid subject querying and pagination
CREATE INDEX IF NOT EXISTS idx_mock_tests_exam_subject ON learn_mock_tests(exam_type_id, subject);
CREATE INDEX IF NOT EXISTS idx_mock_tests_type ON learn_mock_tests(test_type);
CREATE INDEX IF NOT EXISTS idx_test_questions_test_id ON learn_test_questions(mock_test_id);
CREATE INDEX IF NOT EXISTS idx_questions_subject_chapter ON learn_questions(subject, chapter);
