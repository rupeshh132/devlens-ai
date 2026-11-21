-- V251__seed_class11_geo_ch12_water_oceans_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 12: Water (Oceans)
-- Masterclass Video: Next Toppers - 11th Humanities (0I6uNGNJ13w)
-- 100% Zero-Gap Continuous Timeline: 0s to 4865s (01:21:05, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 12
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000012';

-- 2. Insert 4 Verified Master Subtopics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2112-0000-000000000001', '65d29b56-0029-1100-0000-000000000012', 'Hydrological Cycle & Major Ocean Floor Relief (Shelf, Slope, Deep Sea Plain, Trenches)', 1, true),
('65d29b56-0029-2112-0000-000000000002', '65d29b56-0029-1100-0000-000000000012', 'Minor Relief Features: Mid-Oceanic Ridges, Seamounts, Guyots, Canyons & Atolls', 2, true),
('65d29b56-0029-2112-0000-000000000003', '65d29b56-0029-1100-0000-000000000012', 'Temperature of Ocean Waters: Factors, Horizontal & Vertical Thermocline Distribution', 3, true),
('65d29b56-0029-2112-0000-000000000004', '65d29b56-0029-1100-0000-000000000012', 'Salinity of Ocean Waters: Factors, Halocline, Distribution & High Salinity Water Bodies', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 20:00 (0s to 1200s)
('65d29b56-0029-3112-0000-000000000001', '65d29b56-0029-2112-0000-000000000001', 'VIDEO', 'Hydrological Cycle & Major Ocean Floor Relief (Shelf, Slope, Deep Sea Plain, Trenches) (Water Reservoirs, Continental Shelf Rich Fishing/Petroleum Zones, Continental Slope & Mariana Trench Depth)', 'https://www.youtube.com/watch?v=0I6uNGNJ13w&t=0s&end=1200s', true, 1),

-- Topic 2: 20:00 to 40:00 (1200s to 2400s)
('65d29b56-0029-3112-0000-000000000002', '65d29b56-0029-2112-0000-000000000002', 'VIDEO', 'Minor Relief Features: Mid-Oceanic Ridges, Seamounts, Guyots, Canyons & Atolls (Submarine Volcanic Ridges, Flat-topped Guyots, Submarine Canyons of Hudson/Ganges, Coral Reef Atolls & Bank Shallows)', 'https://www.youtube.com/watch?v=0I6uNGNJ13w&t=1200s&end=2400s', true, 1),

-- Topic 3: 40:00 to 01:00:50 (2400s to 3650s)
('65d29b56-0029-3112-0000-000000000003', '65d29b56-0029-2112-0000-000000000003', 'VIDEO', 'Temperature of Ocean Waters: Factors, Horizontal & Vertical Thermocline Distribution (Insolation, Enclosed Seas, Warm/Cold Currents, 3 Thermal Layers: Epilimnion, Thermocline Boundary & Cold Deep Water)', 'https://www.youtube.com/watch?v=0I6uNGNJ13w&t=2400s&end=3650s', true, 1),

-- Topic 4: 01:00:50 to 01:21:05 (3650s to 4865s)
('65d29b56-0029-3112-0000-000000000004', '65d29b56-0029-2112-0000-000000000004', 'VIDEO', 'Salinity of Ocean Waters: Factors, Halocline, Distribution & High Salinity Water Bodies (Parts Per Thousand ppt, Evaporation vs Freshwater Inflow, Lake Van 330 ppt, Dead Sea 238 ppt, Great Salt Lake & Halocline Layer)', 'https://www.youtube.com/watch?v=0I6uNGNJ13w&t=3650s&end=4865s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
