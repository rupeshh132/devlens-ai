-- V237__seed_class11_econ_ch13_supply_and_elasticity_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 13: Theory of Supply & Price Elasticity of Supply
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (DnlrXOUC5vw)
-- 100% Zero-Gap Continuous Timeline: 0s to 3680s (01:01:20, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 13
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000013';

-- 2. Insert 4 Verified Master Subtopics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2113-0000-000000000001', '65d29b56-0030-1100-0000-000000000013', 'Concept of Supply, Supply Schedule, Supply Curve & Determinants of Supply', 1, true),
('65d29b56-0030-2113-0000-000000000002', '65d29b56-0030-1100-0000-000000000013', 'Law of Supply, Reasons and Exceptions', 2, true),
('65d29b56-0030-2113-0000-000000000003', '65d29b56-0030-1100-0000-000000000013', 'Movements along Supply Curve vs Shifts in Supply Curve', 3, true),
('65d29b56-0030-2113-0000-000000000004', '65d29b56-0030-1100-0000-000000000013', 'Price Elasticity of Supply: Percentage Method and Factors Affecting Elasticity', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 15:20 (0s to 920s)
('65d29b56-0030-3113-0000-000000000001', '65d29b56-0030-2113-0000-000000000001', 'VIDEO', 'Concept of Supply, Supply Schedule, Supply Curve & Determinants of Supply (Supply vs Stock, Individual vs Market Supply, Input Prices, Technology & Taxation)', 'https://www.youtube.com/watch?v=DnlrXOUC5vw&t=0s&end=920s', true, 1),

-- Topic 2: 15:20 to 30:20 (920s to 1820s)
('65d29b56-0030-3113-0000-000000000002', '65d29b56-0030-2113-0000-000000000002', 'VIDEO', 'Law of Supply, Reasons and Exceptions (Direct Relationship between Price and Quantity Supplied, Profit Motive, Agricultural Goods, Perishables & Rare Articles)', 'https://www.youtube.com/watch?v=DnlrXOUC5vw&t=920s&end=1820s', true, 1),

-- Topic 3: 30:20 to 45:40 (1820s to 2740s)
('65d29b56-0030-3113-0000-000000000003', '65d29b56-0030-2113-0000-000000000003', 'VIDEO', 'Movements along Supply Curve vs Shifts in Supply Curve (Change in Quantity Supplied vs Change in Supply, Expansion, Contraction, Increase and Decrease)', 'https://www.youtube.com/watch?v=DnlrXOUC5vw&t=1820s&end=2740s', true, 1),

-- Topic 4: 45:40 to 01:01:20 (2740s to 3680s)
('65d29b56-0030-3113-0000-000000000004', '65d29b56-0030-2113-0000-000000000004', 'VIDEO', 'Price Elasticity of Supply: Percentage Method and Factors Affecting Elasticity (Es = % Change in Qs / % Change in P, Degrees of Es: 0, <1, 1, >1, Infinity & Numericals)', 'https://www.youtube.com/watch?v=DnlrXOUC5vw&t=2740s&end=3680s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
