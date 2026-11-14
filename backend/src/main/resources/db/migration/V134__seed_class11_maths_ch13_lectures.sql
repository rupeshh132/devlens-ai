-- V134__seed_class11_maths_ch13_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 13 (Statistics)
-- Video: PW Class 11 Science (Statistics | Full Chapter in ONE SHOT | Chapter 13 | Class 11 Maths | 4LxrzD-MRBk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9480s / 2h 38m 00s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Statistics)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000013';

-- 2. Insert 5 Verified Master Topics for Chapter 13 (Statistics)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2113-0000-000000000001', '65d29b56-2222-1100-0000-000000000013', 'Measures of Dispersion: Frequency Distributions, Concept of Dispersion & Range', 1, true),
('65d29b56-2222-2113-0000-000000000002', '65d29b56-2222-1100-0000-000000000013', 'Mean Deviation for Ungrouped Data (About Mean & About Median)', 2, true),
('65d29b56-2222-2113-0000-000000000003', '65d29b56-2222-1100-0000-000000000013', 'Mean Deviation for Grouped Data: Discrete & Continuous Frequency Distributions', 3, true),
('65d29b56-2222-2113-0000-000000000004', '65d29b56-2222-1100-0000-000000000013', 'Variance & Standard Deviation: Concepts, Formulae & Calculation for Ungrouped Data', 4, true),
('65d29b56-2222-2113-0000-000000000005', '65d29b56-2222-1100-0000-000000000013', 'Variance & Standard Deviation for Continuous Grouped Data, Short-cut Method & Comprehensive Practice', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3113-0000-000000000001', '65d29b56-2222-2113-0000-000000000001', 'VIDEO', 'Measures of Dispersion: Frequency Distributions, Concept of Dispersion & Range', 'https://www.youtube.com/watch?v=4LxrzD-MRBk&end=1882s', true, 1),
('65d29b56-2222-3113-0000-000000000002', '65d29b56-2222-2113-0000-000000000002', 'VIDEO', 'Mean Deviation for Ungrouped Data (About Mean & About Median)', 'https://www.youtube.com/watch?v=4LxrzD-MRBk&t=1882s&end=2601s', true, 1),
('65d29b56-2222-3113-0000-000000000003', '65d29b56-2222-2113-0000-000000000003', 'VIDEO', 'Mean Deviation for Grouped Data: Discrete & Continuous Frequency Distributions', 'https://www.youtube.com/watch?v=4LxrzD-MRBk&t=2601s&end=4160s', true, 1),
('65d29b56-2222-3113-0000-000000000004', '65d29b56-2222-2113-0000-000000000004', 'VIDEO', 'Variance & Standard Deviation: Concepts, Formulae & Calculation for Ungrouped Data', 'https://www.youtube.com/watch?v=4LxrzD-MRBk&t=4160s&end=4844s', true, 1),
('65d29b56-2222-3113-0000-000000000005', '65d29b56-2222-2113-0000-000000000005', 'VIDEO', 'Variance & Standard Deviation for Continuous Grouped Data, Short-cut Method & Comprehensive Practice', 'https://www.youtube.com/watch?v=4LxrzD-MRBk&t=4844s&end=9480s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
