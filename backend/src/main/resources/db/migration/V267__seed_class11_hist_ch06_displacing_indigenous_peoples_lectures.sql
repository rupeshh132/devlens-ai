-- V267__seed_class11_hist_ch06_displacing_indigenous_peoples_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 History Chapter 6: Displacing Indigenous Peoples
-- Masterclass Video: Next Toppers - 11th Humanities (AEwbfeLEfcQ)
-- 100% Zero-Gap Continuous Timeline: 0s to 7070s (01:57:50, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1100-0000-000000000006';

-- 2. Insert 4 Verified Master Subtopics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2106-0000-000000000001', '65d29b56-0027-1100-0000-000000000006', 'European Imperialism & Native Peoples of North America (Lifestyles & Trade Encounters)', 1, true),
('65d29b56-0027-2106-0000-000000000002', '65d29b56-0027-1100-0000-000000000006', 'Displacement of Natives, Broken Treaties, Trail of Tears & Reservation Policies', 2, true),
('65d29b56-0027-2106-0000-000000000003', '65d29b56-0027-1100-0000-000000000006', 'The California Gold Rush, Railway Expansion, Industrialization & Constitutional Struggle', 3, true),
('65d29b56-0027-2106-0000-000000000004', '65d29b56-0027-1100-0000-000000000006', 'Australia: British Settlement, Myth of Terra Nullius, Stolen Generations & Winds of Change', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 44:58 (0s to 2698s)
('65d29b56-0027-3106-0000-000000000001', '65d29b56-0027-2106-0000-000000000001', 'VIDEO', 'European Imperialism & Native Peoples of North America (Settler Colonialism, Subsistence Economies, Fur Trade, Wampum Belts, Gift-Giving Traditions & Mutual Perceptions)', 'https://www.youtube.com/watch?v=AEwbfeLEfcQ&t=0s&end=2698s', true, 1),

-- Topic 2: 44:58 to 01:20:23 (2698s to 4823s)
('65d29b56-0027-3106-0000-000000000002', '65d29b56-0027-2106-0000-000000000002', 'VIDEO', 'Displacement of Natives, Broken Treaties, Trail of Tears & Reservation Policies (Encroachment on Tribal Lands, President Andrew Jackson, Cherokee Nation & Forced March Trail of Tears)', 'https://www.youtube.com/watch?v=AEwbfeLEfcQ&t=2698s&end=4823s', true, 1),

-- Topic 3: 01:20:23 to 01:35:31 (4823s to 5731s)
('65d29b56-0027-3106-0000-000000000003', '65d29b56-0027-2106-0000-000000000003', 'VIDEO', 'The California Gold Rush, Railway Expansion, Industrialization & Constitutional Struggle (1840s Gold Rush, Transcontinental Railroads, Bison Extermination & 1934 Indian Reorganization Act)', 'https://www.youtube.com/watch?v=AEwbfeLEfcQ&t=4823s&end=5731s', true, 1),

-- Topic 4: 01:35:31 to 01:57:50 (5731s to 7070s)
('65d29b56-0027-3106-0000-000000000004', '65d29b56-0027-2106-0000-000000000004', 'VIDEO', 'Australia: British Settlement, Myth of Terra Nullius, Stolen Generations & Winds of Change (Captain Cook, Convict Penal Colony, Indigenous Repression, 1992 Mabo Decision & National Sorry Day)', 'https://www.youtube.com/watch?v=AEwbfeLEfcQ&t=5731s&end=7070s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
