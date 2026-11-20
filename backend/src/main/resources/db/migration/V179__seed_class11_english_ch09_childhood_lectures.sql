-- V179__seed_class11_english_ch09_childhood_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 9 (Hornbill Poem: Childhood)
-- Video: Educational Bhaiya (Childhood Class 11 Full Animated Explained | kXCmiaH83fY)
-- 100% Zero-Gap Single Master Lecture (0s to 280s / 4m 40s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 9
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000009';

-- 2. Insert 1 Verified Master Topic for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2109-0000-000000000001', '65d29b56-0301-1100-0000-000000000009', 'Childhood (Complete Poem Analysis, Loss of Innocence, Rationalism, Individuality & Poetic Devices)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (280s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3109-0000-000000000001', '65d29b56-0301-2109-0000-000000000001', 'VIDEO', 'Childhood (Complete Poem Analysis, Loss of Innocence, Rationalism, Individuality & Poetic Devices)', 'https://www.youtube.com/watch?v=kXCmiaH83fY&end=280s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
