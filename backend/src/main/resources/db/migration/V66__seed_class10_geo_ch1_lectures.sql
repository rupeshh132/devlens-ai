-- V66__seed_class10_geo_ch1_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Geography Chapter 1 / Overall SST Chapter 6 (Resources and Development)
-- Video: Warrior 2026 (Resources and Development One Shot: FULL CHAPTER | FwXyG8lFtss)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5964s / 01h 39m 24s)

-- 1. Remove old placeholder topics & content items for Geography Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000006';

-- 2. Insert 5 NCERT-Aligned Master Topics for Geography Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2006-0000-000000000001', '65d29b56-3333-1000-0000-000000000006', 'What are Resources, Classification & Sustainable Development (Rio Summit & Agenda 21)', 1, true),
('65d29b56-3333-2006-0000-000000000002', '65d29b56-3333-1000-0000-000000000006', 'Resource Planning in India, Regional Disparities & Conservation Philosophy', 2, true),
('65d29b56-3333-2006-0000-000000000003', '65d29b56-3333-1000-0000-000000000006', 'Land Resources, Land Utilisation Patterns & Land Degradation and Conservation', 3, true),
('65d29b56-3333-2006-0000-000000000004', '65d29b56-3333-1000-0000-000000000006', 'Soil as a Living Resource & Classification of Indian Soils', 4, true),
('65d29b56-3333-2006-0000-000000000005', '65d29b56-3333-1000-0000-000000000006', 'Soil Erosion Types, Soil Conservation Measures & Board Exam Questions', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 5964s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3006-0000-000000000001', '65d29b56-3333-2006-0000-000000000001', 'VIDEO', 'What are Resources, Classification & Sustainable Development (Rio Summit & Agenda 21)', 'https://www.youtube.com/watch?v=FwXyG8lFtss&end=1768s', true, 1),
('65d29b56-3333-3006-0000-000000000002', '65d29b56-3333-2006-0000-000000000002', 'VIDEO', 'Resource Planning in India, Regional Disparities & Conservation Philosophy', 'https://www.youtube.com/watch?v=FwXyG8lFtss&t=1768s&end=2260s', true, 1),
('65d29b56-3333-3006-0000-000000000003', '65d29b56-3333-2006-0000-000000000003', 'VIDEO', 'Land Resources, Land Utilisation Patterns & Land Degradation and Conservation', 'https://www.youtube.com/watch?v=FwXyG8lFtss&t=2260s&end=3810s', true, 1),
('65d29b56-3333-3006-0000-000000000004', '65d29b56-3333-2006-0000-000000000004', 'VIDEO', 'Soil as a Living Resource & Classification of Indian Soils', 'https://www.youtube.com/watch?v=FwXyG8lFtss&t=3810s&end=5468s', true, 1),
('65d29b56-3333-3006-0000-000000000005', '65d29b56-3333-2006-0000-000000000005', 'VIDEO', 'Soil Erosion Types, Soil Conservation Measures & Board Exam Questions', 'https://www.youtube.com/watch?v=FwXyG8lFtss&t=5468s&end=5964s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
