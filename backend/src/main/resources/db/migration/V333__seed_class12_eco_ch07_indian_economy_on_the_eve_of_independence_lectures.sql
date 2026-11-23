-- V333__seed_class12_eco_ch07_indian_economy_on_the_eve_of_independence_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 7 (Indian Economy on the Eve of Independence)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (hd70pfG6CZs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2480s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Indian Economy on the Eve of Independence)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000007';

-- 2. Insert 4 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2207-0000-000000000001', '65d29b56-0030-1200-0000-000000000007', 'Colonial Exploitation, Stagnant Economy & Early National Income Estimates (Dadabhai Naoroji, V.K.R.V. Rao)', 1, true),
('65d29b56-0030-2207-0000-000000000002', '65d29b56-0030-1200-0000-000000000007', 'Agricultural Sector Under British Rule: Land Settlement (Zamindari System), Commercialisation & Low Productivity', 2, true),
('65d29b56-0030-2207-0000-000000000003', '65d29b56-0030-1200-0000-000000000007', 'Industrial Sector: De-industrialisation, Systematic Decay of Handicrafts & Lack of Modern Capital Goods Industry', 3, true),
('65d29b56-0030-2207-0000-000000000004', '65d29b56-0030-1200-0000-000000000007', 'Foreign Trade Monopoly, Demographic Profile (1921 Year of Great Divide), Occupational Structure & Infrastructure', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3207-0000-000000000001', '65d29b56-0030-2207-0000-000000000001', 'VIDEO', 'Colonial Exploitation, Stagnant Economy & Early National Income Estimates (Dadabhai Naoroji, V.K.R.V. Rao)', 'https://www.youtube.com/watch?v=hd70pfG6CZs&end=620s', true, 1),
('65d29b56-0030-3207-0000-000000000002', '65d29b56-0030-2207-0000-000000000002', 'VIDEO', 'Agricultural Sector Under British Rule: Land Settlement (Zamindari System), Commercialisation & Low Productivity', 'https://www.youtube.com/watch?v=hd70pfG6CZs&t=620s&end=1250s', true, 1),
('65d29b56-0030-3207-0000-000000000003', '65d29b56-0030-2207-0000-000000000003', 'VIDEO', 'Industrial Sector: De-industrialisation, Systematic Decay of Handicrafts & Lack of Modern Capital Goods Industry', 'https://www.youtube.com/watch?v=hd70pfG6CZs&t=1250s&end=1850s', true, 1),
('65d29b56-0030-3207-0000-000000000004', '65d29b56-0030-2207-0000-000000000004', 'VIDEO', 'Foreign Trade Monopoly, Demographic Profile (1921 Year of Great Divide), Occupational Structure & Infrastructure', 'https://www.youtube.com/watch?v=hd70pfG6CZs&t=1850s&end=2480s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
