-- V195__seed_class11_english_ch25_note_making_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 25 (Reading Skills: Note-Making and Summarization)
-- Video: Magnet Brains (Note Making - Format & Solved Example | Class 11 English | sELIis1wfzM)
-- 100% Zero-Gap Single Master Lecture (0s to 2440s / 40m 40s, Website promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 25
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000025'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000025';

-- 2. Insert 1 Verified Master Topic for Chapter 25
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2125-0000-000000000001', '65d29b56-0301-1100-0000-000000000025', 'Reading Skills: Note-Making and Summarization (Format, Abbreviations, Heading/Subheading & Summary Writing)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (2440s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3125-0000-000000000001', '65d29b56-0301-2125-0000-000000000001', 'VIDEO', 'Reading Skills: Note-Making and Summarization (Format, Abbreviations, Heading/Subheading & Summary Writing)', 'https://www.youtube.com/watch?v=sELIis1wfzM&end=2440s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
