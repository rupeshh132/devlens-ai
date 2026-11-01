-- V50__seed_class10_maths_ch5_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 5 (Arithmetic Progressions)
-- Video: Ritik Mishra (Arithmetic Progressions ONE SHOT 🔥 | vsGPaLIAW10)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16597s)

-- 1. Remove old placeholder topics & content items for Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000005';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2005-0000-000000000001', '65d29b56-2222-1000-0000-000000000005', 'Introduction to Sequences & General Form of Arithmetic Progression', 1, true),
('65d29b56-2222-2005-0000-000000000002', '65d29b56-2222-1000-0000-000000000005', 'nth Term of an AP (an = a + (n - 1)d): Basic Formulas & Direct Questions', 2, true),
('65d29b56-2222-2005-0000-000000000003', '65d29b56-2222-1000-0000-000000000005', 'Advanced nth Term Problems: Divisibility, Middle Terms & Algebraic Conditions', 3, true),
('65d29b56-2222-2005-0000-000000000004', '65d29b56-2222-1000-0000-000000000005', 'Sum of First n Terms of an AP (Sn): Formulas, Properties & Algebraic Problems', 4, true),
('65d29b56-2222-2005-0000-000000000005', '65d29b56-2222-1000-0000-000000000005', 'Daily Life Situational Word Problems, Case Study Questions & Chapter Summary', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3005-0000-000000000001', '65d29b56-2222-2005-0000-000000000001', 'VIDEO', 'Introduction to Sequences & General Form of Arithmetic Progression', 'https://www.youtube.com/watch?v=vsGPaLIAW10&end=2203s', true, 1),
('65d29b56-2222-3005-0000-000000000002', '65d29b56-2222-2005-0000-000000000002', 'VIDEO', 'nth Term of an AP (an = a + (n - 1)d): Basic Formulas & Direct Questions', 'https://www.youtube.com/watch?v=vsGPaLIAW10&t=2203s&end=5184s', true, 1),
('65d29b56-2222-3005-0000-000000000003', '65d29b56-2222-2005-0000-000000000003', 'VIDEO', 'Advanced nth Term Problems: Divisibility, Middle Terms & Algebraic Conditions', 'https://www.youtube.com/watch?v=vsGPaLIAW10&t=5184s&end=9050s', true, 1),
('65d29b56-2222-3005-0000-000000000004', '65d29b56-2222-2005-0000-000000000004', 'VIDEO', 'Sum of First n Terms of an AP (Sn): Formulas, Properties & Algebraic Problems', 'https://www.youtube.com/watch?v=vsGPaLIAW10&t=9050s&end=13446s', true, 1),
('65d29b56-2222-3005-0000-000000000005', '65d29b56-2222-2005-0000-000000000005', 'VIDEO', 'Daily Life Situational Word Problems, Case Study Questions & Chapter Summary', 'https://www.youtube.com/watch?v=vsGPaLIAW10&t=13446s&end=16597s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
