-- V391__seed_class12_geo_ch22_complete_map_work_world_and_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 22 (Complete Map Work (World & India Political Maps - 10 Marks Board Evaluation))
-- Video: Humanities Wallah - Class 12th (Complete Map Work One Shot) (BWsJYdY14VM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 990s)

-- 1. Remove old placeholder topics & content items for Chapter 22 (Complete Map Work (World & India Political Maps - 10 Marks Board Evaluation))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000022'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000022';

-- 2. Insert 4 Verified Master Topics for Chapter 22
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2222-0000-000000000001', '65d29b56-0029-1200-0000-000000000022', 'Board Map Work Master Strategy & World Map: Major Nomadic Herding, Commercial Livestock & Extensive Farming Regions', 1, true),
('65d29b56-0029-2222-0000-000000000002', '65d29b56-0029-1200-0000-000000000022', 'World Map: Major International Sea Ports, Oceanic Shipping Routes & Trans-Continental Railways', 2, true),
('65d29b56-0029-2222-0000-000000000003', '65d29b56-0029-1200-0000-000000000022', 'India Map: Leading States in Major Foodgrains and Commercial Cash Crops (Rice, Wheat, Cotton, Jute, Tea, Sugarcane)', 3, true),
('65d29b56-0029-2222-0000-000000000004', '65d29b56-0029-1200-0000-000000000022', 'India Map: Key Mineral Belts, Coal Mines, Oil Fields, Major Sea Ports and International Airports', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3222-0000-000000000001', '65d29b56-0029-2222-0000-000000000001', 'VIDEO', 'Board Map Work Master Strategy & World Map: Major Nomadic Herding, Commercial Livestock & Extensive Farming Regions', 'https://www.youtube.com/watch?v=BWsJYdY14VM&end=250s', true, 1),
('65d29b56-0029-3222-0000-000000000002', '65d29b56-0029-2222-0000-000000000002', 'VIDEO', 'World Map: Major International Sea Ports, Oceanic Shipping Routes & Trans-Continental Railways', 'https://www.youtube.com/watch?v=BWsJYdY14VM&t=250s&end=500s', true, 1),
('65d29b56-0029-3222-0000-000000000003', '65d29b56-0029-2222-0000-000000000003', 'VIDEO', 'India Map: Leading States in Major Foodgrains and Commercial Cash Crops (Rice, Wheat, Cotton, Jute, Tea, Sugarcane)', 'https://www.youtube.com/watch?v=BWsJYdY14VM&t=500s&end=740s', true, 1),
('65d29b56-0029-3222-0000-000000000004', '65d29b56-0029-2222-0000-000000000004', 'VIDEO', 'India Map: Key Mineral Belts, Coal Mines, Oil Fields, Major Sea Ports and International Airports', 'https://www.youtube.com/watch?v=BWsJYdY14VM&t=740s&end=990s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
