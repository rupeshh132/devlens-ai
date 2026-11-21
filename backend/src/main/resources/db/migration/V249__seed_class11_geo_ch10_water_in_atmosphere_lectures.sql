-- V249__seed_class11_geo_ch10_water_in_atmosphere_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 10: Water in the Atmosphere
-- Masterclass Video: Next Toppers - 11th Humanities (h6J3ah4UTiM)
-- 100% Zero-Gap Continuous Timeline: 0s to 4750s (01:19:10, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 10
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000010';

-- 2. Insert 4 Verified Master Subtopics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2110-0000-000000000001', '65d29b56-0029-1100-0000-000000000010', 'Humidity: Absolute, Specific and Relative Humidity, Dew Point & Saturation', 1, true),
('65d29b56-0029-2110-0000-000000000002', '65d29b56-0029-1100-0000-000000000010', 'Evaporation, Condensation and Forms of Condensation: Dew, Frost, Fog, Mist & Clouds', 2, true),
('65d29b56-0029-2110-0000-000000000003', '65d29b56-0029-1100-0000-000000000010', 'Cloud Classification (Cirrus, Cumulus, Stratus, Nimbus) & Precipitation Mechanisms', 3, true),
('65d29b56-0029-2110-0000-000000000004', '65d29b56-0029-1100-0000-000000000010', 'Types of Rainfall (Convectional, Orographic, Cyclonic) & World Distribution of Precipitation', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 20:00 (0s to 1200s)
('65d29b56-0029-3110-0000-000000000001', '65d29b56-0029-2110-0000-000000000001', 'VIDEO', 'Humidity: Absolute, Specific and Relative Humidity, Dew Point & Saturation (Vapour Holding Capacity, Temperature-Humidity Relationship, Relative Humidity Percentage & Saturation State)', 'https://www.youtube.com/watch?v=h6J3ah4UTiM&t=0s&end=1200s', true, 1),

-- Topic 2: 20:00 to 39:40 (1200s to 2380s)
('65d29b56-0029-3110-0000-000000000002', '65d29b56-0029-2110-0000-000000000002', 'VIDEO', 'Evaporation, Condensation and Forms of Condensation: Dew, Frost, Fog, Mist & Clouds (Latent Heat of Vaporisation, Cooling of Air Below Dew Point, Hygroscopic Particles & Smog Formation)', 'https://www.youtube.com/watch?v=h6J3ah4UTiM&t=1200s&end=2380s', true, 1),

-- Topic 3: 39:40 to 59:40 (2380s to 3580s)
('65d29b56-0029-3110-0000-000000000003', '65d29b56-0029-2110-0000-000000000003', 'VIDEO', 'Cloud Classification (Cirrus, Cumulus, Stratus, Nimbus) & Precipitation Mechanisms (High, Middle, Low Clouds, Vertical Cumulonimbus, Coalescence, Rain, Sleet, Snow, Glaze & Hailstones)', 'https://www.youtube.com/watch?v=h6J3ah4UTiM&t=2380s&end=3580s', true, 1),

-- Topic 4: 59:40 to 01:19:10 (3580s to 4750s)
('65d29b56-0029-3110-0000-000000000004', '65d29b56-0029-2110-0000-000000000004', 'VIDEO', 'Types of Rainfall (Convectional, Orographic, Cyclonic) & World Distribution of Precipitation (Windward Relief Rain, Leeward Rain-Shadow Zones, Equatorial Heavy Rainfall & Continental Interior Aridity)', 'https://www.youtube.com/watch?v=h6J3ah4UTiM&t=3580s&end=4750s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
