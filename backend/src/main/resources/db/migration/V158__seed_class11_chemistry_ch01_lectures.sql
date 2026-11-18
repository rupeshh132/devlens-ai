-- V158__seed_class11_chemistry_ch01_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 1 (Some Basic Concepts of Chemistry)
-- Video: Next Toppers - 11th Science (Some Basic Concepts of Chemistry Class 11 in One Shot | Tapur Ma'am | 1t9Dq4wyhBw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 10970s / 3h 02m 50s)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Some Basic Concepts of Chemistry)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000001';

-- 2. Insert 5 Verified Master Topics for Chapter 1 (Some Basic Concepts of Chemistry)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2101-0000-000000000001', '65d29b56-0430-1100-0000-000000000001', 'Importance of Chemistry, Nature of Matter, Properties & Measurement (SI Units, Uncertainty & Significant Figures)', 1, true),
('65d29b56-0430-2101-0000-000000000002', '65d29b56-0430-1100-0000-000000000001', 'Laws of Chemical Combination & Dalton''s Atomic Theory', 2, true),
('65d29b56-0430-2101-0000-000000000003', '65d29b56-0430-1100-0000-000000000001', 'Atomic, Isotopic and Molecular Masses, Mole Concept, Molar Mass & Percentage Composition', 3, true),
('65d29b56-0430-2101-0000-000000000004', '65d29b56-0430-1100-0000-000000000001', 'Empirical Formula & Concentration of Solutions (Mass %, Mole Fraction, Molarity & Molality)', 4, true),
('65d29b56-0430-2101-0000-000000000005', '65d29b56-0430-1100-0000-000000000001', 'Stoichiometry, Stoichiometric Calculations & Limiting Reagent', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3101-0000-000000000001', '65d29b56-0430-2101-0000-000000000001', 'VIDEO', 'Importance of Chemistry, Nature of Matter, Properties & Measurement (SI Units, Uncertainty & Significant Figures)', 'https://www.youtube.com/watch?v=1t9Dq4wyhBw&end=3591s', true, 1),
('65d29b56-0430-3101-0000-000000000002', '65d29b56-0430-2101-0000-000000000002', 'VIDEO', 'Laws of Chemical Combination & Dalton''s Atomic Theory', 'https://www.youtube.com/watch?v=1t9Dq4wyhBw&t=3591s&end=5107s', true, 1),
('65d29b56-0430-3101-0000-000000000003', '65d29b56-0430-2101-0000-000000000003', 'VIDEO', 'Atomic, Isotopic and Molecular Masses, Mole Concept, Molar Mass & Percentage Composition', 'https://www.youtube.com/watch?v=1t9Dq4wyhBw&t=5107s&end=7542s', true, 1),
('65d29b56-0430-3101-0000-000000000004', '65d29b56-0430-2101-0000-000000000004', 'VIDEO', 'Empirical Formula & Concentration of Solutions (Mass %, Mole Fraction, Molarity & Molality)', 'https://www.youtube.com/watch?v=1t9Dq4wyhBw&t=7542s&end=8931s', true, 1),
('65d29b56-0430-3101-0000-000000000005', '65d29b56-0430-2101-0000-000000000005', 'VIDEO', 'Stoichiometry, Stoichiometric Calculations & Limiting Reagent', 'https://www.youtube.com/watch?v=1t9Dq4wyhBw&t=8931s&end=10970s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
