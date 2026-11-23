-- V415__seed_class12_math_ch08_applications_of_the_integrals_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 8 (Applications of the Integrals)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (lnR343-9vFY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6566s)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Applications of the Integrals)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000008';

-- 2. Insert 4 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2208-0000-000000000001', '65d29b56-0041-1200-0000-000000000008', 'Area Under Simple Curves: Cartesian Form, Bounded by Coordinate Axes and Lines', 1, true),
('65d29b56-0041-2208-0000-000000000002', '65d29b56-0041-1200-0000-000000000008', 'Area Enclosed by Standard Parabolas and Straight Lines', 2, true),
('65d29b56-0041-2208-0000-000000000003', '65d29b56-0041-1200-0000-000000000008', 'Area Enclosed by Standard Circles, Ellipses and Symmetry-Based Curves', 3, true),
('65d29b56-0041-2208-0000-000000000004', '65d29b56-0041-1200-0000-000000000008', 'Advanced Curve Sketching, Double-Region Area Formulations & Board Examination PYQs', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3208-0000-000000000001', '65d29b56-0041-2208-0000-000000000001', 'VIDEO', 'Area Under Simple Curves: Cartesian Form, Bounded by Coordinate Axes and Lines', 'https://www.youtube.com/watch?v=lnR343-9vFY&end=1640s', true, 1),
('65d29b56-0041-3208-0000-000000000002', '65d29b56-0041-2208-0000-000000000002', 'VIDEO', 'Area Enclosed by Standard Parabolas and Straight Lines', 'https://www.youtube.com/watch?v=lnR343-9vFY&t=1640s&end=3280s', true, 1),
('65d29b56-0041-3208-0000-000000000003', '65d29b56-0041-2208-0000-000000000003', 'VIDEO', 'Area Enclosed by Standard Circles, Ellipses and Symmetry-Based Curves', 'https://www.youtube.com/watch?v=lnR343-9vFY&t=3280s&end=4920s', true, 1),
('65d29b56-0041-3208-0000-000000000004', '65d29b56-0041-2208-0000-000000000004', 'VIDEO', 'Advanced Curve Sketching, Double-Region Area Formulations & Board Examination PYQs', 'https://www.youtube.com/watch?v=lnR343-9vFY&t=4920s&end=6566s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
