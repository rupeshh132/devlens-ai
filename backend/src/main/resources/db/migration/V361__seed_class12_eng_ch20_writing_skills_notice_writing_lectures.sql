-- V361__seed_class12_eng_ch20_writing_skills_notice_writing_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 20 (Writing Skills: Notice Writing)
-- Video: Simran Sahni (Board Exam Masterclass) (XGPrmhIehBI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 830s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 20 (Writing Skills: Notice Writing)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000020'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000020';

-- 2. Insert 3 Verified Master Topics for Chapter 20
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2220-0000-000000000001', '65d29b56-0301-1200-0000-000000000020', 'Official CBSE Notice Writing Rules: Word Limit (50 Words), Box Layout, Organization, Date & Heading', 1, true),
('65d29b56-0301-2220-0000-000000000002', '65d29b56-0301-1200-0000-000000000020', 'High-Scoring Content Formulation (What, When, Where, Agenda, Contact Details) for School Events & Tours', 2, true),
('65d29b56-0301-2220-0000-000000000003', '65d29b56-0301-1200-0000-000000000020', 'Step-by-Step Solved Board Examples, Lost & Found Notices, Common Mistakes & Marking Scheme', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3220-0000-000000000001', '65d29b56-0301-2220-0000-000000000001', 'VIDEO', 'Official CBSE Notice Writing Rules: Word Limit (50 Words), Box Layout, Organization, Date & Heading', 'https://www.youtube.com/watch?v=XGPrmhIehBI&end=280s', true, 1),
('65d29b56-0301-3220-0000-000000000002', '65d29b56-0301-2220-0000-000000000002', 'VIDEO', 'High-Scoring Content Formulation (What, When, Where, Agenda, Contact Details) for School Events & Tours', 'https://www.youtube.com/watch?v=XGPrmhIehBI&t=280s&end=560s', true, 1),
('65d29b56-0301-3220-0000-000000000003', '65d29b56-0301-2220-0000-000000000003', 'VIDEO', 'Step-by-Step Solved Board Examples, Lost & Found Notices, Common Mistakes & Marking Scheme', 'https://www.youtube.com/watch?v=XGPrmhIehBI&t=560s&end=830s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
