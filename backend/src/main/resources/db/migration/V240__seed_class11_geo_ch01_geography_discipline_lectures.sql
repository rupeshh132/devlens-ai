-- V240__seed_class11_geo_ch01_geography_discipline_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 1: Geography as a Discipline
-- Masterclass Video: Next Toppers - 11th Humanities (lFnFDAUkB3I)
-- 100% Zero-Gap Continuous Timeline: 0s to 4640s (01:17:20, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000001';

-- 2. Insert 4 Verified Master Subtopics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2101-0000-000000000001', '65d29b56-0029-1100-0000-000000000001', 'Introduction to Geography as a Discipline & Nature of Geographic Study', 1, true),
('65d29b56-0029-2101-0000-000000000002', '65d29b56-0029-1100-0000-000000000001', 'Definition of Geography, Spatial-Temporal Synthesis & Three Key Questions', 2, true),
('65d29b56-0029-2101-0000-000000000003', '65d29b56-0029-1100-0000-000000000001', 'Geography as an Integrating Discipline & Linkages with Sciences', 3, true),
('65d29b56-0029-2101-0000-000000000004', '65d29b56-0029-1100-0000-000000000001', 'Approaches to Study Geography (Systematic vs Regional) & Branches of Geography', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 21:40 (0s to 1300s)
('65d29b56-0029-3101-0000-000000000001', '65d29b56-0029-2101-0000-000000000001', 'VIDEO', 'Introduction to Geography as a Discipline & Nature of Geographic Study (Earth as Abode of Humans, Diverse Landscapes, Environmental Variations & Motivation to Study Geography)', 'https://www.youtube.com/watch?v=lFnFDAUkB3I&t=0s&end=1300s', true, 1),

-- Topic 2: 21:40 to 35:00 (1300s to 2100s)
('65d29b56-0029-3101-0000-000000000002', '65d29b56-0029-2101-0000-000000000002', 'VIDEO', 'Definition of Geography, Spatial-Temporal Synthesis & Three Key Questions (What, Where & Why Questions, Eratosthenes Coinage, Geographer Perspective on Man-Nature Interaction)', 'https://www.youtube.com/watch?v=lFnFDAUkB3I&t=1300s&end=2100s', true, 1),

-- Topic 3: 35:00 to 53:00 (2100s to 3180s)
('65d29b56-0029-3101-0000-000000000003', '65d29b56-0029-2101-0000-000000000003', 'VIDEO', 'Geography as an Integrating Discipline & Linkages with Sciences (Interface with Geology, Meteorology, Hydrology, Pedology, Economics, History, Sociology & Spatial Mathematics)', 'https://www.youtube.com/watch?v=lFnFDAUkB3I&t=2100s&end=3180s', true, 1),

-- Topic 4: 53:00 to 01:17:20 (3180s to 4640s)
('65d29b56-0029-3101-0000-000000000004', '65d29b56-0029-2101-0000-000000000004', 'VIDEO', 'Approaches to Study Geography (Systematic vs Regional) & Branches of Geography (Physical, Human, Biogeography, Dualism in Geography & Importance of Physical Geography)', 'https://www.youtube.com/watch?v=lFnFDAUkB3I&t=3180s&end=4640s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
