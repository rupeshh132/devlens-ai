-- V270__fix_class11_hist_ch08_map_work_topics.sql
-- Fixes chapter_id association for Class 11 History Chapter 8: Complete Map Work & Cartographic Skills
-- Corrects topics from accidental Ch 1-4 IDs to Ch 8 ID: 65d29b56-0027-1100-0000-000000000008

-- 1. Remove misplaced items and topics
DELETE FROM learn_content_items
WHERE topic_id IN (
    '65d29b56-0027-2108-0000-000000000001',
    '65d29b56-0027-2108-0000-000000000002',
    '65d29b56-0027-2108-0000-000000000003',
    '65d29b56-0027-2108-0000-000000000004'
);

DELETE FROM learn_topics
WHERE id IN (
    '65d29b56-0027-2108-0000-000000000001',
    '65d29b56-0027-2108-0000-000000000002',
    '65d29b56-0027-2108-0000-000000000003',
    '65d29b56-0027-2108-0000-000000000004'
);

-- 2. Insert 4 Verified Master Subtopics correctly linked to Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2108-0000-000000000001', '65d29b56-0027-1100-0000-000000000008', 'Map Skills Part 1: Ancient Mesopotamia & Mediterranean Roman Empire Key Sites', 1, true),
('65d29b56-0027-2108-0000-000000000002', '65d29b56-0027-1100-0000-000000000008', 'Map Skills Part 2: Nomadic Mongol Empire Steppes & Feudal Western Europe Kingdoms', 2, true),
('65d29b56-0027-2108-0000-000000000003', '65d29b56-0027-1100-0000-000000000008', 'Map Skills Part 3: Italian Renaissance City-States & Displacing Indigenous Frontiers', 3, true),
('65d29b56-0027-2108-0000-000000000004', '65d29b56-0027-1100-0000-000000000008', 'Map Skills Part 4: East Asian Modernization Centers & Final Examination Map Mastery', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 09:10 (0s to 550s)
('65d29b56-0027-3108-0000-000000000001', '65d29b56-0027-2108-0000-000000000001', 'VIDEO', 'Map Skills Part 1: Ancient Mesopotamia & Mediterranean Roman Empire Key Sites (Locating Ur, Uruk, Babylon, Mari, Nineveh, Rome, Carthage, Alexandria, Antioch, Rhine & Danube Frontiers)', 'https://www.youtube.com/watch?v=Thbv_FeZRPs&t=0s&end=550s', true, 1),

-- Topic 2: 09:10 to 18:20 (550s to 1100s)
('65d29b56-0027-3108-0000-000000000002', '65d29b56-0027-2108-0000-000000000002', 'VIDEO', 'Map Skills Part 2: Nomadic Mongol Empire Steppes & Feudal Western Europe Kingdoms (Karakorum, Samarkand, Bokhara, Nishapur, Silk Route Nodes, Kingdom of Franks, England & Papal States)', 'https://www.youtube.com/watch?v=Thbv_FeZRPs&t=550s&end=1100s', true, 1),

-- Topic 3: 18:20 to 27:30 (1100s to 1650s)
('65d29b56-0027-3108-0000-000000000003', '65d29b56-0027-2108-0000-000000000003', 'VIDEO', 'Map Skills Part 3: Italian Renaissance City-States & Displacing Indigenous Frontiers (Florence, Venice, Padua, Genoa, North American Native Reservations, Trail of Tears Route & Sydney Settlement)', 'https://www.youtube.com/watch?v=Thbv_FeZRPs&t=1100s&end=1650s', true, 1),

-- Topic 4: 27:30 to 37:20 (1650s to 2240s)
('65d29b56-0027-3108-0000-000000000004', '65d29b56-0027-2108-0000-000000000004', 'VIDEO', 'Map Skills Part 4: East Asian Modernization Centers & Final Examination Map Mastery (Tokyo, Kyoto, Osaka, Nagasaki, Hiroshima, Beijing, Shanghai, Guangzhou, Cartographic Identification Tricks)', 'https://www.youtube.com/watch?v=Thbv_FeZRPs&t=1650s&end=2240s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
