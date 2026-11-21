-- V261__scaffold_class11_history_curriculum.sql
-- Scaffolds Class 11 History (Subject Code: 027) for Session 2026-27 under Exam Type Class 11
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course Distribution: 80 Marks Theory (7 Themes + Map Work) + 20 Marks Project Work = 100 Marks Total

-- 1. Insert Subject: History (027)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0027-0000-0000-000000000011',
    '303d9917-55e9-4f81-8a0f-129ba4c01aef',
    'History',
    '027',
    9,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 8 Chapters for Class 11 History (Themes 1-7 + Complete Map Work)
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
-- SECTION 1: EARLY SOCIETIES
-- Chapter 1: Writing and City Life (Focus: Iraq/Mesopotamia, 3rd millennium BCE)
('65d29b56-0027-1100-0000-000000000001', '65d29b56-0027-0000-0000-000000000011', 'Writing and City Life', 1, true),

-- SECTION 2: EMPIRES
-- Chapter 2: An Empire across Three Continents (Focus: Roman Empire, 27 BCE to 600 CE)
('65d29b56-0027-1100-0000-000000000002', '65d29b56-0027-0000-0000-000000000011', 'An Empire Across Three Continents', 2, true),

-- Chapter 3: Nomadic Empires (Focus: The Mongols, 13th to 14th century)
('65d29b56-0027-1100-0000-000000000003', '65d29b56-0027-0000-0000-000000000011', 'Nomadic Empires', 3, true),

-- SECTION 3: CHANGING TRADITIONS
-- Chapter 4: The Three Orders (Focus: Western Europe, 13th-16th century)
('65d29b56-0027-1100-0000-000000000004', '65d29b56-0027-0000-0000-000000000011', 'The Three Orders', 4, true),

-- Chapter 5: Changing Cultural Traditions (Focus: Europe, 14th to 17th century, Renaissance)
('65d29b56-0027-1100-0000-000000000005', '65d29b56-0027-0000-0000-000000000011', 'Changing Cultural Traditions', 5, true),

-- Chapter 6: Displacing Indigenous People (Focus: North America and Australia, 18th-20th century)
('65d29b56-0027-1100-0000-000000000006', '65d29b56-0027-0000-0000-000000000011', 'Displacing Indigenous Peoples', 6, true),

-- SECTION 4: TOWARDS MODERNISATION
-- Chapter 7: Paths to Modernization (Focus: East Asia - Japan & China, late 19th & 20th century)
('65d29b56-0027-1100-0000-000000000007', '65d29b56-0027-0000-0000-000000000011', 'Paths to Modernization', 7, true),

-- SECTION 5: MAP WORK
-- Chapter 8: Complete Map Work & Cartographic Skills (World History Map Items for All Themes)
('65d29b56-0027-1100-0000-000000000008', '65d29b56-0027-0000-0000-000000000011', 'Complete Map Work & Cartographic Skills', 8, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
