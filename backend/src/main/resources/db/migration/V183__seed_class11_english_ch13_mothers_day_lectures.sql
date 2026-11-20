-- V183__seed_class11_english_ch13_mothers_day_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 13 (Snapshots: Mother's Day)
-- Video: Educational Bhaiya (Mother's Day Class 11 | Animated | Full Explained | l_j0J5FSD6E)
-- 100% Zero-Gap Single Master Lecture (0s to 1236s / 20m 36s, Full Complete Play & Farewell)

-- 1. Remove old placeholder content items & topics for Chapter 13
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000013';

-- 2. Insert 1 Verified Master Topic for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2113-0000-000000000001', '65d29b56-0301-1100-0000-000000000013', 'Mother''s Day (Complete Animated Play: Pearson Family, Personality Exchange with Mrs. Fitzgerald & Social Satire)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item (1236s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3113-0000-000000000001', '65d29b56-0301-2113-0000-000000000001', 'VIDEO', 'Mother''s Day (Complete Animated Play: Pearson Family, Personality Exchange with Mrs. Fitzgerald & Social Satire)', 'https://www.youtube.com/watch?v=l_j0J5FSD6E&end=1236s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
