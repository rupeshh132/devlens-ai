-- V36__create_pyq_papers_and_questions_tables.sql
-- Database schema for DevLens Learn: Smart PYQs and Admin Question Papers management

CREATE TABLE IF NOT EXISTS learn_pyq_papers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(500) NOT NULL,
    target_class VARCHAR(50) NOT NULL, -- 'Class 9', 'Class 10', 'Class 11', 'Class 12'
    subject VARCHAR(100) NOT NULL,    -- 'Physics', 'Chemistry', 'Mathematics', 'Biology', etc.
    year INTEGER NOT NULL,
    paper_type VARCHAR(50) NOT NULL DEFAULT 'BOARD_EXAM', -- 'BOARD_EXAM', 'CBSE_SAMPLE', 'PRE_BOARD'
    paper_code VARCHAR(100),
    total_marks INTEGER NOT NULL DEFAULT 80,
    duration_mins INTEGER NOT NULL DEFAULT 180,
    difficulty VARCHAR(50) DEFAULT 'MODERATE', -- 'EASY', 'MODERATE', 'CHALLENGING'
    is_free BOOLEAN DEFAULT true,
    total_questions INTEGER DEFAULT 0,
    general_instructions JSONB DEFAULT '[]'::jsonb,
    pdf_url TEXT,
    solution_pdf_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS learn_pyq_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    paper_id UUID NOT NULL REFERENCES learn_pyq_papers(id) ON DELETE CASCADE,
    q_num INTEGER NOT NULL,
    section VARCHAR(10) NOT NULL DEFAULT 'A', -- 'A', 'B', 'C', 'D', 'E'
    marks INTEGER NOT NULL DEFAULT 1,
    topic VARCHAR(255),
    question_text TEXT NOT NULL,
    options_json JSONB DEFAULT '[]'::jsonb,
    correct_option VARCHAR(20),
    model_answer TEXT,
    step_marking_json JSONB DEFAULT '[]'::jsonb,
    examiner_tip TEXT,
    common_pitfall TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_learn_pyq_papers_class_subject ON learn_pyq_papers(target_class, subject);
CREATE INDEX IF NOT EXISTS idx_learn_pyq_papers_year ON learn_pyq_papers(year);
CREATE INDEX IF NOT EXISTS idx_learn_pyq_questions_paper_id ON learn_pyq_questions(paper_id);
