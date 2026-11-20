-- V210__seed_class11_physics_ch13_oscillations_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 13: Oscillations
-- Masterclass Video: NCERT Wallah - Physics Wallah (eL7s6QvvY7k)
-- 100% Zero-Gap Continuous Timeline: 0s to 8125s (02:15:25, Outro banter trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 13
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000013';

-- 2. Insert 4 Verified Master Subtopics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2113-0000-000000000001', '65d29b56-0420-1100-0000-000000000013', 'Periodic & Oscillatory Motion, Periodic Functions & Harmonic Motion', 1, true),
('65d29b56-0420-2113-0000-000000000002', '65d29b56-0420-1100-0000-000000000013', 'Simple Harmonic Motion (SHM), Uniform Circular Motion & Phase Relations', 2, true),
('65d29b56-0420-2113-0000-000000000003', '65d29b56-0420-1100-0000-000000000013', 'Energy in SHM (Kinetic, Potential & Total Energy) & Loaded Spring Oscillations', 3, true),
('65d29b56-0420-2113-0000-000000000004', '65d29b56-0420-1100-0000-000000000013', 'Simple Pendulum: Derivation of Time Period & Board Numerical Practice', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 36:36 (0s to 2196s)
('65d29b56-0420-3113-0000-000000000001', '65d29b56-0420-2113-0000-000000000001', 'VIDEO', 'Periodic & Oscillatory Motion, Periodic Functions & Harmonic Motion (Time Period, Frequency, Amplitude, Displacement Function y(t) = A*sin(wt+phi), Harmonic vs Non-Harmonic Functions & Fourier Series Notion)', 'https://www.youtube.com/watch?v=eL7s6QvvY7k&t=0s&end=2196s', true, 1),

-- Topic 2: 36:36 to 1:24:00 (2196s to 5040s)
('65d29b56-0420-3113-0000-000000000002', '65d29b56-0420-2113-0000-000000000002', 'VIDEO', 'Simple Harmonic Motion (SHM), Uniform Circular Motion & Phase Relations (Projection of Uniform Circular Motion on Diameter, Differential Equation of Linear SHM, Velocity and Acceleration in SHM & Phase Constants)', 'https://www.youtube.com/watch?v=eL7s6QvvY7k&t=2196s&end=5040s', true, 1),

-- Topic 3: 1:24:00 to 1:55:56 (5040s to 6956s)
('65d29b56-0420-3113-0000-000000000003', '65d29b56-0420-2113-0000-000000000003', 'VIDEO', 'Energy in SHM (Kinetic, Potential & Total Energy) & Loaded Spring Oscillations (Derivation of Kinetic Energy, Potential Energy & Total Energy Conservation in SHM, Restoring Force, Spring Constant k & Series/Parallel Springs)', 'https://www.youtube.com/watch?v=eL7s6QvvY7k&t=5040s&end=6956s', true, 1),

-- Topic 4: 1:55:56 to 2:15:25 (6956s to 8125s)
('65d29b56-0420-3113-0000-000000000004', '65d29b56-0420-2113-0000-000000000004', 'VIDEO', 'Simple Pendulum: Derivation of Time Period & Board Numerical Practice (Restoring Torque, Derivation of Time Period Formula T = 2*pi*sqrt(L/g), Factors Affecting Pendulum Time Period & Solved CBSE Problems)', 'https://www.youtube.com/watch?v=eL7s6QvvY7k&t=6956s&end=8125s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
