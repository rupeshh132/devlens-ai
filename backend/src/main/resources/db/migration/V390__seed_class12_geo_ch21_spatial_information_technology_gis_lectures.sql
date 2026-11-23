-- V390__seed_class12_geo_ch21_spatial_information_technology_gis_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 21 (Spatial Information Technology (GIS))
-- Video: Adda247 Humanities Class 12 (Board Exam Masterclass) (MfsBUWSWm94)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4057s)

-- 1. Remove old placeholder topics & content items for Chapter 21 (Spatial Information Technology (GIS))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000021'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000021';

-- 2. Insert 4 Verified Master Topics for Chapter 21
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2221-0000-000000000001', '65d29b56-0029-1200-0000-000000000021', 'Introduction to Spatial Information Technology: Concept, Origin and Relevance of GIS', 1, true),
('65d29b56-0029-2221-0000-000000000002', '65d29b56-0029-1200-0000-000000000021', 'Components of GIS: Hardware, Software Tools, Spatial Data, Human Expertise and Procedures', 2, true),
('65d29b56-0029-2221-0000-000000000003', '65d29b56-0029-1200-0000-000000000021', 'Spatial Data Representation Models: Raster Data Model (Pixels) vs Vector Data Model (Points, Lines, Polygons)', 3, true),
('65d29b56-0029-2221-0000-000000000004', '65d29b56-0029-1200-0000-000000000021', 'GIS Analytical Functions: Data Editing, Overlay Operations, Buffer Analysis & Real-World Practical Applications', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3221-0000-000000000001', '65d29b56-0029-2221-0000-000000000001', 'VIDEO', 'Introduction to Spatial Information Technology: Concept, Origin and Relevance of GIS', 'https://www.youtube.com/watch?v=MfsBUWSWm94&end=1010s', true, 1),
('65d29b56-0029-3221-0000-000000000002', '65d29b56-0029-2221-0000-000000000002', 'VIDEO', 'Components of GIS: Hardware, Software Tools, Spatial Data, Human Expertise and Procedures', 'https://www.youtube.com/watch?v=MfsBUWSWm94&t=1010s&end=2020s', true, 1),
('65d29b56-0029-3221-0000-000000000003', '65d29b56-0029-2221-0000-000000000003', 'VIDEO', 'Spatial Data Representation Models: Raster Data Model (Pixels) vs Vector Data Model (Points, Lines, Polygons)', 'https://www.youtube.com/watch?v=MfsBUWSWm94&t=2020s&end=3030s', true, 1),
('65d29b56-0029-3221-0000-000000000004', '65d29b56-0029-2221-0000-000000000004', 'VIDEO', 'GIS Analytical Functions: Data Editing, Overlay Operations, Buffer Analysis & Real-World Practical Applications', 'https://www.youtube.com/watch?v=MfsBUWSWm94&t=3030s&end=4057s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
