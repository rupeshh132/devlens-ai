-- V224__scaffold_class11_economics_curriculum.sql
-- Scaffolds Class 11 Economics (Subject Code: 030) for Session 2026-27 under Exam Type Class 11
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course Distribution: 80 Marks Theory (14 Chapters across Part A & Part B) + 20 Marks Project Work = 100 Marks

-- 1. Insert Subject: Economics (030)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0030-0000-0000-000000000011',
    '303d9917-55e9-4f81-8a0f-129ba4c01aef',
    'Economics',
    '030',
    7,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 14 Chapters for Class 11 Economics
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
-- Part A: Statistics for Economics (40 Marks)
-- Unit 1: Introduction (5 Marks)
('65d29b56-0030-1100-0000-000000000001', '65d29b56-0030-0000-0000-000000000011', 'Introduction to Statistics in Economics', 1, true),

-- Unit 2: Collection, Organisation and Presentation of Data (15 Marks)
('65d29b56-0030-1100-0000-000000000002', '65d29b56-0030-0000-0000-000000000011', 'Collection of Data', 2, true),
('65d29b56-0030-1100-0000-000000000003', '65d29b56-0030-0000-0000-000000000011', 'Organisation of Data', 3, true),
('65d29b56-0030-1100-0000-000000000004', '65d29b56-0030-0000-0000-000000000011', 'Presentation of Data (Tabular & Diagrammatic)', 4, true),

-- Unit 3: Statistical Tools and Interpretation (20 Marks)
('65d29b56-0030-1100-0000-000000000005', '65d29b56-0030-0000-0000-000000000011', 'Measures of Central Tendency (Mean, Median & Mode)', 5, true),
('65d29b56-0030-1100-0000-000000000006', '65d29b56-0030-0000-0000-000000000011', 'Measures of Correlation', 6, true),
('65d29b56-0030-1100-0000-000000000007', '65d29b56-0030-0000-0000-000000000011', 'Introduction to Index Numbers', 7, true),

-- Part B: Introductory Microeconomics (40 Marks)
-- Unit 4: Introduction (4 Marks)
('65d29b56-0030-1100-0000-000000000008', '65d29b56-0030-0000-0000-000000000011', 'Introduction to Microeconomics & Central Problems', 8, true),

-- Unit 5: Consumer''s Equilibrium and Demand (15 Marks)
('65d29b56-0030-1100-0000-000000000009', '65d29b56-0030-0000-0000-000000000011', 'Consumer''s Equilibrium (Utility & Indifference Curve)', 9, true),
('65d29b56-0030-1100-0000-000000000010', '65d29b56-0030-0000-0000-000000000011', 'Theory of Demand & Price Elasticity', 10, true),

-- Unit 6: Producer Behaviour and Supply (14 Marks)
('65d29b56-0030-1100-0000-000000000011', '65d29b56-0030-0000-0000-000000000011', 'Production Function & Cost Analysis', 11, true),
('65d29b56-0030-1100-0000-000000000012', '65d29b56-0030-0000-0000-000000000011', 'Revenue Analysis & Producer''s Equilibrium', 12, true),
('65d29b56-0030-1100-0000-000000000013', '65d29b56-0030-0000-0000-000000000011', 'Theory of Supply & Price Elasticity of Supply', 13, true),

-- Unit 7: Forms of Market and Price Determination under Perfect Competition (7 Marks)
('65d29b56-0030-1100-0000-000000000014', '65d29b56-0030-0000-0000-000000000011', 'Perfect Competition, Market Equilibrium & Simple Applications', 14, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, subject_id = EXCLUDED.subject_id, order_index = EXCLUDED.order_index, is_active = true;
