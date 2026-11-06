-- V107__seed_class10_english_ch24_footprints_without_feet.sql
-- Seeds dedicated full video lecture for Class 10 English Footprints Without Feet Chapter 5 (Footprints Without Feet - Overall Ch 24)
-- Video: Educational Bhaiya (X-7ocYHrf70)
-- Single unified lecture covering full pedagogical content (0s to 760s / 12m 40s)
-- Trimmed from original 783s to 760s to cleanly remove end Instagram self-promotion (760s to 783s) per user instruction

-- 1. Remove previous topics & content items for English Chapter 24
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000024'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000024';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2024-0000-000000000001', '65d29b56-4444-1000-0000-000000000024', 'Footprints Without Feet: Griffin''s Invisibility Experiment, London Escapades & Iping Mystery (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3024-0000-000000000001', '65d29b56-4444-2024-0000-000000000001', 'VIDEO', 'Footprints Without Feet: Griffin''s Invisibility Experiment, London Escapades & Iping Mystery (Animated One-Shot)', 'https://www.youtube.com/watch?v=X-7ocYHrf70&end=760s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
