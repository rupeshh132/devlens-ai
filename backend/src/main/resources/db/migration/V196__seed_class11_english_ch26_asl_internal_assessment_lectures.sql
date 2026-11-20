-- V196__seed_class11_english_ch26_asl_internal_assessment_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 26 (Internal Assessment: ASL & Project Work)
-- Video: English Tutorials by Poonam (ASL Class 11 English | Assessment of Speaking and Listening Skills | U1GG0mN7lb8)
-- 100% Zero-Gap Single Master Lecture (0s to 1150s / 19m 10s, Floral outro card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 26
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000026'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000026';

-- 2. Insert 1 Verified Master Topic for Chapter 26
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2126-0000-000000000001', '65d29b56-0301-1100-0000-000000000026', 'Internal Assessment: Assessment of Speaking & Listening (ASL) Skills, Roleplay & Project Work Guidelines', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (1150s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3126-0000-000000000001', '65d29b56-0301-2126-0000-000000000001', 'VIDEO', 'Internal Assessment: Assessment of Speaking & Listening (ASL) Skills, Roleplay & Project Work Guidelines', 'https://www.youtube.com/watch?v=U1GG0mN7lb8&end=1150s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
