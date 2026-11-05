-- V91__seed_class10_english_ch8_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Chapter 8 (The Sermon at Benares)
-- Video: Educational Bhaiya (5Np1mMJ_MZk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 600s / 10m 00s)

-- 1. Remove old placeholder topics & content items for English Chapter 8
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000008';

-- 2. Insert 4 NCERT-Aligned Master Topics for English Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2008-0000-000000000001', '65d29b56-4444-1000-0000-000000000008', 'Prince Siddhartha Gautama, The Four Sights & The Path to Enlightenment under Bodhi Tree', 1, true),
('65d29b56-4444-2008-0000-000000000002', '65d29b56-4444-1000-0000-000000000008', 'Kisa Gotami''s Despair, The Mustard Seed Quest & The Universal Truth of Death', 2, true),
('65d29b56-4444-2008-0000-000000000003', '65d29b56-4444-1000-0000-000000000008', 'The Epiphany by the Wayside: Flickering City Lights & Overcoming Selfishness in Grief', 3, true),
('65d29b56-4444-2008-0000-000000000004', '65d29b56-4444-1000-0000-000000000008', 'The Buddha''s Sermon: Inevitability of Death, Ripe Fruits Metaphor & Attaining Peace of Mind', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 600s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3008-0000-000000000001', '65d29b56-4444-2008-0000-000000000001', 'VIDEO', 'Prince Siddhartha Gautama, The Four Sights & The Path to Enlightenment under Bodhi Tree', 'https://www.youtube.com/watch?v=5Np1mMJ_MZk&end=150s', true, 1),
('65d29b56-4444-3008-0000-000000000002', '65d29b56-4444-2008-0000-000000000002', 'VIDEO', 'Kisa Gotami''s Despair, The Mustard Seed Quest & The Universal Truth of Death', 'https://www.youtube.com/watch?v=5Np1mMJ_MZk&t=150s&end=360s', true, 1),
('65d29b56-4444-3008-0000-000000000003', '65d29b56-4444-2008-0000-000000000003', 'VIDEO', 'The Epiphany by the Wayside: Flickering City Lights & Overcoming Selfishness in Grief', 'https://www.youtube.com/watch?v=5Np1mMJ_MZk&t=360s&end=460s', true, 1),
('65d29b56-4444-3008-0000-000000000004', '65d29b56-4444-2008-0000-000000000004', 'VIDEO', 'The Buddha''s Sermon: Inevitability of Death, Ripe Fruits Metaphor & Attaining Peace of Mind', 'https://www.youtube.com/watch?v=5Np1mMJ_MZk&t=460s&end=600s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
