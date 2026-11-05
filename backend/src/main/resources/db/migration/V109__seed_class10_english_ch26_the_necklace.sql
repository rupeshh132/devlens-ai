-- V109__seed_class10_english_ch26_the_necklace.sql
-- Seeds dedicated full video lecture for Class 10 English Footprints Without Feet Chapter 7 (The Necklace - Overall Ch 26)
-- Video: Educational Bhaiya (ECvdooUVkL4)
-- Single unified lecture covering full pedagogical content (70s to 1177s / ~18m 27s)
-- Trimmed start from 0s to 70s to cleanly remove intro self-promotion screen (0s–45s) and start directly at the NCERT chapter narrative

-- 1. Remove previous topics & content items for English Chapter 26
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-0000000026' OR chapter_id = '65d29b56-4444-1000-0000-000000000026'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-0000000026' OR chapter_id = '65d29b56-4444-1000-0000-000000000026';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2026-0000-000000000001', '65d29b56-4444-1000-0000-000000000026', 'The Necklace: Full Chapter Explanation, Matilda''s Vanity, The Lost Jewels & The 10-Year Debt (Animated One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3026-0000-000000000001', '65d29b56-4444-2026-0000-000000000001', 'VIDEO', 'The Necklace: Full Chapter Explanation, Matilda''s Vanity, The Lost Jewels & The 10-Year Debt (Animated One-Shot)', 'https://www.youtube.com/watch?v=ECvdooUVkL4&t=70s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
