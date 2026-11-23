-- V422__scaffold_class12_physics_curriculum.sql
-- Scaffolds Class 12 Physics (Code: 042) and its 15 Evaluative Chapters
-- Session: 2026-27 (Directorate of Education, GNCT Delhi & CBSE)

-- 1. Insert Subject Physics (Code: 042, Order Index: 9)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES ('65d29b56-0042-0000-0000-000000000012', 'e334760b-a4d0-4843-9234-a0ab75684ff3', 'Physics', '042', 9, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 15 Evaluative Chapters for Class 12 Physics
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0042-1200-0000-000000000001', '65d29b56-0042-0000-0000-000000000012', 'Electric Charges and Fields', 1, true),
('65d29b56-0042-1200-0000-000000000002', '65d29b56-0042-0000-0000-000000000012', 'Electrostatic Potential and Capacitance', 2, true),
('65d29b56-0042-1200-0000-000000000003', '65d29b56-0042-0000-0000-000000000012', 'Current Electricity', 3, true),
('65d29b56-0042-1200-0000-000000000004', '65d29b56-0042-0000-0000-000000000012', 'Moving Charges and Magnetism', 4, true),
('65d29b56-0042-1200-0000-000000000005', '65d29b56-0042-0000-0000-000000000012', 'Magnetism and Matter', 5, true),
('65d29b56-0042-1200-0000-000000000006', '65d29b56-0042-0000-0000-000000000012', 'Electromagnetic Induction', 6, true),
('65d29b56-0042-1200-0000-000000000007', '65d29b56-0042-0000-0000-000000000012', 'Alternating Current', 7, true),
('65d29b56-0042-1200-0000-000000000008', '65d29b56-0042-0000-0000-000000000012', 'Electromagnetic Waves', 8, true),
('65d29b56-0042-1200-0000-000000000009', '65d29b56-0042-0000-0000-000000000012', 'Ray Optics and Optical Instruments', 9, true),
('65d29b56-0042-1200-0000-000000000010', '65d29b56-0042-0000-0000-000000000012', 'Wave Optics', 10, true),
('65d29b56-0042-1200-0000-000000000011', '65d29b56-0042-0000-0000-000000000012', 'Dual Nature of Radiation and Matter', 11, true),
('65d29b56-0042-1200-0000-000000000012', '65d29b56-0042-0000-0000-000000000012', 'Atoms', 12, true),
('65d29b56-0042-1200-0000-000000000013', '65d29b56-0042-0000-0000-000000000012', 'Nuclei', 13, true),
('65d29b56-0042-1200-0000-000000000014', '65d29b56-0042-0000-0000-000000000012', 'Semiconductor Electronics: Materials, Devices and Simple Circuits', 14, true),
('65d29b56-0042-1200-0000-000000000015', '65d29b56-0042-0000-0000-000000000012', 'Practical Work, Experiments, Activities, Project & Viva Voce (30 Marks Evaluation)', 15, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
