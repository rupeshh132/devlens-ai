-- V201__seed_class11_physics_ch04_laws_of_motion_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 4: Laws of Motion
-- Masterclass Video: LearnoHub - Roshni Mukherjee (sD2Bbz6a--c)
-- 100% Zero-Gap Continuous Timeline: 0s to 9280s (02:34:40, Outro promos & cards trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000004';

-- 2. Insert 4 Verified Master Subtopics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2104-0000-000000000001', '65d29b56-0420-1100-0000-000000000004', 'Intuitive Concept of Force, Inertia, Newton''s 1st & 2nd Laws, Momentum & Impulse', 1, true),
('65d29b56-0420-2104-0000-000000000002', '65d29b56-0420-1100-0000-000000000004', 'Newton''s 3rd Law, Conservation of Linear Momentum & Equilibrium of Concurrent Forces', 2, true),
('65d29b56-0420-2104-0000-000000000003', '65d29b56-0420-1100-0000-000000000004', 'Friction: Static, Kinetic, Rolling Friction & Lubrication', 3, true),
('65d29b56-0420-2104-0000-000000000004', '65d29b56-0420-1100-0000-000000000004', 'Dynamics of Uniform Circular Motion: Centripetal Force & Banking of Roads', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 36:26 (0s to 2186s)
('65d29b56-0420-3104-0000-000000000001', '65d29b56-0420-2104-0000-000000000001', 'VIDEO', 'Intuitive Concept of Force, Inertia, Newton''s 1st & 2nd Laws, Momentum & Impulse (Aristotle''s Fallacy, Galileo''s Inertia, Momentum, F=ma Derivation & Impulse-Momentum Theorem)', 'https://www.youtube.com/watch?v=sD2Bbz6a--c&t=0s&end=2186s', true, 1),

-- Topic 2: 36:26 to 1:01:18 (2186s to 3678s)
('65d29b56-0420-3104-0000-000000000002', '65d29b56-0420-2104-0000-000000000002', 'VIDEO', 'Newton''s 3rd Law, Conservation of Linear Momentum & Equilibrium of Concurrent Forces (Action-Reaction Pairs, Recoil of Gun, Rocket Propulsion, Free Body Diagrams & Concurrent Forces)', 'https://www.youtube.com/watch?v=sD2Bbz6a--c&t=2186s&end=3678s', true, 1),

-- Topic 3: 1:01:18 to 2:13:11 (3678s to 7991s)
('65d29b56-0420-3104-0000-000000000003', '65d29b56-0420-2104-0000-000000000003', 'VIDEO', 'Friction: Static, Kinetic, Rolling Friction & Lubrication (Origin of Friction, Laws of Static & Kinetic Friction, Angle of Friction, Angle of Repose, Rolling Friction & Methods to Reduce Friction)', 'https://www.youtube.com/watch?v=sD2Bbz6a--c&t=3678s&end=7991s', true, 1),

-- Topic 4: 2:13:11 to 2:34:40 (7991s to 9280s)
('65d29b56-0420-3104-0000-000000000004', '65d29b56-0420-2104-0000-000000000004', 'VIDEO', 'Dynamics of Uniform Circular Motion: Centripetal Force & Banking of Roads (Centripetal Force, Motion of a Car on a Level Road vs Banked Road, Optimum Speed & NCERT Numericals)', 'https://www.youtube.com/watch?v=sD2Bbz6a--c&t=7991s&end=9280s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
