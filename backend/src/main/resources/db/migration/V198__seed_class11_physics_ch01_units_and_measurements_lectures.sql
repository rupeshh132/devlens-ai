-- V198__seed_class11_physics_ch01_units_and_measurements_lectures.sql
-- Seeds verified 5 Continuous Master Subtopics for Class 11 Physics Chapter 1: Units and Measurements
-- Masterclass Video: PW Class 11 Science - Akshay Tyagi Sir (5rm-iI9Nqyo)
-- 100% Zero-Gap Continuous Timeline: 0s to 8110s (02:15:10, Outro banter trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000001';

-- 2. Insert 5 Verified Master Subtopics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2101-0000-000000000001', '65d29b56-0420-1100-0000-000000000001', 'Physical Quantities, Systems of Units & SI Standards', 1, true),
('65d29b56-0420-2101-0000-000000000002', '65d29b56-0420-1100-0000-000000000001', 'Dimensions & Dimensional Formulae of Physical Quantities', 2, true),
('65d29b56-0420-2101-0000-000000000003', '65d29b56-0420-1100-0000-000000000001', 'Applications of Dimensional Analysis (Homogeneity, Checking Equations & Deriving Relations)', 3, true),
('65d29b56-0420-2101-0000-000000000004', '65d29b56-0420-1100-0000-000000000001', 'Significant Figures, Uncertainty & Rounding Off in Calculations', 4, true),
('65d29b56-0420-2101-0000-000000000005', '65d29b56-0420-1100-0000-000000000001', 'NCERT Board Practice Questions & Limitations of Dimensional Analysis', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 39:14 (0s to 2354s)
('65d29b56-0420-3101-0000-000000000001', '65d29b56-0420-2101-0000-000000000001', 'VIDEO', 'Physical Quantities, Systems of Units & SI Standards (Physical vs Non-Physical, Scalars/Vectors, Base/Derived, Supplementary Units, SI System & Special Units)', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo&t=0s&end=2354s', true, 1),

-- Topic 2: 39:14 to 59:46 (2354s to 3586s)
('65d29b56-0420-3101-0000-000000000002', '65d29b56-0420-2101-0000-000000000002', 'VIDEO', 'Dimensions & Dimensional Formulae of Physical Quantities (7 Base Dimensions, Derivation for Mechanics, Thermal & Electrical Quantities, Dimensional Equations)', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo&t=2354s&end=3586s', true, 1),

-- Topic 3: 59:46 to 1:33:10 (3586s to 5590s)
('65d29b56-0420-3101-0000-000000000003', '65d29b56-0420-2101-0000-000000000003', 'VIDEO', 'Applications of Dimensional Analysis (Principle of Homogeneity, Checking Correctness of Formulas, Unit Conversion & Deriving Physical Relations)', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo&t=3586s&end=5590s', true, 1),

-- Topic 4: 1:33:10 to 1:58:25 (5590s to 7105s)
('65d29b56-0420-3101-0000-000000000004', '65d29b56-0420-2101-0000-000000000004', 'VIDEO', 'Significant Figures, Uncertainty & Rounding Off in Calculations (Rules of Significant Figures, Rounding Off Uncertain Digits & Arithmetic Operations in Calculations)', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo&t=5590s&end=7105s', true, 1),

-- Topic 5: 1:58:25 to 2:15:10 (7105s to 8110s)
('65d29b56-0420-3101-0000-000000000005', '65d29b56-0420-2101-0000-000000000005', 'VIDEO', 'NCERT Board Practice Questions & Limitations of Dimensional Analysis (High-Weightage Board Problems, Numerical Solving & Dimensional Limitations)', 'https://www.youtube.com/watch?v=5rm-iI9Nqyo&t=7105s&end=8110s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
