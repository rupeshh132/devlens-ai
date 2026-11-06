-- V111__seed_class10_english_ch28_the_book_that_saved_the_earth.sql
-- Seeds dedicated full video lecture for Class 10 English Footprints Without Feet Chapter 9 (The Book That Saved the Earth - Overall Ch 28)
-- Video: Educational Bhaiya (Si8uiDGqSrw)
-- Single unified lecture covering full pedagogical content (0s to 880s / 14m 40s)
-- Trimmed from original 930s to 880s to cleanly eliminate the outro social promotion cards (880s to 930s) per user instruction

-- 1. Remove previous topics & content items for English Chapter 28
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000028'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000028';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2028-0000-000000000001', '65d29b56-4444-1000-0000-000000000028', 'The Book That Saved the Earth: Full Play Explanation, Think-Tank''s Martian Invasion & Mother Goose (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3028-0000-000000000001', '65d29b56-4444-2028-0000-000000000001', 'VIDEO', 'The Book That Saved the Earth: Full Play Explanation, Think-Tank''s Martian Invasion & Mother Goose (Animated One-Shot)', 'https://www.youtube.com/watch?v=Si8uiDGqSrw&end=880s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
