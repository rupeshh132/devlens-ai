-- V85__seed_class10_english_ch2_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Chapter 2 (Nelson Mandela: Long Walk to Freedom)
-- Video: Chandni Ma'am / Magnet Brains (O1PocKoabTo)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4750s / 01h 19m 10s)

-- 1. Remove old placeholder topics & content items for English Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000002';

-- 2. Insert 4 NCERT-Aligned Master Topics for English Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2002-0000-000000000001', '65d29b56-4444-1000-0000-000000000002', 'Introduction, Historical Context of Apartheid & South Africa''s First Democratic Non-Racial Election', 1, true),
('65d29b56-4444-2002-0000-000000000002', '65d29b56-4444-1000-0000-000000000002', 'The 10th May Inauguration Ceremony at Pretoria Amphitheatre & Nelson Mandela''s Historic Presidential Address', 2, true),
('65d29b56-4444-2002-0000-000000000003', '65d29b56-4444-1000-0000-000000000002', 'Military Flypast, Dual National Anthems, Meaning of Courage & Tribute to African Patriots (Oliver Tambo, Walter Sisulu)', 3, true),
('65d29b56-4444-2002-0000-000000000004', '65d29b56-4444-1000-0000-000000000002', 'Twin Obligations of Man, The Evolution of Freedom & The Indivisible Bonds of Humanity (Oppressor & Oppressed)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4750s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3002-0000-000000000001', '65d29b56-4444-2002-0000-000000000001', 'VIDEO', 'Introduction, Historical Context of Apartheid & South Africa''s First Democratic Non-Racial Election', 'https://www.youtube.com/watch?v=O1PocKoabTo&end=590s', true, 1),
('65d29b56-4444-3002-0000-000000000002', '65d29b56-4444-2002-0000-000000000002', 'VIDEO', 'The 10th May Inauguration Ceremony at Pretoria Amphitheatre & Nelson Mandela''s Historic Presidential Address', 'https://www.youtube.com/watch?v=O1PocKoabTo&t=590s&end=1880s', true, 1),
('65d29b56-4444-3002-0000-000000000003', '65d29b56-4444-2002-0000-000000000003', 'VIDEO', 'Military Flypast, Dual National Anthems, Meaning of Courage & Tribute to African Patriots (Oliver Tambo, Walter Sisulu)', 'https://www.youtube.com/watch?v=O1PocKoabTo&t=1880s&end=3450s', true, 1),
('65d29b56-4444-3002-0000-000000000004', '65d29b56-4444-2002-0000-000000000004', 'VIDEO', 'Twin Obligations of Man, The Evolution of Freedom & The Indivisible Bonds of Humanity (Oppressor & Oppressed)', 'https://www.youtube.com/watch?v=O1PocKoabTo&t=3450s&end=4750s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
