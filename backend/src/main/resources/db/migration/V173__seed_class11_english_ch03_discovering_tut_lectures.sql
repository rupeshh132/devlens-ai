-- V173__seed_class11_english_ch03_discovering_tut_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 3 (Hornbill: Discovering Tut: The Saga Continues)
-- Video: Educational Bhaiya (Discovering Tut : The Saga Continues Animated Full | 9bjsYS2xKIk)
-- 100% Zero-Gap Single Master Lecture (0s to 940s / 15m 40s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000003';

-- 2. Insert 1 Verified Master Topic for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2103-0000-000000000001', '65d29b56-0301-1100-0000-000000000003', 'Discovering Tut: The Saga Continues (Complete Animated Story & Forensic Investigation)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3103-0000-000000000001', '65d29b56-0301-2103-0000-000000000001', 'VIDEO', 'Discovering Tut: The Saga Continues (Complete Animated Story & Forensic Investigation)', 'https://www.youtube.com/watch?v=9bjsYS2xKIk&end=940s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
