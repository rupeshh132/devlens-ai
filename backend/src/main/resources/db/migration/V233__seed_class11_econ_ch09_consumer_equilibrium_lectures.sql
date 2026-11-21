-- V233__seed_class11_econ_ch09_consumer_equilibrium_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 9: Consumer's Equilibrium (Utility & Indifference Curve)
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (ri9ket58Psg)
-- 100% Zero-Gap Continuous Timeline: 0s to 3690s (01:01:30, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 9
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000009';

-- 2. Insert 4 Verified Master Subtopics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2109-0000-000000000001', '65d29b56-0030-1100-0000-000000000009', 'Concepts of Total Utility, Marginal Utility & Law of Diminishing Marginal Utility', 1, true),
('65d29b56-0030-2109-0000-000000000002', '65d29b56-0030-1100-0000-000000000009', 'Consumer''s Equilibrium: Single and Two Commodity Marginal Utility Analysis', 2, true),
('65d29b56-0030-2109-0000-000000000003', '65d29b56-0030-1100-0000-000000000009', 'Consumer''s Budget: Budget Set, Budget Line and Budget Line Shifts', 3, true),
('65d29b56-0030-2109-0000-000000000004', '65d29b56-0030-1100-0000-000000000009', 'Indifference Curve Analysis, MRS & Conditions of Consumer''s Equilibrium', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 14:40 (0s to 880s)
('65d29b56-0030-3109-0000-000000000001', '65d29b56-0030-2109-0000-000000000001', 'VIDEO', 'Concepts of Total Utility, Marginal Utility & Law of Diminishing Marginal Utility (Utils, TU-MU Relationship, Point of Satiety & Psychological Foundations)', 'https://www.youtube.com/watch?v=ri9ket58Psg&t=0s&end=880s', true, 1),

-- Topic 2: 14:40 to 30:40 (880s to 1840s)
('65d29b56-0030-3109-0000-000000000002', '65d29b56-0030-2109-0000-000000000002', 'VIDEO', 'Consumer''s Equilibrium: Single and Two Commodity Marginal Utility Analysis (MUx/Px = MUm, Law of Equi-Marginal Utility, Equilibrium Adjustments)', 'https://www.youtube.com/watch?v=ri9ket58Psg&t=880s&end=1840s', true, 1),

-- Topic 3: 30:40 to 45:20 (1840s to 2720s)
('65d29b56-0030-3109-0000-000000000003', '65d29b56-0030-2109-0000-000000000003', 'VIDEO', 'Consumer''s Budget: Budget Set, Budget Line and Budget Line Shifts (Px.X + Py.Y <= M, Slope of Budget Line Px/Py, Income & Price Change Shifts)', 'https://www.youtube.com/watch?v=ri9ket58Psg&t=1840s&end=2720s', true, 1),

-- Topic 4: 45:20 to 01:01:30 (2720s to 3690s)
('65d29b56-0030-3109-0000-000000000004', '65d29b56-0030-2109-0000-000000000004', 'VIDEO', 'Indifference Curve Analysis, MRS & Conditions of Consumer''s Equilibrium (Convexity, Non-Intersecting, Higher IC = Higher Utility, Tangency MRSxy = Px/Py)', 'https://www.youtube.com/watch?v=ri9ket58Psg&t=2720s&end=3690s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
