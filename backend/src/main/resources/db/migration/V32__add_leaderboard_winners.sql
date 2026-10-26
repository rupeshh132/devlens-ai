CREATE TABLE learn_leaderboard_winners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES learn_users(id),
    month INT NOT NULL,
    year INT NOT NULL,
    rank INT NOT NULL,
    total_xp INT NOT NULL,
    study_minutes INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(month, year, rank)
);

ALTER TABLE learn_users ADD COLUMN is_leaderboard_banned BOOLEAN DEFAULT FALSE;
