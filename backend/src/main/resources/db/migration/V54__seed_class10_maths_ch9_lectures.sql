-- V54__seed_class10_maths_ch9_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 9 (Some Applications of Trigonometry / Heights and Distances)
-- Video: Ritik Mishra (Heights and Distances ONE SHOT 🔥 | otABxL0TP6U)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 11139s)

-- 1. Remove old placeholder topics & content items for Chapter 9
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000009';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2009-0000-000000000001', '65d29b56-2222-1000-0000-000000000009', 'Introduction, Line of Sight, Angle of Elevation & Depression (Basics)', 1, true),
('65d29b56-2222-2009-0000-000000000002', '65d29b56-2222-1000-0000-000000000009', 'Single Observer with Height & Two Points on Ground (Elevation Problems)', 2, true),
('65d29b56-2222-2009-0000-000000000003', '65d29b56-2222-1000-0000-000000000009', 'Two Triangles & Angle of Depression: Buildings, Cliffs & Lighthouses', 3, true),
('65d29b56-2222-2009-0000-000000000004', '65d29b56-2222-1000-0000-000000000009', 'Moving Objects: Speed of Aeroplanes, Moving Cars & Cloud Reflection', 4, true),
('65d29b56-2222-2009-0000-000000000005', '65d29b56-2222-1000-0000-000000000009', 'Advanced Board Questions, CBSE Case-Study Problems & Summary', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3009-0000-000000000001', '65d29b56-2222-2009-0000-000000000001', 'VIDEO', 'Introduction, Line of Sight, Angle of Elevation & Depression (Basics)', 'https://www.youtube.com/watch?v=otABxL0TP6U&end=2125s', true, 1),
('65d29b56-2222-3009-0000-000000000002', '65d29b56-2222-2009-0000-000000000002', 'VIDEO', 'Single Observer with Height & Two Points on Ground (Elevation Problems)', 'https://www.youtube.com/watch?v=otABxL0TP6U&t=2125s&end=4759s', true, 1),
('65d29b56-2222-3009-0000-000000000003', '65d29b56-2222-2009-0000-000000000003', 'VIDEO', 'Two Triangles & Angle of Depression: Buildings, Cliffs & Lighthouses', 'https://www.youtube.com/watch?v=otABxL0TP6U&t=4759s&end=7323s', true, 1),
('65d29b56-2222-3009-0000-000000000004', '65d29b56-2222-2009-0000-000000000004', 'VIDEO', 'Moving Objects: Speed of Aeroplanes, Moving Cars & Cloud Reflection', 'https://www.youtube.com/watch?v=otABxL0TP6U&t=7323s&end=9308s', true, 1),
('65d29b56-2222-3009-0000-000000000005', '65d29b56-2222-2009-0000-000000000005', 'VIDEO', 'Advanced Board Questions, CBSE Case-Study Problems & Summary', 'https://www.youtube.com/watch?v=otABxL0TP6U&t=9308s&end=11139s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
