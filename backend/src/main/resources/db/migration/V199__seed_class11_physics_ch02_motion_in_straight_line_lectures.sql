-- V199__seed_class11_physics_ch02_motion_in_straight_line_lectures.sql
-- Seeds verified 5 Continuous Master Subtopics for Class 11 Physics Chapter 2: Motion in a Straight Line
-- Masterclass Video: PW Class 11 Science - Akshay Tyagi Sir (Tf_NDFEPiEQ)
-- 100% Zero-Gap Continuous Timeline: 0s to 9340s (02:35:40, Outro banter trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000002';

-- 2. Insert 5 Verified Master Subtopics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2102-0000-000000000001', '65d29b56-0420-1100-0000-000000000002', 'Frame of Reference, Rest & Motion, Distance vs Displacement', 1, true),
('65d29b56-0420-2102-0000-000000000002', '65d29b56-0420-1100-0000-000000000002', 'Speed, Velocity & Instantaneous Kinematics (Calculus Method)', 2, true),
('65d29b56-0420-2102-0000-000000000003', '65d29b56-0420-1100-0000-000000000002', 'Kinematic Equations of Motion, Free Fall & Galileo''s Law', 3, true),
('65d29b56-0420-2102-0000-000000000004', '65d29b56-0420-1100-0000-000000000002', 'Graphical Analysis of Motion (Position-Time & Velocity-Time Graphs)', 4, true),
('65d29b56-0420-2102-0000-000000000005', '65d29b56-0420-1100-0000-000000000002', 'Derivations of Equations of Motion (Calculus & Graphical Treatments)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 33:40 (0s to 2020s)
('65d29b56-0420-3102-0000-000000000001', '65d29b56-0420-2102-0000-000000000001', 'VIDEO', 'Frame of Reference, Rest & Motion, Distance vs Displacement (Types of Motion, Reference Frames, Point Object Concept & Scalar vs Vector Path Lengths)', 'https://www.youtube.com/watch?v=Tf_NDFEPiEQ&t=0s&end=2020s', true, 1),

-- Topic 2: 33:40 to 1:38:19 (2020s to 5899s)
('65d29b56-0420-3102-0000-000000000002', '65d29b56-0420-2102-0000-000000000002', 'VIDEO', 'Speed, Velocity & Instantaneous Kinematics (Calculus Method) (Average vs Instantaneous Speed/Velocity, Differentiation & Integration in Kinematics, Acceleration)', 'https://www.youtube.com/watch?v=Tf_NDFEPiEQ&t=2020s&end=5899s', true, 1),

-- Topic 3: 1:38:19 to 2:10:03 (5899s to 7803s)
('65d29b56-0420-3102-0000-000000000003', '65d29b56-0420-2102-0000-000000000003', 'VIDEO', 'Kinematic Equations of Motion, Free Fall & Galileo''s Law (v = u + at, s = ut + 1/2at^2, v^2 = u^2 + 2as, Motion under Gravity, Stopping Distance & Reaction Time)', 'https://www.youtube.com/watch?v=Tf_NDFEPiEQ&t=5899s&end=7803s', true, 1),

-- Topic 4: 2:10:03 to 2:24:45 (7803s to 8685s)
('65d29b56-0420-3102-0000-000000000004', '65d29b56-0420-2102-0000-000000000004', 'VIDEO', 'Graphical Analysis of Motion (Position-Time & Velocity-Time Graphs) (Slopes of x-t, Areas and Slopes of v-t Graphs, Sign Conventions & Physical Interpretation)', 'https://www.youtube.com/watch?v=Tf_NDFEPiEQ&t=7803s&end=8685s', true, 1),

-- Topic 5: 2:24:45 to 2:35:40 (8685s to 9340s)
('65d29b56-0420-3102-0000-000000000005', '65d29b56-0420-2102-0000-000000000005', 'VIDEO', 'Derivations of Equations of Motion (Calculus & Graphical Treatments) (CBSE Board Standard Proofs, Definite Integrals Method & Graphical Trapezoid Proofs)', 'https://www.youtube.com/watch?v=Tf_NDFEPiEQ&t=8685s&end=9340s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
