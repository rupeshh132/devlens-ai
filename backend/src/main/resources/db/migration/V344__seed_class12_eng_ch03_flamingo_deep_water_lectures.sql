-- V344__seed_class12_eng_ch03_flamingo_deep_water_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 3 (Flamingo: Deep Water)
-- Video: Simran Sahni (Board Exam Masterclass) (9t_S0IcYKv8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1210s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Flamingo: Deep Water)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000003';

-- 2. Insert 3 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2203-0000-000000000001', '65d29b56-0301-1200-0000-000000000003', 'Childhood Fear at California Beach, The YMCA Pool Safety & The Misadventure with the Big Bully', 1, true),
('65d29b56-0301-2203-0000-000000000002', '65d29b56-0301-1200-0000-000000000003', 'The Terror of Drowning, Sinking to the Bottom Three Times, Blackout & The Resulting Hydrophobia', 2, true),
('65d29b56-0301-2203-0000-000000000003', '65d29b56-0301-1200-0000-000000000003', 'Overcoming Fear: The Instructor''s Systematic Training, Lake Wentworth Swim & "Fear Itself"', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3203-0000-000000000001', '65d29b56-0301-2203-0000-000000000001', 'VIDEO', 'Childhood Fear at California Beach, The YMCA Pool Safety & The Misadventure with the Big Bully', 'https://www.youtube.com/watch?v=9t_S0IcYKv8&end=420s', true, 1),
('65d29b56-0301-3203-0000-000000000002', '65d29b56-0301-2203-0000-000000000002', 'VIDEO', 'The Terror of Drowning, Sinking to the Bottom Three Times, Blackout & The Resulting Hydrophobia', 'https://www.youtube.com/watch?v=9t_S0IcYKv8&t=420s&end=850s', true, 1),
('65d29b56-0301-3203-0000-000000000003', '65d29b56-0301-2203-0000-000000000003', 'VIDEO', 'Overcoming Fear: The Instructor''s Systematic Training, Lake Wentworth Swim & "Fear Itself"', 'https://www.youtube.com/watch?v=9t_S0IcYKv8&t=850s&end=1210s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
