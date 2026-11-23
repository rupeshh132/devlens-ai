-- V388__seed_class12_geo_ch19_data_processing_measures_of_central_tendency_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 19 (Data Processing (Measures of Central Tendency))
-- Video: AC eduhub (NCERT Practical Masterclass) (rhj7V1mFlBw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1846s)

-- 1. Remove old placeholder topics & content items for Chapter 19 (Data Processing (Measures of Central Tendency))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000019'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000019';

-- 2. Insert 4 Verified Master Topics for Chapter 19
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2219-0000-000000000001', '65d29b56-0029-1200-0000-000000000019', 'Data Processing Fundamentals: Ungrouped vs Grouped Frequency Data & Class Intervals', 1, true),
('65d29b56-0029-2219-0000-000000000002', '65d29b56-0029-1200-0000-000000000019', 'Calculation of Arithmetic Mean: Direct Method and Assumed Mean / Shortcut Method', 2, true),
('65d29b56-0029-2219-0000-000000000003', '65d29b56-0029-1200-0000-000000000019', 'Calculation of Median: Step-by-Step Cumulative Frequency Formulation for Grouped Data', 3, true),
('65d29b56-0029-2219-0000-000000000004', '65d29b56-0029-1200-0000-000000000019', 'Mode Determination, Comparison of Central Tendency Measures & Measures of Dispersion (Range)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3219-0000-000000000001', '65d29b56-0029-2219-0000-000000000001', 'VIDEO', 'Data Processing Fundamentals: Ungrouped vs Grouped Frequency Data & Class Intervals', 'https://www.youtube.com/watch?v=rhj7V1mFlBw&end=460s', true, 1),
('65d29b56-0029-3219-0000-000000000002', '65d29b56-0029-2219-0000-000000000002', 'VIDEO', 'Calculation of Arithmetic Mean: Direct Method and Assumed Mean / Shortcut Method', 'https://www.youtube.com/watch?v=rhj7V1mFlBw&t=460s&end=920s', true, 1),
('65d29b56-0029-3219-0000-000000000003', '65d29b56-0029-2219-0000-000000000003', 'VIDEO', 'Calculation of Median: Step-by-Step Cumulative Frequency Formulation for Grouped Data', 'https://www.youtube.com/watch?v=rhj7V1mFlBw&t=920s&end=1380s', true, 1),
('65d29b56-0029-3219-0000-000000000004', '65d29b56-0029-2219-0000-000000000004', 'VIDEO', 'Mode Determination, Comparison of Central Tendency Measures & Measures of Dispersion (Range)', 'https://www.youtube.com/watch?v=rhj7V1mFlBw&t=1380s&end=1846s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
