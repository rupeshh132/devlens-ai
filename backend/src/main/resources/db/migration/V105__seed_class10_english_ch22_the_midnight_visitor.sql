-- V105__seed_class10_english_ch22_the_midnight_visitor.sql
-- Seeds dedicated full video lecture for Class 10 English Footprints Without Feet Chapter 3 (The Midnight Visitor - Overall Ch 22)
-- Video: Educational Bhaiya (6eF2YKQfwwc)
-- Single unified lecture covering full video (0s to 596s / 9m 56s) per user specification

-- 1. Remove previous topics & content items for English Chapter 22
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-0000000022' OR chapter_id = '65d29b56-4444-1000-0000-000000000022'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-0000000022' OR chapter_id = '65d29b56-4444-1000-0000-000000000022';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2022-0000-000000000001', '65d29b56-4444-1000-0000-000000000022', 'The Midnight Visitor: Full Chapter Explanation, Ausable''s Quick Wit & The Balcony Trick (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3022-0000-000000000001', '65d29b56-4444-2022-0000-000000000001', 'VIDEO', 'The Midnight Visitor: Full Chapter Explanation, Ausable''s Quick Wit & The Balcony Trick (Animated One-Shot)', 'https://www.youtube.com/watch?v=6eF2YKQfwwc', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
