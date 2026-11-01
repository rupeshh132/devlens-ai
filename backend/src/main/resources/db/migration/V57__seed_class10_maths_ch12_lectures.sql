-- V57__seed_class10_maths_ch12_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 12 (Surface Areas and Volumes)
-- Video: Ritik Mishra (Surface Areas and Volumes One Shot 🔥 | 9-__HOYREi8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8977s)

-- 1. Remove old placeholder topics & content items for Chapter 12
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000012';

-- 2. Insert 4 Student-Friendly Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2012-0000-000000000001', '65d29b56-2222-1000-0000-000000000012', 'Foundations & Formula Mastery of 3D Solids (Cube, Cuboid, Cylinder, Cone, Sphere & Hemisphere)', 1, true),
('65d29b56-2222-2012-0000-000000000002', '65d29b56-2222-1000-0000-000000000012', 'Surface Area of Combination of Solids: Concepts & Core Problems (Capsule, Toy, Surmounted Block, Cavity)', 2, true),
('65d29b56-2222-2012-0000-000000000003', '65d29b56-2222-1000-0000-000000000012', 'Volume of Combination of Solids: NCERT & Applied Problems (Pen Stand, Juice Glass, Iron Pole)', 3, true),
('65d29b56-2222-2012-0000-000000000004', '65d29b56-2222-1000-0000-000000000012', 'Board Examination PYQs, Water Displacement Problems & Chapter Summary', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3012-0000-000000000001', '65d29b56-2222-2012-0000-000000000001', 'VIDEO', 'Foundations & Formula Mastery of 3D Solids (Cube, Cuboid, Cylinder, Cone, Sphere & Hemisphere)', 'https://www.youtube.com/watch?v=9-__HOYREi8&end=1769s', true, 1),
('65d29b56-2222-3012-0000-000000000002', '65d29b56-2222-2012-0000-000000000002', 'VIDEO', 'Surface Area of Combination of Solids: Concepts & Core Problems (Capsule, Toy, Surmounted Block, Cavity)', 'https://www.youtube.com/watch?v=9-__HOYREi8&t=1769s&end=4950s', true, 1),
('65d29b56-2222-3012-0000-000000000003', '65d29b56-2222-2012-0000-000000000003', 'VIDEO', 'Volume of Combination of Solids: NCERT & Applied Problems (Pen Stand, Juice Glass, Iron Pole)', 'https://www.youtube.com/watch?v=9-__HOYREi8&t=4950s&end=6872s', true, 1),
('65d29b56-2222-3012-0000-000000000004', '65d29b56-2222-2012-0000-000000000004', 'VIDEO', 'Board Examination PYQs, Water Displacement Problems & Chapter Summary', 'https://www.youtube.com/watch?v=9-__HOYREi8&t=6872s&end=8977s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
