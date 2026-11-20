-- V188__seed_class11_english_ch18_sentence_reordering_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 18 (Applied Grammar: Sentence Reordering & Transformation)
-- Video: Dear Sir (Jumble Words Tricks | Rearrangement of Sentence | NbGhrArqNRs)
-- 100% Zero-Gap Single Master Lecture (0s to 894s / 14m 54s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 18
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000018'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000018';

-- 2. Insert 1 Verified Master Topic for Chapter 18
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2118-0000-000000000001', '65d29b56-0301-1100-0000-000000000018', 'Grammar: Sentence Reordering & Transformation of Sentences (Jumbled Words Tricks, Syntax Analysis & Transformation)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (894s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3118-0000-000000000001', '65d29b56-0301-2118-0000-000000000001', 'VIDEO', 'Grammar: Sentence Reordering & Transformation of Sentences (Jumbled Words Tricks, Syntax Analysis & Transformation)', 'https://www.youtube.com/watch?v=NbGhrArqNRs&end=894s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
