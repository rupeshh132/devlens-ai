-- V194__seed_class11_english_ch24_case_based_passages_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 24 (Reading Skills: Case-Based Factual Passages)
-- Video: Physics Wallah English Medium (Reading Comprehension Class 11 English | Case-Based Passages | kRI-F9vFv_0)
-- 100% Zero-Gap Single Master Lecture (0s to 3670s / 01:01:10, End slate trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 24
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000024'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000024';

-- 2. Insert 1 Verified Master Topic for Chapter 24
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2124-0000-000000000001', '65d29b56-0301-1100-0000-000000000024', 'Reading Skills: Case-Based Factual Passages (Data Interpretation, Graphical Analysis & Solved Case Studies)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (3670s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3124-0000-000000000001', '65d29b56-0301-2124-0000-000000000001', 'VIDEO', 'Reading Skills: Case-Based Factual Passages (Data Interpretation, Graphical Analysis & Solved Case Studies)', 'https://www.youtube.com/watch?v=kRI-F9vFv_0&end=3670s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
