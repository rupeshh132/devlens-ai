-- V96__seed_class10_english_poem4_how_to_tell_wild_animals.sql
-- Seeds dedicated full video lecture for Class 10 English First Flight Poem 4 (How to Tell Wild Animals - Overall Ch 13)
-- Video: Educational Bhaiya (0Gdy2HCr9PM)
-- Single unified lecture covering full video (0s to 471s / 07m 51s) per user specification

-- 1. Remove previous topics & content items for English Poem 4 (Ch 13)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-0000000013' OR chapter_id = '65d29b56-4444-1000-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-0000000013' OR chapter_id = '65d29b56-4444-1000-0000-000000000013';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2013-0000-000000000001', '65d29b56-4444-1000-0000-000000000013', 'How to Tell Wild Animals: Full Poem Explanation, Humour & Poetic License (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3013-0000-000000000001', '65d29b56-4444-2013-0000-000000000001', 'VIDEO', 'How to Tell Wild Animals: Full Poem Explanation, Humour & Poetic License (Animated One-Shot)', 'https://www.youtube.com/watch?v=0Gdy2HCr9PM', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
