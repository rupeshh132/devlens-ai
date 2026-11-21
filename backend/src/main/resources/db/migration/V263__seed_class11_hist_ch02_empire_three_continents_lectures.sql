-- V263__seed_class11_hist_ch02_empire_three_continents_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 History Chapter 2: An Empire Across Three Continents
-- Masterclass Video: Next Toppers - 11th Humanities (yhAVg-3Y2Ys)
-- 100% Zero-Gap Continuous Timeline: 0s to 12400s (03:26:40, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1100-0000-000000000002';

-- 2. Insert 4 Verified Master Subtopics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2102-0000-000000000001', '65d29b56-0027-1100-0000-000000000002', 'Geographical Extent, Historical Sources & Political Evolution (Emperor, Senate & Army)', 1, true),
('65d29b56-0027-2102-0000-000000000002', '65d29b56-0027-1100-0000-000000000002', 'Urbanization, The Third Century Crisis, Gender Relations & Cultural Literacy', 2, true),
('65d29b56-0027-2102-0000-000000000003', '65d29b56-0027-1100-0000-000000000002', 'Economic Expansion, Trade Infrastructure, Institution of Slavery & Social Hierarchies', 3, true),
('65d29b56-0027-2102-0000-000000000004', '65d29b56-0027-1100-0000-000000000002', 'Late Antiquity: Diocletian Reforms, Christianization, Monetary Shifts & Transition', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 01:01:46 (0s to 3706s)
('65d29b56-0027-3102-0000-000000000001', '65d29b56-0027-2102-0000-000000000001', 'VIDEO', 'Geographical Extent, Historical Sources & Political Evolution (The Three Continents, Mediterranean Core, Texts/Documents/Material Remains, Principate of Augustus, Senate & Professional Army)', 'https://www.youtube.com/watch?v=yhAVg-3Y2Ys&t=0s&end=3706s', true, 1),

-- Topic 2: 01:01:46 to 01:59:48 (3706s to 7188s)
('65d29b56-0027-3102-0000-000000000002', '65d29b56-0027-2102-0000-000000000002', 'VIDEO', 'Urbanization, The Third Century Crisis, Gender Relations & Cultural Literacy (Provincial Administration, Public Amenities, Iranian Sasanian Wars, Germanic Invasions, Nuclear Family & Widespread Literacy)', 'https://www.youtube.com/watch?v=yhAVg-3Y2Ys&t=3706s&end=7188s', true, 1),

-- Topic 3: 01:59:48 to 02:54:58 (7188s to 10498s)
('65d29b56-0027-3102-0000-000000000003', '65d29b56-0027-2102-0000-000000000003', 'VIDEO', 'Economic Expansion, Trade Infrastructure, Institution of Slavery & Social Hierarchies (Amphorae Oil/Wine Trade, Hydraulic Mining, Slave Labour Management, Columella/Elder Pliny & Aristocratic Wealth)', 'https://www.youtube.com/watch?v=yhAVg-3Y2Ys&t=7188s&end=10498s', true, 1),

-- Topic 4: 02:54:58 to 03:26:40 (10498s to 12400s)
('65d29b56-0027-3102-0000-000000000004', '65d29b56-0027-2102-0000-000000000004', 'VIDEO', 'Late Antiquity: Diocletian Reforms, Christianization, Monetary Shifts & Transition (Diocletian Fortifications, Constantine Gold Solidus, Constantinople Foundation, Rise of Islam & Legacy)', 'https://www.youtube.com/watch?v=yhAVg-3Y2Ys&t=10498s&end=12400s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
