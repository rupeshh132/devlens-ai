-- V87__seed_class10_english_ch4_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Chapter 4 (From the Diary of Anne Frank)
-- Video: Chandni Ma'am / Magnet Brains (9pENOqI6pl4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4505s / 01h 15m 05s)

-- 1. Remove old placeholder topics & content items for English Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000004';

-- 2. Insert 4 NCERT-Aligned Master Topics for English Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2004-0000-000000000001', '65d29b56-4444-1000-0000-000000000004', 'Introduction, Historical Context of Anne Frank & The Secret Annex Background', 1, true),
('65d29b56-4444-2004-0000-000000000002', '65d29b56-4444-1000-0000-000000000004', 'The Need for a Diary, "Paper Has More Patience Than People" & Anne''s Early Life and Family History', 2, true),
('65d29b56-4444-2004-0000-000000000003', '65d29b56-4444-1000-0000-000000000004', 'The Diary Entry of 20 June 1942: Classroom Anxiety, Mr. Keesing & The Three Chatterbox Essays', 3, true),
('65d29b56-4444-2004-0000-000000000004', '65d29b56-4444-1000-0000-000000000004', 'Comprehensive Chapter Summary, Key Themes, Character Sketch of Anne Frank & Outro', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4505s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3004-0000-000000000001', '65d29b56-4444-2004-0000-000000000001', 'VIDEO', 'Introduction, Historical Context of Anne Frank & The Secret Annex Background', 'https://www.youtube.com/watch?v=9pENOqI6pl4&end=253s', true, 1),
('65d29b56-4444-3004-0000-000000000002', '65d29b56-4444-2004-0000-000000000002', 'VIDEO', 'The Need for a Diary, "Paper Has More Patience Than People" & Anne''s Early Life and Family History', 'https://www.youtube.com/watch?v=9pENOqI6pl4&t=253s&end=2010s', true, 1),
('65d29b56-4444-3004-0000-000000000003', '65d29b56-4444-2004-0000-000000000003', 'VIDEO', 'The Diary Entry of 20 June 1942: Classroom Anxiety, Mr. Keesing & The Three Chatterbox Essays', 'https://www.youtube.com/watch?v=9pENOqI6pl4&t=2010s&end=3109s', true, 1),
('65d29b56-4444-3004-0000-000000000004', '65d29b56-4444-2004-0000-000000000004', 'VIDEO', 'Comprehensive Chapter Summary, Key Themes, Character Sketch of Anne Frank & Outro', 'https://www.youtube.com/watch?v=9pENOqI6pl4&t=3109s&end=4505s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
