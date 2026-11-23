-- V407__scaffold_class12_mathematics_curriculum.sql
-- Scaffolds Class 12 Mathematics (Code: 041) and its 14 Evaluative Chapters
-- Session: 2026-27 (Directorate of Education, GNCT Delhi & CBSE)

-- 1. Insert Subject Mathematics (Code: 041, Order Index: 8)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES ('65d29b56-0041-0000-0000-000000000012', 'e334760b-a4d0-4843-9234-a0ab75684ff3', 'Mathematics', '041', 8, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 14 Evaluative Chapters for Class 12 Mathematics
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0041-1200-0000-000000000001', '65d29b56-0041-0000-0000-000000000012', 'Relations and Functions', 1, true),
('65d29b56-0041-1200-0000-000000000002', '65d29b56-0041-0000-0000-000000000012', 'Inverse Trigonometric Functions', 2, true),
('65d29b56-0041-1200-0000-000000000003', '65d29b56-0041-0000-0000-000000000012', 'Matrices', 3, true),
('65d29b56-0041-1200-0000-000000000004', '65d29b56-0041-0000-0000-000000000012', 'Determinants', 4, true),
('65d29b56-0041-1200-0000-000000000005', '65d29b56-0041-0000-0000-000000000012', 'Continuity and Differentiability', 5, true),
('65d29b56-0041-1200-0000-000000000006', '65d29b56-0041-0000-0000-000000000012', 'Applications of Derivatives', 6, true),
('65d29b56-0041-1200-0000-000000000007', '65d29b56-0041-0000-0000-000000000012', 'Integrals', 7, true),
('65d29b56-0041-1200-0000-000000000008', '65d29b56-0041-0000-0000-000000000012', 'Applications of the Integrals', 8, true),
('65d29b56-0041-1200-0000-000000000009', '65d29b56-0041-0000-0000-000000000012', 'Differential Equations', 9, true),
('65d29b56-0041-1200-0000-000000000010', '65d29b56-0041-0000-0000-000000000012', 'Vectors', 10, true),
('65d29b56-0041-1200-0000-000000000011', '65d29b56-0041-0000-0000-000000000012', 'Three - dimensional Geometry', 11, true),
('65d29b56-0041-1200-0000-000000000012', '65d29b56-0041-0000-0000-000000000012', 'Linear Programming', 12, true),
('65d29b56-0041-1200-0000-000000000013', '65d29b56-0041-0000-0000-000000000012', 'Probability', 13, true),
('65d29b56-0041-1200-0000-000000000014', '65d29b56-0041-0000-0000-000000000012', 'Internal Assessment: Mathematics Lab Activities & Viva Voce (20 Marks)', 14, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
