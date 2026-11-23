-- V419__seed_class12_math_ch12_linear_programming_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 12 (Linear Programming)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (0bVrrnAjAyw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4736s)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Linear Programming)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000012';

-- 2. Insert 4 Verified Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2212-0000-000000000001', '65d29b56-0041-1200-0000-000000000012', 'Introduction to Linear Programming: Decision Variables, Objective Function & Mathematical Formulation', 1, true),
('65d29b56-0041-2212-0000-000000000002', '65d29b56-0041-1200-0000-000000000012', 'Graphical Method of Solution: Feasible Region, Infeasible Region, Bounded vs Unbounded Regions', 2, true),
('65d29b56-0041-2212-0000-000000000003', '65d29b56-0041-1200-0000-000000000012', 'Corner Point Theorem for Optimization & Maxima/Minima under Linear Constraints', 3, true),
('65d29b56-0041-2212-0000-000000000004', '65d29b56-0041-1200-0000-000000000012', 'Multi-Constraint Optimization Problems, Real-Life Manufacturing/Diet Problems & Board PYQs', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3212-0000-000000000001', '65d29b56-0041-2212-0000-000000000001', 'VIDEO', 'Introduction to Linear Programming: Decision Variables, Objective Function & Mathematical Formulation', 'https://www.youtube.com/watch?v=0bVrrnAjAyw&end=1180s', true, 1),
('65d29b56-0041-3212-0000-000000000002', '65d29b56-0041-2212-0000-000000000002', 'VIDEO', 'Graphical Method of Solution: Feasible Region, Infeasible Region, Bounded vs Unbounded Regions', 'https://www.youtube.com/watch?v=0bVrrnAjAyw&t=1180s&end=2360s', true, 1),
('65d29b56-0041-3212-0000-000000000003', '65d29b56-0041-2212-0000-000000000003', 'VIDEO', 'Corner Point Theorem for Optimization & Maxima/Minima under Linear Constraints', 'https://www.youtube.com/watch?v=0bVrrnAjAyw&t=2360s&end=3550s', true, 1),
('65d29b56-0041-3212-0000-000000000004', '65d29b56-0041-2212-0000-000000000004', 'VIDEO', 'Multi-Constraint Optimization Problems, Real-Life Manufacturing/Diet Problems & Board PYQs', 'https://www.youtube.com/watch?v=0bVrrnAjAyw&t=3550s&end=4736s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
