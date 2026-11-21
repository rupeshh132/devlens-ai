-- V229__seed_class11_econ_ch05_central_tendency_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 5: Measures of Central Tendency (Mean, Median & Mode)
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (L74zHGhJ9Nk)
-- 100% Zero-Gap Continuous Timeline: 0s to 4125s (01:08:45, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000005';

-- 2. Insert 4 Verified Master Subtopics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2105-0000-000000000001', '65d29b56-0030-1100-0000-000000000005', 'Concept of Central Tendency & Arithmetic Mean Overview', 1, true),
('65d29b56-0030-2105-0000-000000000002', '65d29b56-0030-1100-0000-000000000005', 'Calculation of Arithmetic Mean: Individual Series', 2, true),
('65d29b56-0030-2105-0000-000000000003', '65d29b56-0030-1100-0000-000000000005', 'Calculation of Arithmetic Mean: Discrete Series', 3, true),
('65d29b56-0030-2105-0000-000000000004', '65d29b56-0030-1100-0000-000000000005', 'Continuous Series, Missing Values, Combined & Weighted Mean', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 06:54 (0s to 414s)
('65d29b56-0030-3105-0000-000000000001', '65d29b56-0030-2105-0000-000000000001', 'VIDEO', 'Concept of Central Tendency & Arithmetic Mean Overview (Meaning of Average, Objectives, Desirable Qualities of Good Average & Simple vs Weighted Mean)', 'https://www.youtube.com/watch?v=L74zHGhJ9Nk&t=0s&end=414s', true, 1),

-- Topic 2: 06:54 to 27:44 (414s to 1664s)
('65d29b56-0030-3105-0000-000000000002', '65d29b56-0030-2105-0000-000000000002', 'VIDEO', 'Calculation of Arithmetic Mean: Individual Series (Direct Method, Assumed Mean Method, Deviation Properties & Solved Examples)', 'https://www.youtube.com/watch?v=L74zHGhJ9Nk&t=414s&end=1664s', true, 1),

-- Topic 3: 27:44 to 42:19 (1664s to 2539s)
('65d29b56-0030-3105-0000-000000000003', '65d29b56-0030-2105-0000-000000000003', 'VIDEO', 'Calculation of Arithmetic Mean: Discrete Series (Direct Method, Short-cut Method, Step-Deviation Method with Common Factor & Practical Numericals)', 'https://www.youtube.com/watch?v=L74zHGhJ9Nk&t=1664s&end=2539s', true, 1),

-- Topic 4: 42:19 to 01:08:45 (2539s to 4125s)
('65d29b56-0030-3105-0000-000000000004', '65d29b56-0030-2105-0000-000000000004', 'VIDEO', 'Continuous Series, Missing Values, Combined & Weighted Mean (Class Mid-Points, Finding Missing Frequency, Correcting Inaccurate Values & Weighted Average Formula)', 'https://www.youtube.com/watch?v=L74zHGhJ9Nk&t=2539s&end=4125s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
