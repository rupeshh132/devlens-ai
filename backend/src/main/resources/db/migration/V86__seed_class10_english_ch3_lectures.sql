-- V86__seed_class10_english_ch3_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Chapter 3 (Two Stories about Flying - Part 1: His First Flight)
-- Video: Chandni Ma'am / Magnet Brains (ZTmmJZZhljE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3849s / 01h 04m 09s)

-- 1. Remove old placeholder topics & content items for English Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000003';

-- 2. Insert 4 NCERT-Aligned Master Topics for English Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2003-0000-000000000001', '65d29b56-4444-1000-0000-000000000003', 'Introduction & Author Profile: Liam O''Flaherty & The Theme of Overcoming Fear', 1, true),
('65d29b56-4444-2003-0000-000000000002', '65d29b56-4444-1000-0000-000000000003', 'The Young Seagull on the Ledge: Terror of the Abyss, Siblings'' Flight & The Threat of Starvation', 2, true),
('65d29b56-4444-2003-0000-000000000003', '65d29b56-4444-1000-0000-000000000003', 'The Mother''s Clever Ruse, The Dive for Fish & The Joyous Triumph of the First Flight', 3, true),
('65d29b56-4444-2003-0000-000000000004', '65d29b56-4444-1000-0000-000000000003', 'Comprehensive Chapter Summary, Key Themes, Metaphor of Flight & Outro', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 3849s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3003-0000-000000000001', '65d29b56-4444-2003-0000-000000000001', 'VIDEO', 'Introduction & Author Profile: Liam O''Flaherty & The Theme of Overcoming Fear', 'https://www.youtube.com/watch?v=ZTmmJZZhljE&end=280s', true, 1),
('65d29b56-4444-3003-0000-000000000002', '65d29b56-4444-2003-0000-000000000002', 'VIDEO', 'The Young Seagull on the Ledge: Terror of the Abyss, Siblings'' Flight & The Threat of Starvation', 'https://www.youtube.com/watch?v=ZTmmJZZhljE&t=280s&end=1600s', true, 1),
('65d29b56-4444-3003-0000-000000000003', '65d29b56-4444-2003-0000-000000000003', 'VIDEO', 'The Mother''s Clever Ruse, The Dive for Fish & The Joyous Triumph of the First Flight', 'https://www.youtube.com/watch?v=ZTmmJZZhljE&t=1600s&end=2940s', true, 1),
('65d29b56-4444-3003-0000-000000000004', '65d29b56-4444-2003-0000-000000000004', 'VIDEO', 'Comprehensive Chapter Summary, Key Themes, Metaphor of Flight & Outro', 'https://www.youtube.com/watch?v=ZTmmJZZhljE&t=2940s&end=3849s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
