-- V48__seed_class10_maths_ch3_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 3 (Pair of Linear Equations in Two Variables)
-- Video: Ritik Mishra (Pair Of Linear Equations In Two Variables ONE SHOT 🔥 | uz1yjvlu-RU)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 11489s)

-- 1. Remove old placeholder topics & content items for Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000003';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2003-0000-000000000001', '65d29b56-2222-1000-0000-000000000003', 'Introduction, Standard Form & Graphical Method of Solution', 1, true),
('65d29b56-2222-2003-0000-000000000002', '65d29b56-2222-1000-0000-000000000003', 'Algebraic Methods of Solution: Substitution & Elimination', 2, true),
('65d29b56-2222-2003-0000-000000000003', '65d29b56-2222-1000-0000-000000000003', 'Conditions for Consistency & Finding Unknown Value (k)', 3, true),
('65d29b56-2222-2003-0000-000000000004', '65d29b56-2222-1000-0000-000000000003', 'Word Problems: 2-Digit Numbers, Geometry & Cost Situations', 4, true),
('65d29b56-2222-2003-0000-000000000005', '65d29b56-2222-1000-0000-000000000003', 'Word Problems: Fractions, Age Problems, Speed-Distance & Outro', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3003-0000-000000000001', '65d29b56-2222-2003-0000-000000000001', 'VIDEO', 'Introduction, Standard Form & Graphical Method of Solution', 'https://www.youtube.com/watch?v=uz1yjvlu-RU&end=1422s', true, 1),
('65d29b56-2222-3003-0000-000000000002', '65d29b56-2222-2003-0000-000000000002', 'VIDEO', 'Algebraic Methods of Solution: Substitution & Elimination', 'https://www.youtube.com/watch?v=uz1yjvlu-RU&t=1422s&end=4111s', true, 1),
('65d29b56-2222-3003-0000-000000000003', '65d29b56-2222-2003-0000-000000000003', 'VIDEO', 'Conditions for Consistency & Finding Unknown Value (k)', 'https://www.youtube.com/watch?v=uz1yjvlu-RU&t=4111s&end=5356s', true, 1),
('65d29b56-2222-3003-0000-000000000004', '65d29b56-2222-2003-0000-000000000004', 'VIDEO', 'Word Problems: 2-Digit Numbers, Geometry & Cost Situations', 'https://www.youtube.com/watch?v=uz1yjvlu-RU&t=5356s&end=8756s', true, 1),
('65d29b56-2222-3003-0000-000000000005', '65d29b56-2222-2003-0000-000000000005', 'VIDEO', 'Word Problems: Fractions, Age Problems, Speed-Distance & Outro', 'https://www.youtube.com/watch?v=uz1yjvlu-RU&t=8756s&end=11489s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
