-- V200__seed_class11_physics_ch03_motion_in_a_plane_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 3: Motion in a Plane
-- Masterclass Video: PW Class 11 Science - Akshay Tyagi Sir (Rguy27cyJpo)
-- 100% Zero-Gap Continuous Timeline: 0s to 12480s (03:28:00, Outro banter trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000003';

-- 2. Insert 4 Verified Master Subtopics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2103-0000-000000000001', '65d29b56-0420-1100-0000-000000000003', 'Vectors, Representation & Resolution into Rectangular Components', 1, true),
('65d29b56-0420-2103-0000-000000000002', '65d29b56-0420-1100-0000-000000000003', 'Vector Algebra (Addition, Subtraction, Dot Product & Cross Product)', 2, true),
('65d29b56-0420-2103-0000-000000000003', '65d29b56-0420-1100-0000-000000000003', 'Projectile Motion (Trajectory Equation, Time of Flight, Range & Max Height)', 3, true),
('65d29b56-0420-2103-0000-000000000004', '65d29b56-0420-1100-0000-000000000003', 'Uniform & Non-Uniform Circular Motion (Centripetal Acceleration & Numericals)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 44:57 (0s to 2697s)
('65d29b56-0420-3103-0000-000000000001', '65d29b56-0420-2103-0000-000000000001', 'VIDEO', 'Vectors, Representation & Resolution into Rectangular Components (Scalars vs Vectors, Position/Displacement Vectors, Unit Vectors & Orthogonal Resolution)', 'https://www.youtube.com/watch?v=Rguy27cyJpo&t=0s&end=2697s', true, 1),

-- Topic 2: 44:57 to 1:52:42 (2697s to 6762s)
('65d29b56-0420-3103-0000-000000000002', '65d29b56-0420-2103-0000-000000000002', 'VIDEO', 'Vector Algebra (Addition, Subtraction, Dot Product & Cross Product) (Triangle & Parallelogram Laws of Vector Addition, Scalar/Dot Product, Vector/Cross Product & Solved Numericals)', 'https://www.youtube.com/watch?v=Rguy27cyJpo&t=2697s&end=6762s', true, 1),

-- Topic 3: 1:52:42 to 2:45:46 (6762s to 9946s)
('65d29b56-0420-3103-0000-000000000003', '65d29b56-0420-2103-0000-000000000003', 'VIDEO', 'Projectile Motion (Trajectory Equation, Time of Flight, Range & Max Height) (Horizontal & Oblique Projectiles, Parabolic Path Derivations & Board Numerical Practice)', 'https://www.youtube.com/watch?v=Rguy27cyJpo&t=6762s&end=9946s', true, 1),

-- Topic 4: 2:45:46 to 3:28:00 (9946s to 12480s)
('65d29b56-0420-3103-0000-000000000004', '65d29b56-0420-2103-0000-000000000004', 'VIDEO', 'Uniform & Non-Uniform Circular Motion (Centripetal Acceleration & Numericals) (Angular Velocity, Tangential vs Radial Acceleration, Centripetal Force & NCERT Exemplar Problems)', 'https://www.youtube.com/watch?v=Rguy27cyJpo&t=9946s&end=12480s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
