-- V260__seed_class11_geo_ch21_map_work_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 21: Complete Map Work (World & India Physical Maps)
-- Masterclass Video: Next Toppers - 11th Humanities (FGjto0y5hx0)
-- 100% Zero-Gap Continuous Timeline: 0s to 2665s (44m 25s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 21
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000021'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000021';

-- 2. Insert 4 Verified Master Subtopics for Chapter 21
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2121-0000-000000000001', '65d29b56-0029-1100-0000-000000000021', 'World Map: Major Oceans, Continents, Lithospheric Plates & Pacific Ring of Fire', 1, true),
('65d29b56-0029-2121-0000-000000000002', '65d29b56-0029-1100-0000-000000000021', 'World Map: Hot Deserts, Major Seas, Ocean Currents & Global Ecological Hotspots', 2, true),
('65d29b56-0029-2121-0000-000000000003', '65d29b56-0029-1100-0000-000000000021', 'India Map: Physical Divisions, Mountain Ranges, Peaks, Passes, Plateaus & Coastal Plains', 3, true),
('65d29b56-0029-2121-0000-000000000004', '65d29b56-0029-1100-0000-000000000021', 'India Map: Drainage Network, Climatic Extremes, Forests & Wildlife Reserves', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 10:50 (0s to 650s)
('65d29b56-0029-3121-0000-000000000001', '65d29b56-0029-2121-0000-000000000001', 'VIDEO', 'World Map: Major Oceans, Continents, Lithospheric Plates & Pacific Ring of Fire (Pacific, Atlantic, Indian, Arctic, Southern Oceans, 7 Major Tectonic Plates, Nazca, Cocos, Arabian Plates, Mid-Atlantic Ridge)', 'https://www.youtube.com/watch?v=FGjto0y5hx0&t=0s&end=650s', true, 1),

-- Topic 2: 10:50 to 22:00 (650s to 1320s)
('65d29b56-0029-3121-0000-000000000002', '65d29b56-0029-2121-0000-000000000002', 'VIDEO', 'World Map: Hot Deserts, Major Seas, Ocean Currents & Global Ecological Hotspots (Sahara, Thar, Gobi, Atacama, Great Victoria, Black Sea, Caspian Sea, Mediterranean, Warm/Cold Ocean Gyres & Hotspots)', 'https://www.youtube.com/watch?v=FGjto0y5hx0&t=650s&end=1320s', true, 1),

-- Topic 3: 22:00 to 33:20 (1320s to 2000s)
('65d29b56-0029-3121-0000-000000000003', '65d29b56-0029-2121-0000-000000000003', 'VIDEO', 'India Map: Physical Divisions, Mountain Ranges, Peaks, Passes, Plateaus & Coastal Plains (Karakoram, Aravalli, Vindhya, Satpura, Western/Eastern Ghats, K2, Kanchenjunga, Shipki La, Nathu La, Malwa, Deccan)', 'https://www.youtube.com/watch?v=FGjto0y5hx0&t=1320s&end=2000s', true, 1),

-- Topic 4: 33:20 to 44:25 (2000s to 2665s)
('65d29b56-0029-3121-0000-000000000004', '65d29b56-0029-2121-0000-000000000004', 'VIDEO', 'India Map: Drainage Network, Climatic Extremes, Forests & Wildlife Reserves (Ganga, Indus, Brahmaputra, Godavari, Krishna, Narmada, Wular, Sambhar, Chilika, Corbett, Kaziranga, Ranthambore & Gir)', 'https://www.youtube.com/watch?v=FGjto0y5hx0&t=2000s&end=2665s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
