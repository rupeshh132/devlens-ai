-- V102__seed_class10_english_poem10_for_anne_gregory.sql
-- Seeds dedicated full video lecture for Class 10 English First Flight Poem 10 (For Anne Gregory - Overall Ch 19)
-- Video: Educational Bhaiya (nFU0YmmM4Lk)
-- Single unified lecture covering full video (0s to 247s / 04m 07s) per user specification

-- 1. Remove previous topics & content items for English Poem 10 (Ch 19)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000019'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000019';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2019-0000-000000000001', '65d29b56-4444-1000-0000-000000000019', 'For Anne Gregory: Full Poem Explanation, Physical vs Inner Beauty & Divine Love (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3019-0000-000000000001', '65d29b56-4444-2019-0000-000000000001', 'VIDEO', 'For Anne Gregory: Full Poem Explanation, Physical vs Inner Beauty & Divine Love (Animated One-Shot)', 'https://www.youtube.com/watch?v=nFU0YmmM4Lk', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
