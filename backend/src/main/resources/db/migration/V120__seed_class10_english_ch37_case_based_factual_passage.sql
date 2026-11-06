-- V120__seed_class10_english_ch37_case_based_factual_passage.sql
-- Seeds dedicated full video lecture for Class 10 English Reading Skills Chapter 2 (Case-Based Factual Passage Comprehension - Overall Ch 37)
-- Video: Magnet Brains (JKxQIqjbq8I)
-- Single unified mega-lecture covering complete pedagogical content (11s to 10835s / 3h 0m 24s)
-- Trimmed intro 11s and outro 178s promo screen per user instruction
-- Covers reading statistical data, infographics, survey charts, reports, fact extraction & 10 solved CBSE board practice passages

-- 1. Remove previous topics & content items for English Chapter 37
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000037'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000037';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2037-0000-000000000001', '65d29b56-4444-1000-0000-000000000037', 'Case-Based Factual Passage: Interpreting Visual Data, Charts, Reports & 10 Solved CBSE Passages (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3037-0000-000000000001', '65d29b56-4444-2037-0000-000000000001', 'VIDEO', 'Case-Based Factual Passage: Interpreting Visual Data, Charts, Reports & 10 Solved CBSE Passages (One-Shot)', 'https://www.youtube.com/watch?v=JKxQIqjbq8I&t=11s&end=10835s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
