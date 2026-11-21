-- V227__seed_class11_econ_ch03_organisation_of_data_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 3: Organisation of Data
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (zXDB8qDqVMo)
-- 100% Zero-Gap Continuous Timeline: 0s to 2795s (46m 35s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000003';

-- 2. Insert 4 Verified Master Subtopics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2103-0000-000000000001', '65d29b56-0030-1100-0000-000000000003', 'Classification of Data: Meaning, Objectives and Types', 1, true),
('65d29b56-0030-2103-0000-000000000002', '65d29b56-0030-1100-0000-000000000003', 'Variables and Raw Data: Discrete vs Continuous Variables', 2, true),
('65d29b56-0030-2103-0000-000000000003', '65d29b56-0030-1100-0000-000000000003', 'Formation of Frequency Distribution & Series Types', 3, true),
('65d29b56-0030-2103-0000-000000000004', '65d29b56-0030-1100-0000-000000000003', 'Class Intervals, Cumulative Frequency & Bivariate Distribution', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 10:50 (0s to 650s)
('65d29b56-0030-3103-0000-000000000001', '65d29b56-0030-2103-0000-000000000001', 'VIDEO', 'Classification of Data: Meaning, Objectives and Types (Chronological, Spatial, Qualitative & Quantitative Classification)', 'https://www.youtube.com/watch?v=zXDB8qDqVMo&t=0s&end=650s', true, 1),

-- Topic 2: 10:50 to 22:00 (650s to 1320s)
('65d29b56-0030-3103-0000-000000000002', '65d29b56-0030-2103-0000-000000000002', 'VIDEO', 'Variables and Raw Data: Discrete vs Continuous Variables (Raw Data Conversion, Discrete vs Continuous Attributes, Notation & Tally Marking)', 'https://www.youtube.com/watch?v=zXDB8qDqVMo&t=650s&end=1320s', true, 1),

-- Topic 3: 22:00 to 34:10 (1320s to 2050s)
('65d29b56-0030-3103-0000-000000000003', '65d29b56-0030-2103-0000-000000000003', 'VIDEO', 'Formation of Frequency Distribution & Series Types (Individual Series, Discrete Series, Frequency Array & Continuous Series)', 'https://www.youtube.com/watch?v=zXDB8qDqVMo&t=1320s&end=2050s', true, 1),

-- Topic 4: 34:10 to 46:35 (2050s to 2795s)
('65d29b56-0030-3103-0000-000000000004', '65d29b56-0030-2103-0000-000000000004', 'VIDEO', 'Class Intervals, Cumulative Frequency & Bivariate Distribution (Exclusive vs Inclusive Classes, Open-Ended Series, Less-Than & More-Than Ogive Bases, Bivariate Tables)', 'https://www.youtube.com/watch?v=zXDB8qDqVMo&t=2050s&end=2795s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
