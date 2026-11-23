-- V326__scaffold_class12_economics_curriculum.sql
-- Scaffolds Class 12 Economics (Subject Code: 030) for Session 2026-27 under Exam Type Class 12
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course Distribution:
-- Part A: Introductory Macroeconomics (40 Marks)
--   Unit 1: National Income and Related Aggregates (10 Marks, Chapter 1)
--   Unit 2: Money and Banking (6 Marks, Chapter 2)
--   Unit 3: Determination of Income and Employment (12 Marks, Chapter 3)
--   Unit 4: Government Budget and the Economy (6 Marks, Chapter 4)
--   Unit 5: Balance of Payments & Foreign Exchange (6 Marks, Chapters 5-6)
-- Part B: Indian Economic Development (40 Marks)
--   Unit 6: Development Experience (1947-90) & Economic Reforms since 1991 (12 Marks, Chapters 7-9)
--   Unit 7: Current Challenges Facing Indian Economy (20 Marks, Chapters 10-13)
--   Unit 8: Development Experience of India: A Comparison with Neighbours (8 Marks, Chapter 14)
-- Part C: Project in Economics (20 Marks)
-- Theory Total: 80 Marks | Project Work: 20 Marks | Total: 100 Marks

-- 1. Insert Subject: Economics (030) for Class 12
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0030-0000-0000-000000000012',
    'e334760b-a4d0-4843-9234-a0ab75684ff3',
    'Economics',
    '030',
    4,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 14 Evaluative Chapters for Class 12 Economics
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0030-1200-0000-000000000001', '65d29b56-0030-0000-0000-000000000012', 'National Income and Related Aggregates', 1, true),
('65d29b56-0030-1200-0000-000000000002', '65d29b56-0030-0000-0000-000000000012', 'Money and Banking', 2, true),
('65d29b56-0030-1200-0000-000000000003', '65d29b56-0030-0000-0000-000000000012', 'Determination of Income and Employment', 3, true),
('65d29b56-0030-1200-0000-000000000004', '65d29b56-0030-0000-0000-000000000012', 'Government Budget and the Economy', 4, true),
('65d29b56-0030-1200-0000-000000000005', '65d29b56-0030-0000-0000-000000000012', 'Foreign Exchange Rate', 5, true),
('65d29b56-0030-1200-0000-000000000006', '65d29b56-0030-0000-0000-000000000012', 'Balance of Payments', 6, true),
('65d29b56-0030-1200-0000-000000000007', '65d29b56-0030-0000-0000-000000000012', 'Indian Economy on the Eve of Independence', 7, true),
('65d29b56-0030-1200-0000-000000000008', '65d29b56-0030-0000-0000-000000000012', 'Indian Economy (1950-1990)', 8, true),
('65d29b56-0030-1200-0000-000000000009', '65d29b56-0030-0000-0000-000000000012', 'Economic Reforms Since 1991 (LPG)', 9, true),
('65d29b56-0030-1200-0000-000000000010', '65d29b56-0030-0000-0000-000000000012', 'Human Capital Formation in India', 10, true),
('65d29b56-0030-1200-0000-000000000011', '65d29b56-0030-0000-0000-000000000012', 'Rural Development', 11, true),
('65d29b56-0030-1200-0000-000000000012', '65d29b56-0030-0000-0000-000000000012', 'Employment: Growth, Informalisation and Other Issues', 12, true),
('65d29b56-0030-1200-0000-000000000013', '65d29b56-0030-0000-0000-000000000012', 'Environment and Sustainable Development', 13, true),
('65d29b56-0030-1200-0000-000000000014', '65d29b56-0030-0000-0000-000000000012', 'Comparative Development Experiences of India and Its Neighbours', 14, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
