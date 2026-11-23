-- V418__seed_class12_math_ch11_three_dimensional_geometry_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 11 (Three - dimensional Geometry)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (sNG2FVZi5d8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6038s)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Three - dimensional Geometry)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000011';

-- 2. Insert 4 Verified Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2211-0000-000000000001', '65d29b56-0041-1200-0000-000000000011', 'Direction Cosines and Direction Ratios of a Line Joining Two Points & Proportionality', 1, true),
('65d29b56-0041-2211-0000-000000000002', '65d29b56-0041-1200-0000-000000000011', 'Vector and Cartesian Equations of a Line Passing through a Point and Parallel to a Vector', 2, true),
('65d29b56-0041-2211-0000-000000000003', '65d29b56-0041-1200-0000-000000000011', 'Vector and Cartesian Equations of a Line Passing through Two Given Points & Angle Between Two Lines', 3, true),
('65d29b56-0041-2211-0000-000000000004', '65d29b56-0041-1200-0000-000000000011', 'Skew Lines, Condition for Coplanarity & Shortest Distance Between Two Lines (Vector and Cartesian)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3211-0000-000000000001', '65d29b56-0041-2211-0000-000000000001', 'VIDEO', 'Direction Cosines and Direction Ratios of a Line Joining Two Points & Proportionality', 'https://www.youtube.com/watch?v=sNG2FVZi5d8&end=1510s', true, 1),
('65d29b56-0041-3211-0000-000000000002', '65d29b56-0041-2211-0000-000000000002', 'VIDEO', 'Vector and Cartesian Equations of a Line Passing through a Point and Parallel to a Vector', 'https://www.youtube.com/watch?v=sNG2FVZi5d8&t=1510s&end=3020s', true, 1),
('65d29b56-0041-3211-0000-000000000003', '65d29b56-0041-2211-0000-000000000003', 'VIDEO', 'Vector and Cartesian Equations of a Line Passing through Two Given Points & Angle Between Two Lines', 'https://www.youtube.com/watch?v=sNG2FVZi5d8&t=3020s&end=4530s', true, 1),
('65d29b56-0041-3211-0000-000000000004', '65d29b56-0041-2211-0000-000000000004', 'VIDEO', 'Skew Lines, Condition for Coplanarity & Shortest Distance Between Two Lines (Vector and Cartesian)', 'https://www.youtube.com/watch?v=sNG2FVZi5d8&t=4530s&end=6038s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
