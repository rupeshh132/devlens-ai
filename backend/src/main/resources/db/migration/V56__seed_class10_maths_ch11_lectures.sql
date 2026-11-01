-- V56__seed_class10_maths_ch11_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 11 (Areas Related to Circles)
-- Video: Ritik Mishra (Areas Related to Circles ONE SHOT 🔥 | usf6lf_3DnU)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8577s)

-- 1. Remove old placeholder topics & content items for Chapter 11
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000011';

-- 2. Insert 4 Student-Friendly Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2011-0000-000000000001', '65d29b56-2222-1000-0000-000000000011', 'Introduction, Circle Perimeter & Area, Arc Length & Sector of a Circle', 1, true),
('65d29b56-2222-2011-0000-000000000002', '65d29b56-2222-1000-0000-000000000011', 'Clock Problems (Minute & Hour Hands) & Real-Life Sector Applications', 2, true),
('65d29b56-2222-2011-0000-000000000003', '65d29b56-2222-1000-0000-000000000011', 'Segment of a Circle: Concepts, Formulas & Triangle Area Calculations', 3, true),
('65d29b56-2222-2011-0000-000000000004', '65d29b56-2222-1000-0000-000000000011', 'General Segment Formula (1/2 r² sin θ), Round Table Cover, CBSE PYQs & Summary', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3011-0000-000000000001', '65d29b56-2222-2011-0000-000000000001', 'VIDEO', 'Introduction, Circle Perimeter & Area, Arc Length & Sector of a Circle', 'https://www.youtube.com/watch?v=usf6lf_3DnU&end=2545s', true, 1),
('65d29b56-2222-3011-0000-000000000002', '65d29b56-2222-2011-0000-000000000002', 'VIDEO', 'Clock Problems (Minute & Hour Hands) & Real-Life Sector Applications', 'https://www.youtube.com/watch?v=usf6lf_3DnU&t=2545s&end=5346s', true, 1),
('65d29b56-2222-3011-0000-000000000003', '65d29b56-2222-2011-0000-000000000003', 'VIDEO', 'Segment of a Circle: Concepts, Formulas & Triangle Area Calculations', 'https://www.youtube.com/watch?v=usf6lf_3DnU&t=5346s&end=7356s', true, 1),
('65d29b56-2222-3011-0000-000000000004', '65d29b56-2222-2011-0000-000000000004', 'VIDEO', 'General Segment Formula (1/2 r² sin θ), Round Table Cover, CBSE PYQs & Summary', 'https://www.youtube.com/watch?v=usf6lf_3DnU&t=7356s&end=8577s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
