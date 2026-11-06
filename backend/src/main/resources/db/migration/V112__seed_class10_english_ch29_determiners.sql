-- V112__seed_class10_english_ch29_determiners.sql
-- Seeds dedicated full video lecture for Class 10 English Grammar Chapter 1 (Determiners - Overall Ch 29)
-- Video: Educational Bhaiya (l_KTarik7tw)
-- Single unified lecture covering complete pedagogical content (0s to 1415s / 23m 35s)
-- Fully ad-free educational lecture covering Articles, Quantifiers, Distributives, Demonstratives, Possessives & Practice Questions

-- 1. Remove previous topics & content items for English Chapter 29
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000029'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000029';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2029-0000-000000000001', '65d29b56-4444-1000-0000-000000000029', 'Determiners: Complete Rules, Articles, Quantifiers, Distributives, Demonstratives & Practice (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3029-0000-000000000001', '65d29b56-4444-2029-0000-000000000001', 'VIDEO', 'Determiners: Complete Rules, Articles, Quantifiers, Distributives, Demonstratives & Practice (One-Shot)', 'https://www.youtube.com/watch?v=l_KTarik7tw', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
