-- V103__seed_class10_english_ch20_a_triumph_of_surgery.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Footprints Without Feet Chapter 1 (A Triumph of Surgery - Overall Ch 20)
-- Video: Educational Bhaiya (u6gnjdY54rY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 821s / 13m 41s)

-- 1. Remove previous topics & content items for English Chapter 20
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000020'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000020';

-- 2. Insert 4 NCERT-Aligned Master Topics for English Chapter 20
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2020-0000-000000000001', '65d29b56-4444-1000-0000-000000000020', 'Tricki''s Pampered Lifestyle, Overfeeding & Sickness', 1, true),
('65d29b56-4444-2020-0000-000000000002', '65d29b56-4444-1000-0000-000000000020', 'Dr. Herriot''s Surgery Treatment: Fasting, Exercise & Dog Pack', 2, true),
('65d29b56-4444-2020-0000-000000000003', '65d29b56-4444-1000-0000-000000000020', 'Recovery of Tricki & Mrs. Pumphrey''s Grateful Misunderstanding', 3, true),
('65d29b56-4444-2020-0000-000000000004', '65d29b56-4444-1000-0000-000000000020', 'Themes, Character Analysis & Board Exam Questions', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 821s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3020-0000-000000000001', '65d29b56-4444-2020-0000-000000000001', 'VIDEO', 'Tricki''s Pampered Lifestyle, Overfeeding & Sickness', 'https://www.youtube.com/watch?v=u6gnjdY54rY&end=410s', true, 1),
('65d29b56-4444-3020-0000-000000000002', '65d29b56-4444-2020-0000-000000000002', 'VIDEO', 'Dr. Herriot''s Surgery Treatment: Fasting, Exercise & Dog Pack', 'https://www.youtube.com/watch?v=u6gnjdY54rY&t=410s&end=555s', true, 1),
('65d29b56-4444-3020-0000-000000000003', '65d29b56-4444-2020-0000-000000000003', 'VIDEO', 'Recovery of Tricki & Mrs. Pumphrey''s Grateful Misunderstanding', 'https://www.youtube.com/watch?v=u6gnjdY54rY&t=555s&end=745s', true, 1),
('65d29b56-4444-3020-0000-000000000004', '65d29b56-4444-2020-0000-000000000004', 'VIDEO', 'Themes, Character Analysis & Board Exam Questions', 'https://www.youtube.com/watch?v=u6gnjdY54rY&t=745s&end=821s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
