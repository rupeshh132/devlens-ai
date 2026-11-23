-- V292__scaffold_class12_biology_curriculum.sql
-- Scaffolds Class 12 Biology (Subject Code: 044) for Session 2026-27 under Exam Type Class 12
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course Distribution:
-- Unit VI: Reproduction (16 Marks, Chapters 1-3)
-- Unit VII: Genetics and Evolution (20 Marks, Chapters 4-6)
-- Unit VIII: Biology and Human Welfare (12 Marks, Chapters 7-8)
-- Unit IX: Biotechnology and its Applications (12 Marks, Chapters 9-10)
-- Unit X: Ecology and Environment (10 Marks, Chapters 11-13)
-- Theory Total: 70 Marks | Practicals / Project / Viva: 30 Marks | Total: 100 Marks

-- 1. Insert Subject: Biology (044) for Class 12
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0440-0000-0000-000000000012',
    'e334760b-a4d0-4843-9234-a0ab75684ff3',
    'Biology',
    '044',
    1,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 13 Chapters for Class 12 Biology
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0440-1200-0000-000000000001', '65d29b56-0440-0000-0000-000000000012', 'Sexual Reproduction in Flowering Plants', 1, true),
('65d29b56-0440-1200-0000-000000000002', '65d29b56-0440-0000-0000-000000000012', 'Human Reproduction', 2, true),
('65d29b56-0440-1200-0000-000000000003', '65d29b56-0440-0000-0000-000000000012', 'Reproductive Health', 3, true),
('65d29b56-0440-1200-0000-000000000004', '65d29b56-0440-0000-0000-000000000012', 'Principles of Inheritance and Variation', 4, true),
('65d29b56-0440-1200-0000-000000000005', '65d29b56-0440-0000-0000-000000000012', 'Molecular Basis of Inheritance', 5, true),
('65d29b56-0440-1200-0000-000000000006', '65d29b56-0440-0000-0000-000000000012', 'Evolution', 6, true),
('65d29b56-0440-1200-0000-000000000007', '65d29b56-0440-0000-0000-000000000012', 'Human Health and Disease', 7, true),
('65d29b56-0440-1200-0000-000000000008', '65d29b56-0440-0000-0000-000000000012', 'Microbes in Human Welfare', 8, true),
('65d29b56-0440-1200-0000-000000000009', '65d29b56-0440-0000-0000-000000000012', 'Biotechnology: Principles and Processes', 9, true),
('65d29b56-0440-1200-0000-000000000010', '65d29b56-0440-0000-0000-000000000012', 'Biotechnology and its Applications', 10, true),
('65d29b56-0440-1200-0000-000000000011', '65d29b56-0440-0000-0000-000000000012', 'Organisms and Populations', 11, true),
('65d29b56-0440-1200-0000-000000000012', '65d29b56-0440-0000-0000-000000000012', 'Ecosystem', 12, true),
('65d29b56-0440-1200-0000-000000000013', '65d29b56-0440-0000-0000-000000000012', 'Biodiversity and its Conservation', 13, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
