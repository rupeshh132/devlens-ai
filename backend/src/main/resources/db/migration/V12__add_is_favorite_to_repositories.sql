-- V12__add_is_favorite_to_repositories.sql
ALTER TABLE repositories
ADD COLUMN IF NOT EXISTS is_favorite BOOLEAN NOT NULL DEFAULT FALSE;
