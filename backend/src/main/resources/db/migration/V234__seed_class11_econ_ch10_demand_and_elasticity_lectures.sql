-- V234__seed_class11_econ_ch10_demand_and_elasticity_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 10: Theory of Demand & Price Elasticity
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (BzRrIdFcRWk)
-- 100% Zero-Gap Continuous Timeline: 0s to 3800s (01:03:20, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 10
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000010';

-- 2. Insert 4 Verified Master Subtopics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2110-0000-000000000001', '65d29b56-0030-1100-0000-000000000010', 'Concept of Demand, Demand Schedule and Determinants of Demand', 1, true),
('65d29b56-0030-2110-0000-000000000002', '65d29b56-0030-1100-0000-000000000010', 'Law of Demand, Reasons for Downward Slope & Exceptions', 2, true),
('65d29b56-0030-2110-0000-000000000003', '65d29b56-0030-1100-0000-000000000010', 'Movement along Demand Curve vs Shifts in Demand Curve', 3, true),
('65d29b56-0030-2110-0000-000000000004', '65d29b56-0030-1100-0000-000000000010', 'Price Elasticity of Demand: Factors, Percentage Method & Total Outlay Method', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 15:50 (0s to 950s)
('65d29b56-0030-3110-0000-000000000001', '65d29b56-0030-2110-0000-000000000001', 'VIDEO', 'Concept of Demand, Demand Schedule and Determinants of Demand (Individual vs Market Demand, Substitute & Complementary Goods, Normal vs Inferior Goods, Tastes & Expectations)', 'https://www.youtube.com/watch?v=BzRrIdFcRWk&t=0s&end=950s', true, 1),

-- Topic 2: 15:50 to 31:00 (950s to 1860s)
('65d29b56-0030-3110-0000-000000000002', '65d29b56-0030-2110-0000-000000000002', 'VIDEO', 'Law of Demand, Reasons for Downward Slope & Exceptions (Inverse Price-Quantity Relationship, Income Effect, Substitution Effect, Law of DMU, Giffen Goods & Veblen Conspicuous Goods)', 'https://www.youtube.com/watch?v=BzRrIdFcRWk&t=950s&end=1860s', true, 1),

-- Topic 3: 31:00 to 46:40 (1860s to 2800s)
('65d29b56-0030-3110-0000-000000000003', '65d29b56-0030-2110-0000-000000000003', 'VIDEO', 'Movement along Demand Curve vs Shifts in Demand Curve (Change in Quantity Demanded vs Change in Demand, Expansion vs Contraction, Increase vs Decrease in Demand)', 'https://www.youtube.com/watch?v=BzRrIdFcRWk&t=1860s&end=2800s', true, 1),

-- Topic 4: 46:40 to 01:03:20 (2800s to 3800s)
('65d29b56-0030-3110-0000-000000000004', '65d29b56-0030-2110-0000-000000000004', 'VIDEO', 'Price Elasticity of Demand: Factors, Percentage Method & Total Outlay Method (Percentage Change Formula, Perfectly Elastic to Inelastic Degrees, Expenditure Method & Solved Numericals)', 'https://www.youtube.com/watch?v=BzRrIdFcRWk&t=2800s&end=3800s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
