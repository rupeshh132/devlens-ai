-- V454__seed_class12_political_science_ch16_project_work_and_viva_voce_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 16 (Project Work, Internal Assessment & Viva Voce (20 Marks Evaluation))
-- Video: Adda247 Humanities Class 12 (Class 12 Political Science Masterclass) (JLgZHIeZEtI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 497s)

-- 1. Remove old placeholder topics & content items for Chapter 16 (Project Work, Internal Assessment & Viva Voce (20 Marks Evaluation))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000016';

-- 2. Insert 4 Verified Master Topics for Chapter 16
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2216-0000-000000000001', '65d29b56-0028-1200-0000-000000000016', 'CBSE Class 12 Political Science Project Blueprint & 20 Marks Internal Assessment Scoring Scheme', 1, true),
('65d29b56-0028-2216-0000-000000000002', '65d29b56-0028-1200-0000-000000000016', 'Project Topic Selection (Contemporary World / Indian Politics), Primary & Secondary Data Collection Guidelines', 2, true),
('65d29b56-0028-2216-0000-000000000003', '65d29b56-0028-1200-0000-000000000016', 'Project Portfolio File Structuring: Objectives, Analytical Content, Research Methodology & Bibliography', 3, true),
('65d29b56-0028-2216-0000-000000000004', '65d29b56-0028-1200-0000-000000000016', 'High-Frequency Viva Voce Master Questions & Confident Presentation Strategies to Score Full 20/20 Marks', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3216-0000-000000000001', '65d29b56-0028-2216-0000-000000000001', 'VIDEO', 'CBSE Class 12 Political Science Project Blueprint & 20 Marks Internal Assessment Scoring Scheme', 'https://www.youtube.com/watch?v=JLgZHIeZEtI&end=120s', true, 1),
('65d29b56-0028-3216-0000-000000000002', '65d29b56-0028-2216-0000-000000000002', 'VIDEO', 'Project Topic Selection (Contemporary World / Indian Politics), Primary & Secondary Data Collection Guidelines', 'https://www.youtube.com/watch?v=JLgZHIeZEtI&t=120s&end=240s', true, 1),
('65d29b56-0028-3216-0000-000000000003', '65d29b56-0028-2216-0000-000000000003', 'VIDEO', 'Project Portfolio File Structuring: Objectives, Analytical Content, Research Methodology & Bibliography', 'https://www.youtube.com/watch?v=JLgZHIeZEtI&t=240s&end=360s', true, 1),
('65d29b56-0028-3216-0000-000000000004', '65d29b56-0028-2216-0000-000000000004', 'VIDEO', 'High-Frequency Viva Voce Master Questions & Confident Presentation Strategies to Score Full 20/20 Marks', 'https://www.youtube.com/watch?v=JLgZHIeZEtI&t=360s&end=497s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
