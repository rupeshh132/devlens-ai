-- V226__seed_class11_econ_ch02_collection_of_data_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 2: Collection of Data
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (ov-fKr07hOk)
-- 100% Zero-Gap Continuous Timeline: 0s to 3820s (01:03:40, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000002';

-- 2. Insert 4 Verified Master Subtopics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2102-0000-000000000001', '65d29b56-0030-1100-0000-000000000002', 'Sources of Data: Primary vs Secondary Data', 1, true),
('65d29b56-0030-2102-0000-000000000002', '65d29b56-0030-1100-0000-000000000002', 'Methods of Collecting Primary Data & Questionnaire Design', 2, true),
('65d29b56-0030-2102-0000-000000000003', '65d29b56-0030-1100-0000-000000000002', 'Census and Sampling Methods of Data Collection', 3, true),
('65d29b56-0030-2102-0000-000000000004', '65d29b56-0030-1100-0000-000000000002', 'Sources of Secondary Data: Census of India & NSSO', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 14:40 (0s to 880s)
('65d29b56-0030-3102-0000-000000000001', '65d29b56-0030-2102-0000-000000000001', 'VIDEO', 'Sources of Data: Primary vs Secondary Data (Internal vs External Sources, First-Hand Investigation, Difference in Originality & Cost)', 'https://www.youtube.com/watch?v=ov-fKr07hOk&t=0s&end=880s', true, 1),

-- Topic 2: 14:40 to 32:00 (880s to 1920s)
('65d29b56-0030-3102-0000-000000000002', '65d29b56-0030-2102-0000-000000000002', 'VIDEO', 'Methods of Collecting Primary Data & Questionnaire Design (Direct Personal Interview, Indirect Oral Investigation, Telephonic Survey & Pilot Survey)', 'https://www.youtube.com/watch?v=ov-fKr07hOk&t=880s&end=1920s', true, 1),

-- Topic 3: 32:00 to 49:40 (1920s to 2980s)
('65d29b56-0030-3102-0000-000000000003', '65d29b56-0030-2102-0000-000000000003', 'VIDEO', 'Census and Sampling Methods of Data Collection (Random vs Non-Random Sampling, Sampling Errors, Non-Sampling Errors & Representative Sample)', 'https://www.youtube.com/watch?v=ov-fKr07hOk&t=1920s&end=2980s', true, 1),

-- Topic 4: 49:40 to 01:03:40 (2980s to 3820s)
('65d29b56-0030-3102-0000-000000000004', '65d29b56-0030-2102-0000-000000000004', 'VIDEO', 'Sources of Secondary Data: Census of India & NSSO (Published & Unpublished Sources, National Sample Survey Organisation, Reliability Checks)', 'https://www.youtube.com/watch?v=ov-fKr07hOk&t=2980s&end=3820s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
