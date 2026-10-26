-- V39: AI Doubts Telemetry and Dynamic Platform Settings
-- Enables tracking student doubts, LLM token burn, cost estimation, and dynamic platform limits

CREATE TABLE IF NOT EXISTS learn_ai_doubts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES learn_users(id) ON DELETE SET NULL,
    user_email VARCHAR(255),
    topic VARCHAR(255),
    question_text TEXT NOT NULL,
    ai_response TEXT,
    model VARCHAR(100),
    prompt_tokens INTEGER DEFAULT 0,
    completion_tokens INTEGER DEFAULT 0,
    total_tokens INTEGER DEFAULT 0,
    estimated_cost_usd NUMERIC(10, 6) DEFAULT 0,
    estimated_cost_inr NUMERIC(10, 4) DEFAULT 0,
    latency_ms BIGINT DEFAULT 0,
    status VARCHAR(50) DEFAULT 'SUCCESS',
    is_flagged BOOLEAN DEFAULT FALSE,
    flag_reason VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_learn_ai_doubts_user_id ON learn_ai_doubts(user_id);
CREATE INDEX IF NOT EXISTS idx_learn_ai_doubts_created_at ON learn_ai_doubts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_learn_ai_doubts_topic ON learn_ai_doubts(topic);
CREATE INDEX IF NOT EXISTS idx_learn_ai_doubts_flagged ON learn_ai_doubts(is_flagged);
CREATE INDEX IF NOT EXISTS idx_learn_ai_doubts_status ON learn_ai_doubts(status);

-- Dynamic Platform Settings Table
CREATE TABLE IF NOT EXISTS system_settings (
    setting_key VARCHAR(100) PRIMARY KEY,
    setting_value TEXT NOT NULL,
    description VARCHAR(255),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seed Initial System Configuration
INSERT INTO system_settings (setting_key, setting_value, description)
VALUES 
    ('free_doubts_daily_limit', '5', 'Daily AI doubt limit for free-tier students'),
    ('pro_doubts_daily_limit', '100', 'Daily AI doubt limit for pro-tier students'),
    ('ai_emergency_killswitch', 'false', 'Global master killswitch to disable AI doubt solver in emergency'),
    ('daily_xp_cap', '1000', 'Maximum daily XP a student can earn from study sessions'),
    ('maintenance_mode', 'false', 'Platform-wide maintenance mode status')
ON CONFLICT (setting_key) DO NOTHING;
