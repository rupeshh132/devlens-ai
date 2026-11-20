-- V181__seed_class11_english_ch11_summer_white_horse_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 11 (Snapshots: The Summer of the Beautiful White Horse)
-- Video: Educational Bhaiya (The Summer Of Beautiful White Horse Class 11 | Animated | wgi3ARMObRE)
-- 100% Zero-Gap Single Master Lecture (0s to 1083s / 18m 03s, Full Complete Story & Farewell)

-- 1. Remove old placeholder content items & topics for Chapter 11
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000011';

-- 2. Insert 1 Verified Master Topic for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2111-0000-000000000001', '65d29b56-0301-1100-0000-000000000011', 'The Summer of the Beautiful White Horse (Complete Animated Story: Garoghlanian Tribe, Aram, Mourad & John Byro)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item (1083s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3111-0000-000000000001', '65d29b56-0301-2111-0000-000000000001', 'VIDEO', 'The Summer of the Beautiful White Horse (Complete Animated Story: Garoghlanian Tribe, Aram, Mourad & John Byro)', 'https://www.youtube.com/watch?v=wgi3ARMObRE&end=1083s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
