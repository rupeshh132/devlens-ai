-- V108__seed_class10_english_ch25_the_making_of_a_scientist.sql
-- Seeds dedicated full video lecture for Class 10 English Footprints Without Feet Chapter 6 (The Making of a Scientist - Overall Ch 25)
-- Video: Educational Bhaiya (64PaWs5BZ8Q)
-- Single unified lecture covering full video (0s to 1038s / 17m 18s) per user specification
-- Inspected all storyboard frames: zero third-party/irrelevant promotions present

-- 1. Remove previous topics & content items for English Chapter 25
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-0000000025' OR chapter_id = '65d29b56-4444-1000-0000-000000000025'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-0000000025' OR chapter_id = '65d29b56-4444-1000-0000-000000000025';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2025-0000-000000000001', '65d29b56-4444-1000-0000-000000000025', 'The Making of a Scientist: Full Chapter Explanation, Richard Ebright''s Butterfly Research & DNA Theory (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3025-0000-000000000001', '65d29b56-4444-2025-0000-000000000001', 'VIDEO', 'The Making of a Scientist: Full Chapter Explanation, Richard Ebright''s Butterfly Research & DNA Theory (Animated One-Shot)', 'https://www.youtube.com/watch?v=64PaWs5BZ8Q', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
