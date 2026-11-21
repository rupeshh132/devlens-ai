-- V264__seed_class11_hist_ch03_nomadic_empires_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 History Chapter 3: Nomadic Empires
-- Masterclass Video: Next Toppers - 11th Humanities (wX5h1ABVkwE)
-- 100% Zero-Gap Continuous Timeline: 0s to 8760s (02:26:00, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1100-0000-000000000003';

-- 2. Insert 4 Verified Master Subtopics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2103-0000-000000000001', '65d29b56-0027-1100-0000-000000000003', 'Nature of Steppe Nomadism, Historical Sources, Historiography & Tribal Social Order', 1, true),
('65d29b56-0027-2103-0000-000000000002', '65d29b56-0027-1100-0000-000000000003', 'Genghis Khan: Early Life, Rise to Khagan, Military Campaigns & Cavalry Strategies', 2, true),
('65d29b56-0027-2103-0000-000000000003', '65d29b56-0027-1100-0000-000000000003', 'Social, Military & Administrative Structure: The Decimal Units, Kheshig & Yam Courier', 3, true),
('65d29b56-0027-2103-0000-000000000004', '65d29b56-0027-1100-0000-000000000003', 'Pax Mongolica, The Yasa Legal Code, Trans-Eurasian Trade Routes & World Historical Impact', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 39:48 (0s to 2388s)
('65d29b56-0027-3103-0000-000000000001', '65d29b56-0027-2103-0000-000000000001', 'VIDEO', 'Nature of Steppe Nomadism, Historical Sources, Historiography & Tribal Social Order (Central Asian Steppes, Pastoral Economy, Relations with Sedentary Civilizations & Secret History of the Mongols)', 'https://www.youtube.com/watch?v=wX5h1ABVkwE&t=0s&end=2388s', true, 1),

-- Topic 2: 39:48 to 01:25:42 (2388s to 5142s)
('65d29b56-0027-3103-0000-000000000002', '65d29b56-0027-2103-0000-000000000002', 'VIDEO', 'Genghis Khan: Early Life, Rise to Khagan, Military Campaigns & Cavalry Strategies (Temujin Blood Brotherhood, 1206 Quriltai, Conquest of Northern China, Khwarazmian Campaign & Rapid Horse Archers)', 'https://www.youtube.com/watch?v=wX5h1ABVkwE&t=2388s&end=5142s', true, 1),

-- Topic 3: 01:25:42 to 01:53:39 (5142s to 6819s)
('65d29b56-0027-3103-0000-000000000003', '65d29b56-0027-2103-0000-000000000003', 'VIDEO', 'Social, Military & Administrative Structure: The Decimal Units, Kheshig & Yam Courier (Aruq Rearguard, Decimal Military Units, Royal Bodyguard Kheshig, Yam Postal Network & Paiza Passports)', 'https://www.youtube.com/watch?v=wX5h1ABVkwE&t=5142s&end=6819s', true, 1),

-- Topic 4: 01:53:39 to 02:26:00 (6819s to 8760s)
('65d29b56-0027-3103-0000-000000000004', '65d29b56-0027-2103-0000-000000000004', 'VIDEO', 'Pax Mongolica, The Yasa Legal Code, Trans-Eurasian Trade Routes & World Historical Impact (Silk Road Security, Division into Four Uluses, Yasa Decrees, Pluralism & National Icon of Mongolia)', 'https://www.youtube.com/watch?v=wX5h1ABVkwE&t=6819s&end=8760s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
