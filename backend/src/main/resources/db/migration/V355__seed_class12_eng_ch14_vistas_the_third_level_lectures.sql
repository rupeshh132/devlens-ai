-- V355__seed_class12_eng_ch14_vistas_the_third_level_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 14 (Vistas: The Third Level)
-- Video: Simran Sahni (Board Exam Masterclass) (wk73hnx3WUQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1330s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Vistas: The Third Level)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000014';

-- 2. Insert 3 Verified Master Topics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2214-0000-000000000001', '65d29b56-0301-1200-0000-000000000014', 'Grand Central Station Mystery, Charley''s Claim of Three Levels & The Psychiatrist''s "Waking-Dream" View', 1, true),
('65d29b56-0301-2214-0000-000000000002', '65d29b56-0301-1200-0000-000000000014', 'Entering the Third Level: The Year 1894 Atmosphere, Brass Spittoons, Locomotive & Old Currency', 2, true),
('65d29b56-0301-2214-0000-000000000003', '65d29b56-0301-1200-0000-000000000014', 'Galesburg, Illinois as a Peaceful Haven & Sam Weiner''s Letter from 1894: The First-Day Cover Mystery', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3214-0000-000000000001', '65d29b56-0301-2214-0000-000000000001', 'VIDEO', 'Grand Central Station Mystery, Charley''s Claim of Three Levels & The Psychiatrist''s "Waking-Dream" View', 'https://www.youtube.com/watch?v=wk73hnx3WUQ&end=440s', true, 1),
('65d29b56-0301-3214-0000-000000000002', '65d29b56-0301-2214-0000-000000000002', 'VIDEO', 'Entering the Third Level: The Year 1894 Atmosphere, Brass Spittoons, Locomotive & Old Currency', 'https://www.youtube.com/watch?v=wk73hnx3WUQ&t=440s&end=890s', true, 1),
('65d29b56-0301-3214-0000-000000000003', '65d29b56-0301-2214-0000-000000000003', 'VIDEO', 'Galesburg, Illinois as a Peaceful Haven & Sam Weiner''s Letter from 1894: The First-Day Cover Mystery', 'https://www.youtube.com/watch?v=wk73hnx3WUQ&t=890s&end=1330s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
