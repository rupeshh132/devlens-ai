-- V193__seed_class11_english_ch23_unseen_passages_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 23 (Reading Skills: Unseen Passages)
-- Video: Dear Sir (Unseen Passage in English | Unseen Passage Trick | Class 10/11/12 | ho1Daf0BjpA)
-- 100% Zero-Gap Single Master Lecture (0s to 936s / 15m 36s, Outro card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 23
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000023'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000023';

-- 2. Insert 1 Verified Master Topic for Chapter 23
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2123-0000-000000000001', '65d29b56-0301-1100-0000-000000000023', 'Reading Skills: Unseen Passages (Master Strategies, Comprehension Techniques & Solved Passages)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (936s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3123-0000-000000000001', '65d29b56-0301-2123-0000-000000000001', 'VIDEO', 'Reading Skills: Unseen Passages (Master Strategies, Comprehension Techniques & Solved Passages)', 'https://www.youtube.com/watch?v=ho1Daf0BjpA&end=936s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
