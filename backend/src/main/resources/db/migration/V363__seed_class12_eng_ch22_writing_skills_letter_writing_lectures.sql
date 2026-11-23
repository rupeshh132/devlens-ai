-- V363__seed_class12_eng_ch22_writing_skills_letter_writing_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 22 (Writing Skills: Letter Writing (Job Application & Letter to Editor))
-- Video: Simran Sahni (Board Exam Masterclass) (Z8dCbGd5lPg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 730s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 22 (Writing Skills: Letter Writing (Job Application & Letter to Editor))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000022'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000022';

-- 2. Insert 3 Verified Master Topics for Chapter 22
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2222-0000-000000000001', '65d29b56-0301-1200-0000-000000000022', 'Letter to the Editor: Format (Sender''s Address, Date, Receiver, Subject, Salutation) & Opening Paragraph', 1, true),
('65d29b56-0301-2222-0000-000000000002', '65d29b56-0301-1200-0000-000000000022', 'Developing Body Paragraphs: Outlining the Issue, Social/Public Consequences & Constructive Measures', 2, true),
('65d29b56-0301-2222-0000-000000000003', '65d29b56-0301-1200-0000-000000000022', 'Application for a Job with Bio-Data / Resume: Cover Letter Layout, Detailed CV Components & Solved Samples', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3222-0000-000000000001', '65d29b56-0301-2222-0000-000000000001', 'VIDEO', 'Letter to the Editor: Format (Sender''s Address, Date, Receiver, Subject, Salutation) & Opening Paragraph', 'https://www.youtube.com/watch?v=Z8dCbGd5lPg&end=240s', true, 1),
('65d29b56-0301-3222-0000-000000000002', '65d29b56-0301-2222-0000-000000000002', 'VIDEO', 'Developing Body Paragraphs: Outlining the Issue, Social/Public Consequences & Constructive Measures', 'https://www.youtube.com/watch?v=Z8dCbGd5lPg&t=240s&end=490s', true, 1),
('65d29b56-0301-3222-0000-000000000003', '65d29b56-0301-2222-0000-000000000003', 'VIDEO', 'Application for a Job with Bio-Data / Resume: Cover Letter Layout, Detailed CV Components & Solved Samples', 'https://www.youtube.com/watch?v=Z8dCbGd5lPg&t=490s&end=730s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
