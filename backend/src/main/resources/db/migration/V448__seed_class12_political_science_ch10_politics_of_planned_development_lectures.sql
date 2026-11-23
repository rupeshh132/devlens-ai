-- V448__seed_class12_political_science_ch10_politics_of_planned_development_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 10 (Politics of Planned Development)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (SaN7pYrKNog)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1705s)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Politics of Planned Development)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000010';

-- 2. Insert 4 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2210-0000-000000000001', '65d29b56-0028-1200-0000-000000000010', 'Ideas of Development: Left vs Right Political Visions, Planning Commission & Modernization Paradigms', 1, true),
('65d29b56-0028-2210-0000-000000000002', '65d29b56-0028-1200-0000-000000000010', 'Early Initiatives: First Five Year Plan (K.N. Raj & Agriculture) vs Second Five Year Plan (P.C. Mahalanobis)', 2, true),
('65d29b56-0028-2210-0000-000000000003', '65d29b56-0028-1200-0000-000000000010', 'Major Controversies: Agriculture vs Industry, Public vs Private Sectors & Foundations of Mixed Economy', 3, true),
('65d29b56-0028-2210-0000-000000000004', '65d29b56-0028-1200-0000-000000000010', 'Land Reforms, Food Crisis, Green Revolution & Evolution from Planning Commission to NITI Aayog', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3210-0000-000000000001', '65d29b56-0028-2210-0000-000000000001', 'VIDEO', 'Ideas of Development: Left vs Right Political Visions, Planning Commission & Modernization Paradigms', 'https://www.youtube.com/watch?v=SaN7pYrKNog&end=420s', true, 1),
('65d29b56-0028-3210-0000-000000000002', '65d29b56-0028-2210-0000-000000000002', 'VIDEO', 'Early Initiatives: First Five Year Plan (K.N. Raj & Agriculture) vs Second Five Year Plan (P.C. Mahalanobis)', 'https://www.youtube.com/watch?v=SaN7pYrKNog&t=420s&end=850s', true, 1),
('65d29b56-0028-3210-0000-000000000003', '65d29b56-0028-2210-0000-000000000003', 'VIDEO', 'Major Controversies: Agriculture vs Industry, Public vs Private Sectors & Foundations of Mixed Economy', 'https://www.youtube.com/watch?v=SaN7pYrKNog&t=850s&end=1270s', true, 1),
('65d29b56-0028-3210-0000-000000000004', '65d29b56-0028-2210-0000-000000000004', 'VIDEO', 'Land Reforms, Food Crisis, Green Revolution & Evolution from Planning Commission to NITI Aayog', 'https://www.youtube.com/watch?v=SaN7pYrKNog&t=1270s&end=1705s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
