-- V94__seed_class10_english_poem2_fire_and_ice.sql
-- Seeds dedicated full video lecture for Class 10 English First Flight Poem 2 (Fire and Ice - Overall Ch 11)
-- Video: Educational Bhaiya (yoTofq5xTa8)
-- Single unified lecture covering full video (0s to 291s / 04m 51s) per user specification

-- 1. Remove previous topics & content items for English Poem 2 (Ch 11)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-0000000011' OR chapter_id = '65d29b56-4444-1000-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-0000000011' OR chapter_id = '65d29b56-4444-1000-0000-000000000011';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2011-0000-000000000001', '65d29b56-4444-1000-0000-000000000011', 'Fire and Ice: Full Poem Explanation, Symbolism of Desire & Hatred (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3011-0000-000000000001', '65d29b56-4444-2011-0000-000000000001', 'VIDEO', 'Fire and Ice: Full Poem Explanation, Symbolism of Desire & Hatred (Animated One-Shot)', 'https://www.youtube.com/watch?v=yoTofq5xTa8', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
