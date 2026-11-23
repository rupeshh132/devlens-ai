-- V369__scaffold_class12_geography_curriculum.sql
-- Scaffolds Class 12 Geography (Code: 029) and its 22 Evaluative Chapters
-- Session: 2026-27 (Directorate of Education, GNCT Delhi & CBSE)

-- 1. Insert Subject Geography (Code: 029, Order Index: 6)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES ('65d29b56-0029-0000-0000-000000000012', 'e334760b-a4d0-4843-9234-a0ab75684ff3', 'Geography', '029', 6, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 22 Evaluative Chapters for Class 12 Geography
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0029-1200-0000-000000000001', '65d29b56-0029-0000-0000-000000000012', 'Human Geography: Nature and Scope', 1, true),
('65d29b56-0029-1200-0000-000000000002', '65d29b56-0029-0000-0000-000000000012', 'The World Population: Distribution, Density and Growth', 2, true),
('65d29b56-0029-1200-0000-000000000003', '65d29b56-0029-0000-0000-000000000012', 'Human Development', 3, true),
('65d29b56-0029-1200-0000-000000000004', '65d29b56-0029-0000-0000-000000000012', 'Primary Activities', 4, true),
('65d29b56-0029-1200-0000-000000000005', '65d29b56-0029-0000-0000-000000000012', 'Secondary Activities', 5, true),
('65d29b56-0029-1200-0000-000000000006', '65d29b56-0029-0000-0000-000000000012', 'Tertiary and Quaternary Activities', 6, true),
('65d29b56-0029-1200-0000-000000000007', '65d29b56-0029-0000-0000-000000000012', 'Transport and Communication (World)', 7, true),
('65d29b56-0029-1200-0000-000000000008', '65d29b56-0029-0000-0000-000000000012', 'International Trade (World)', 8, true),
('65d29b56-0029-1200-0000-000000000009', '65d29b56-0029-0000-0000-000000000012', 'Population: Distribution, Density, Growth and Composition (India)', 9, true),
('65d29b56-0029-1200-0000-000000000010', '65d29b56-0029-0000-0000-000000000012', 'Human Settlements (India)', 10, true),
('65d29b56-0029-1200-0000-000000000011', '65d29b56-0029-0000-0000-000000000012', 'Land Resources and Agriculture (India)', 11, true),
('65d29b56-0029-1200-0000-000000000012', '65d29b56-0029-0000-0000-000000000012', 'Water Resources (India)', 12, true),
('65d29b56-0029-1200-0000-000000000013', '65d29b56-0029-0000-0000-000000000012', 'Mineral and Energy Resources (India)', 13, true),
('65d29b56-0029-1200-0000-000000000014', '65d29b56-0029-0000-0000-000000000012', 'Planning and Sustainable Development in Indian Context', 14, true),
('65d29b56-0029-1200-0000-000000000015', '65d29b56-0029-0000-0000-000000000012', 'Transport and Communication (India)', 15, true),
('65d29b56-0029-1200-0000-000000000016', '65d29b56-0029-0000-0000-000000000012', 'International Trade (India)', 16, true),
('65d29b56-0029-1200-0000-000000000017', '65d29b56-0029-0000-0000-000000000012', 'Geographical Perspective on Selected Issues and Problems', 17, true),
('65d29b56-0029-1200-0000-000000000018', '65d29b56-0029-0000-0000-000000000012', 'Data – Its Source and Compilation', 18, true),
('65d29b56-0029-1200-0000-000000000019', '65d29b56-0029-0000-0000-000000000012', 'Data Processing (Measures of Central Tendency)', 19, true),
('65d29b56-0029-1200-0000-000000000020', '65d29b56-0029-0000-0000-000000000012', 'Graphical Representation of Data', 20, true),
('65d29b56-0029-1200-0000-000000000021', '65d29b56-0029-0000-0000-000000000012', 'Spatial Information Technology (GIS)', 21, true),
('65d29b56-0029-1200-0000-000000000022', '65d29b56-0029-0000-0000-000000000012', 'Complete Map Work (World & India Political Maps - 10 Marks Board Evaluation)', 22, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
