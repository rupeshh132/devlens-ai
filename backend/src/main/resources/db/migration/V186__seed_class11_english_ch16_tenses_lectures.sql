-- V186__seed_class11_english_ch16_tenses_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 16 (Applied Grammar: Tenses & Gap Filling)
-- Video: Dear Sir (Learn Tenses in English Grammar with Examples | Present Tenses, Past Tenses, Future Tenses | pXZtRXpGNck)
-- 100% Zero-Gap Single Master Lecture (0s to 6955s / 1h 55m 55s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 16
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000016';

-- 2. Insert 1 Verified Master Topic for Chapter 16
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2116-0000-000000000001', '65d29b56-0301-1100-0000-000000000016', 'Grammar: Tenses & Gap Filling (Complete Rules: Present, Past & Future Tenses, Structures & Gap Filling Practice)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (6955s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3116-0000-000000000001', '65d29b56-0301-2116-0000-000000000001', 'VIDEO', 'Grammar: Tenses & Gap Filling (Complete Rules: Present, Past & Future Tenses, Structures & Gap Filling Practice)', 'https://www.youtube.com/watch?v=pXZtRXpGNck&end=6955s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
