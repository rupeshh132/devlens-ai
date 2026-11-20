-- V182__seed_class11_english_ch12_the_address_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 12 (Snapshots: The Address)
-- Video: Educational Bhaiya (The Address Class 11 | Animated Full Explained | JcuYkVi_BQQ)
-- 100% Zero-Gap Single Master Lecture (0s to 825s / 13m 45s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 12
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000012';

-- 2. Insert 1 Verified Master Topic for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2112-0000-000000000001', '65d29b56-0301-1100-0000-000000000012', 'The Address (Complete Animated Story: Post-War Trauma, Mrs. Dorling, Marconi Street & Letting Go)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (825s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3112-0000-000000000001', '65d29b56-0301-2112-0000-000000000001', 'VIDEO', 'The Address (Complete Animated Story: Post-War Trauma, Mrs. Dorling, Marconi Street & Letting Go)', 'https://www.youtube.com/watch?v=JcuYkVi_BQQ&end=825s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
