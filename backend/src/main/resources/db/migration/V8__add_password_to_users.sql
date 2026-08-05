-- V8__add_password_to_users.sql
-- Add password column to users table for manual email/password login support

ALTER TABLE users ADD COLUMN password VARCHAR(255);
