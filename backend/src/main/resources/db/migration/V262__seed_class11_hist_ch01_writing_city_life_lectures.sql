-- V262__seed_class11_hist_ch01_writing_city_life_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 History Chapter 1: Writing and City Life
-- Masterclass Video: Next Toppers - 11th Humanities (TrbJGOZWtHU)
-- 100% Zero-Gap Continuous Timeline: 0s to 11640s (03:14:00, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1100-0000-000000000001';

-- 2. Insert 4 Verified Master Subtopics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2101-0000-000000000001', '65d29b56-0027-1100-0000-000000000001', 'Introduction to Early Societies, Mesopotamian Geography & Archaeological Sources', 1, true),
('65d29b56-0027-2101-0000-000000000002', '65d29b56-0027-1100-0000-000000000001', 'Development of Writing, Cuneiform Script, Clay Tablets & Uses of Literacy', 2, true),
('65d29b56-0027-2101-0000-000000000003', '65d29b56-0027-1100-0000-000000000001', 'Urbanization in Southern Mesopotamia: Temples, Kings, Warfare & Palace Economy', 3, true),
('65d29b56-0027-2101-0000-000000000004', '65d29b56-0027-1100-0000-000000000001', 'Life in the City (Ur & Mari), Trading Networks & Intellectual Legacy of Writing', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 56:39 (0s to 3399s)
('65d29b56-0027-3101-0000-000000000001', '65d29b56-0027-2101-0000-000000000001', 'VIDEO', 'Introduction to Early Societies, Mesopotamian Geography & Archaeological Sources (Concept of Civilization, Tigris & Euphrates Rivers, Environmental Zones, Archaeological Excavations & Language Evolution)', 'https://www.youtube.com/watch?v=TrbJGOZWtHU&t=0s&end=3399s', true, 1),

-- Topic 2: 56:39 to 01:40:45 (3399s to 6045s)
('65d29b56-0027-3101-0000-000000000002', '65d29b56-0027-2101-0000-000000000002', 'VIDEO', 'Development of Writing, Cuneiform Script, Clay Tablets & Uses of Literacy (First Written Tablets, Pictographic Signs, Cuneiform Wedges, Scribes, Record Keeping & Uses of Writing in Administration)', 'https://www.youtube.com/watch?v=TrbJGOZWtHU&t=3399s&end=6045s', true, 1),

-- Topic 3: 01:40:45 to 02:23:48 (6045s to 8628s)
('65d29b56-0027-3101-0000-000000000003', '65d29b56-0027-2101-0000-000000000003', 'VIDEO', 'Urbanization in Southern Mesopotamia: Temples, Kings, Warfare & Palace Economy (Enmerkar Epic, Inanna & Moon God Nanna, Temple Architecture, Redistribution of Wealth, Military Leadership & Mobilization of Labour)', 'https://www.youtube.com/watch?v=TrbJGOZWtHU&t=6045s&end=8628s', true, 1),

-- Topic 4: 02:23:48 to 03:14:00 (8628s to 11640s)
('65d29b56-0027-3101-0000-000000000004', '65d29b56-0027-2101-0000-000000000004', 'VIDEO', 'Life in the City (Ur & Mari), Trading Networks & Intellectual Legacy of Writing (Residential Wards in Ur, Royal Palace of Zimrilim at Mari, Pastoralist-Farmer Interactions, Calendar & Mathematics Legacy)', 'https://www.youtube.com/watch?v=TrbJGOZWtHU&t=8628s&end=11640s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
