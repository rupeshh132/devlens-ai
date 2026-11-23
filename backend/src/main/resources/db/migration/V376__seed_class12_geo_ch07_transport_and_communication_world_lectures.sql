-- V376__seed_class12_geo_ch07_transport_and_communication_world_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 7 (Transport and Communication (World))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (X7j5PJ43OPw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2347s)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Transport and Communication (World))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000007';

-- 2. Insert 4 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2207-0000-000000000001', '65d29b56-0029-1200-0000-000000000007', 'Land Transport: Roads, Highways (Pan-American, Trans-Canadian) & Border Roads', 1, true),
('65d29b56-0029-2207-0000-000000000002', '65d29b56-0029-1200-0000-000000000007', 'Railways & Major Trans-Continental Lines: Trans-Siberian, Canadian Pacific & Australian Trans-Continental', 2, true),
('65d29b56-0029-2207-0000-000000000003', '65d29b56-0029-1200-0000-000000000007', 'Water Transport: Major Ocean Routes (North Atlantic, Cape Route, Mediterranean-Asiatic) & Canals (Suez, Panama)', 3, true),
('65d29b56-0029-2207-0000-000000000004', '65d29b56-0029-1200-0000-000000000007', 'Inland Waterways (Rhine, Danube, St. Lawrence), Oil/Gas Pipelines (Big Inch) & Cyber Space / Satellite Communication', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3207-0000-000000000001', '65d29b56-0029-2207-0000-000000000001', 'VIDEO', 'Land Transport: Roads, Highways (Pan-American, Trans-Canadian) & Border Roads', 'https://www.youtube.com/watch?v=X7j5PJ43OPw&end=580s', true, 1),
('65d29b56-0029-3207-0000-000000000002', '65d29b56-0029-2207-0000-000000000002', 'VIDEO', 'Railways & Major Trans-Continental Lines: Trans-Siberian, Canadian Pacific & Australian Trans-Continental', 'https://www.youtube.com/watch?v=X7j5PJ43OPw&t=580s&end=1170s', true, 1),
('65d29b56-0029-3207-0000-000000000003', '65d29b56-0029-2207-0000-000000000003', 'VIDEO', 'Water Transport: Major Ocean Routes (North Atlantic, Cape Route, Mediterranean-Asiatic) & Canals (Suez, Panama)', 'https://www.youtube.com/watch?v=X7j5PJ43OPw&t=1170s&end=1750s', true, 1),
('65d29b56-0029-3207-0000-000000000004', '65d29b56-0029-2207-0000-000000000004', 'VIDEO', 'Inland Waterways (Rhine, Danube, St. Lawrence), Oil/Gas Pipelines (Big Inch) & Cyber Space / Satellite Communication', 'https://www.youtube.com/watch?v=X7j5PJ43OPw&t=1750s&end=2347s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
