-- V185__seed_class11_english_ch15_melon_city_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 15 (Snapshots: The Tale of Melon City)
-- Video: Educational Bhaiya (The Tale of Melon City Class 11 | Full Explained | DCXEY5w_UvY)
-- 100% Zero-Gap Single Master Lecture (0s to 460s / 7m 40s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 15
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000015';

-- 2. Insert 1 Verified Master Topic for Chapter 15
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2115-0000-000000000001', '65d29b56-0301-1100-0000-000000000015', 'The Tale of Melon City (Complete Poem Analysis: Satire, Just & Placid King, Royal Decree & Laissez-Faire)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (460s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3115-0000-000000000001', '65d29b56-0301-2115-0000-000000000001', 'VIDEO', 'The Tale of Melon City (Complete Poem Analysis: Satire, Just & Placid King, Royal Decree & Laissez-Faire)', 'https://www.youtube.com/watch?v=DCXEY5w_UvY&end=460s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
