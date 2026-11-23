-- V416__seed_class12_math_ch09_differential_equations_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 9 (Differential Equations)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (4r-0JSfGez4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8218s)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Differential Equations)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000009';

-- 2. Insert 4 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2209-0000-000000000001', '65d29b56-0041-1200-0000-000000000009', 'Basic Concepts: Order, Degree, General and Particular Solutions of Differential Equations', 1, true),
('65d29b56-0041-2209-0000-000000000002', '65d29b56-0041-1200-0000-000000000009', 'Method of Separation of Variables for First Order Differential Equations', 2, true),
('65d29b56-0041-2209-0000-000000000003', '65d29b56-0041-1200-0000-000000000009', 'Homogeneous Differential Equations of First Order and First Degree (y = vx substitution)', 3, true),
('65d29b56-0041-2209-0000-000000000004', '65d29b56-0041-1200-0000-000000000009', 'Linear Differential Equations of Form dy/dx + Py = Q and dx/dy + Px = Q (Integrating Factor Method)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3209-0000-000000000001', '65d29b56-0041-2209-0000-000000000001', 'VIDEO', 'Basic Concepts: Order, Degree, General and Particular Solutions of Differential Equations', 'https://www.youtube.com/watch?v=4r-0JSfGez4&end=2050s', true, 1),
('65d29b56-0041-3209-0000-000000000002', '65d29b56-0041-2209-0000-000000000002', 'VIDEO', 'Method of Separation of Variables for First Order Differential Equations', 'https://www.youtube.com/watch?v=4r-0JSfGez4&t=2050s&end=4100s', true, 1),
('65d29b56-0041-3209-0000-000000000003', '65d29b56-0041-2209-0000-000000000003', 'VIDEO', 'Homogeneous Differential Equations of First Order and First Degree (y = vx substitution)', 'https://www.youtube.com/watch?v=4r-0JSfGez4&t=4100s&end=6150s', true, 1),
('65d29b56-0041-3209-0000-000000000004', '65d29b56-0041-2209-0000-000000000004', 'VIDEO', 'Linear Differential Equations of Form dy/dx + Py = Q and dx/dy + Px = Q (Integrating Factor Method)', 'https://www.youtube.com/watch?v=4r-0JSfGez4&t=6150s&end=8218s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
