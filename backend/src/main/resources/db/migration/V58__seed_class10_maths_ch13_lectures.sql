-- V58__seed_class10_maths_ch13_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 13 (Statistics)
-- Video: Ritik Mishra (Statistics One Shot 🔥 | BPRM1J8QCb8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7851s)

-- 1. Remove old placeholder topics & content items for Chapter 13
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000013';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2013-0000-000000000001', '65d29b56-2222-1000-0000-000000000013', 'Introduction to Statistics & Measures of Central Tendency for Raw Data', 1, true),
('65d29b56-2222-2013-0000-000000000002', '65d29b56-2222-1000-0000-000000000013', 'Arithmetic Mean of Grouped Data: Direct, Assumed Mean & Step Deviation Methods', 2, true),
('65d29b56-2222-2013-0000-000000000003', '65d29b56-2222-1000-0000-000000000013', 'Median of Grouped Data & Missing Frequency Problems', 3, true),
('65d29b56-2222-2013-0000-000000000004', '65d29b56-2222-1000-0000-000000000013', 'Mode of Grouped Data & The Empirical Relationship (3 Median = Mode + 2 Mean)', 4, true),
('65d29b56-2222-2013-0000-000000000005', '65d29b56-2222-1000-0000-000000000013', 'CBSE Board Exam PYQs, Conceptual MCQs & Chapter Wrap-up', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3013-0000-000000000001', '65d29b56-2222-2013-0000-000000000001', 'VIDEO', 'Introduction to Statistics & Measures of Central Tendency for Raw Data', 'https://www.youtube.com/watch?v=BPRM1J8QCb8&end=1033s', true, 1),
('65d29b56-2222-3013-0000-000000000002', '65d29b56-2222-2013-0000-000000000002', 'VIDEO', 'Arithmetic Mean of Grouped Data: Direct, Assumed Mean & Step Deviation Methods', 'https://www.youtube.com/watch?v=BPRM1J8QCb8&t=1033s&end=4220s', true, 1),
('65d29b56-2222-3013-0000-000000000003', '65d29b56-2222-2013-0000-000000000003', 'VIDEO', 'Median of Grouped Data & Missing Frequency Problems', 'https://www.youtube.com/watch?v=BPRM1J8QCb8&t=4220s&end=5580s', true, 1),
('65d29b56-2222-3013-0000-000000000004', '65d29b56-2222-2013-0000-000000000004', 'VIDEO', 'Mode of Grouped Data & The Empirical Relationship (3 Median = Mode + 2 Mean)', 'https://www.youtube.com/watch?v=BPRM1J8QCb8&t=5580s&end=6308s', true, 1),
('65d29b56-2222-3013-0000-000000000005', '65d29b56-2222-2013-0000-000000000005', 'VIDEO', 'CBSE Board Exam PYQs, Conceptual MCQs & Chapter Wrap-up', 'https://www.youtube.com/watch?v=BPRM1J8QCb8&t=6308s&end=7851s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
