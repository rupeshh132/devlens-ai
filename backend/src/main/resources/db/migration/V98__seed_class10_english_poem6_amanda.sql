-- V98__seed_class10_english_poem6_amanda.sql
-- Seeds dedicated full video lecture for Class 10 English First Flight Poem 6 (Amanda! - Overall Ch 15)
-- Video: Educational Bhaiya (MjO-mHuQfU0)
-- Single unified lecture covering full video (0s to 492s / 08m 12s) per user specification

-- 1. Remove previous topics & content items for English Poem 6 (Ch 15)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000015';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2015-0000-000000000001', '65d29b56-4444-1000-0000-000000000015', 'Amanda!: Full Poem Explanation, Escapism vs Parental Control & Poetic Devices (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3015-0000-000000000001', '65d29b56-4444-2015-0000-000000000001', 'VIDEO', 'Amanda!: Full Poem Explanation, Escapism vs Parental Control & Poetic Devices (Animated One-Shot)', 'https://www.youtube.com/watch?v=MjO-mHuQfU0', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
