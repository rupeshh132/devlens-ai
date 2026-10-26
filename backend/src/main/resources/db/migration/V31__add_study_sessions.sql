-- V31__add_study_sessions.sql
ALTER TABLE learn_users ADD COLUMN IF NOT EXISTS study_minutes INTEGER DEFAULT 0;

CREATE TABLE IF NOT EXISTS learn_study_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES learn_users(id) ON DELETE CASCADE,
    duration_minutes INTEGER NOT NULL,
    session_type VARCHAR(50) NOT NULL, -- 'FOCUS_TIMER' or 'PASSIVE'
    earned_xp INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
