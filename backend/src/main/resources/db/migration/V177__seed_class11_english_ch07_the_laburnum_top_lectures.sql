-- V177__seed_class11_english_ch07_the_laburnum_top_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 7 (Hornbill Poem: The Laburnum Top)
-- Video: Educational Bhaiya (The Laburnum Top Class 11 Full Explained | WnzCxG8tYFQ)
-- 100% Zero-Gap Single Master Lecture (0s to 526s / 8m 46s)

-- 1. Remove old placeholder content items & topics for Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000007';

-- 2. Insert 1 Verified Master Topic for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2107-0000-000000000001', '65d29b56-0301-1100-0000-000000000007', 'The Laburnum Top (Complete Poem Analysis, Symbolism, Goldfinch Imagery & Poetic Devices)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3107-0000-000000000001', '65d29b56-0301-2107-0000-000000000001', 'VIDEO', 'The Laburnum Top (Complete Poem Analysis, Symbolism, Goldfinch Imagery & Poetic Devices)', 'https://www.youtube.com/watch?v=WnzCxG8tYFQ&end=526s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
