-- V255__seed_class11_geo_ch16_structure_physiography_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 16: Structure and Physiography of India (Book 2 Ch 2)
-- Masterclass Video: Next Toppers - 11th Humanities (JigjB5RyZww)
-- 100% Zero-Gap Continuous Timeline: 0s to 10220s (02:50:20, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 16
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000016';

-- 2. Insert 4 Verified Master Subtopics for Chapter 16
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2116-0000-000000000001', '65d29b56-0029-1100-0000-000000000016', 'Geological Structure of India: Peninsular Block, Himalayas & Indo-Ganga Plains', 1, true),
('65d29b56-0029-2116-0000-000000000002', '65d29b56-0029-1100-0000-000000000016', 'The Northern & North-Eastern Mountains: Regional Division of Himalayas', 2, true),
('65d29b56-0029-2116-0000-000000000003', '65d29b56-0029-1100-0000-000000000016', 'The Northern Plains & The Peninsular Plateau (Deccan, Central Highlands)', 3, true),
('65d29b56-0029-2116-0000-000000000004', '65d29b56-0029-1100-0000-000000000016', 'The Indian Desert, Coastal Plains (Western & Eastern) and The Islands', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 45:00 (0s to 2700s)
('65d29b56-0029-3116-0000-000000000001', '65d29b56-0029-2116-0000-000000000001', 'VIDEO', 'Geological Structure of India: Peninsular Block, Himalayas & Indo-Ganga Plains (Ancient Gneiss & Granites, Tectonic Stability vs Himalayan Fold Mountain Instability, Geosynclinal Silt Deposition)', 'https://www.youtube.com/watch?v=JigjB5RyZww&t=0s&end=2700s', true, 1),

-- Topic 2: 45:00 to 01:25:00 (2700s to 5100s)
('65d29b56-0029-3116-0000-000000000002', '65d29b56-0029-2116-0000-000000000002', 'VIDEO', 'The Northern & North-Eastern Mountains: Regional Division of Himalayas (Kashmir Himalayas Karewa Lacustrine Deposits, Himachal-Uttarakhand, Darjeeling-Sikkim, Arunachal, Purvanchal Hills & Major Passes)', 'https://www.youtube.com/watch?v=JigjB5RyZww&t=2700s&end=5100s', true, 1),

-- Topic 3: 01:25:00 to 02:05:00 (5100s to 7500s)
('65d29b56-0029-3116-0000-000000000003', '65d29b56-0029-2116-0000-000000000003', 'VIDEO', 'The Northern Plains & The Peninsular Plateau (Deccan, Central Highlands) (Bhabar, Tarai, Bhangar, Khadar Belts, Malwa, Bundelkhand, Chotanagpur, Deccan Trap Basalt, Western & Eastern Ghats Peaks)', 'https://www.youtube.com/watch?v=JigjB5RyZww&t=5100s&end=7500s', true, 1),

-- Topic 4: 02:05:00 to 02:50:20 (7500s to 10220s)
('65d29b56-0029-3116-0000-000000000004', '65d29b56-0029-2116-0000-000000000004', 'VIDEO', 'The Indian Desert, Coastal Plains (Western & Eastern) and The Islands (Thar Aridity, Oasis, Submergent Western vs Emergent Eastern Coasts, Lagoons Kayals, Andaman & Nicobar 10° Channel & Lakshadweep Atolls)', 'https://www.youtube.com/watch?v=JigjB5RyZww&t=7500s&end=10220s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
