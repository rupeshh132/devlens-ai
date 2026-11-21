-- V259__seed_class11_geo_ch20_natural_hazards_disasters_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 20: Natural Hazards and Disasters (Book 2 Ch 6)
-- Masterclass Video: Next Toppers - 11th Humanities (yMMfUtD1yt0)
-- 100% Zero-Gap Continuous Timeline: 0s to 5000s (01:23:20, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 20
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000020'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000020';

-- 2. Insert 4 Verified Master Subtopics for Chapter 20
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2120-0000-000000000001', '65d29b56-0029-1100-0000-000000000020', 'Concepts of Hazards vs Disasters, Classification & Global Disaster Framework', 1, true),
('65d29b56-0029-2120-0000-000000000002', '65d29b56-0029-1100-0000-000000000020', 'Natural Disasters in India: Earthquakes, Seismic Zoning, Tsunamis and Cyclones', 2, true),
('65d29b56-0029-2120-0000-000000000003', '65d29b56-0029-1100-0000-000000000020', 'Hydrological and Climatic Disasters: Floods, Droughts & Vulnerable Basins', 3, true),
('65d29b56-0029-2120-0000-000000000004', '65d29b56-0029-1100-0000-000000000020', 'Landslides, Vulnerability Zones & Comprehensive Disaster Management (Mitigation & Response)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 21:40 (0s to 1300s)
('65d29b56-0029-3120-0000-000000000001', '65d29b56-0029-2120-0000-000000000001', 'VIDEO', 'Concepts of Hazards vs Disasters, Classification & Global Disaster Framework (Natural Hazards vs Disasters, Atmospheric, Terrestrial, Aquatic, Biological Classes, Yokohama Strategy 1994)', 'https://www.youtube.com/watch?v=yMMfUtD1yt0&t=0s&end=1300s', true, 1),

-- Topic 2: 21:40 to 41:40 (1300s to 2500s)
('65d29b56-0029-3120-0000-000000000002', '65d29b56-0029-2120-0000-000000000002', 'VIDEO', 'Natural Disasters in India: Earthquakes, Seismic Zoning, Tsunamis and Cyclones (Bureau of Indian Standards Seismic Zones V to II, 2004 Indian Ocean Tsunami, Bay of Bengal Tropical Storm Surges)', 'https://www.youtube.com/watch?v=yMMfUtD1yt0&t=1300s&end=2500s', true, 1),

-- Topic 3: 41:40 to 01:03:20 (2500s to 3800s)
('65d29b56-0029-3120-0000-000000000003', '65d29b56-0029-2120-0000-000000000003', 'VIDEO', 'Hydrological and Climatic Disasters: Floods, Droughts & Vulnerable Basins (Brahmaputra/Ganga Annual Inundations, Flash Floods, Meteorological, Agricultural & Hydrological Drought, DPAP Strategies)', 'https://www.youtube.com/watch?v=yMMfUtD1yt0&t=2500s&end=3800s', true, 1),

-- Topic 4: 01:03:20 to 01:23:20 (3800s to 5000s)
('65d29b56-0029-3120-0000-000000000004', '65d29b56-0029-2120-0000-000000000004', 'VIDEO', 'Landslides, Vulnerability Zones & Comprehensive Disaster Management (Mitigation & Response) (Himalayan Very High Vulnerability Zone, Western Ghats Slopes, Disaster Management Act 2005, NDMA, NDRF & Preparedness Cycle)', 'https://www.youtube.com/watch?v=yMMfUtD1yt0&t=3800s&end=5000s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
