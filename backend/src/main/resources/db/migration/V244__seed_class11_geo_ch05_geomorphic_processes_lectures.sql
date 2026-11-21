-- V244__seed_class11_geo_ch05_geomorphic_processes_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 5: Geomorphic Processes
-- Masterclass Video: Next Toppers - 11th Humanities (jTurc7szIvE)
-- 100% Zero-Gap Continuous Timeline: 0s to 7610s (02:06:50, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000005';

-- 2. Insert 4 Verified Master Subtopics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2105-0000-000000000001', '65d29b56-0029-1100-0000-000000000005', 'Geomorphic Processes Overview & Endogenic Forces: Diastrophism and Volcanism', 1, true),
('65d29b56-0029-2105-0000-000000000002', '65d29b56-0029-1100-0000-000000000005', 'Exogenic Processes & Weathering: Chemical, Physical and Biological Weathering', 2, true),
('65d29b56-0029-2105-0000-000000000003', '65d29b56-0029-1100-0000-000000000005', 'Mass Movements: Slow, Rapid and Landslides, Erosion and Deposition Dynamics', 3, true),
('65d29b56-0029-2105-0000-000000000004', '65d29b56-0029-1100-0000-000000000005', 'Soil Formation: Pedogenesis, Soil-Forming Factors & Horizons', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 26:20 (0s to 1580s)
('65d29b56-0029-3105-0000-000000000001', '65d29b56-0029-2105-0000-000000000001', 'VIDEO', 'Geomorphic Processes Overview & Endogenic Forces: Diastrophism and Volcanism (Endogenic Energy, Orogenic Mountain Building, Epeirogenic Continental Uplift, Earthquakes & Magma Intrusion)', 'https://www.youtube.com/watch?v=jTurc7szIvE&t=0s&end=1580s', true, 1),

-- Topic 2: 26:20 to 01:05:00 (1580s to 3900s)
('65d29b56-0029-3105-0000-000000000002', '65d29b56-0029-2105-0000-000000000002', 'VIDEO', 'Exogenic Processes & Weathering: Chemical, Physical and Biological Weathering (Denudation, Solution, Carbonation, Hydration, Oxidation, Unloading, Frost Wedging & Biological Factors)', 'https://www.youtube.com/watch?v=jTurc7szIvE&t=1580s&end=3900s', true, 1),

-- Topic 3: 01:05:00 to 01:43:00 (3900s to 6180s)
('65d29b56-0029-3105-0000-000000000003', '65d29b56-0029-2105-0000-000000000003', 'VIDEO', 'Mass Movements: Slow, Rapid and Landslides, Erosion and Deposition Dynamics (Creep, Solifluction, Earthflow, Mudflow, Debris Avalanche, Slump, Rockslide & Kinetic Energy)', 'https://www.youtube.com/watch?v=jTurc7szIvE&t=3900s&end=6180s', true, 1),

-- Topic 4: 01:43:00 to 02:06:50 (6180s to 7610s)
('65d29b56-0029-3105-0000-000000000004', '65d29b56-0029-2105-0000-000000000004', 'VIDEO', 'Soil Formation: Pedogenesis, Soil-Forming Factors & Horizons (Parent Material, Topography/Relief, Climate, Biological Activity, Time & Soil Profile Layers A, B, C)', 'https://www.youtube.com/watch?v=jTurc7szIvE&t=6180s&end=7610s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
