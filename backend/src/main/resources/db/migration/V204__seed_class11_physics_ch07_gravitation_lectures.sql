-- V204__seed_class11_physics_ch07_gravitation_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 7: Gravitation
-- Masterclass Video: LearnoHub - Roshni Mukherjee (1FY5JGkhMkE)
-- 100% Zero-Gap Continuous Timeline: 0s to 6690s (01:51:30, Outro promos & cards trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000007';

-- 2. Insert 4 Verified Master Subtopics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2107-0000-000000000001', '65d29b56-0420-1100-0000-000000000007', 'Kepler''s Laws of Planetary Motion & Universal Law of Gravitation', 1, true),
('65d29b56-0420-2107-0000-000000000002', '65d29b56-0420-1100-0000-000000000007', 'Acceleration Due to Gravity (g) & Its Variation with Altitude and Depth', 2, true),
('65d29b56-0420-2107-0000-000000000003', '65d29b56-0420-1100-0000-000000000007', 'Gravitational Potential Energy & Gravitational Potential', 3, true),
('65d29b56-0420-2107-0000-000000000004', '65d29b56-0420-1100-0000-000000000007', 'Escape Speed, Satellite Orbital Motion & Energy of Orbiting Satellite', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 35:08 (0s to 2108s)
('65d29b56-0420-3107-0000-000000000001', '65d29b56-0420-2107-0000-000000000001', 'VIDEO', 'Kepler''s Laws of Planetary Motion & Universal Law of Gravitation (Kepler''s 3 Laws & Derivation of 2nd Law, Newton''s Gravitation Law in Vector Form, Cavendish Experiment & Gravitational Constant G)', 'https://www.youtube.com/watch?v=1FY5JGkhMkE&t=0s&end=2108s', true, 1),

-- Topic 2: 35:08 to 59:11 (2108s to 3551s)
('65d29b56-0420-3107-0000-000000000002', '65d29b56-0420-2107-0000-000000000002', 'VIDEO', 'Acceleration Due to Gravity (g) & Its Variation with Altitude and Depth (Expression for g, Variation of g Above Earth''s Surface, Variation of g Below Earth''s Surface & Graphical Comparison)', 'https://www.youtube.com/watch?v=1FY5JGkhMkE&t=2108s&end=3551s', true, 1),

-- Topic 3: 59:11 to 1:23:40 (3551s to 5020s)
('65d29b56-0420-3107-0000-000000000003', '65d29b56-0420-2107-0000-000000000003', 'VIDEO', 'Gravitational Potential Energy & Gravitational Potential (Work Done in Gravitational Field, Expression for Gravitational Potential Energy U = -GMm/r, Gravitational Potential V & High-Weightage Numericals)', 'https://www.youtube.com/watch?v=1FY5JGkhMkE&t=3551s&end=5020s', true, 1),

-- Topic 4: 1:23:40 to 1:51:30 (5020s to 6690s)
('65d29b56-0420-3107-0000-000000000004', '65d29b56-0420-2107-0000-000000000004', 'VIDEO', 'Escape Speed, Satellite Orbital Motion & Energy of Orbiting Satellite (Derivation of Escape Velocity on Earth & Moon, Orbital Speed, Time Period of Revolution, Total Mechanical Energy of Satellite & Solved Problems)', 'https://www.youtube.com/watch?v=1FY5JGkhMkE&t=5020s&end=6690s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
