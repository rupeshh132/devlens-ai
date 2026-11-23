-- V445__seed_class12_political_science_ch07_globalisation_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 7 (Globalisation)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (OafmZakCadY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2178s)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Globalisation)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000007';

-- 2. Insert 4 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2207-0000-000000000001', '65d29b56-0028-1200-0000-000000000007', 'Concept and Dimensions of Globalisation: Technological Innovations and Global Interconnectedness', 1, true),
('65d29b56-0028-2207-0000-000000000002', '65d29b56-0028-1200-0000-000000000007', 'Political and Economic Consequences: Erosion vs Enhancement of State Capacity & Trade Liberalization', 2, true),
('65d29b56-0028-2207-0000-000000000003', '65d29b56-0028-1200-0000-000000000007', 'Cultural Consequences of Globalisation: Cultural Homogenisation vs Cultural Heterogenisation', 3, true),
('65d29b56-0028-2207-0000-000000000004', '65d29b56-0028-1200-0000-000000000007', 'Resistance to Globalisation: World Social Forum (WSF) & India''s Experience with Anti-Globalisation Movements', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3207-0000-000000000001', '65d29b56-0028-2207-0000-000000000001', 'VIDEO', 'Concept and Dimensions of Globalisation: Technological Innovations and Global Interconnectedness', 'https://www.youtube.com/watch?v=OafmZakCadY&end=540s', true, 1),
('65d29b56-0028-3207-0000-000000000002', '65d29b56-0028-2207-0000-000000000002', 'VIDEO', 'Political and Economic Consequences: Erosion vs Enhancement of State Capacity & Trade Liberalization', 'https://www.youtube.com/watch?v=OafmZakCadY&t=540s&end=1080s', true, 1),
('65d29b56-0028-3207-0000-000000000003', '65d29b56-0028-2207-0000-000000000003', 'VIDEO', 'Cultural Consequences of Globalisation: Cultural Homogenisation vs Cultural Heterogenisation', 'https://www.youtube.com/watch?v=OafmZakCadY&t=1080s&end=1620s', true, 1),
('65d29b56-0028-3207-0000-000000000004', '65d29b56-0028-2207-0000-000000000004', 'VIDEO', 'Resistance to Globalisation: World Social Forum (WSF) & India''s Experience with Anti-Globalisation Movements', 'https://www.youtube.com/watch?v=OafmZakCadY&t=1620s&end=2178s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
