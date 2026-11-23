-- V368__seed_class12_eng_ch27_internal_assessment_asl_and_project_work_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 27 (Internal Assessment: ASL (Listening & Speaking) & Project Work)
-- Video: Harsh Studies (CBSE Board Official Guidelines) (_kR1FIwob48)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 200s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 27 (Internal Assessment: ASL (Listening & Speaking) & Project Work)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000027'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000027';

-- 2. Insert 3 Verified Master Topics for Chapter 27
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2227-0000-000000000001', '65d29b56-0301-1200-0000-000000000027', 'Assessment of Listening Skills (ALS): Format, Audio Prompts & Objective Comprehension Tasks (5 Marks)', 1, true),
('65d29b56-0301-2227-0000-000000000002', '65d29b56-0301-1200-0000-000000000027', 'Assessment of Speaking Skills (ASL): Conversational Fluency, Pronunciation, Lexical Range & Viva (5 Marks)', 2, true),
('65d29b56-0301-2227-0000-000000000003', '65d29b56-0301-1200-0000-000000000027', 'English Project Work & Portfolio (10 Marks): Contemporary Topic Selection, Report Structure & Viva Voce', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3227-0000-000000000001', '65d29b56-0301-2227-0000-000000000001', 'VIDEO', 'Assessment of Listening Skills (ALS): Format, Audio Prompts & Objective Comprehension Tasks (5 Marks)', 'https://www.youtube.com/watch?v=_kR1FIwob48&end=60s', true, 1),
('65d29b56-0301-3227-0000-000000000002', '65d29b56-0301-2227-0000-000000000002', 'VIDEO', 'Assessment of Speaking Skills (ASL): Conversational Fluency, Pronunciation, Lexical Range & Viva (5 Marks)', 'https://www.youtube.com/watch?v=_kR1FIwob48&t=60s&end=130s', true, 1),
('65d29b56-0301-3227-0000-000000000003', '65d29b56-0301-2227-0000-000000000003', 'VIDEO', 'English Project Work & Portfolio (10 Marks): Contemporary Topic Selection, Report Structure & Viva Voce', 'https://www.youtube.com/watch?v=_kR1FIwob48&t=130s&end=200s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
