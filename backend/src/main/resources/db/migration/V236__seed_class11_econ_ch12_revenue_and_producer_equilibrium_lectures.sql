-- V236__seed_class11_econ_ch12_revenue_and_producer_equilibrium_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 12: Revenue Analysis & Producer's Equilibrium
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (fGGQ5m1MiPs)
-- 100% Zero-Gap Continuous Timeline: 0s to 2360s (39m 20s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 12
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000012';

-- 2. Insert 4 Verified Master Subtopics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2112-0000-000000000001', '65d29b56-0030-1100-0000-000000000012', 'Concepts of Total Revenue (TR), Average Revenue (AR) and Marginal Revenue (MR)', 1, true),
('65d29b56-0030-2112-0000-000000000002', '65d29b56-0030-1100-0000-000000000012', 'Relationship between TR, AR and MR (Constant vs Falling Prices)', 2, true),
('65d29b56-0030-2112-0000-000000000003', '65d29b56-0030-1100-0000-000000000012', 'Concept and Meaning of Producer''s Equilibrium', 3, true),
('65d29b56-0030-2112-0000-000000000004', '65d29b56-0030-1100-0000-000000000012', 'Producer''s Equilibrium under MR-MC Approach & Numerical Problems', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 09:40 (0s to 580s)
('65d29b56-0030-3112-0000-000000000001', '65d29b56-0030-2112-0000-000000000001', 'VIDEO', 'Concepts of Total Revenue (TR), Average Revenue (AR) and Marginal Revenue (MR) (Receipts from Sale of Output, AR = Price, Marginal Revenue Addition to TR)', 'https://www.youtube.com/watch?v=fGGQ5m1MiPs&t=0s&end=580s', true, 1),

-- Topic 2: 09:40 to 19:40 (580s to 1180s)
('65d29b56-0030-3112-0000-000000000002', '65d29b56-0030-2112-0000-000000000002', 'VIDEO', 'Relationship between TR, AR and MR (Under Perfect Competition AR=MR=Price horizontal line vs Imperfect Markets AR & MR downward sloping, MR < AR)', 'https://www.youtube.com/watch?v=fGGQ5m1MiPs&t=580s&end=1180s', true, 1),

-- Topic 3: 19:40 to 29:20 (1180s to 1760s)
('65d29b56-0030-3112-0000-000000000003', '65d29b56-0030-2112-0000-000000000003', 'VIDEO', 'Concept and Meaning of Producer''s Equilibrium (Profit Maximisation, Gross vs Net Profit, Abnormal Profit, Normal Profit, Sub-Normal Losses & Output Decision)', 'https://www.youtube.com/watch?v=fGGQ5m1MiPs&t=1180s&end=1760s', true, 1),

-- Topic 4: 29:20 to 39:20 (1760s to 2360s)
('65d29b56-0030-3112-0000-000000000004', '65d29b56-0030-2112-0000-000000000004', 'VIDEO', 'Producer''s Equilibrium under MR-MC Approach & Numerical Problems (Condition 1: MR = MC, Condition 2: MC Cuts MR from Below / MC is Rising, Tabular Proof)', 'https://www.youtube.com/watch?v=fGGQ5m1MiPs&t=1760s&end=2360s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
