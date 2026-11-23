-- V366__seed_class12_eng_ch25_reading_skills_unseen_passages_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 25 (Reading Skills: Unseen Passages (Factual, Descriptive & Literary))
-- Video: Simran Sahni (Board Exam Masterclass) (irNXC-OXuKg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 890s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 25 (Reading Skills: Unseen Passages (Factual, Descriptive & Literary))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000025'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000025';

-- 2. Insert 3 Verified Master Topics for Chapter 25
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2225-0000-000000000001', '65d29b56-0301-1200-0000-000000000025', 'Core Reading Tactics: Efficient Skimming & Scanning, Time Management (20-25 Mins) in CBSE Board Exam', 1, true),
('65d29b56-0301-2225-0000-000000000002', '65d29b56-0301-1200-0000-000000000025', 'Cracking Direct vs Inference Questions, Assessing Tone, Determining Contextual Vocabulary & Meanings', 2, true),
('65d29b56-0301-2225-0000-000000000003', '65d29b56-0301-1200-0000-000000000025', 'Step-by-Step Solved Board Unseen Passage Practice: Crafting Concise Answers without Verbatim Copying', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3225-0000-000000000001', '65d29b56-0301-2225-0000-000000000001', 'VIDEO', 'Core Reading Tactics: Efficient Skimming & Scanning, Time Management (20-25 Mins) in CBSE Board Exam', 'https://www.youtube.com/watch?v=irNXC-OXuKg&end=300s', true, 1),
('65d29b56-0301-3225-0000-000000000002', '65d29b56-0301-2225-0000-000000000002', 'VIDEO', 'Cracking Direct vs Inference Questions, Assessing Tone, Determining Contextual Vocabulary & Meanings', 'https://www.youtube.com/watch?v=irNXC-OXuKg&t=300s&end=600s', true, 1),
('65d29b56-0301-3225-0000-000000000003', '65d29b56-0301-2225-0000-000000000003', 'VIDEO', 'Step-by-Step Solved Board Unseen Passage Practice: Crafting Concise Answers without Verbatim Copying', 'https://www.youtube.com/watch?v=irNXC-OXuKg&t=600s&end=890s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
