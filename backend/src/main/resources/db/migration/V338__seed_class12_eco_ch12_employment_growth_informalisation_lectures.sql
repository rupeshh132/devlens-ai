-- V338__seed_class12_eco_ch12_employment_growth_informalisation_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 12 (Employment: Growth, Informalisation and Other Issues)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (Z-NFUrSdCGg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2650s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Employment: Growth, Informalisation and Other Issues)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000012';

-- 2. Insert 4 Verified Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2212-0000-000000000001', '65d29b56-0030-1200-0000-000000000012', 'Basic Concepts: Worker, Labour Force, Work Force & Worker-Population Ratio (WPR) Analysis across Rural/Urban Areas', 1, true),
('65d29b56-0030-2212-0000-000000000002', '65d29b56-0030-1200-0000-000000000012', 'Employment Distribution by Sector and Status: Self-Employed vs Regular Salaried vs Casual Wage Workers', 2, true),
('65d29b56-0030-2212-0000-000000000003', '65d29b56-0030-1200-0000-000000000012', 'Changing Structure of Employment: Jobless Growth, Casualisation & Informalisation of Workforce (Formal vs Informal Sector)', 3, true),
('65d29b56-0030-2212-0000-000000000004', '65d29b56-0030-1200-0000-000000000012', 'Types of Unemployment (Disguised, Seasonal, Open), Causes, Economic Consequences & Government Employment Generation Programs', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3212-0000-000000000001', '65d29b56-0030-2212-0000-000000000001', 'VIDEO', 'Basic Concepts: Worker, Labour Force, Work Force & Worker-Population Ratio (WPR) Analysis across Rural/Urban Areas', 'https://www.youtube.com/watch?v=Z-NFUrSdCGg&end=650s', true, 1),
('65d29b56-0030-3212-0000-000000000002', '65d29b56-0030-2212-0000-000000000002', 'VIDEO', 'Employment Distribution by Sector and Status: Self-Employed vs Regular Salaried vs Casual Wage Workers', 'https://www.youtube.com/watch?v=Z-NFUrSdCGg&t=650s&end=1320s', true, 1),
('65d29b56-0030-3212-0000-000000000003', '65d29b56-0030-2212-0000-000000000003', 'VIDEO', 'Changing Structure of Employment: Jobless Growth, Casualisation & Informalisation of Workforce (Formal vs Informal Sector)', 'https://www.youtube.com/watch?v=Z-NFUrSdCGg&t=1320s&end=2000s', true, 1),
('65d29b56-0030-3212-0000-000000000004', '65d29b56-0030-2212-0000-000000000004', 'VIDEO', 'Types of Unemployment (Disguised, Seasonal, Open), Causes, Economic Consequences & Government Employment Generation Programs', 'https://www.youtube.com/watch?v=Z-NFUrSdCGg&t=2000s&end=2650s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
