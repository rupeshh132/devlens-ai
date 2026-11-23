-- V358__seed_class12_eng_ch17_vistas_the_enemy_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 17 (Vistas: The Enemy)
-- Video: Simran Sahni (Board Exam Masterclass) (n20uRrdZLpk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1990s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 17 (Vistas: The Enemy)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000017'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000017';

-- 2. Insert 3 Verified Master Topics for Chapter 17
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2217-0000-000000000001', '65d29b56-0301-1200-0000-000000000017', 'Dr. Sadao Hoki & Hana: American Education, Japanese Home & Discovering the Wounded American Soldier Tom', 1, true),
('65d29b56-0301-2217-0000-000000000002', '65d29b56-0301-1200-0000-000000000017', 'The Gripping Moral Conflict (Medical Duty vs National Loyalty), The Surgery & The Servants'' Rebellion', 2, true),
('65d29b56-0301-2217-0000-000000000003', '65d29b56-0301-1200-0000-000000000017', 'The General''s Selfish Neglect (Forgotten Assassins), Sadao Organizing Tom''s Escape & Universal Human Empathy', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3217-0000-000000000001', '65d29b56-0301-2217-0000-000000000001', 'VIDEO', 'Dr. Sadao Hoki & Hana: American Education, Japanese Home & Discovering the Wounded American Soldier Tom', 'https://www.youtube.com/watch?v=n20uRrdZLpk&end=660s', true, 1),
('65d29b56-0301-3217-0000-000000000002', '65d29b56-0301-2217-0000-000000000002', 'VIDEO', 'The Gripping Moral Conflict (Medical Duty vs National Loyalty), The Surgery & The Servants'' Rebellion', 'https://www.youtube.com/watch?v=n20uRrdZLpk&t=660s&end=1350s', true, 1),
('65d29b56-0301-3217-0000-000000000003', '65d29b56-0301-2217-0000-000000000003', 'VIDEO', 'The General''s Selfish Neglect (Forgotten Assassins), Sadao Organizing Tom''s Escape & Universal Human Empathy', 'https://www.youtube.com/watch?v=n20uRrdZLpk&t=1350s&end=1990s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
