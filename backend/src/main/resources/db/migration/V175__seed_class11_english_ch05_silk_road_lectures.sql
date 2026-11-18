-- V175__seed_class11_english_ch05_silk_road_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 5 (Hornbill: Silk Road)
-- Video: Educational Bhaiya (Silk Road Class 11 Full Animated Explained | vhI4Rm8S4so)
-- 100% Zero-Gap Single Master Lecture (0s to 760s / 12m 40s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000005';

-- 2. Insert 1 Verified Master Topic for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2105-0000-000000000001', '65d29b56-0301-1100-0000-000000000005', 'Silk Road (Complete Chapter Animated Journey: From Ravu to Mount Kailash & Kora Pilgrimage)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (760s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3105-0000-000000000001', '65d29b56-0301-2105-0000-000000000001', 'VIDEO', 'Silk Road (Complete Chapter Animated Journey: From Ravu to Mount Kailash & Kora Pilgrimage)', 'https://www.youtube.com/watch?v=vhI4Rm8S4so&end=760s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
