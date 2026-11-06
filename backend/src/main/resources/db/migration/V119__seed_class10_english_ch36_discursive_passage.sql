-- V119__seed_class10_english_ch36_discursive_passage.sql
-- Seeds dedicated full video lecture for Class 10 English Reading Skills Chapter 1 (Discursive Passage Comprehension - Overall Ch 36)
-- Video: Magnet Brains (pSG8O0UYQpo)
-- Single unified lecture covering complete pedagogical content (0s to 2790s / 46m 30s)
-- Trimmed from original 2880s to 2790s to cleanly eliminate the 80-second outro portal/website promo screen (2790s to 2880s) per user instruction
-- Covers reading techniques, skimming & scanning, understanding tone & central ideas, tackling MCQs & analytical inference questions with full CBSE Sample Paper walkthrough

-- 1. Remove previous topics & content items for English Chapter 36
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000036'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000036';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2036-0000-000000000001', '65d29b56-4444-1000-0000-000000000036', 'Discursive Passage: Reading Techniques, Central Idea, Inference Questions & Full CBSE SQP Walkthrough (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3036-0000-000000000001', '65d29b56-4444-2036-0000-000000000001', 'VIDEO', 'Discursive Passage: Reading Techniques, Central Idea, Inference Questions & Full CBSE SQP Walkthrough (One-Shot)', 'https://www.youtube.com/watch?v=pSG8O0UYQpo&end=2790s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
