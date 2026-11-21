-- V265__seed_class11_hist_ch04_three_orders_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 History Chapter 4: The Three Orders
-- Masterclass Video: Next Toppers - 11th Humanities (tsQl3NPvGzk)
-- 100% Zero-Gap Continuous Timeline: 0s to 9750s (02:42:30, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1100-0000-000000000004';

-- 2. Insert 4 Verified Master Subtopics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2104-0000-000000000001', '65d29b56-0027-1100-0000-000000000004', 'Concept of Feudalism, Historiography & The Second Order (Nobility & Manorial Estates)', 1, true),
('65d29b56-0027-2104-0000-000000000002', '65d29b56-0027-1100-0000-000000000004', 'The Knights, The First Order (The Catholic Church, Clergy & Monastic Orders)', 2, true),
('65d29b56-0027-2104-0000-000000000003', '65d29b56-0027-1100-0000-000000000004', 'The Third Order (Peasantry & Serfs), Agricultural Transformations & Cathedral Towns', 3, true),
('65d29b56-0027-2104-0000-000000000004', '65d29b56-0027-1100-0000-000000000004', 'The Fourteenth-Century Crisis (Black Death), Peasant Revolts & Rise of Absolute Monarchies', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 49:01 (0s to 2941s)
('65d29b56-0027-3104-0000-000000000001', '65d29b56-0027-2104-0000-000000000001', 'VIDEO', 'Concept of Feudalism, Historiography & The Second Order (Marc Bloch Feudal Society, Early French Monarchy, Vassalage Ritual, Lord-Vassal Relationship & Castle Manors)', 'https://www.youtube.com/watch?v=tsQl3NPvGzk&t=0s&end=2941s', true, 1),

-- Topic 2: 49:01 to 01:23:51 (2941s to 5031s)
('65d29b56-0027-3104-0000-000000000002', '65d29b56-0027-2104-0000-000000000002', 'VIDEO', 'The Knights, The First Order (The Catholic Church, Clergy & Monastic Orders) (Fief Grants to Knights, Minstrels, Papal Authority, Church Tithes, Monasteries of St. Benedict & Cluny, Monastic Rules)', 'https://www.youtube.com/watch?v=tsQl3NPvGzk&t=2941s&end=5031s', true, 1),

-- Topic 3: 01:23:51 to 02:07:33 (5031s to 7653s)
('65d29b56-0027-3104-0000-000000000003', '65d29b56-0027-2104-0000-000000000003', 'VIDEO', 'The Third Order (Peasantry & Serfs), Agricultural Transformations & Cathedral Towns (Free Peasants vs Unfree Serfs, Heavy Wheeled Ploughs, Three-Field System, Trade Fairs, Guilds & Cathedrals)', 'https://www.youtube.com/watch?v=tsQl3NPvGzk&t=5031s&end=7653s', true, 1),

-- Topic 4: 02:07:33 to 02:42:30 (7653s to 9750s)
('65d29b56-0027-3104-0000-000000000004', '65d29b56-0027-2104-0000-000000000004', 'VIDEO', 'The Fourteenth-Century Crisis (Black Death), Peasant Revolts & Rise of Absolute Monarchies (Bubonic Plague Epidemic, Labour Shortages, 1381 Peasants Revolt, New Monarchs in France & England)', 'https://www.youtube.com/watch?v=tsQl3NPvGzk&t=7653s&end=9750s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
