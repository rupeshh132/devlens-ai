-- V101__seed_class10_english_poem9_custard_the_dragon.sql
-- Seeds dedicated full video lecture for Class 10 English First Flight Poem 9 (The Tale of Custard the Dragon - Overall Ch 18)
-- Video: Educational Bhaiya (h_QwDoVkFtg)
-- Single unified lecture covering full video (0s to 759s / 12m 39s) per user specification

-- 1. Remove previous topics & content items for English Poem 9 (Ch 18)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000018'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000018';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2018-0000-000000000001', '65d29b56-4444-1000-0000-000000000018', 'The Tale of Custard the Dragon: Full Poem Explanation, Ballad Form & Irony of Bravery (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3018-0000-000000000001', '65d29b56-4444-2018-0000-000000000001', 'VIDEO', 'The Tale of Custard the Dragon: Full Poem Explanation, Ballad Form & Irony of Bravery (Animated One-Shot)', 'https://www.youtube.com/watch?v=h_QwDoVkFtg', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
