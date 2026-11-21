-- V239__scaffold_class11_geography_curriculum.sql
-- Scaffolds Class 11 Geography (Subject Code: 029) for Session 2026-27 under Exam Type Class 11
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course Distribution: 70 Marks Theory (Book 1: Fundamentals of Physical Geography + Book 2: India Physical Environment + Map Work) + 30 Marks Practical = 100 Marks

-- 1. Insert Subject: Geography (029)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0029-0000-0000-000000000011',
    '303d9917-55e9-4f81-8a0f-129ba4c01aef',
    'Geography',
    '029',
    8,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 21 Chapters for Class 11 Geography (Book 1: Ch 1-14, Book 2: Ch 15-20, Map Work: Ch 21)
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
-- PART A: BOOK-1 Fundamentals of Physical Geography (35 Marks)
-- Unit 1: Geography as a Discipline
('65d29b56-0029-1100-0000-000000000001', '65d29b56-0029-0000-0000-000000000011', 'Geography as a Discipline', 1, true),

-- Unit 2: The Earth
('65d29b56-0029-1100-0000-000000000002', '65d29b56-0029-0000-0000-000000000011', 'The Origin and Evolution of the Earth', 2, true),
('65d29b56-0029-1100-0000-000000000003', '65d29b56-0029-0000-0000-000000000011', 'Interior of the Earth', 3, true),
('65d29b56-0029-1100-0000-000000000004', '65d29b56-0029-0000-0000-000000000011', 'Distribution of Oceans and Continents', 4, true),

-- Unit 3: Landforms
('65d29b56-0029-1100-0000-000000000005', '65d29b56-0029-0000-0000-000000000011', 'Geomorphic Processes', 5, true),
('65d29b56-0029-1100-0000-000000000006', '65d29b56-0029-0000-0000-000000000011', 'Landforms and their Evolution', 6, true),

-- Unit 4: Climate
('65d29b56-0029-1100-0000-000000000007', '65d29b56-0029-0000-0000-000000000011', 'Composition and Structure of Atmosphere', 7, true),
('65d29b56-0029-1100-0000-000000000008', '65d29b56-0029-0000-0000-000000000011', 'Solar Radiation, Heat Balance and Temperature', 8, true),
('65d29b56-0029-1100-0000-000000000009', '65d29b56-0029-0000-0000-000000000011', 'Atmospheric Circulation and Weather Systems', 9, true),
('65d29b56-0029-1100-0000-000000000010', '65d29b56-0029-0000-0000-000000000011', 'Water in the Atmosphere', 10, true),
('65d29b56-0029-1100-0000-000000000011', '65d29b56-0029-0000-0000-000000000011', 'World Climate and Climate Change', 11, true),

-- Unit 5: Water (Oceans)
('65d29b56-0029-1100-0000-000000000012', '65d29b56-0029-0000-0000-000000000011', 'Water (Oceans)', 12, true),
('65d29b56-0029-1100-0000-000000000013', '65d29b56-0029-0000-0000-000000000011', 'Movements of Ocean Water', 13, true),

-- Unit 6: Life on the Earth
('65d29b56-0029-1100-0000-000000000014', '65d29b56-0029-0000-0000-000000000011', 'Biodiversity and Conservation', 14, true),

-- PART B: BOOK-2 India - Physical Environment (35 Marks)
-- Unit 1: Introduction
('65d29b56-0029-1100-0000-000000000015', '65d29b56-0029-0000-0000-000000000011', 'India — Location', 15, true),

-- Unit 2: Physiography
('65d29b56-0029-1100-0000-000000000016', '65d29b56-0029-0000-0000-000000000011', 'Structure and Physiography of India', 16, true),
('65d29b56-0029-1100-0000-000000000017', '65d29b56-0029-0000-0000-000000000011', 'Drainage System', 17, true),

-- Unit 3: Climate, Vegetation and Soil
('65d29b56-0029-1100-0000-000000000018', '65d29b56-0029-0000-0000-000000000011', 'Climate of India', 18, true),
('65d29b56-0029-1100-0000-000000000019', '65d29b56-0029-0000-0000-000000000011', 'Natural Vegetation', 19, true),

-- Unit 4: Hazards and Disasters: Causes, Consequences and Management
('65d29b56-0029-1100-0000-000000000020', '65d29b56-0029-0000-0000-000000000011', 'Natural Hazards and Disasters', 20, true),

-- Comprehensive Map Work (World & India Physical Maps - 10 Marks Assessment)
('65d29b56-0029-1100-0000-000000000021', '65d29b56-0029-0000-0000-000000000011', 'Complete Map Work (World & India Physical Maps)', 21, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, subject_id = EXCLUDED.subject_id, order_index = EXCLUDED.order_index, is_active = true;
