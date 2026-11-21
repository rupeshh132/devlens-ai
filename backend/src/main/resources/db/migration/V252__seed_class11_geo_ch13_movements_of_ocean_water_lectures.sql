-- V252__seed_class11_geo_ch13_movements_of_ocean_water_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 13: Movements of Ocean Water
-- Masterclass Video: Next Toppers - 11th Humanities (AMFraF2__Q8)
-- 100% Zero-Gap Continuous Timeline: 0s to 3810s (01:03:30, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 13
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000013';

-- 2. Insert 4 Verified Master Subtopics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2113-0000-000000000001', '65d29b56-0029-1100-0000-000000000013', 'Ocean Waves: Wave Mechanics, Characteristics & Coastal Energy Transfer', 1, true),
('65d29b56-0029-2113-0000-000000000002', '65d29b56-0029-1100-0000-000000000013', 'Tides: Causes of Tides, Gravitational Pull & Types (Spring, Neap, Bay of Fundy)', 2, true),
('65d29b56-0029-2113-0000-000000000003', '65d29b56-0029-1100-0000-000000000013', 'Tidal Cycles (Syzygy & Quadrature) & Importance for Navigation and Energy', 3, true),
('65d29b56-0029-2113-0000-000000000004', '65d29b56-0029-1100-0000-000000000013', 'Ocean Currents: Primary & Secondary Forces, Major Warm/Cold Currents & Climatic Effects', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 15:50 (0s to 950s)
('65d29b56-0029-3113-0000-000000000001', '65d29b56-0029-2113-0000-000000000001', 'VIDEO', 'Ocean Waves: Wave Mechanics, Characteristics & Coastal Energy Transfer (Water Molecule Circular Motion, Wind Friction, Crest, Trough, Wave Height, Wavelength, Period & Wave Velocity)', 'https://www.youtube.com/watch?v=AMFraF2__Q8&t=0s&end=950s', true, 1),

-- Topic 2: 15:50 to 34:10 (950s to 2050s)
('65d29b56-0029-3113-0000-000000000002', '65d29b56-0029-2113-0000-000000000002', 'VIDEO', 'Tides: Causes of Tides, Gravitational Pull & Types (Spring, Neap, Bay of Fundy) (Moon & Sun Gravitational Attraction, Centrifugal Force, Semi-Diurnal & Diurnal Tides, Highest Tides of Nova Scotia)', 'https://www.youtube.com/watch?v=AMFraF2__Q8&t=950s&end=2050s', true, 1),

-- Topic 3: 34:10 to 49:10 (2050s to 2950s)
('65d29b56-0029-3113-0000-000000000003', '65d29b56-0029-2113-0000-000000000003', 'VIDEO', 'Tidal Cycles (Syzygy & Quadrature) & Importance for Navigation and Energy (Conjunction & Opposition Syzygy, Right Angle Quadrature, Port Desiltation, Tidal Bore, Navigational Access & Tidal Power)', 'https://www.youtube.com/watch?v=AMFraF2__Q8&t=2050s&end=2950s', true, 1),

-- Topic 4: 49:10 to 01:03:30 (2950s to 3810s)
('65d29b56-0029-3113-0000-000000000004', '65d29b56-0029-2113-0000-000000000004', 'VIDEO', 'Ocean Currents: Primary & Secondary Forces, Major Warm/Cold Currents & Climatic Effects (Gulf Stream, Kuroshio, Labrador, Oyashio, Canaries, Benguela, California, Fishing Banks & Foggy Zones)', 'https://www.youtube.com/watch?v=AMFraF2__Q8&t=2950s&end=3810s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
