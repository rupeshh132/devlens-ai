-- V176__seed_class11_english_ch06_a_photograph_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 6 (Hornbill Poem: A Photograph)
-- Video: Educational Bhaiya (A Photograph Class 11 Full Animated Explained | kJa_RYZqyuQ)
-- 100% Zero-Gap Single Master Lecture (0s to 330s / 5m 30s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000006';

-- 2. Insert 1 Verified Master Topic for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2106-0000-000000000001', '65d29b56-0301-1100-0000-000000000006', 'A Photograph (Complete Poem Analysis, Stanza-by-Stanza Meaning & Poetic Devices)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (330s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3106-0000-000000000001', '65d29b56-0301-2106-0000-000000000001', 'VIDEO', 'A Photograph (Complete Poem Analysis, Stanza-by-Stanza Meaning & Poetic Devices)', 'https://www.youtube.com/watch?v=kJa_RYZqyuQ&end=330s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
