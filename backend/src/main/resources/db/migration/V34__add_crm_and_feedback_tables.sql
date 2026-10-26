-- V34__add_crm_and_feedback_tables.sql
-- Non-destructive additions for Student CRM, struggle tracking, and content feedback

ALTER TABLE learn_users 
ADD COLUMN IF NOT EXISTS crm_status VARCHAR(50) DEFAULT 'NEW_LEAD',
ADD COLUMN IF NOT EXISTS crm_notes TEXT,
ADD COLUMN IF NOT EXISTS last_contacted_at TIMESTAMP,
ADD COLUMN IF NOT EXISTS paywall_hit_count INTEGER DEFAULT 0;

CREATE TABLE IF NOT EXISTS learn_content_ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES learn_users(id) ON DELETE CASCADE,
    content_id UUID REFERENCES learn_content_items(id) ON DELETE CASCADE,
    is_helpful BOOLEAN NOT NULL,
    feedback_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, content_id)
);

CREATE INDEX IF NOT EXISTS idx_learn_users_crm_status ON learn_users(crm_status);
CREATE INDEX IF NOT EXISTS idx_learn_users_sub_plan ON learn_users(subscription_plan);
