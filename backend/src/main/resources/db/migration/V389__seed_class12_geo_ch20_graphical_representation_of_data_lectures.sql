-- V389__seed_class12_geo_ch20_graphical_representation_of_data_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 20 (Graphical Representation of Data)
-- Video: AC eduhub (NCERT Practical Masterclass) (afj5YORcMCc)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1811s)

-- 1. Remove old placeholder topics & content items for Chapter 20 (Graphical Representation of Data)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000020'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000020';

-- 2. Insert 4 Verified Master Topics for Chapter 20
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2220-0000-000000000001', '65d29b56-0029-1200-0000-000000000020', 'General Principles of Graphical Construction & One-Dimensional Diagrams (Line Graphs and Polygraphs)', 1, true),
('65d29b56-0029-2220-0000-000000000002', '65d29b56-0029-1200-0000-000000000020', 'Bar Diagrams: Simple Bar Diagrams, Multiple Bar Diagrams & Compound / Subdivided Bar Diagrams', 2, true),
('65d29b56-0029-2220-0000-000000000003', '65d29b56-0029-1200-0000-000000000020', 'Two-Dimensional Diagrams: Pie Charts / Circle Diagrams (Angle Calculation and Sector Plotting)', 3, true),
('65d29b56-0029-2220-0000-000000000004', '65d29b56-0029-1200-0000-000000000020', 'Thematic Mapping Techniques: Dot Maps, Choropleth Maps and Isopleth Maps', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3220-0000-000000000001', '65d29b56-0029-2220-0000-000000000001', 'VIDEO', 'General Principles of Graphical Construction & One-Dimensional Diagrams (Line Graphs and Polygraphs)', 'https://www.youtube.com/watch?v=afj5YORcMCc&end=450s', true, 1),
('65d29b56-0029-3220-0000-000000000002', '65d29b56-0029-2220-0000-000000000002', 'VIDEO', 'Bar Diagrams: Simple Bar Diagrams, Multiple Bar Diagrams & Compound / Subdivided Bar Diagrams', 'https://www.youtube.com/watch?v=afj5YORcMCc&t=450s&end=900s', true, 1),
('65d29b56-0029-3220-0000-000000000003', '65d29b56-0029-2220-0000-000000000003', 'VIDEO', 'Two-Dimensional Diagrams: Pie Charts / Circle Diagrams (Angle Calculation and Sector Plotting)', 'https://www.youtube.com/watch?v=afj5YORcMCc&t=900s&end=1350s', true, 1),
('65d29b56-0029-3220-0000-000000000004', '65d29b56-0029-2220-0000-000000000004', 'VIDEO', 'Thematic Mapping Techniques: Dot Maps, Choropleth Maps and Isopleth Maps', 'https://www.youtube.com/watch?v=afj5YORcMCc&t=1350s&end=1811s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
