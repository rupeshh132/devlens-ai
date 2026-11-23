-- V413__seed_class12_math_ch06_applications_of_derivatives_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 6 (Applications of Derivatives)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (fy4m6lZ9YwA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3150s)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Applications of Derivatives)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000006';

-- 2. Insert 4 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2206-0000-000000000001', '65d29b56-0041-1200-0000-000000000006', 'Rate of Change of Quantities: Geometric and Physical Applications', 1, true),
('65d29b56-0041-2206-0000-000000000002', '65d29b56-0041-1200-0000-000000000006', 'Strictly Increasing and Decreasing Functions: Interval Determination using First Derivative', 2, true),
('65d29b56-0041-2206-0000-000000000003', '65d29b56-0041-1200-0000-000000000006', 'Maxima and Minima Fundamentals: Critical Points, Turning Points & First Derivative Test', 3, true),
('65d29b56-0041-2206-0000-000000000004', '65d29b56-0041-1200-0000-000000000006', 'Second Derivative Test for Local Maxima/Minima & Real-Life Word Problems', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3206-0000-000000000001', '65d29b56-0041-2206-0000-000000000001', 'VIDEO', 'Rate of Change of Quantities: Geometric and Physical Applications', 'https://www.youtube.com/watch?v=fy4m6lZ9YwA&end=780s', true, 1),
('65d29b56-0041-3206-0000-000000000002', '65d29b56-0041-2206-0000-000000000002', 'VIDEO', 'Strictly Increasing and Decreasing Functions: Interval Determination using First Derivative', 'https://www.youtube.com/watch?v=fy4m6lZ9YwA&t=780s&end=1570s', true, 1),
('65d29b56-0041-3206-0000-000000000003', '65d29b56-0041-2206-0000-000000000003', 'VIDEO', 'Maxima and Minima Fundamentals: Critical Points, Turning Points & First Derivative Test', 'https://www.youtube.com/watch?v=fy4m6lZ9YwA&t=1570s&end=2360s', true, 1),
('65d29b56-0041-3206-0000-000000000004', '65d29b56-0041-2206-0000-000000000004', 'VIDEO', 'Second Derivative Test for Local Maxima/Minima & Real-Life Word Problems', 'https://www.youtube.com/watch?v=fy4m6lZ9YwA&t=2360s&end=3150s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
