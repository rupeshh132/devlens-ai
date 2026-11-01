-- V49__seed_class10_maths_ch4_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 4 (Quadratic Equations)
-- Video: Ritik Mishra (Class 10 QUADRATIC EQUATIONS One Shot 🔥 | kmfDomy0qWg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 17495s)

-- 1. Remove old placeholder topics & content items for Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000004';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2004-0000-000000000001', '65d29b56-2222-1000-0000-000000000004', 'Introduction, Standard Form & Roots of Quadratic Equations', 1, true),
('65d29b56-2222-2004-0000-000000000002', '65d29b56-2222-1000-0000-000000000004', 'Solution of Quadratic Equations by Factorisation (Middle Term Splitting)', 2, true),
('65d29b56-2222-2004-0000-000000000003', '65d29b56-2222-1000-0000-000000000004', 'Quadratic Formula (Shreedharacharya''s Rule) & Nature of Roots', 3, true),
('65d29b56-2222-2004-0000-000000000004', '65d29b56-2222-1000-0000-000000000004', 'Word Problems: Numbers, Consecutive Integers, Fractions & Digits', 4, true),
('65d29b56-2222-2004-0000-000000000005', '65d29b56-2222-1000-0000-000000000004', 'Word Problems: Speed-Distance, Geometry, Ages & Assertion-Reason HOTS', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3004-0000-000000000001', '65d29b56-2222-2004-0000-000000000001', 'VIDEO', 'Introduction, Standard Form & Roots of Quadratic Equations', 'https://www.youtube.com/watch?v=kmfDomy0qWg&end=2400s', true, 1),
('65d29b56-2222-3004-0000-000000000002', '65d29b56-2222-2004-0000-000000000002', 'VIDEO', 'Solution of Quadratic Equations by Factorisation (Middle Term Splitting)', 'https://www.youtube.com/watch?v=kmfDomy0qWg&t=2400s&end=6480s', true, 1),
('65d29b56-2222-3004-0000-000000000003', '65d29b56-2222-2004-0000-000000000003', 'VIDEO', 'Quadratic Formula (Shreedharacharya''s Rule) & Nature of Roots', 'https://www.youtube.com/watch?v=kmfDomy0qWg&t=6480s&end=10670s', true, 1),
('65d29b56-2222-3004-0000-000000000004', '65d29b56-2222-2004-0000-000000000004', 'VIDEO', 'Word Problems: Numbers, Consecutive Integers, Fractions & Digits', 'https://www.youtube.com/watch?v=kmfDomy0qWg&t=10670s&end=13630s', true, 1),
('65d29b56-2222-3004-0000-000000000005', '65d29b56-2222-2004-0000-000000000005', 'VIDEO', 'Word Problems: Speed-Distance, Geometry, Ages & Assertion-Reason HOTS', 'https://www.youtube.com/watch?v=kmfDomy0qWg&t=13630s&end=17495s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
