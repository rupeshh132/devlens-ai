-- V171__seed_class11_english_ch01_portrait_of_lady_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 11 English Core Chapter 1 (Hornbill: The Portrait of a Lady)
-- Video: Magnet Brains (The Portrait of a Lady Class 11 | NoK4h6ovI-A)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2796s / 46m 36s)

-- 1. Remove old placeholder content items & topics for Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000001';

-- 2. Insert 3 Verified Master Topics for Chapter 1 (The Portrait of a Lady)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2101-0000-000000000001', '65d29b56-0301-1100-0000-000000000001', 'Author Introduction, Background & Phase 1: Village Life & Friendship with Grandmother', 1, true),
('65d29b56-0301-2101-0000-000000000002', '65d29b56-0301-1100-0000-000000000001', 'The Turning Point: Phase 2 (City School Life), Phase 3 (University), Going Abroad & Homecoming', 2, true),
('65d29b56-0301-2101-0000-000000000003', '65d29b56-0301-1100-0000-000000000001', 'Grandmother''s Final Hours, Mourning of the Sparrows & Comprehensive Visual Mind Map Summary', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3101-0000-000000000001', '65d29b56-0301-2101-0000-000000000001', 'VIDEO', 'Author Introduction, Background & Phase 1: Village Life & Friendship with Grandmother', 'https://www.youtube.com/watch?v=NoK4h6ovI-A&end=1070s', true, 1),
('65d29b56-0301-3101-0000-000000000002', '65d29b56-0301-2101-0000-000000000002', 'VIDEO', 'The Turning Point: Phase 2 (City School Life), Phase 3 (University), Going Abroad & Homecoming', 'https://www.youtube.com/watch?v=NoK4h6ovI-A&t=1070s&end=2160s', true, 1),
('65d29b56-0301-3101-0000-000000000003', '65d29b56-0301-2101-0000-000000000003', 'VIDEO', 'Grandmother''s Final Hours, Mourning of the Sparrows & Comprehensive Visual Mind Map Summary', 'https://www.youtube.com/watch?v=NoK4h6ovI-A&t=2160s&end=2796s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
