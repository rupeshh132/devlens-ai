-- V104__seed_class10_english_ch21_the_thiefs_story.sql
-- Seeds dedicated full video lecture for Class 10 English Footprints Without Feet Chapter 2 (The Thief's Story - Overall Ch 21)
-- Video: Educational Bhaiya (gSL7emBB6w0)
-- Single unified lecture covering full video (0s to 695s / 11m 35s) per user specification

-- 1. Remove previous topics & content items for English Chapter 21
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000021'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000021';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2021-0000-000000000001', '65d29b56-4444-1000-0000-000000000021', 'The Thief''s Story: Full Chapter Explanation, Hari Singh''s Transformation & Anil''s Trust (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3021-0000-000000000001', '65d29b56-4444-2021-0000-000000000001', 'VIDEO', 'The Thief''s Story: Full Chapter Explanation, Hari Singh''s Transformation & Anil''s Trust (Animated One-Shot)', 'https://www.youtube.com/watch?v=gSL7emBB6w0', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
