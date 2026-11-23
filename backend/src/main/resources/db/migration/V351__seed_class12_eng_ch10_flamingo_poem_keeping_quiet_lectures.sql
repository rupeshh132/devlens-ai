-- V351__seed_class12_eng_ch10_flamingo_poem_keeping_quiet_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 10 (Flamingo Poem: Keeping Quiet)
-- Video: Simran Sahni (Board Exam Masterclass) (r7L9uSMMxCU)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 530s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Flamingo Poem: Keeping Quiet)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000010';

-- 2. Insert 3 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2210-0000-000000000001', '65d29b56-0301-1200-0000-000000000010', 'The Universal Call to Count to Twelve, Complete Stillness & The "Exotic Moment" of Silent Unity', 1, true),
('65d29b56-0301-2210-0000-000000000002', '65d29b56-0301-1200-0000-000000000010', 'Halting Environmental & Violent Destruction: Whales Spared, Salt Gatherers Resting & Cessation of War', 2, true),
('65d29b56-0301-2210-0000-000000000003', '65d29b56-0301-1200-0000-000000000010', 'Clarification on Total Inactivity vs Death, The Enduring Lesson from the Earth, Poetic Devices & PYQs', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3210-0000-000000000001', '65d29b56-0301-2210-0000-000000000001', 'VIDEO', 'The Universal Call to Count to Twelve, Complete Stillness & The "Exotic Moment" of Silent Unity', 'https://www.youtube.com/watch?v=r7L9uSMMxCU&end=180s', true, 1),
('65d29b56-0301-3210-0000-000000000002', '65d29b56-0301-2210-0000-000000000002', 'VIDEO', 'Halting Environmental & Violent Destruction: Whales Spared, Salt Gatherers Resting & Cessation of War', 'https://www.youtube.com/watch?v=r7L9uSMMxCU&t=180s&end=360s', true, 1),
('65d29b56-0301-3210-0000-000000000003', '65d29b56-0301-2210-0000-000000000003', 'VIDEO', 'Clarification on Total Inactivity vs Death, The Enduring Lesson from the Earth, Poetic Devices & PYQs', 'https://www.youtube.com/watch?v=r7L9uSMMxCU&t=360s&end=530s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
