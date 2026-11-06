-- V93__seed_class10_english_poem1_dust_of_snow.sql
-- Seeds dedicated full video lecture for Class 10 English First Flight Poem 1 (Dust of Snow - Overall Ch 10)
-- Video: Educational Bhaiya (lH15wkPM5Vg)
-- Single unified lecture covering full video (0s to 310s / 05m 10s) per user specification

-- 1. Remove previous topics & content items for English Poem 1 (Ch 10)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000010';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2010-0000-000000000001', '65d29b56-4444-1000-0000-000000000010', 'Dust of Snow: Full Poem Explanation, Poetic Devices & Theme (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3010-0000-000000000001', '65d29b56-4444-2010-0000-000000000001', 'VIDEO', 'Dust of Snow: Full Poem Explanation, Poetic Devices & Theme (Animated One-Shot)', 'https://www.youtube.com/watch?v=lH15wkPM5Vg', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
