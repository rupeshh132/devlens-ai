-- V243__seed_class11_geo_ch04_oceans_continents_distribution_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 4: Distribution of Oceans and Continents
-- Masterclass Video: Next Toppers - 11th Humanities (zyWIHOJ3fi8)
-- 100% Zero-Gap Continuous Timeline: 0s to 7260s (02:01:00, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000004';

-- 2. Insert 4 Verified Master Subtopics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2104-0000-000000000001', '65d29b56-0029-1100-0000-000000000004', 'Continental Drift Theory: Wegener Hypothesis, Evidences & Forces for Drifting', 1, true),
('65d29b56-0029-2104-0000-000000000002', '65d29b56-0029-1100-0000-000000000004', 'Post-Drift Studies, Ocean Floor Mapping & Ocean Floor Configuration', 2, true),
('65d29b56-0029-2104-0000-000000000003', '65d29b56-0029-1100-0000-000000000004', 'Concept of Seafloor Spreading & Distribution of Earthquakes and Volcanoes', 3, true),
('65d29b56-0029-2104-0000-000000000004', '65d29b56-0029-1100-0000-000000000004', 'Plate Tectonics: Plate Boundaries (Divergent, Convergent, Transform) & Indian Plate Movement', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 43:00 (0s to 2580s)
('65d29b56-0029-3104-0000-000000000001', '65d29b56-0029-2104-0000-000000000001', 'VIDEO', 'Continental Drift Theory: Wegener Hypothesis, Evidences & Forces for Drifting (Pangaea, Panthalassa, Jig-saw Fit of Coastlines, Rocks of Same Age, Tillite, Placer Deposits & Mesosaurus Fossils)', 'https://www.youtube.com/watch?v=zyWIHOJ3fi8&t=0s&end=2580s', true, 1),

-- Topic 2: 43:00 to 01:15:00 (2580s to 4500s)
('65d29b56-0029-3104-0000-000000000002', '65d29b56-0029-2104-0000-000000000002', 'VIDEO', 'Post-Drift Studies, Ocean Floor Mapping & Ocean Floor Configuration (Convectional Current Theory of Holmes, Continental Margins, Abyssal Plains & Mid-Oceanic Ridge Basins)', 'https://www.youtube.com/watch?v=zyWIHOJ3fi8&t=2580s&end=4500s', true, 1),

-- Topic 3: 01:15:00 to 01:45:50 (4500s to 6350s)
('65d29b56-0029-3104-0000-000000000003', '65d29b56-0029-2104-0000-000000000003', 'VIDEO', 'Concept of Seafloor Spreading & Distribution of Earthquakes and Volcanoes (Hess Theory, Ocean Crust Basalt Age, Magnetic Anomalies & Pacific Ring of Fire Volcanic Belts)', 'https://www.youtube.com/watch?v=zyWIHOJ3fi8&t=4500s&end=6350s', true, 1),

-- Topic 4: 01:45:50 to 02:01:00 (6350s to 7260s)
('65d29b56-0029-3104-0000-000000000004', '65d29b56-0029-2104-0000-000000000004', 'VIDEO', 'Plate Tectonics: Plate Boundaries (Divergent, Convergent, Transform) & Indian Plate Movement (7 Major & Minor Plates, Subduction, Orogeny, Collision with Eurasian Plate & Himalayan Rise)', 'https://www.youtube.com/watch?v=zyWIHOJ3fi8&t=6350s&end=7260s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
