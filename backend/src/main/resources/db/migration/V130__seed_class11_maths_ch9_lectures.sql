-- V130__seed_class11_maths_ch9_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 9 (Straight Lines)
-- Video: PW Class 11 Science (Straight Lines | Full Chapter in ONE SHOT | Chapter 9 | Class 11 Maths | lRrHW6hfAiA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13016s / 3h 36m 56s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Straight Lines)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000009';

-- 2. Insert 5 Verified Master Topics for Chapter 9 (Straight Lines)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2109-0000-000000000001', '65d29b56-2222-1100-0000-000000000009', 'Slope of a Line, Angle Between Two Lines & Parallelism / Perpendicularity Conditions', 1, true),
('65d29b56-2222-2109-0000-000000000002', '65d29b56-2222-1100-0000-000000000009', 'Standard Equations of a Line: Lines Parallel to Axes, Slope-Intercept & Point-Slope Forms', 2, true),
('65d29b56-2222-2109-0000-000000000003', '65d29b56-2222-1100-0000-000000000009', 'Two-Point Form of a Line: Equation Derivation & Geometric Applications', 3, true),
('65d29b56-2222-2109-0000-000000000004', '65d29b56-2222-1100-0000-000000000009', 'Intercept Form of a Line (x/a + y/b = 1) & Coordinate Geometry Applications', 4, true),
('65d29b56-2222-2109-0000-000000000005', '65d29b56-2222-1100-0000-000000000009', 'Perpendicular Distance of a Point from a Line & Distance Between Parallel Lines', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3109-0000-000000000001', '65d29b56-2222-2109-0000-000000000001', 'VIDEO', 'Slope of a Line, Angle Between Two Lines & Parallelism / Perpendicularity Conditions', 'https://www.youtube.com/watch?v=lRrHW6hfAiA&end=3499s', true, 1),
('65d29b56-2222-3109-0000-000000000002', '65d29b56-2222-2109-0000-000000000002', 'VIDEO', 'Standard Equations of a Line: Lines Parallel to Axes, Slope-Intercept & Point-Slope Forms', 'https://www.youtube.com/watch?v=lRrHW6hfAiA&t=3499s&end=7994s', true, 1),
('65d29b56-2222-3109-0000-000000000003', '65d29b56-2222-2109-0000-000000000003', 'VIDEO', 'Two-Point Form of a Line: Equation Derivation & Geometric Applications', 'https://www.youtube.com/watch?v=lRrHW6hfAiA&t=7994s&end=8833s', true, 1),
('65d29b56-2222-3109-0000-000000000004', '65d29b56-2222-2109-0000-000000000004', 'VIDEO', 'Intercept Form of a Line (x/a + y/b = 1) & Coordinate Geometry Applications', 'https://www.youtube.com/watch?v=lRrHW6hfAiA&t=8833s&end=12175s', true, 1),
('65d29b56-2222-3109-0000-000000000005', '65d29b56-2222-2109-0000-000000000005', 'VIDEO', 'Perpendicular Distance of a Point from a Line & Distance Between Parallel Lines', 'https://www.youtube.com/watch?v=lRrHW6hfAiA&t=12175s&end=13016s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
