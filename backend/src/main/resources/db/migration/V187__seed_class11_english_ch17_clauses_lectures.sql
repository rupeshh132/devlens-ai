-- V187__seed_class11_english_ch17_clauses_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 17 (Applied Grammar: Clauses)
-- Video: Magnet Brains (Clauses - Introduction | Class 11 English Grammar | IMfRZbGa890)
-- 100% Zero-Gap Single Master Lecture (0s to 2994s / 49m 54s, Website promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 17
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000017'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000017';

-- 2. Insert 1 Verified Master Topic for Chapter 17
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2117-0000-000000000001', '65d29b56-0301-1100-0000-000000000017', 'Grammar: Clauses (Complete Concepts: Noun Clauses, Adverbial Clauses & Relative Clauses with Sentence Structure)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (2994s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3117-0000-000000000001', '65d29b56-0301-2117-0000-000000000001', 'VIDEO', 'Grammar: Clauses (Complete Concepts: Noun Clauses, Adverbial Clauses & Relative Clauses with Sentence Structure)', 'https://www.youtube.com/watch?v=IMfRZbGa890&end=2994s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
