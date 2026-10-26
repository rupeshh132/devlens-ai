ALTER TABLE learn_users 
ADD COLUMN total_xp INTEGER DEFAULT 0,
ADD COLUMN referral_code VARCHAR(20) UNIQUE,
ADD COLUMN referred_by UUID REFERENCES learn_users(id);

CREATE TABLE learn_xp_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES learn_users(id),
    activity_type VARCHAR(50) NOT NULL,
    points_awarded INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_learn_xp_logs_user_id ON learn_xp_logs(user_id);