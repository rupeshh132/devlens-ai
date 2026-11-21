-- V271__scaffold_class11_political_science_curriculum.sql
-- Scaffolds Class 11 Political Science (Subject Code: 028) for Session 2026-27 under Exam Type Class 11
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course Distribution:
-- Part A: Indian Constitution at Work (40 Marks Theory, 10 Chapters)
-- Part B: Political Theory (40 Marks Theory, 8 Chapters)
-- Theory Total: 80 Marks | Project Work & Viva: 20 Marks | Total: 100 Marks

-- 1. Insert Subject: Political Science (028)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0028-0000-0000-000000000011',
    '303d9917-55e9-4f81-8a0f-129ba4c01aef',
    'Political Science',
    '028',
    10,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 18 Chapters for Class 11 Political Science (Part A: Ch 1-10, Part B: Ch 11-18)
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
-- PART A: INDIAN CONSTITUTION AT WORK
-- Chapter 1: Constitution: Why and How?
('65d29b56-0028-1100-0000-000000000001', '65d29b56-0028-0000-0000-000000000011', 'Constitution: Why and How?', 1, true),

-- Chapter 2: Rights in the Indian Constitution
('65d29b56-0028-1100-0000-000000000002', '65d29b56-0028-0000-0000-000000000011', 'Rights in the Indian Constitution', 2, true),

-- Chapter 3: Election and Representation
('65d29b56-0028-1100-0000-000000000003', '65d29b56-0028-0000-0000-000000000011', 'Election and Representation', 3, true),

-- Chapter 4: Executive
('65d29b56-0028-1100-0000-000000000004', '65d29b56-0028-0000-0000-000000000011', 'Executive', 4, true),

-- Chapter 5: Legislature
('65d29b56-0028-1100-0000-000000000005', '65d29b56-0028-0000-0000-000000000011', 'Legislature', 5, true),

-- Chapter 6: Judiciary
('65d29b56-0028-1100-0000-000000000006', '65d29b56-0028-0000-0000-000000000011', 'Judiciary', 6, true),

-- Chapter 7: Federalism
('65d29b56-0028-1100-0000-000000000007', '65d29b56-0028-0000-0000-000000000011', 'Federalism', 7, true),

-- Chapter 8: Local Governments
('65d29b56-0028-1100-0000-000000000008', '65d29b56-0028-0000-0000-000000000011', 'Local Governments', 8, true),

-- Chapter 9: Constitution as a Living Document
('65d29b56-0028-1100-0000-000000000009', '65d29b56-0028-0000-0000-000000000011', 'Constitution as a Living Document', 9, true),

-- Chapter 10: The Philosophy of the Constitution
('65d29b56-0028-1100-0000-000000000010', '65d29b56-0028-0000-0000-000000000011', 'The Philosophy of the Constitution', 10, true),

-- PART B: POLITICAL THEORY
-- Chapter 11: Political Theory: An Introduction
('65d29b56-0028-1100-0000-000000000011', '65d29b56-0028-0000-0000-000000000011', 'Political Theory: An Introduction', 11, true),

-- Chapter 12: Freedom
('65d29b56-0028-1100-0000-000000000012', '65d29b56-0028-0000-0000-000000000011', 'Freedom', 12, true),

-- Chapter 13: Equality
('65d29b56-0028-1100-0000-000000000013', '65d29b56-0028-0000-0000-000000000011', 'Equality', 13, true),

-- Chapter 14: Social Justice
('65d29b56-0028-1100-0000-000000000014', '65d29b56-0028-0000-0000-000000000011', 'Social Justice', 14, true),

-- Chapter 15: Rights
('65d29b56-0028-1100-0000-000000000015', '65d29b56-0028-0000-0000-000000000011', 'Rights', 15, true),

-- Chapter 16: Citizenship
('65d29b56-0028-1100-0000-000000000016', '65d29b56-0028-0000-0000-000000000011', 'Citizenship', 16, true),

-- Chapter 17: Nationalism
('65d29b56-0028-1100-0000-000000000017', '65d29b56-0028-0000-0000-000000000011', 'Nationalism', 17, true),

-- Chapter 18: Secularism
('65d29b56-0028-1100-0000-000000000018', '65d29b56-0028-0000-0000-000000000011', 'Secularism', 18, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
