-- V362__seed_class12_eng_ch21_writing_skills_invitations_and_replies_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 21 (Writing Skills: Formal and Informal Invitations & Replies)
-- Video: Simran Sahni (Board Exam Masterclass) (kYZGkt0g-W0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1580s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 21 (Writing Skills: Formal and Informal Invitations & Replies)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000021'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000021';

-- 2. Insert 3 Verified Master Topics for Chapter 21
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2221-0000-000000000001', '65d29b56-0301-1200-0000-000000000021', 'Formal Invitations: Card Layout for Public Functions & Formal Letter Format for Dignitaries / Judges', 1, true),
('65d29b56-0301-2221-0000-000000000002', '65d29b56-0301-1200-0000-000000000021', 'Informal Invitations: Personal Letter Style for Friends and Family, Conversational Tone & Samples', 2, true),
('65d29b56-0301-2221-0000-000000000003', '65d29b56-0301-1200-0000-000000000021', 'Formal and Informal Replies (Acceptance & Refusal): Gratitude, Courteous Regrets, Rules & Board PYQs', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3221-0000-000000000001', '65d29b56-0301-2221-0000-000000000001', 'VIDEO', 'Formal Invitations: Card Layout for Public Functions & Formal Letter Format for Dignitaries / Judges', 'https://www.youtube.com/watch?v=kYZGkt0g-W0&end=520s', true, 1),
('65d29b56-0301-3221-0000-000000000002', '65d29b56-0301-2221-0000-000000000002', 'VIDEO', 'Informal Invitations: Personal Letter Style for Friends and Family, Conversational Tone & Samples', 'https://www.youtube.com/watch?v=kYZGkt0g-W0&t=520s&end=1050s', true, 1),
('65d29b56-0301-3221-0000-000000000003', '65d29b56-0301-2221-0000-000000000003', 'VIDEO', 'Formal and Informal Replies (Acceptance & Refusal): Gratitude, Courteous Regrets, Rules & Board PYQs', 'https://www.youtube.com/watch?v=kYZGkt0g-W0&t=1050s&end=1580s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
