-- V367__seed_class12_eng_ch26_reading_skills_case_based_factual_passages_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 26 (Reading Skills: Case-Based Factual Passages (Charts, Graphs & Data))
-- Video: Simran Sahni (Board Exam Masterclass) (8VJtPCKDOx0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1130s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 26 (Reading Skills: Case-Based Factual Passages (Charts, Graphs & Data))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000026'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000026';

-- 2. Insert 3 Verified Master Topics for Chapter 26
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2226-0000-000000000001', '65d29b56-0301-1200-0000-000000000026', 'Introduction to Case-Based Passages: Structure, Deciphering Statistical Inputs, Pie Charts & Bar Graphs', 1, true),
('65d29b56-0301-2226-0000-000000000002', '65d29b56-0301-1200-0000-000000000026', 'Analyzing Numerical Trends, Cross-Referencing Text with Visual Data & Formulating Data-Backed Answers', 2, true),
('65d29b56-0301-2226-0000-000000000003', '65d29b56-0301-1200-0000-000000000026', 'Solving CBSE Model Case-Based Factual Passage: Multiple Choice & Short Answer High-Scoring Tactics', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3226-0000-000000000001', '65d29b56-0301-2226-0000-000000000001', 'VIDEO', 'Introduction to Case-Based Passages: Structure, Deciphering Statistical Inputs, Pie Charts & Bar Graphs', 'https://www.youtube.com/watch?v=8VJtPCKDOx0&end=380s', true, 1),
('65d29b56-0301-3226-0000-000000000002', '65d29b56-0301-2226-0000-000000000002', 'VIDEO', 'Analyzing Numerical Trends, Cross-Referencing Text with Visual Data & Formulating Data-Backed Answers', 'https://www.youtube.com/watch?v=8VJtPCKDOx0&t=380s&end=760s', true, 1),
('65d29b56-0301-3226-0000-000000000003', '65d29b56-0301-2226-0000-000000000003', 'VIDEO', 'Solving CBSE Model Case-Based Factual Passage: Multiple Choice & Short Answer High-Scoring Tactics', 'https://www.youtube.com/watch?v=8VJtPCKDOx0&t=760s&end=1130s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
