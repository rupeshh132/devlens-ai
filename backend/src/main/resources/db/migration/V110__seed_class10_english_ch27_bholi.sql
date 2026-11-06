-- V110__seed_class10_english_ch27_bholi.sql
-- Seeds dedicated full video lecture for Class 10 English Footprints Without Feet Chapter 8 (Bholi - Overall Ch 27)
-- Video: Educational Bhaiya (H4oh4imcBIk)
-- Single unified lecture covering full video (0s to 844s / 14m 04s) per user specification
-- Inspected all storyboard frames: zero third-party/irrelevant promotions present (100% pedagogical content)

-- 1. Remove previous topics & content items for English Chapter 27
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000027'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000027';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2027-0000-000000000001', '65d29b56-4444-1000-0000-000000000027', 'Bholi: Full Chapter Explanation, Sulekha''s Transformation, Dowry Rejection & Teacher''s Masterpiece (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3027-0000-000000000001', '65d29b56-4444-2027-0000-000000000001', 'VIDEO', 'Bholi: Full Chapter Explanation, Sulekha''s Transformation, Dowry Rejection & Teacher''s Masterpiece (Animated One-Shot)', 'https://www.youtube.com/watch?v=H4oh4imcBIk', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
