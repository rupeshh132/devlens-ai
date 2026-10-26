ALTER TABLE learn_users 
ADD COLUMN daily_free_doubts_used INTEGER DEFAULT 0,
ADD COLUMN last_doubt_date DATE;
