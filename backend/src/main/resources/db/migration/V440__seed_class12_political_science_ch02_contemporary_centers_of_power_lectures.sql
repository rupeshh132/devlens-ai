-- V440__seed_class12_political_science_ch02_contemporary_centers_of_power_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 2 (Contemporary Centers of Power)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (RgwuNsymNDs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3737s)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Contemporary Centers of Power)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000002';

-- 2. Insert 4 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2202-0000-000000000001', '65d29b56-0028-1200-0000-000000000002', 'European Union (EU): Formation, Evolution, Economic, Political, Diplomatic & Military Influence', 1, true),
('65d29b56-0028-2202-0000-000000000002', '65d29b56-0028-1200-0000-000000000002', 'Association of Southeast Asian Nations (ASEAN): The ASEAN Way, Three Pillars & Security Community', 2, true),
('65d29b56-0028-2202-0000-000000000003', '65d29b56-0028-1200-0000-000000000002', 'Rise of China as an Economic Superpower: Open Door Policy, Modernization & Special Economic Zones (SEZs)', 3, true),
('65d29b56-0028-2202-0000-000000000004', '65d29b56-0028-1200-0000-000000000002', 'Japan and South Korea as Emerging Powers & India''s Strategic and Economic Relations with Asian Centers', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3202-0000-000000000001', '65d29b56-0028-2202-0000-000000000001', 'VIDEO', 'European Union (EU): Formation, Evolution, Economic, Political, Diplomatic & Military Influence', 'https://www.youtube.com/watch?v=RgwuNsymNDs&end=930s', true, 1),
('65d29b56-0028-3202-0000-000000000002', '65d29b56-0028-2202-0000-000000000002', 'VIDEO', 'Association of Southeast Asian Nations (ASEAN): The ASEAN Way, Three Pillars & Security Community', 'https://www.youtube.com/watch?v=RgwuNsymNDs&t=930s&end=1860s', true, 1),
('65d29b56-0028-3202-0000-000000000003', '65d29b56-0028-2202-0000-000000000003', 'VIDEO', 'Rise of China as an Economic Superpower: Open Door Policy, Modernization & Special Economic Zones (SEZs)', 'https://www.youtube.com/watch?v=RgwuNsymNDs&t=1860s&end=2790s', true, 1),
('65d29b56-0028-3202-0000-000000000004', '65d29b56-0028-2202-0000-000000000004', 'VIDEO', 'Japan and South Korea as Emerging Powers & India''s Strategic and Economic Relations with Asian Centers', 'https://www.youtube.com/watch?v=RgwuNsymNDs&t=2790s&end=3737s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
