-- V114__seed_class10_english_ch31_modals.sql
-- Seeds dedicated full video lecture for Class 10 English Grammar Chapter 3 (Modals - Overall Ch 31)
-- Video: Educational Bhaiya (iCx24s1DxyI)
-- Single unified lecture covering complete pedagogical content (0s to 978s / 16m 18s)
-- Covers rules for modal auxiliaries, expressing ability, permission, obligation, advice, condition, and CBSE practice questions

-- 1. Remove previous topics & content items for English Chapter 31
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000031'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000031';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2031-0000-000000000001', '65d29b56-4444-1000-0000-000000000031', 'Modals: Complete Rules, Expressing Ability, Permission, Obligation & Practice (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3031-0000-000000000001', '65d29b56-4444-2031-0000-000000000001', 'VIDEO', 'Modals: Complete Rules, Expressing Ability, Permission, Obligation & Practice (One-Shot)', 'https://www.youtube.com/watch?v=iCx24s1DxyI', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
