-- V52__seed_class10_maths_ch7_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 7 (Coordinate Geometry)
-- Video: Ritik Mishra (Coordinate Geometry ONE SHOT 🔥 | TXDyGK_GdNM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 10787s)

-- 1. Remove old placeholder topics & content items for Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000007';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2007-0000-000000000001', '65d29b56-2222-1000-0000-000000000007', 'Cartesian System, Coordinates & Direct Distance Formula', 1, true),
('65d29b56-2222-2007-0000-000000000002', '65d29b56-2222-1000-0000-000000000007', 'Equidistant Points & Finding Unknown Coordinates', 2, true),
('65d29b56-2222-2007-0000-000000000003', '65d29b56-2222-1000-0000-000000000007', 'Geometric Figures (Triangles, Quadrilaterals) & Collinearity', 3, true),
('65d29b56-2222-2007-0000-000000000004', '65d29b56-2222-1000-0000-000000000007', 'Section Formula & Mid-Point Formula (Internal Division)', 4, true),
('65d29b56-2222-2007-0000-000000000005', '65d29b56-2222-1000-0000-000000000007', 'Trisection, Finding Ratio (k:1), Centroid & Chapter Summary', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3007-0000-000000000001', '65d29b56-2222-2007-0000-000000000001', 'VIDEO', 'Cartesian System, Coordinates & Direct Distance Formula', 'https://www.youtube.com/watch?v=TXDyGK_GdNM&end=2045s', true, 1),
('65d29b56-2222-3007-0000-000000000002', '65d29b56-2222-2007-0000-000000000002', 'VIDEO', 'Equidistant Points & Finding Unknown Coordinates', 'https://www.youtube.com/watch?v=TXDyGK_GdNM&t=2045s&end=4288s', true, 1),
('65d29b56-2222-3007-0000-000000000003', '65d29b56-2222-2007-0000-000000000003', 'VIDEO', 'Geometric Figures (Triangles, Quadrilaterals) & Collinearity', 'https://www.youtube.com/watch?v=TXDyGK_GdNM&t=4288s&end=6138s', true, 1),
('65d29b56-2222-3007-0000-000000000004', '65d29b56-2222-2007-0000-000000000004', 'VIDEO', 'Section Formula & Mid-Point Formula (Internal Division)', 'https://www.youtube.com/watch?v=TXDyGK_GdNM&t=6138s&end=8542s', true, 1),
('65d29b56-2222-3007-0000-000000000005', '65d29b56-2222-2007-0000-000000000005', 'VIDEO', 'Trisection, Finding Ratio (k:1), Centroid & Chapter Summary', 'https://www.youtube.com/watch?v=TXDyGK_GdNM&t=8542s&end=10787s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
