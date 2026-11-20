-- V180__seed_class11_english_ch10_father_to_son_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 10 (Hornbill Poem: Father to Son)
-- Video: Educational Bhaiya (Father To Son Class 11 | Full Explained | atS_6CS5xWo)
-- 100% Zero-Gap Single Master Lecture (0s to 402s / 6m 42s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 10
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000010';

-- 2. Insert 1 Verified Master Topic for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2110-0000-000000000001', '65d29b56-0301-1100-0000-000000000010', 'Father to Son (Complete Poem Analysis, Generation Gap, Emotional Estrangement, Reconciliation & Poetic Devices)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (402s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3110-0000-000000000001', '65d29b56-0301-2110-0000-000000000001', 'VIDEO', 'Father to Son (Complete Poem Analysis, Generation Gap, Emotional Estrangement, Reconciliation & Poetic Devices)', 'https://www.youtube.com/watch?v=atS_6CS5xWo&end=402s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
