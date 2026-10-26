-- V37__create_learn_user_locker_items_table.sql
-- Database schema for DevLens Learn: Student Personal Revision Locker & Vault

CREATE TABLE IF NOT EXISTS learn_user_locker_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    item_type VARCHAR(32) NOT NULL DEFAULT 'NOTE', -- 'NOTE', 'QUESTION', 'FORMULA'
    title VARCHAR(512) NOT NULL,
    subtitle VARCHAR(512),
    content TEXT NOT NULL,
    tags_json JSONB DEFAULT '[]'::jsonb,
    personal_note TEXT,
    meta_json JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_learn_user_locker_user_id ON learn_user_locker_items(user_id);
CREATE INDEX IF NOT EXISTS idx_learn_user_locker_type ON learn_user_locker_items(user_id, item_type);
