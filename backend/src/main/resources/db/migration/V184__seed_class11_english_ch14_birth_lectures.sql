-- V184__seed_class11_english_ch14_birth_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 14 (Snapshots: Birth)
-- Video: Educational Bhaiya (Birth | Class 11 | Full Explained | 15GCJdMbT3Q)
-- 100% Zero-Gap Single Master Lecture (0s to 684s / 11m 24s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 14
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000014';

-- 2. Insert 1 Verified Master Topic for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2114-0000-000000000001', '65d29b56-0301-1100-0000-000000000014', 'Birth (Complete Animated Story: Dr. Andrew Manson, Joe Morgan, The Delivery Crisis & Medical Miracle)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (684s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3114-0000-000000000001', '65d29b56-0301-2114-0000-000000000001', 'VIDEO', 'Birth (Complete Animated Story: Dr. Andrew Manson, Joe Morgan, The Delivery Crisis & Medical Miracle)', 'https://www.youtube.com/watch?v=15GCJdMbT3Q&end=684s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
