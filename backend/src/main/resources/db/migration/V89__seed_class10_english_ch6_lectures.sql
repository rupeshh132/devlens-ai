-- V89__seed_class10_english_ch6_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Chapter 6 (Mijbil the Otter)
-- Video: Educational Bhaiya (_xY1T-1GYMQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1077s / 17m 57s)

-- 1. Remove old placeholder topics & content items for English Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000006';

-- 2. Insert 4 NCERT-Aligned Master Topics for English Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2006-0000-000000000001', '65d29b56-4444-1000-0000-000000000006', 'Gavin Maxwell''s Journey to Iraq, Camusfearna & Arrival of the Otter in Basra', 1, true),
('65d29b56-4444-2006-0000-000000000002', '65d29b56-4444-1000-0000-000000000006', 'Mijbil''s Appearance (Maxwell''s Otter), Bathroom Water Obsession & Playful Inventions', 2, true),
('65d29b56-4444-2006-0000-000000000003', '65d29b56-4444-1000-0000-000000000006', 'The Terrifying Box Ordeal, Airport Dash & Flight Commotion to London', 3, true),
('65d29b56-4444-2006-0000-000000000004', '65d29b56-4444-1000-0000-000000000006', 'London Flat Life, Primary School Wall Ritual & The Hilarious Identity Guesses', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 1077s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3006-0000-000000000001', '65d29b56-4444-2006-0000-000000000001', 'VIDEO', 'Gavin Maxwell''s Journey to Iraq, Camusfearna & Arrival of the Otter in Basra', 'https://www.youtube.com/watch?v=_xY1T-1GYMQ&end=240s', true, 1),
('65d29b56-4444-3006-0000-000000000002', '65d29b56-4444-2006-0000-000000000002', 'VIDEO', 'Mijbil''s Appearance (Maxwell''s Otter), Bathroom Water Obsession & Playful Inventions', 'https://www.youtube.com/watch?v=_xY1T-1GYMQ&t=240s&end=570s', true, 1),
('65d29b56-4444-3006-0000-000000000003', '65d29b56-4444-2006-0000-000000000003', 'VIDEO', 'The Terrifying Box Ordeal, Airport Dash & Flight Commotion to London', 'https://www.youtube.com/watch?v=_xY1T-1GYMQ&t=570s&end=820s', true, 1),
('65d29b56-4444-3006-0000-000000000004', '65d29b56-4444-2006-0000-000000000004', 'VIDEO', 'London Flat Life, Primary School Wall Ritual & The Hilarious Identity Guesses', 'https://www.youtube.com/watch?v=_xY1T-1GYMQ&t=820s&end=1077s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
