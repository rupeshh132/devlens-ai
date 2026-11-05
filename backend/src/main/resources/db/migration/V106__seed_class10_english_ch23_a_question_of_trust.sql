-- V106__seed_class10_english_ch23_a_question_of_trust.sql
-- Seeds dedicated full video lecture for Class 10 English Footprints Without Feet Chapter 4 (A Question of Trust - Overall Ch 23)
-- Video: Educational Bhaiya (MirMcVysJv4)
-- Single unified lecture covering full video (0s to 803s / 13m 23s) per user specification

-- 1. Remove previous topics & content items for English Chapter 23
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-0000000023' OR chapter_id = '65d29b56-4444-1000-0000-000000000023'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-0000000023' OR chapter_id = '65d29b56-4444-1000-0000-000000000023';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2023-0000-000000000001', '65d29b56-4444-1000-0000-000000000023', 'A Question of Trust: Full Chapter Explanation, Horace Danby''s Heist & The Lady in Red (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3023-0000-000000000001', '65d29b56-4444-2023-0000-000000000001', 'VIDEO', 'A Question of Trust: Full Chapter Explanation, Horace Danby''s Heist & The Lady in Red (Animated One-Shot)', 'https://www.youtube.com/watch?v=MirMcVysJv4', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
