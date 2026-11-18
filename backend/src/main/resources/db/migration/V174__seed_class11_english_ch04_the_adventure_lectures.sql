-- V174__seed_class11_english_ch04_the_adventure_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 4 (Hornbill: The Adventure)
-- Video: Educational Bhaiya (The Adventure Class 11 Full Explained | CBkXVzQ57W8)
-- 100% Zero-Gap Single Master Lecture (0s to 1156s / 19m 16s)

-- 1. Remove old placeholder content items & topics for Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000004';

-- 2. Insert 1 Verified Master Topic for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2104-0000-000000000001', '65d29b56-0301-1100-0000-000000000004', 'The Adventure (Complete Chapter Explanation: Gangadharpant''s Parallel World & Alternate History)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3104-0000-000000000001', '65d29b56-0301-2104-0000-000000000001', 'VIDEO', 'The Adventure (Complete Chapter Explanation: Gangadharpant''s Parallel World & Alternate History)', 'https://www.youtube.com/watch?v=CBkXVzQ57W8&end=1156s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
