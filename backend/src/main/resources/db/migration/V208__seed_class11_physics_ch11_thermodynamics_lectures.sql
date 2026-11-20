-- V208__seed_class11_physics_ch11_thermodynamics_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 11: Thermodynamics
-- Masterclass Video: LearnoHub - Roshni Mukherjee (qRNUZQlxXU0)
-- 100% Zero-Gap Continuous Timeline: 0s to 7820s (02:10:20, Outro promos & cards trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 11
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000011';

-- 2. Insert 4 Verified Master Subtopics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2111-0000-000000000001', '65d29b56-0420-1100-0000-000000000011', 'Thermal Equilibrium, Zeroth Law & Internal Energy', 1, true),
('65d29b56-0420-2111-0000-000000000002', '65d29b56-0420-1100-0000-000000000011', 'First Law of Thermodynamics & Molar Specific Heat Capacities (Cp & Cv)', 2, true),
('65d29b56-0420-2111-0000-000000000003', '65d29b56-0420-1100-0000-000000000011', 'Thermodynamic Processes: Isothermal, Adiabatic, Isochoric, Isobaric & Cyclic', 3, true),
('65d29b56-0420-2111-0000-000000000004', '65d29b56-0420-1100-0000-000000000011', 'Second Law of Thermodynamics, Reversible/Irreversible Processes & Heat Engines', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 24:56 (0s to 1496s)
('65d29b56-0420-3111-0000-000000000001', '65d29b56-0420-2111-0000-000000000001', 'VIDEO', 'Thermal Equilibrium, Zeroth Law & Internal Energy (Concept of System/Surroundings, Zeroth Law of Thermodynamics & Temperature Definition, State Variables, Equation of State & Internal Energy U)', 'https://www.youtube.com/watch?v=qRNUZQlxXU0&t=0s&end=1496s', true, 1),

-- Topic 2: 24:56 to 55:39 (1496s to 3339s)
('65d29b56-0420-3111-0000-000000000002', '65d29b56-0420-2111-0000-000000000002', 'VIDEO', 'First Law of Thermodynamics & Molar Specific Heat Capacities (Cp & Cv) (First Law Statement dQ = dU + dW, Sign Conventions, Work in Expansion, Mayer''s Relation Cp - Cv = R & Specific Heat Ratio gamma)', 'https://www.youtube.com/watch?v=qRNUZQlxXU0&t=1496s&end=3339s', true, 1),

-- Topic 3: 55:39 to 1:33:02 (3339s to 5582s)
('65d29b56-0420-3111-0000-000000000003', '65d29b56-0420-2111-0000-000000000003', 'VIDEO', 'Thermodynamic Processes: Isothermal, Adiabatic, Isochoric, Isobaric & Cyclic (Work Done in Isothermal Process W = nRT ln(V2/V1), Adiabatic Process PV^gamma = const, Work Done in Adiabatic Expansion & Indicator PV Diagrams)', 'https://www.youtube.com/watch?v=qRNUZQlxXU0&t=3339s&end=5582s', true, 1),

-- Topic 4: 1:33:02 to 2:10:20 (5582s to 7820s)
('65d29b56-0420-3111-0000-000000000004', '65d29b56-0420-2111-0000-000000000004', 'VIDEO', 'Second Law of Thermodynamics, Reversible/Irreversible Processes & Heat Engines (Kelvin-Planck & Clausius Statements, Reversibility Conditions, Heat Engines & Refrigerators Efficiency, Carnot Cycle & Solved Problems)', 'https://www.youtube.com/watch?v=qRNUZQlxXU0&t=5582s&end=7820s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
