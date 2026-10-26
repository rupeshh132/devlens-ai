-- V20__init_learn_schema.sql
-- Initializes the complete schema for DevLens Learn (EdTech module)
-- All tables are prefixed with 'learn_' to isolate them from DevLens AI.

-- 1. EXAM TAXONOMY
CREATE TABLE learn_exam_types (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(500),
    category VARCHAR(100) NOT NULL,
    sub_category VARCHAR(100),
    conducting_body VARCHAR(255),
    required_plan VARCHAR(50) DEFAULT 'GOVT_EXAM',
    icon_url TEXT,
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 999,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE learn_subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exam_type_id UUID REFERENCES learn_exam_types(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50),
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE learn_chapters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_id UUID REFERENCES learn_subjects(id) ON DELETE CASCADE,
    title VARCHAR(500) NOT NULL,
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE learn_topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chapter_id UUID REFERENCES learn_chapters(id) ON DELETE CASCADE,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true
);

-- 2. CONTENT & QUESTIONS
CREATE TABLE learn_content_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id UUID REFERENCES learn_topics(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL, -- VIDEO, NOTES_PDF, ARTICLE
    title VARCHAR(500) NOT NULL,
    content_url TEXT,
    is_free BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE learn_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id UUID REFERENCES learn_topics(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    options_json JSONB NOT NULL,
    correct_answer VARCHAR(10) NOT NULL,
    explanation TEXT,
    difficulty VARCHAR(50) DEFAULT 'MEDIUM',
    source_year VARCHAR(50),
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. USERS & SUBSCRIPTIONS
CREATE TABLE learn_subscription_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL UNIQUE,
    display_name VARCHAR(255),
    monthly_price INTEGER NOT NULL,
    yearly_price INTEGER NOT NULL,
    accessible_categories TEXT[],
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE learn_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    phone VARCHAR(20),
    subscription_plan VARCHAR(50) DEFAULT 'FREE',
    subscribed_until TIMESTAMP,
    exam_goal VARCHAR(255),
    target_exam_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- 4. TESTS & PROGRESS
CREATE TABLE learn_mock_tests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exam_type_id UUID REFERENCES learn_exam_types(id) ON DELETE CASCADE,
    title VARCHAR(500) NOT NULL,
    duration_mins INTEGER NOT NULL,
    total_marks INTEGER NOT NULL,
    negative_marking DECIMAL(5,2) DEFAULT 0.25,
    is_free BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE learn_test_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mock_test_id UUID REFERENCES learn_mock_tests(id) ON DELETE CASCADE,
    question_id UUID REFERENCES learn_questions(id) ON DELETE CASCADE,
    section_name VARCHAR(255),
    marks INTEGER DEFAULT 2,
    order_index INTEGER DEFAULT 0
);

CREATE TABLE learn_test_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES learn_users(id) ON DELETE CASCADE,
    mock_test_id UUID REFERENCES learn_mock_tests(id) ON DELETE CASCADE,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    submitted_at TIMESTAMP,
    score DECIMAL(10,2),
    answers_json JSONB,
    topic_scores_json JSONB,
    status VARCHAR(50) DEFAULT 'IN_PROGRESS'
);

CREATE TABLE learn_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES learn_users(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES learn_topics(id) ON DELETE CASCADE,
    status VARCHAR(50) DEFAULT 'NOT_STARTED',
    best_score DECIMAL(5,2),
    last_accessed TIMESTAMP,
    UNIQUE(user_id, topic_id)
);

CREATE TABLE learn_daily_study_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES learn_users(id) ON DELETE CASCADE,
    plan_date DATE NOT NULL,
    plan_json JSONB NOT NULL,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, plan_date)
);

CREATE TABLE learn_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES learn_users(id) ON DELETE CASCADE,
    razorpay_order_id VARCHAR(255),
    razorpay_payment_id VARCHAR(255),
    amount INTEGER NOT NULL,
    plan_name VARCHAR(50),
    status VARCHAR(50) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
