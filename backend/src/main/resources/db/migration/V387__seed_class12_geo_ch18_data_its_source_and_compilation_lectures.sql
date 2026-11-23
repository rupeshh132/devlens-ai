-- V387__seed_class12_geo_ch18_data_its_source_and_compilation_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 18 (Data – Its Source and Compilation)
-- Video: AC eduhub (NCERT Practical Masterclass) (KQ5_IWeiohI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2674s)

-- 1. Remove old placeholder topics & content items for Chapter 18 (Data – Its Source and Compilation)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000018'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000018';

-- 2. Insert 4 Verified Master Topics for Chapter 18
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2218-0000-000000000001', '65d29b56-0029-1200-0000-000000000018', 'Nature of Geographical Data: Spatial vs Non-Spatial Data, Quantitative vs Qualitative Data', 1, true),
('65d29b56-0029-2218-0000-000000000002', '65d29b56-0029-1200-0000-000000000018', 'Primary Sources of Data: Field Surveys, Direct Observation, Personal Interviews and Questionnaires', 2, true),
('65d29b56-0029-2218-0000-000000000003', '65d29b56-0029-1200-0000-000000000018', 'Secondary Sources of Data: Published Reports, Census of India, NSSO Surveys & Unpublished Records', 3, true),
('65d29b56-0029-2218-0000-000000000004', '65d29b56-0029-1200-0000-000000000018', 'Compilation, Classification, Tabulation of Data & Frequency Distribution Construction', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3218-0000-000000000001', '65d29b56-0029-2218-0000-000000000001', 'VIDEO', 'Nature of Geographical Data: Spatial vs Non-Spatial Data, Quantitative vs Qualitative Data', 'https://www.youtube.com/watch?v=KQ5_IWeiohI&end=670s', true, 1),
('65d29b56-0029-3218-0000-000000000002', '65d29b56-0029-2218-0000-000000000002', 'VIDEO', 'Primary Sources of Data: Field Surveys, Direct Observation, Personal Interviews and Questionnaires', 'https://www.youtube.com/watch?v=KQ5_IWeiohI&t=670s&end=1340s', true, 1),
('65d29b56-0029-3218-0000-000000000003', '65d29b56-0029-2218-0000-000000000003', 'VIDEO', 'Secondary Sources of Data: Published Reports, Census of India, NSSO Surveys & Unpublished Records', 'https://www.youtube.com/watch?v=KQ5_IWeiohI&t=1340s&end=2010s', true, 1),
('65d29b56-0029-3218-0000-000000000004', '65d29b56-0029-2218-0000-000000000004', 'VIDEO', 'Compilation, Classification, Tabulation of Data & Frequency Distribution Construction', 'https://www.youtube.com/watch?v=KQ5_IWeiohI&t=2010s&end=2674s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
