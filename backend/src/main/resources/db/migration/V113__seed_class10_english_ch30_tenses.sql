-- V113__seed_class10_english_ch30_tenses.sql
-- Seeds dedicated full video lecture for Class 10 English Grammar Chapter 2 (Tenses - Overall Ch 30)
-- Video: Educational Bhaiya (NA6E-NULuo8)
-- Single unified lecture covering complete pedagogical content (0s to 785s / 13m 05s)
-- Fully ad-free educational lecture covering all 12 Tense forms, time vs period, short tricks, formulas, and master recap chart

-- 1. Remove previous topics & content items for English Chapter 30
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000030'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000030';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2030-0000-000000000001', '65d29b56-4444-1000-0000-000000000030', 'Tenses: Complete 12 Tenses Rules, Short Tricks, Formulas & Sentence Structures (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3030-0000-000000000001', '65d29b56-4444-2030-0000-000000000001', 'VIDEO', 'Tenses: Complete 12 Tenses Rules, Short Tricks, Formulas & Sentence Structures (One-Shot)', 'https://www.youtube.com/watch?v=NA6E-NULuo8', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
