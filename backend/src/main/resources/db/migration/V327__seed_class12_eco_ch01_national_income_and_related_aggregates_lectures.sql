-- V327__seed_class12_eco_ch01_national_income_and_related_aggregates_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 1 (National Income and Related Aggregates)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (L1ZWqi86R4M)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 12450s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 1 (National Income and Related Aggregates)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000001';

-- 2. Insert 6 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2201-0000-000000000001', '65d29b56-0030-1200-0000-000000000001', 'Basic Macroeconomic Concepts: Circular Flow of Income (Two-Sector), Stock vs Flow & Types of Goods', 1, true),
('65d29b56-0030-2201-0000-000000000002', '65d29b56-0030-1200-0000-000000000001', 'Basic Formulae of Conversion: Gross vs Net, Market Price vs Factor Cost & Domestic vs National', 2, true),
('65d29b56-0030-2201-0000-000000000003', '65d29b56-0030-1200-0000-000000000001', 'Value Added (Product) Method: Concepts, Value of Output, Intermediate Consumption & Numerical Problems', 3, true),
('65d29b56-0030-2201-0000-000000000004', '65d29b56-0030-1200-0000-000000000001', 'Income Method: Components (COE, Operating Surplus, Mixed Income) & Numerical Problems', 4, true),
('65d29b56-0030-2201-0000-000000000005', '65d29b56-0030-1200-0000-000000000001', 'Expenditure Method: Components (PFCE, GFCE, GDCF, Net Exports) & Comprehensive Numerical Practice', 5, true),
('65d29b56-0030-2201-0000-000000000006', '65d29b56-0030-1200-0000-000000000001', 'Precautions, Double Counting, Real vs Nominal GDP, GDP Deflator & GDP and Welfare', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3201-0000-000000000001', '65d29b56-0030-2201-0000-000000000001', 'VIDEO', 'Basic Macroeconomic Concepts: Circular Flow of Income (Two-Sector), Stock vs Flow & Types of Goods', 'https://www.youtube.com/watch?v=L1ZWqi86R4M&end=2612s', true, 1),
('65d29b56-0030-3201-0000-000000000002', '65d29b56-0030-2201-0000-000000000002', 'VIDEO', 'Basic Formulae of Conversion: Gross vs Net, Market Price vs Factor Cost & Domestic vs National', 'https://www.youtube.com/watch?v=L1ZWqi86R4M&t=2612s&end=4252s', true, 1),
('65d29b56-0030-3201-0000-000000000003', '65d29b56-0030-2201-0000-000000000003', 'VIDEO', 'Value Added (Product) Method: Concepts, Value of Output, Intermediate Consumption & Numerical Problems', 'https://www.youtube.com/watch?v=L1ZWqi86R4M&t=4252s&end=6147s', true, 1),
('65d29b56-0030-3201-0000-000000000004', '65d29b56-0030-2201-0000-000000000004', 'VIDEO', 'Income Method: Components (COE, Operating Surplus, Mixed Income) & Numerical Problems', 'https://www.youtube.com/watch?v=L1ZWqi86R4M&t=6147s&end=7058s', true, 1),
('65d29b56-0030-3201-0000-000000000005', '65d29b56-0030-2201-0000-000000000005', 'VIDEO', 'Expenditure Method: Components (PFCE, GFCE, GDCF, Net Exports) & Comprehensive Numerical Practice', 'https://www.youtube.com/watch?v=L1ZWqi86R4M&t=7058s&end=10025s', true, 1),
('65d29b56-0030-3201-0000-000000000006', '65d29b56-0030-2201-0000-000000000006', 'VIDEO', 'Precautions, Double Counting, Real vs Nominal GDP, GDP Deflator & GDP and Welfare', 'https://www.youtube.com/watch?v=L1ZWqi86R4M&t=10025s&end=12450s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
