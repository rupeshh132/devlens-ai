-- V197__scaffold_class11_physics_curriculum.sql
-- Scaffolds Class 11 Physics (Subject Code: 042) for Session 2026-27 under Exam Type Class 11
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course: 70 Marks Theory (14 Chapters across 10 Units) + 30 Marks Practicals = 100 Marks

-- 1. Insert Subject: Physics (042)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0420-0000-0000-000000000011',
    '303d9917-55e9-4f81-8a0f-129ba4c01aef',
    'Physics',
    '042',
    5,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 14 Chapters for Class 11 Physics
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
-- Unit I: Physical World and Measurement
('65d29b56-0420-1100-0000-000000000001', '65d29b56-0420-0000-0000-000000000011', 'Units and Measurements', 1, true),

-- Unit II: Kinematics
('65d29b56-0420-1100-0000-000000000002', '65d29b56-0420-0000-0000-000000000011', 'Motion in a Straight Line', 2, true),
('65d29b56-0420-1100-0000-000000000003', '65d29b56-0420-0000-0000-000000000011', 'Motion in a Plane', 3, true),

-- Unit III: Laws of Motion
('65d29b56-0420-1100-0000-000000000004', '65d29b56-0420-0000-0000-000000000011', 'Laws of Motion', 4, true),

-- Unit IV: Work, Energy and Power
('65d29b56-0420-1100-0000-000000000005', '65d29b56-0420-0000-0000-000000000011', 'Work, Energy and Power', 5, true),

-- Unit V: Motion of System of Particles and Rigid Body
('65d29b56-0420-1100-0000-000000000006', '65d29b56-0420-0000-0000-000000000011', 'System of Particles and Rotational Motion', 6, true),

-- Unit VI: Gravitation
('65d29b56-0420-1100-0000-000000000007', '65d29b56-0420-0000-0000-000000000011', 'Gravitation', 7, true),

-- Unit VII: Properties of Bulk Matter
('65d29b56-0420-1100-0000-000000000008', '65d29b56-0420-0000-0000-000000000011', 'Mechanical Properties of Solids', 8, true),
('65d29b56-0420-1100-0000-000000000009', '65d29b56-0420-0000-0000-000000000011', 'Mechanical Properties of Fluids', 9, true),
('65d29b56-0420-1100-0000-000000000010', '65d29b56-0420-0000-0000-000000000011', 'Thermal Properties of Matter', 10, true),

-- Unit VIII: Thermodynamics
('65d29b56-0420-1100-0000-000000000011', '65d29b56-0420-0000-0000-000000000011', 'Thermodynamics', 11, true),

-- Unit IX: Behaviour of Perfect Gases and Kinetic Theory of Gases
('65d29b56-0420-1100-0000-000000000012', '65d29b56-0420-0000-0000-000000000011', 'Kinetic Theory', 12, true),

-- Unit X: Oscillations and Waves
('65d29b56-0420-1100-0000-000000000013', '65d29b56-0420-0000-0000-000000000011', 'Oscillations', 13, true),
('65d29b56-0420-1100-0000-000000000014', '65d29b56-0420-0000-0000-000000000011', 'Waves', 14, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, subject_id = EXCLUDED.subject_id, order_index = EXCLUDED.order_index, is_active = true;
