-- Spaced repetition tracking for Locker items & daily free quota for Mistake Redemption Drills
ALTER TABLE learn_user_locker_items
    ADD COLUMN IF NOT EXISTS review_stage INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN IF NOT EXISTS consecutive_correct INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN IF NOT EXISTS next_review_at TIMESTAMP,
    ADD COLUMN IF NOT EXISTS last_reviewed_at TIMESTAMP;

CREATE INDEX IF NOT EXISTS idx_learn_user_locker_next_review
    ON learn_user_locker_items(user_id, next_review_at);

ALTER TABLE learn_users
    ADD COLUMN IF NOT EXISTS daily_free_drills_used INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN IF NOT EXISTS last_drill_date DATE;
