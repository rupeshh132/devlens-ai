-- V232__seed_class11_econ_ch08_intro_microeconomics_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 8: Introduction to Microeconomics & Central Problems
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (IWZRQ6-RjNI)
-- 100% Zero-Gap Continuous Timeline: 0s to 2840s (47m 20s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 8
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000008';

-- 2. Insert 4 Verified Master Subtopics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2108-0000-000000000001', '65d29b56-0030-1100-0000-000000000008', 'Economy & Microeconomics vs Macroeconomics', 1, true),
('65d29b56-0030-2108-0000-000000000002', '65d29b56-0030-1100-0000-000000000008', 'Positive vs Normative Economics & Central Problems of an Economy', 2, true),
('65d29b56-0030-2108-0000-000000000003', '65d29b56-0030-1100-0000-000000000008', 'Production Possibility Frontier (PPF/PPC): Features & Shifts', 3, true),
('65d29b56-0030-2108-0000-000000000004', '65d29b56-0030-1100-0000-000000000008', 'Opportunity Cost and Marginal Opportunity Cost (MOC / MRT)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 10:40 (0s to 640s)
('65d29b56-0030-3108-0000-000000000001', '65d29b56-0030-2108-0000-000000000001', 'VIDEO', 'Economy & Microeconomics vs Macroeconomics (Meaning of Economy, Scarcity, Unlimited Wants, Individual vs Aggregate Level Analysis)', 'https://www.youtube.com/watch?v=IWZRQ6-RjNI&t=0s&end=640s', true, 1),

-- Topic 2: 10:40 to 22:30 (640s to 1350s)
('65d29b56-0030-3108-0000-000000000002', '65d29b56-0030-2108-0000-000000000002', 'VIDEO', 'Positive vs Normative Economics & Central Problems of an Economy (What is vs What ought to be, What to Produce, How to Produce, For Whom to Produce)', 'https://www.youtube.com/watch?v=IWZRQ6-RjNI&t=640s&end=1350s', true, 1),

-- Topic 3: 22:30 to 35:20 (1350s to 2120s)
('65d29b56-0030-3108-0000-000000000003', '65d29b56-0030-2108-0000-000000000003', 'VIDEO', 'Production Possibility Frontier (PPF/PPC): Features & Shifts (Concave to Origin, Downward Sloping, Shifts due to Resources & Technological Change)', 'https://www.youtube.com/watch?v=IWZRQ6-RjNI&t=1350s&end=2120s', true, 1),

-- Topic 4: 35:20 to 47:20 (2120s to 2840s)
('65d29b56-0030-3108-0000-000000000004', '65d29b56-0030-2108-0000-000000000004', 'VIDEO', 'Opportunity Cost and Marginal Opportunity Cost (MOC / MRT - Next Best Alternative Foregone, Increasing Marginal Rate of Transformation)', 'https://www.youtube.com/watch?v=IWZRQ6-RjNI&t=2120s&end=2840s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
