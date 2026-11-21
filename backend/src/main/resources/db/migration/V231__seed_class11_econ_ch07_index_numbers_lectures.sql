-- V231__seed_class11_econ_ch07_index_numbers_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 7: Introduction to Index Numbers
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (GnnogFQSdU8)
-- 100% Zero-Gap Continuous Timeline: 0s to 3525s (58m 45s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000007';

-- 2. Insert 4 Verified Master Subtopics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2107-0000-000000000001', '65d29b56-0030-1100-0000-000000000007', 'Index Numbers: Meaning, Features, Uses & Construction Issues', 1, true),
('65d29b56-0030-2107-0000-000000000002', '65d29b56-0030-1100-0000-000000000007', 'Simple Aggregative and Average of Price Relatives Methods', 2, true),
('65d29b56-0030-2107-0000-000000000003', '65d29b56-0030-1100-0000-000000000007', 'Weighted Index Numbers: Laspeyres, Paasche and Fisher Methods', 3, true),
('65d29b56-0030-2107-0000-000000000004', '65d29b56-0030-1100-0000-000000000007', 'Consumer Price Index (CPI), WPI, IIP & Rate of Inflation', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 13:29 (0s to 809s)
('65d29b56-0030-3107-0000-000000000001', '65d29b56-0030-2107-0000-000000000001', 'VIDEO', 'Index Numbers: Meaning, Features, Uses & Construction Issues (Barometer of Economy, Base Period Selection, Selection of Commodities & Price Quotations)', 'https://www.youtube.com/watch?v=GnnogFQSdU8&t=0s&end=809s', true, 1),

-- Topic 2: 13:29 to 25:29 (809s to 1529s)
('65d29b56-0030-3107-0000-000000000002', '65d29b56-0030-2107-0000-000000000002', 'VIDEO', 'Simple Aggregative and Average of Price Relatives Methods (Price Relative Formula P1/P0*100, Simple Aggregation of Current vs Base Year Prices)', 'https://www.youtube.com/watch?v=GnnogFQSdU8&t=809s&end=1529s', true, 1),

-- Topic 3: 25:29 to 47:07 (1529s to 2827s)
('65d29b56-0030-3107-0000-000000000003', '65d29b56-0030-2107-0000-000000000003', 'VIDEO', 'Weighted Index Numbers: Laspeyres, Paasche and Fisher Methods (Base Year Quantities q0, Current Year Quantities q1, Geometric Mean Fisher Ideal Formula)', 'https://www.youtube.com/watch?v=GnnogFQSdU8&t=1529s&end=2827s', true, 1),

-- Topic 4: 47:07 to 58:45 (2827s to 3525s)
('65d29b56-0030-3107-0000-000000000004', '65d29b56-0030-2107-0000-000000000004', 'VIDEO', 'Consumer Price Index (CPI), WPI, IIP & Rate of Inflation (Cost of Living Index, Aggregative Expenditure vs Family Budget Method, Wholesale Index & Inflation Rate)', 'https://www.youtube.com/watch?v=GnnogFQSdU8&t=2827s&end=3525s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
