-- V81__seed_class10_econ_ch4_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 10 Economics Chapter 4 / Overall SST Chapter 21 (Globalization and the Indian Economy)
-- Video: Digraj Singh Rajput (Globalisation and The Indian Economy | New One Shot | 8kiUJ65f8iQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2580s / 43m 00s)

-- 1. Remove old placeholder topics & content items for Economics Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000021'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000021';

-- 2. Insert 4 NCERT-Aligned Master Topics for Economics Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2021-0000-000000000001', '65d29b56-3333-1000-0000-000000000021', 'Introduction & What is Globalisation? Rapid Integration and Interconnection of Markets', 1, true),
('65d29b56-3333-2021-0000-000000000002', '65d29b56-3333-1000-0000-000000000021', 'Factors Enabling Globalisation (Part 1): Rapid Advances in Transportation & Information Technology (ICT)', 2, true),
('65d29b56-3333-2021-0000-000000000003', '65d29b56-3333-1000-0000-000000000021', 'Factors Enabling Globalisation (Part 2): Liberalisation of Foreign Trade and Foreign Investment Policy', 3, true),
('65d29b56-3333-2021-0000-000000000004', '65d29b56-3333-1000-0000-000000000021', 'India and the G20: Origins, Vasudhaiva Kutumbakam & India''s Leadership in Global Economy', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 2580s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3021-0000-000000000001', '65d29b56-3333-2021-0000-000000000001', 'VIDEO', 'Introduction & What is Globalisation? Rapid Integration and Interconnection of Markets', 'https://www.youtube.com/watch?v=8kiUJ65f8iQ&end=755s', true, 1),
('65d29b56-3333-3021-0000-000000000002', '65d29b56-3333-2021-0000-000000000002', 'VIDEO', 'Factors Enabling Globalisation (Part 1): Rapid Advances in Transportation & Information Technology (ICT)', 'https://www.youtube.com/watch?v=8kiUJ65f8iQ&t=755s&end=1095s', true, 1),
('65d29b56-3333-3021-0000-000000000003', '65d29b56-3333-2021-0000-000000000003', 'VIDEO', 'Factors Enabling Globalisation (Part 2): Liberalisation of Foreign Trade and Foreign Investment Policy', 'https://www.youtube.com/watch?v=8kiUJ65f8iQ&t=1095s&end=1843s', true, 1),
('65d29b56-3333-3021-0000-000000000004', '65d29b56-3333-2021-0000-000000000004', 'VIDEO', 'India and the G20: Origins, Vasudhaiva Kutumbakam & India''s Leadership in Global Economy', 'https://www.youtube.com/watch?v=8kiUJ65f8iQ&t=1843s&end=2580s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
