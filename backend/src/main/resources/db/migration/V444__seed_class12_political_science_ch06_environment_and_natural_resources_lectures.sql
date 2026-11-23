-- V444__seed_class12_political_science_ch06_environment_and_natural_resources_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 6 (Environment and Natural Resources)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (p3Tm3SoEyX0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2905s)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Environment and Natural Resources)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000006';

-- 2. Insert 4 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2206-0000-000000000001', '65d29b56-0028-1200-0000-000000000006', 'Environmental Concerns in Global Politics & Protection of Global Commons (Antarctica, Atmosphere, Oceans)', 1, true),
('65d29b56-0028-2206-0000-000000000002', '65d29b56-0028-1200-0000-000000000006', 'Common But Differentiated Responsibilities (CBDR): Rio Earth Summit 1992, Kyoto Protocol & Climate Treaties', 2, true),
('65d29b56-0028-2206-0000-000000000003', '65d29b56-0028-1200-0000-000000000006', 'India''s Stand on Global Environmental Governance, Energy Conservation Acts & Grassroots Movements', 3, true),
('65d29b56-0028-2206-0000-000000000004', '65d29b56-0028-1200-0000-000000000006', 'Resource Geopolitics: Petroleum Oil, Clean Water Conflicts & Rights and Movements of Indigenous Peoples', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3206-0000-000000000001', '65d29b56-0028-2206-0000-000000000001', 'VIDEO', 'Environmental Concerns in Global Politics & Protection of Global Commons (Antarctica, Atmosphere, Oceans)', 'https://www.youtube.com/watch?v=p3Tm3SoEyX0&end=720s', true, 1),
('65d29b56-0028-3206-0000-000000000002', '65d29b56-0028-2206-0000-000000000002', 'VIDEO', 'Common But Differentiated Responsibilities (CBDR): Rio Earth Summit 1992, Kyoto Protocol & Climate Treaties', 'https://www.youtube.com/watch?v=p3Tm3SoEyX0&t=720s&end=1450s', true, 1),
('65d29b56-0028-3206-0000-000000000003', '65d29b56-0028-2206-0000-000000000003', 'VIDEO', 'India''s Stand on Global Environmental Governance, Energy Conservation Acts & Grassroots Movements', 'https://www.youtube.com/watch?v=p3Tm3SoEyX0&t=1450s&end=2170s', true, 1),
('65d29b56-0028-3206-0000-000000000004', '65d29b56-0028-2206-0000-000000000004', 'VIDEO', 'Resource Geopolitics: Petroleum Oil, Clean Water Conflicts & Rights and Movements of Indigenous Peoples', 'https://www.youtube.com/watch?v=p3Tm3SoEyX0&t=2170s&end=2905s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
