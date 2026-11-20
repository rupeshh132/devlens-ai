-- V192__seed_class11_english_ch22_debate_writing_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 22 (Creative Writing: Debate Writing)
-- Video: Magnet Brains (Debate Writing | Introduction to Writing Skills | Class 11 English | Qavt9Wz62Lg)
-- 100% Zero-Gap Single Master Lecture (0s to 2100s / 35m 00s, Website promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 22
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000022'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000022';

-- 2. Insert 1 Verified Master Topic for Chapter 22
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2122-0000-000000000001', '65d29b56-0301-1100-0000-000000000022', 'Writing Skills: Debate Writing (Introduction, Rules & Guidelines, Arguments For/Against the Motion & Solved Example)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (2100s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3122-0000-000000000001', '65d29b56-0301-2122-0000-000000000001', 'VIDEO', 'Writing Skills: Debate Writing (Introduction, Rules & Guidelines, Arguments For/Against the Motion & Solved Example)', 'https://www.youtube.com/watch?v=Qavt9Wz62Lg&end=2100s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
