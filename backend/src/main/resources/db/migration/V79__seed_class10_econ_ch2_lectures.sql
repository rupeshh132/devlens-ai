-- V79__seed_class10_econ_ch2_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 10 Economics Chapter 2 / Overall SST Chapter 19 (Sectors of the Indian Economy)
-- Video: Digraj Singh Rajput (Sectors of Indian Economy | New One Shot | y7QdyRP-jwQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4674s / 01h 17m 54s)

-- 1. Remove old placeholder topics & content items for Economics Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000019'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000019';

-- 2. Insert 6 NCERT-Aligned Master Topics for Economics Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2019-0000-000000000001', '65d29b56-3333-1000-0000-000000000019', 'Primary, Secondary and Tertiary Sectors of Economic Activities', 1, true),
('65d29b56-3333-2019-0000-000000000002', '65d29b56-3333-1000-0000-000000000019', 'Comparing the Three Sectors: Final Goods, Intermediate Goods & Gross Domestic Product (GDP)', 2, true),
('65d29b56-3333-2019-0000-000000000003', '65d29b56-3333-1000-0000-000000000019', 'Historical Changes in Sectors & Rising Importance of the Tertiary Sector in India', 3, true),
('65d29b56-3333-2019-0000-000000000004', '65d29b56-3333-1000-0000-000000000019', 'Where are Most People Employed? Disguised Unemployment & Strategies to Create Employment (MGNREGA)', 4, true),
('65d29b56-3333-2019-0000-000000000005', '65d29b56-3333-1000-0000-000000000019', 'Division of Sectors as Organised and Unorganised & Protection of Vulnerable Workers', 5, true),
('65d29b56-3333-2019-0000-000000000006', '65d29b56-3333-1000-0000-000000000019', 'Sectors in Terms of Ownership: Public vs Private Sectors & Role of Government', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4674s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3019-0000-000000000001', '65d29b56-3333-2019-0000-000000000001', 'VIDEO', 'Primary, Secondary and Tertiary Sectors of Economic Activities', 'https://www.youtube.com/watch?v=y7QdyRP-jwQ&end=678s', true, 1),
('65d29b56-3333-3019-0000-000000000002', '65d29b56-3333-2019-0000-000000000002', 'VIDEO', 'Comparing the Three Sectors: Final Goods, Intermediate Goods & Gross Domestic Product (GDP)', 'https://www.youtube.com/watch?v=y7QdyRP-jwQ&t=678s&end=1218s', true, 1),
('65d29b56-3333-3019-0000-000000000003', '65d29b56-3333-2019-0000-000000000003', 'VIDEO', 'Historical Changes in Sectors & Rising Importance of the Tertiary Sector in India', 'https://www.youtube.com/watch?v=y7QdyRP-jwQ&t=1218s&end=1969s', true, 1),
('65d29b56-3333-3019-0000-000000000004', '65d29b56-3333-2019-0000-000000000004', 'VIDEO', 'Where are Most People Employed? Disguised Unemployment & Strategies to Create Employment (MGNREGA)', 'https://www.youtube.com/watch?v=y7QdyRP-jwQ&t=1969s&end=3279s', true, 1),
('65d29b56-3333-3019-0000-000000000005', '65d29b56-3333-2019-0000-000000000005', 'VIDEO', 'Division of Sectors as Organised and Unorganised & Protection of Vulnerable Workers', 'https://www.youtube.com/watch?v=y7QdyRP-jwQ&t=3279s&end=4085s', true, 1),
('65d29b56-3333-3019-0000-000000000006', '65d29b56-3333-2019-0000-000000000006', 'VIDEO', 'Sectors in Terms of Ownership: Public vs Private Sectors & Role of Government', 'https://www.youtube.com/watch?v=y7QdyRP-jwQ&t=4085s&end=4674s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
