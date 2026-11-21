-- V238__seed_class11_econ_ch14_market_equilibrium_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 14: Perfect Competition, Market Equilibrium & Simple Applications
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (Dmi6q8svg-Q)
-- 100% Zero-Gap Continuous Timeline: 0s to 2310s (38m 30s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 14
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000014';

-- 2. Insert 4 Verified Master Subtopics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2114-0000-000000000001', '65d29b56-0030-1100-0000-000000000014', 'Features of Perfect Competition: Large Buyers/Sellers, Homogeneous Product, Price Taker', 1, true),
('65d29b56-0030-2114-0000-000000000002', '65d29b56-0030-1100-0000-000000000014', 'Determination of Market Equilibrium: Demand & Supply Intersection', 2, true),
('65d29b56-0030-2114-0000-000000000003', '65d29b56-0030-1100-0000-000000000014', 'Effects of Shifts in Demand and Supply on Equilibrium Price and Quantity', 3, true),
('65d29b56-0030-2114-0000-000000000004', '65d29b56-0030-1100-0000-000000000014', 'Applications of Demand and Supply: Price Ceiling and Price Floor (MSP)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 09:50 (0s to 590s)
('65d29b56-0030-3114-0000-000000000001', '65d29b56-0030-2114-0000-000000000001', 'VIDEO', 'Features of Perfect Competition: Large Buyers/Sellers, Homogeneous Product, Price Taker (Market Concept, Free Entry/Exit, Perfect Knowledge, Firm as Price Taker vs Industry as Price Maker)', 'https://www.youtube.com/watch?v=Dmi6q8svg-Q&t=0s&end=590s', true, 1),

-- Topic 2: 09:50 to 19:50 (590s to 1190s)
('65d29b56-0030-3114-0000-000000000002', '65d29b56-0030-2114-0000-000000000002', 'VIDEO', 'Determination of Market Equilibrium: Demand & Supply Intersection (Equilibrium Price, Equilibrium Quantity, Excess Demand & Excess Supply Adjustments)', 'https://www.youtube.com/watch?v=Dmi6q8svg-Q&t=590s&end=1190s', true, 1),

-- Topic 3: 19:50 to 29:10 (1190s to 1750s)
('65d29b56-0030-3114-0000-000000000003', '65d29b56-0030-2114-0000-000000000003', 'VIDEO', 'Effects of Shifts in Demand and Supply on Equilibrium Price and Quantity (Rightward/Leftward Shifts in Demand, Simultaneous Shifts, Relative Magnitude Cases)', 'https://www.youtube.com/watch?v=Dmi6q8svg-Q&t=1190s&end=1750s', true, 1),

-- Topic 4: 29:10 to 38:30 (1750s to 2310s)
('65d29b56-0030-3114-0000-000000000004', '65d29b56-0030-2114-0000-000000000004', 'VIDEO', 'Applications of Demand and Supply: Price Ceiling and Price Floor (Maximum Price Legislation, Rationing, Black Marketing vs Minimum Support Price / Price Floor)', 'https://www.youtube.com/watch?v=Dmi6q8svg-Q&t=1750s&end=2310s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
