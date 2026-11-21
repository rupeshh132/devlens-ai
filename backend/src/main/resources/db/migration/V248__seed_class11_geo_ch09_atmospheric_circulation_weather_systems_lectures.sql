-- V248__seed_class11_geo_ch09_atmospheric_circulation_weather_systems_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 9: Atmospheric Circulation and Weather Systems
-- Masterclass Video: Next Toppers - 11th Humanities (9FTUbUW7dqM)
-- 100% Zero-Gap Continuous Timeline: 0s to 6940s (01:55:40, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 9
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000009';

-- 2. Insert 4 Verified Master Subtopics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2109-0000-000000000001', '65d29b56-0029-1100-0000-000000000009', 'Atmospheric Pressure: Vertical & Horizontal Variation, Pressure Belts & Isobars', 1, true),
('65d29b56-0029-2109-0000-000000000002', '65d29b56-0029-1100-0000-000000000009', 'Forces Affecting Wind (Pressure Gradient, Coriolis Force, Friction) & Geostrophic Wind', 2, true),
('65d29b56-0029-2109-0000-000000000003', '65d29b56-0029-1100-0000-000000000009', 'General Atmospheric Circulation: Hadley, Ferrel, Polar Cells, Planetary, Seasonal & Local Winds', 3, true),
('65d29b56-0029-2109-0000-000000000004', '65d29b56-0029-1100-0000-000000000009', 'Air Masses, Fronts, Extra-Tropical and Tropical Cyclones, Thunderstorms & Tornadoes', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 30:00 (0s to 1800s)
('65d29b56-0029-3109-0000-000000000001', '65d29b56-0029-2109-0000-000000000001', 'VIDEO', 'Atmospheric Pressure: Vertical & Horizontal Variation, Pressure Belts & Isobars (Millibars/Pascals, Pressure Gradient, Equatorial Low Doldrums, Subtropical Highs, Subpolar Lows & Polar Highs)', 'https://www.youtube.com/watch?v=9FTUbUW7dqM&t=0s&end=1800s', true, 1),

-- Topic 2: 30:00 to 01:00:00 (1800s to 3600s)
('65d29b56-0029-3109-0000-000000000002', '65d29b56-0029-2109-0000-000000000002', 'VIDEO', 'Forces Affecting Wind (Pressure Gradient, Coriolis Force, Friction) & Geostrophic Wind (Ferrel Law of Deflection, Rightward in Northern Hemisphere, Leftward in Southern, Cyclonic vs Anticyclonic Spirals)', 'https://www.youtube.com/watch?v=9FTUbUW7dqM&t=1800s&end=3600s', true, 1),

-- Topic 3: 01:00:00 to 01:30:00 (3600s to 5400s)
('65d29b56-0029-3109-0000-000000000003', '65d29b56-0029-2109-0000-000000000003', 'VIDEO', 'General Atmospheric Circulation: Hadley, Ferrel, Polar Cells, Planetary, Seasonal & Local Winds (Trade Winds, Westerlies, Polar Easterlies, ITCZ Migration, Land & Sea Breezes, Mountain & Valley Winds)', 'https://www.youtube.com/watch?v=9FTUbUW7dqM&t=3600s&end=5400s', true, 1),

-- Topic 4: 01:30:00 to 01:55:40 (5400s to 6940s)
('65d29b56-0029-3109-0000-000000000004', '65d29b56-0029-2109-0000-000000000004', 'VIDEO', 'Air Masses, Fronts, Extra-Tropical and Tropical Cyclones, Thunderstorms & Tornadoes (Cold, Warm, Occluded & Stationary Fronts, Frontogenesis, Eye of Cyclone, Storm Surge & Severe Weather Events)', 'https://www.youtube.com/watch?v=9FTUbUW7dqM&t=5400s&end=6940s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
