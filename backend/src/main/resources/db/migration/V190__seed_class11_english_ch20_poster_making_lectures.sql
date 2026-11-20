-- V190__seed_class11_english_ch20_poster_making_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 20 (Creative Writing: Poster Making)
-- Video: Dear Sir (Poster Writing | Poster Writing class 11/12 | Format & Tricks | R-l9uU9Q8zw)
-- 100% Zero-Gap Single Master Lecture (0s to 790s / 13m 10s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 20
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000020'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000020';

-- 2. Insert 1 Verified Master Topic for Chapter 20
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2120-0000-000000000001', '65d29b56-0301-1100-0000-000000000020', 'Writing Skills: Poster Making (Layout, Visual Balance, Catchy Slogans, Essential Elements & Exam Practice)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (790s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3120-0000-000000000001', '65d29b56-0301-2120-0000-000000000001', 'VIDEO', 'Writing Skills: Poster Making (Layout, Visual Balance, Catchy Slogans, Essential Elements & Exam Practice)', 'https://www.youtube.com/watch?v=R-l9uU9Q8zw&end=790s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
