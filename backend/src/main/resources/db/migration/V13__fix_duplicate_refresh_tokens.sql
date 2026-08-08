-- V13: Clean up duplicate refresh tokens and add unique constraint
-- This prevents NonUniqueResultException crash when a user logs in from same device twice (e.g. double-tap)

-- Step 1: Delete duplicate rows, keeping only the most recently created one per (user_id, device_id)
DELETE FROM refresh_tokens
WHERE id NOT IN (
    SELECT DISTINCT ON (user_id, device_id) id
    FROM refresh_tokens
    ORDER BY user_id, device_id, expiry_date DESC
);

-- Step 2: Add unique constraint so duplicates can never happen again
ALTER TABLE refresh_tokens
    ADD CONSTRAINT uq_refresh_tokens_user_device UNIQUE (user_id, device_id);
