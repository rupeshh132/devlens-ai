-- V337__seed_class12_eco_ch11_rural_development_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 11 (Rural Development)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (lzP2bLvZiiI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2820s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Rural Development)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000011';

-- 2. Insert 4 Verified Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2211-0000-000000000001', '65d29b56-0030-1200-0000-000000000011', 'Rural Development: Key Challenges & Rural Credit: Institutional vs Non-Institutional Sources (NABARD, Commercial Banks, RRBs, SHGs)', 1, true),
('65d29b56-0030-2211-0000-000000000002', '65d29b56-0030-1200-0000-000000000011', 'Agricultural Marketing System: Defects & Government Measures (Regulated Markets, Cooperatives, MSP, Buffer Stocks, PDS)', 2, true),
('65d29b56-0030-2211-0000-000000000003', '65d29b56-0030-1200-0000-000000000011', 'Emerging Alternative Marketing Channels & Agricultural Diversification: Animal Husbandry, Dairying, Fisheries & Horticulture', 3, true),
('65d29b56-0030-2211-0000-000000000004', '65d29b56-0030-1200-0000-000000000011', 'Sustainable Agriculture and Organic Farming: Meaning, Benefits, Limitations & Policy Initiatives', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3211-0000-000000000001', '65d29b56-0030-2211-0000-000000000001', 'VIDEO', 'Rural Development: Key Challenges & Rural Credit: Institutional vs Non-Institutional Sources (NABARD, Commercial Banks, RRBs, SHGs)', 'https://www.youtube.com/watch?v=lzP2bLvZiiI&end=680s', true, 1),
('65d29b56-0030-3211-0000-000000000002', '65d29b56-0030-2211-0000-000000000002', 'VIDEO', 'Agricultural Marketing System: Defects & Government Measures (Regulated Markets, Cooperatives, MSP, Buffer Stocks, PDS)', 'https://www.youtube.com/watch?v=lzP2bLvZiiI&t=680s&end=1380s', true, 1),
('65d29b56-0030-3211-0000-000000000003', '65d29b56-0030-2211-0000-000000000003', 'VIDEO', 'Emerging Alternative Marketing Channels & Agricultural Diversification: Animal Husbandry, Dairying, Fisheries & Horticulture', 'https://www.youtube.com/watch?v=lzP2bLvZiiI&t=1380s&end=2050s', true, 1),
('65d29b56-0030-3211-0000-000000000004', '65d29b56-0030-2211-0000-000000000004', 'VIDEO', 'Sustainable Agriculture and Organic Farming: Meaning, Benefits, Limitations & Policy Initiatives', 'https://www.youtube.com/watch?v=lzP2bLvZiiI&t=2050s&end=2820s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
