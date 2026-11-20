-- V202__seed_class11_physics_ch05_work_energy_power_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 5: Work, Energy and Power
-- Masterclass Video: LearnoHub - Roshni Mukherjee (oswh0W7uMGo)
-- 100% Zero-Gap Continuous Timeline: 0s to 5820s (01:37:00, Outro cards & promos trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000005';

-- 2. Insert 4 Verified Master Subtopics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2105-0000-000000000001', '65d29b56-0420-1100-0000-000000000005', 'Work Done by Constant & Variable Force, Scalar Product & Kinetic Energy', 1, true),
('65d29b56-0420-2105-0000-000000000002', '65d29b56-0420-1100-0000-000000000005', 'Work-Energy Theorem & Potential Energy (Gravitational & Spring Potential Energy)', 2, true),
('65d29b56-0420-2105-0000-000000000003', '65d29b56-0420-1100-0000-000000000005', 'Power (Average & Instantaneous) & Vertical Circular Motion', 3, true),
('65d29b56-0420-2105-0000-000000000004', '65d29b56-0420-1100-0000-000000000005', 'Collisions in One and Two Dimensions (Elastic & Inelastic Collisions)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 28:19 (0s to 1699s)
('65d29b56-0420-3105-0000-000000000001', '65d29b56-0420-2105-0000-000000000001', 'VIDEO', 'Work Done by Constant & Variable Force, Scalar Product & Kinetic Energy (Notion of Work, W = F.s, Work by Spring & Variable Forces, Dot Product Properties & Kinetic Energy Expression)', 'https://www.youtube.com/watch?v=oswh0W7uMGo&t=0s&end=1699s', true, 1),

-- Topic 2: 28:19 to 1:02:08 (1699s to 3728s)
('65d29b56-0420-3105-0000-000000000002', '65d29b56-0420-2105-0000-000000000002', 'VIDEO', 'Work-Energy Theorem & Potential Energy (Gravitational & Spring Potential Energy) (Work-Energy Theorem Proof, Conservative vs Non-Conservative Forces, Potential Energy of a Stretched Spring)', 'https://www.youtube.com/watch?v=oswh0W7uMGo&t=1699s&end=3728s', true, 1),

-- Topic 3: 1:02:08 to 1:13:33 (3728s to 4413s)
('65d29b56-0420-3105-0000-000000000003', '65d29b56-0420-2105-0000-000000000003', 'VIDEO', 'Power (Average & Instantaneous) & Vertical Circular Motion (Definition of Power, P = F.v, Kilowatt-Hour Units, Energy Conservation in Vertical Circle & Critical Speeds)', 'https://www.youtube.com/watch?v=oswh0W7uMGo&t=3728s&end=4413s', true, 1),

-- Topic 4: 1:13:33 to 1:37:00 (4413s to 5820s)
('65d29b56-0420-3105-0000-000000000004', '65d29b56-0420-2105-0000-000000000004', 'VIDEO', 'Collisions in One and Two Dimensions (Elastic & Inelastic Collisions) (Conservation Laws, Coefficient of Restitution, 1D Elastic Collision Velocities & Oblique 2D Collisions)', 'https://www.youtube.com/watch?v=oswh0W7uMGo&t=4413s&end=5820s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
