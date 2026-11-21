-- V245__seed_class11_geo_ch06_landforms_evolution_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 6: Landforms and their Evolution
-- Masterclass Video: Next Toppers - 11th Humanities (alGhE1cVCno)
-- 100% Zero-Gap Continuous Timeline: 0s to 9700s (02:41:40, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000006';

-- 2. Insert 4 Verified Master Subtopics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2106-0000-000000000001', '65d29b56-0029-1100-0000-000000000006', 'Running Water: Stages (Youth, Mature, Old), Erosional & Depositional River Landforms', 1, true),
('65d29b56-0029-2106-0000-000000000002', '65d29b56-0029-1100-0000-000000000006', 'Groundwater (Karst Topography) & Glacial Erosional and Depositional Landforms', 2, true),
('65d29b56-0029-2106-0000-000000000003', '65d29b56-0029-1100-0000-000000000006', 'Coastal Geomorphology: Waves and Currents, Cliffs, Terraces, Caves, Beaches and Spits', 3, true),
('65d29b56-0029-2106-0000-000000000004', '65d29b56-0029-1100-0000-000000000006', 'Aeolian Landforms: Wind Erosion & Deposition (Pediments, Playas, Mushroom Rocks, Sand Dunes)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 52:30 (0s to 3150s)
('65d29b56-0029-3106-0000-000000000001', '65d29b56-0029-2106-0000-000000000001', 'VIDEO', 'Running Water: Stages (Youth, Mature, Old), Erosional & Depositional River Landforms (Valleys, Gorges, Canyons, Potholes, Plunge Pools, Incised Meanders, Terraces, Alluvial Fans, Deltas, Floodplains & Levees)', 'https://www.youtube.com/watch?v=alGhE1cVCno&t=0s&end=3150s', true, 1),

-- Topic 2: 52:30 to 01:31:40 (3150s to 5500s)
('65d29b56-0029-3106-0000-000000000002', '65d29b56-0029-2106-0000-000000000002', 'VIDEO', 'Groundwater (Karst Topography) & Glacial Erosional and Depositional Landforms (Sinkholes, Lapies, Caves, Stalactites, Stalagmites, Cirques, Horns, Aretes, U-shaped Glacial Valleys, Moraines & Eskers)', 'https://www.youtube.com/watch?v=alGhE1cVCno&t=3150s&end=5500s', true, 1),

-- Topic 3: 01:31:40 to 02:08:20 (5500s to 7700s)
('65d29b56-0029-3106-0000-000000000003', '65d29b56-0029-2106-0000-000000000003', 'VIDEO', 'Coastal Geomorphology: Waves and Currents, Cliffs, Terraces, Caves, Beaches and Spits (High Rocky Coasts, Wave-cut Cliffs, Sea Caves, Sea Stacks, Wave-cut Terraces, Low Sedimentary Coasts, Sand Dunes & Barrier Bars)', 'https://www.youtube.com/watch?v=alGhE1cVCno&t=5500s&end=7700s', true, 1),

-- Topic 4: 02:08:20 to 02:41:40 (7700s to 9700s)
('65d29b56-0029-3106-0000-000000000004', '65d29b56-0029-2106-0000-000000000004', 'VIDEO', 'Aeolian Landforms: Wind Erosion & Deposition (Pediments, Pediplains, Playas, Deflation Hollows, Mushroom Rocks, Table Rocks, Barchans, Seif Longitudinal Dunes & Loess Deposits)', 'https://www.youtube.com/watch?v=alGhE1cVCno&t=7700s&end=9700s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
