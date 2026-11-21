-- V257__seed_class11_geo_ch18_climate_india_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 18: Climate of India (Book 2 Ch 4)
-- Masterclass Video: Next Toppers - 11th Humanities (JbqOXOHTixQ)
-- 100% Zero-Gap Continuous Timeline: 0s to 6565s (01:49:25, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 18
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000018'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000018';

-- 2. Insert 4 Verified Master Subtopics for Chapter 18
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2118-0000-000000000001', '65d29b56-0029-1100-0000-000000000018', 'Unity and Diversity in Indian Monsoon & Factors Determining India Climate', 1, true),
('65d29b56-0029-2118-0000-000000000002', '65d29b56-0029-1100-0000-000000000018', 'The Nature of Indian Monsoon: Onset, Mechanism, ITCZ Shifts & Branch Dynamics', 2, true),
('65d29b56-0029-2118-0000-000000000003', '65d29b56-0029-1100-0000-000000000018', 'The Rhythm of Seasons: Cold Weather, Hot Weather, SW Monsoon & Retreating Seasons', 3, true),
('65d29b56-0029-2118-0000-000000000004', '65d29b56-0029-1100-0000-000000000018', 'Distribution of Rainfall, Monsoon and Economic Life of India & Global Warming Impact', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 23:20 (0s to 1400s)
('65d29b56-0029-3118-0000-000000000001', '65d29b56-0029-2118-0000-000000000001', 'VIDEO', 'Unity and Diversity in Indian Monsoon & Factors Determining India Climate (Tropical Monsoon Climate Type, Latitude, Himalayan Barrier, Relief, Altitude, Subtropical Westerly Jet Streams & Easterly Tropical Jet)', 'https://www.youtube.com/watch?v=JbqOXOHTixQ&t=0s&end=1400s', true, 1),

-- Topic 2: 23:20 to 56:40 (1400s to 3400s)
('65d29b56-0029-3118-0000-000000000002', '65d29b56-0029-2118-0000-000000000002', 'VIDEO', 'The Nature of Indian Monsoon: Onset, Mechanism, ITCZ Shifts & Branch Dynamics (Tibetan Plateau Heating, Inter-Tropical Convergence Zone Migration, Arabian Sea Branch vs Bay of Bengal Branch, Burst of Monsoon)', 'https://www.youtube.com/watch?v=JbqOXOHTixQ&t=1400s&end=3400s', true, 1),

-- Topic 3: 56:40 to 01:25:00 (3400s to 5100s)
('65d29b56-0029-3118-0000-000000000003', '65d29b56-0029-2118-0000-000000000003', 'VIDEO', 'The Rhythm of Seasons: Cold Weather, Hot Weather, SW Monsoon & Retreating Seasons (Western Disturbances, Loo Winds, Kalbaisakhi Norwesters, Mango Showers, October Heat & Winter Coromandel Coast Rains)', 'https://www.youtube.com/watch?v=JbqOXOHTixQ&t=3400s&end=5100s', true, 1),

-- Topic 4: 01:25:00 to 01:49:25 (5100s to 6565s)
('65d29b56-0029-3118-0000-000000000004', '65d29b56-0029-2118-0000-000000000004', 'VIDEO', 'Distribution of Rainfall, Monsoon and Economic Life of India & Global Warming Impact (Heavy Rainfall Zones Mawsynram, Low Rainfall Desert Margins, Agrarian Dependence, El Nino Southern Oscillation & Climate Vulnerability)', 'https://www.youtube.com/watch?v=JbqOXOHTixQ&t=5100s&end=6565s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
