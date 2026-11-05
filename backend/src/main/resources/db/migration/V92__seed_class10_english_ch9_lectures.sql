-- V92__seed_class10_english_ch9_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Chapter 9 (The Proposal - Play)
-- Video: Educational Bhaiya (ZrJsp2JrfYQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 927s / 15m 27s)
-- Completes all 9 First Flight Prose Chapters (Ch 1 to Ch 9)

-- 1. Remove old placeholder topics & content items for English Chapter 9
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000009';

-- 2. Insert 4 NCERT-Aligned Master Topics for English Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2009-0000-000000000001', '65d29b56-4444-1000-0000-000000000009', 'Lomov''s Formal Arrival, Marriage Intentions & Chubukov''s Overjoyed Consent', 1, true),
('65d29b56-4444-2009-0000-000000000002', '65d29b56-4444-1000-0000-000000000009', 'The First Dispute: The Oxen Meadows Ownership & Fierce Generational Insults', 2, true),
('65d29b56-4444-2009-0000-000000000003', '65d29b56-4444-1000-0000-000000000009', 'Natalya''s Hysteria, Lomov''s Recall & The Second Dispute: Guess vs Squeezer', 3, true),
('65d29b56-4444-2009-0000-000000000004', '65d29b56-4444-1000-0000-000000000009', 'Lomov''s Collapse, The Frantic Betrothal & Chekhovian Farce ("Champagne! Champagne!")', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 927s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3009-0000-000000000001', '65d29b56-4444-2009-0000-000000000001', 'VIDEO', 'Lomov''s Formal Arrival, Marriage Intentions & Chubukov''s Overjoyed Consent', 'https://www.youtube.com/watch?v=ZrJsp2JrfYQ&end=270s', true, 1),
('65d29b56-4444-3009-0000-000000000002', '65d29b56-4444-2009-0000-000000000002', 'VIDEO', 'The First Dispute: The Oxen Meadows Ownership & Fierce Generational Insults', 'https://www.youtube.com/watch?v=ZrJsp2JrfYQ&t=270s&end=530s', true, 1),
('65d29b56-4444-3009-0000-000000000003', '65d29b56-4444-2009-0000-000000000003', 'VIDEO', 'Natalya''s Hysteria, Lomov''s Recall & The Second Dispute: Guess vs Squeezer', 'https://www.youtube.com/watch?v=ZrJsp2JrfYQ&t=530s&end=730s', true, 1),
('65d29b56-4444-3009-0000-000000000004', '65d29b56-4444-2009-0000-000000000004', 'VIDEO', 'Lomov''s Collapse, The Frantic Betrothal & Chekhovian Farce ("Champagne! Champagne!")', 'https://www.youtube.com/watch?v=ZrJsp2JrfYQ&t=730s&end=927s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
