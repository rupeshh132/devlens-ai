-- V90__seed_class10_english_ch7_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Chapter 7 (Madam Rides the Bus)
-- Video: Educational Bhaiya (vxAb8ECdNK0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 959s / 15m 59s)

-- 1. Remove old placeholder topics & content items for English Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000007';

-- 2. Insert 4 NCERT-Aligned Master Topics for English Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2007-0000-000000000001', '65d29b56-4444-1000-0000-000000000007', 'Valli''s Fascinating Street View, The Deep Desire & Saving Sixty Paise for the Bus Ride', 1, true),
('65d29b56-4444-2007-0000-000000000002', '65d29b56-4444-1000-0000-000000000007', 'Boarding the Bus, The Jolly Conductor''s Teasing & Magnificent Canal and Palm Views', 2, true),
('65d29b56-4444-2007-0000-000000000003', '65d29b56-4444-1000-0000-000000000007', 'The Galloping Cow Scene, Reaching the Town & Valli''s Dignified Refusal of the Cold Drink', 3, true),
('65d29b56-4444-2007-0000-000000000004', '65d29b56-4444-1000-0000-000000000007', 'The Somber Reality of Death, Safe Return Home & Valli''s Knowing Secret Smile', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 959s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3007-0000-000000000001', '65d29b56-4444-2007-0000-000000000001', 'VIDEO', 'Valli''s Fascinating Street View, The Deep Desire & Saving Sixty Paise for the Bus Ride', 'https://www.youtube.com/watch?v=vxAb8ECdNK0&end=260s', true, 1),
('65d29b56-4444-3007-0000-000000000002', '65d29b56-4444-2007-0000-000000000002', 'VIDEO', 'Boarding the Bus, The Jolly Conductor''s Teasing & Magnificent Canal and Palm Views', 'https://www.youtube.com/watch?v=vxAb8ECdNK0&t=260s&end=520s', true, 1),
('65d29b56-4444-3007-0000-000000000003', '65d29b56-4444-2007-0000-000000000003', 'VIDEO', 'The Galloping Cow Scene, Reaching the Town & Valli''s Dignified Refusal of the Cold Drink', 'https://www.youtube.com/watch?v=vxAb8ECdNK0&t=520s&end=740s', true, 1),
('65d29b56-4444-3007-0000-000000000004', '65d29b56-4444-2007-0000-000000000004', 'VIDEO', 'The Somber Reality of Death, Safe Return Home & Valli''s Knowing Secret Smile', 'https://www.youtube.com/watch?v=vxAb8ECdNK0&t=740s&end=959s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
