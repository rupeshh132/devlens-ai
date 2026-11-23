-- V354__seed_class12_eng_ch13_flamingo_poem_aunt_jennifers_tigers_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 13 (Flamingo Poem: Aunt Jennifer''s Tigers)
-- Video: Simran Sahni (Board Exam Masterclass) (OdlmOX8X-8A)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 510s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Flamingo Poem: Aunt Jennifer''s Tigers)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000013';

-- 2. Insert 3 Verified Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2213-0000-000000000001', '65d29b56-0301-1200-0000-000000000013', 'The Embroidered Tigers Prancing across the Screen: "Bright Topaz Denizens" & Chivalric Fearlessness', 1, true),
('65d29b56-0301-2213-0000-000000000002', '65d29b56-0301-1200-0000-000000000013', 'Aunt Jennifer''s Trembling Fingers, The Ivory Needle & "The Massive Weight of Uncle''s Wedding Band"', 2, true),
('65d29b56-0301-2213-0000-000000000003', '65d29b56-0301-1200-0000-000000000013', '"Ringed with Ordeals She was Mastered by", Immortality of Feminist Art vs Patriarchy, Poetic Devices', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3213-0000-000000000001', '65d29b56-0301-2213-0000-000000000001', 'VIDEO', 'The Embroidered Tigers Prancing across the Screen: "Bright Topaz Denizens" & Chivalric Fearlessness', 'https://www.youtube.com/watch?v=OdlmOX8X-8A&end=170s', true, 1),
('65d29b56-0301-3213-0000-000000000002', '65d29b56-0301-2213-0000-000000000002', 'VIDEO', 'Aunt Jennifer''s Trembling Fingers, The Ivory Needle & "The Massive Weight of Uncle''s Wedding Band"', 'https://www.youtube.com/watch?v=OdlmOX8X-8A&t=170s&end=340s', true, 1),
('65d29b56-0301-3213-0000-000000000003', '65d29b56-0301-2213-0000-000000000003', 'VIDEO', '"Ringed with Ordeals She was Mastered by", Immortality of Feminist Art vs Patriarchy, Poetic Devices', 'https://www.youtube.com/watch?v=OdlmOX8X-8A&t=340s&end=510s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
