-- V99__seed_class10_english_poem7_the_trees.sql
-- Seeds dedicated full video lecture for Class 10 English First Flight Poem 7 (The Trees - Overall Ch 16)
-- Video: Educational Bhaiya (VuVEqovwCIA)
-- Single unified lecture covering full video (0s to 682s / 11m 22s) per user specification

-- 1. Remove previous topics & content items for English Poem 7 (Ch 16)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000016';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2016-0000-000000000001', '65d29b56-4444-1000-0000-000000000016', 'The Trees: Full Poem Explanation, Nature''s Reclamation & Feminist Allegory (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3016-0000-000000000001', '65d29b56-4444-2016-0000-000000000001', 'VIDEO', 'The Trees: Full Poem Explanation, Nature''s Reclamation & Feminist Allegory (Animated One-Shot)', 'https://www.youtube.com/watch?v=VuVEqovwCIA', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
