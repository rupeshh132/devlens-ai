-- V242__seed_class11_geo_ch03_interior_of_earth_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 3: Interior of the Earth
-- Masterclass Video: Next Toppers - 11th Humanities (_yPuBQx-fDg)
-- 100% Zero-Gap Continuous Timeline: 0s to 8370s (02:19:30, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000003';

-- 2. Insert 4 Verified Master Subtopics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2103-0000-000000000001', '65d29b56-0029-1100-0000-000000000003', 'Sources of Information about the Interior: Direct and Indirect Sources', 1, true),
('65d29b56-0029-2103-0000-000000000002', '65d29b56-0029-1100-0000-000000000003', 'Earthquakes: Seismic Waves (P & S), Shadow Zones, Scales and Effects', 2, true),
('65d29b56-0029-2103-0000-000000000003', '65d29b56-0029-1100-0000-000000000003', 'Internal Structure of the Earth: Crust, Mantle, Core and Discontinuities', 3, true),
('65d29b56-0029-2103-0000-000000000004', '65d29b56-0029-1100-0000-000000000003', 'Volcanoes and Volcanic Landforms: Intrusive & Extrusive Landforms', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 41:30 (0s to 2490s)
('65d29b56-0029-3103-0000-000000000001', '65d29b56-0029-2103-0000-000000000001', 'VIDEO', 'Sources of Information about the Interior: Direct and Indirect Sources (Deep Drilling Projects, Mining, Volcanic Eruption Materials, Temperature, Pressure, Density & Meteorites Study)', 'https://www.youtube.com/watch?v=_yPuBQx-fDg&t=0s&end=2490s', true, 1),

-- Topic 2: 41:30 to 01:27:00 (2490s to 5220s)
('65d29b56-0029-3103-0000-000000000002', '65d29b56-0029-2103-0000-000000000002', 'VIDEO', 'Earthquakes: Seismic Waves (P & S), Shadow Zones, Scales and Effects (Focus, Epicentre, Primary & Secondary Waves, 105°-145° Shadow Zone, Richter & Mercalli Scales)', 'https://www.youtube.com/watch?v=_yPuBQx-fDg&t=2490s&end=5220s', true, 1),

-- Topic 3: 01:27:00 to 01:50:00 (5220s to 6600s)
('65d29b56-0029-3103-0000-000000000003', '65d29b56-0029-2103-0000-000000000003', 'VIDEO', 'Internal Structure of the Earth: Crust, Mantle, Core and Discontinuities (Oceanic & Continental Crust, Asthenosphere, Mesosphere, Outer Liquid Core, Inner Solid Core, Mohorovicic & Gutenberg)', 'https://www.youtube.com/watch?v=_yPuBQx-fDg&t=5220s&end=6600s', true, 1),

-- Topic 4: 01:50:00 to 02:19:30 (6600s to 8370s)
('65d29b56-0029-3103-0000-000000000004', '65d29b56-0029-2103-0000-000000000004', 'VIDEO', 'Volcanoes and Volcanic Landforms: Intrusive & Extrusive Landforms (Shield, Composite, Caldera, Flood Basalt, Batholiths, Lacoliths, Lopoliths, Phacoliths, Sills & Dykes)', 'https://www.youtube.com/watch?v=_yPuBQx-fDg&t=6600s&end=8370s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
