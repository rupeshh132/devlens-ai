-- V306__scaffold_class12_chemistry_curriculum.sql
-- Scaffolds Class 12 Chemistry (Subject Code: 043) for Session 2026-27 under Exam Type Class 12
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Unit Distribution:
-- Unit 1: Solutions (7 Marks)
-- Unit 2: Electrochemistry (9 Marks)
-- Unit 3: Chemical Kinetics (7 Marks)
-- Unit 4: The d- and f- Block Elements (7 Marks)
-- Unit 5: Coordination Compounds (7 Marks)
-- Unit 6: Haloalkanes and Haloarenes (6 Marks)
-- Unit 7: Alcohols, Phenols and Ethers (6 Marks)
-- Unit 8: Aldehydes, Ketones and Carboxylic Acids (8 Marks)
-- Unit 9: Amines (6 Marks)
-- Unit 10: Biomolecules (7 Marks)
-- Theory Total: 70 Marks | Practical Examination Total: 30 Marks | Total: 100 Marks

-- 1. Insert Subject: Chemistry (043) for Class 12
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0430-0000-0000-000000000012',
    'e334760b-a4d0-4843-9234-a0ab75684ff3',
    'Chemistry',
    '043',
    2,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 10 Chapters for Class 12 Chemistry
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0430-1200-0000-000000000001', '65d29b56-0430-0000-0000-000000000012', 'Solutions', 1, true),
('65d29b56-0430-1200-0000-000000000002', '65d29b56-0430-0000-0000-000000000012', 'Electrochemistry', 2, true),
('65d29b56-0430-1200-0000-000000000003', '65d29b56-0430-0000-0000-000000000012', 'Chemical Kinetics', 3, true),
('65d29b56-0430-1200-0000-000000000004', '65d29b56-0430-0000-0000-000000000012', 'The d- and f- Block Elements', 4, true),
('65d29b56-0430-1200-0000-000000000005', '65d29b56-0430-0000-0000-000000000012', 'Coordination Compounds', 5, true),
('65d29b56-0430-1200-0000-000000000006', '65d29b56-0430-0000-0000-000000000012', 'Haloalkanes and Haloarenes', 6, true),
('65d29b56-0430-1200-0000-000000000007', '65d29b56-0430-0000-0000-000000000012', 'Alcohols, Phenols and Ethers', 7, true),
('65d29b56-0430-1200-0000-000000000008', '65d29b56-0430-0000-0000-000000000012', 'Aldehydes, Ketones and Carboxylic Acids', 8, true),
('65d29b56-0430-1200-0000-000000000009', '65d29b56-0430-0000-0000-000000000012', 'Amines', 9, true),
('65d29b56-0430-1200-0000-000000000010', '65d29b56-0430-0000-0000-000000000012', 'Biomolecules', 10, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
