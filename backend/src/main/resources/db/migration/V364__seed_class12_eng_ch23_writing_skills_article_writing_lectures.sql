-- V364__seed_class12_eng_ch23_writing_skills_article_writing_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 23 (Writing Skills: Article Writing)
-- Video: Simran Sahni (Board Exam Masterclass) (8rp5fn5AVm4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 710s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 23 (Writing Skills: Article Writing)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000023'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000023';

-- 2. Insert 3 Verified Master Topics for Chapter 23
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2223-0000-000000000001', '65d29b56-0301-1200-0000-000000000023', 'Article Writing Structure: Eye-Catching Title / Heading, Byline & CBSE 120-150 Word Limit Adherence', 1, true),
('65d29b56-0301-2223-0000-000000000002', '65d29b56-0301-1200-0000-000000000023', 'Paragraph Flow: Strong Introduction (Hooks, Rhetorical Questions), Cause-Effect Dynamics & Data Points', 2, true),
('65d29b56-0301-2223-0000-000000000003', '65d29b56-0301-1200-0000-000000000023', 'Actionable Conclusions, High-Impact Vocabulary, Transition Words & Complete Solved Model Articles', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3223-0000-000000000001', '65d29b56-0301-2223-0000-000000000001', 'VIDEO', 'Article Writing Structure: Eye-Catching Title / Heading, Byline & CBSE 120-150 Word Limit Adherence', 'https://www.youtube.com/watch?v=8rp5fn5AVm4&end=230s', true, 1),
('65d29b56-0301-3223-0000-000000000002', '65d29b56-0301-2223-0000-000000000002', 'VIDEO', 'Paragraph Flow: Strong Introduction (Hooks, Rhetorical Questions), Cause-Effect Dynamics & Data Points', 'https://www.youtube.com/watch?v=8rp5fn5AVm4&t=230s&end=470s', true, 1),
('65d29b56-0301-3223-0000-000000000003', '65d29b56-0301-2223-0000-000000000003', 'VIDEO', 'Actionable Conclusions, High-Impact Vocabulary, Transition Words & Complete Solved Model Articles', 'https://www.youtube.com/watch?v=8rp5fn5AVm4&t=470s&end=710s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
