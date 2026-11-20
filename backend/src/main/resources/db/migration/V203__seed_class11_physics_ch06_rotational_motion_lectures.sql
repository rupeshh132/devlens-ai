-- V203__seed_class11_physics_ch06_rotational_motion_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 6: System of Particles and Rotational Motion
-- Masterclass Video: LearnoHub - Roshni Mukherjee (gIDn8NW3N6M)
-- 100% Zero-Gap Continuous Timeline: 0s to 8750s (02:25:50, Outro promos & cards trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000006';

-- 2. Insert 4 Verified Master Subtopics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2106-0000-000000000001', '65d29b56-0420-1100-0000-000000000006', 'Centre of Mass, Motion of CM & Momentum Conservation of System of Particles', 1, true),
('65d29b56-0420-2106-0000-000000000002', '65d29b56-0420-1100-0000-000000000006', 'Vector Product, Torque & Angular Momentum (Dynamics of Rotation)', 2, true),
('65d29b56-0420-2106-0000-000000000003', '65d29b56-0420-1100-0000-000000000006', 'Equilibrium of Rigid Bodies, Couple, Principle of Moments & Centre of Gravity', 3, true),
('65d29b56-0420-2106-0000-000000000004', '65d29b56-0420-1100-0000-000000000006', 'Moment of Inertia, Rotational Kinematics & Rolling Motion Dynamics', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 45:52 (0s to 2752s)
('65d29b56-0420-3106-0000-000000000001', '65d29b56-0420-2106-0000-000000000001', 'VIDEO', 'Centre of Mass, Motion of CM & Momentum Conservation of System of Particles (Concept of Rigid Body, CM of 2-Particle System, CM of Rigid Body & Rod, Velocity & Acceleration of CM, Linear Momentum Conservation)', 'https://www.youtube.com/watch?v=gIDn8NW3N6M&t=0s&end=2752s', true, 1),

-- Topic 2: 45:52 to 1:24:44 (2752s to 5084s)
('65d29b56-0420-3106-0000-000000000002', '65d29b56-0420-2106-0000-000000000002', 'VIDEO', 'Vector Product, Torque & Angular Momentum (Dynamics of Rotation) (Cross Product of Vectors, Moment of Force, Torque Vector Derivation, Angular Momentum & Torque-Angular Momentum Relation)', 'https://www.youtube.com/watch?v=gIDn8NW3N6M&t=2752s&end=5084s', true, 1),

-- Topic 3: 1:24:44 to 1:49:01 (5084s to 6541s)
('65d29b56-0420-3106-0000-000000000003', '65d29b56-0420-2106-0000-000000000003', 'VIDEO', 'Equilibrium of Rigid Bodies, Couple, Principle of Moments & Centre of Gravity (Translational & Rotational Equilibrium Conditions, Couple and Torque of a Couple, Lever Principle & Centre of Gravity)', 'https://www.youtube.com/watch?v=gIDn8NW3N6M&t=5084s&end=6541s', true, 1),

-- Topic 4: 1:49:01 to 2:25:50 (6541s to 8750s)
('65d29b56-0420-3106-0000-000000000004', '65d29b56-0420-2106-0000-000000000004', 'VIDEO', 'Moment of Inertia, Rotational Kinematics & Rolling Motion Dynamics (Moment of Inertia of Ring/Disc/Cylinder/Sphere, Radius of Gyration, Rotational Equations of Motion, Angular Momentum Conservation, Kinetic Energy of Rolling & Solved Numericals)', 'https://www.youtube.com/watch?v=gIDn8NW3N6M&t=6541s&end=8750s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
