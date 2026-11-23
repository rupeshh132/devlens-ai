-- V365__seed_class12_eng_ch24_writing_skills_report_writing_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 24 (Writing Skills: Report Writing)
-- Video: Simran Sahni (Board Exam Masterclass) (dCvZ-GNEmFs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1140s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 24 (Writing Skills: Report Writing)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000024'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000024';

-- 2. Insert 3 Verified Master Topics for Chapter 24
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2224-0000-000000000001', '65d29b56-0301-1200-0000-000000000024', 'Report Writing Foundations: Headline, Byline, Date & Place (Newspaper) vs School Magazine Report Format', 1, true),
('65d29b56-0301-2224-0000-000000000002', '65d29b56-0301-1200-0000-000000000024', 'Objective Narrative Delivery in Past Tense / Passive Voice: Event Proceedings, Chief Guests & Highlights', 2, true),
('65d29b56-0301-2224-0000-000000000003', '65d29b56-0301-1200-0000-000000000024', 'Concluding Summary, Eyewitness Quotes, Solved Board Questions & Avoiding Subjective Biases', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3224-0000-000000000001', '65d29b56-0301-2224-0000-000000000001', 'VIDEO', 'Report Writing Foundations: Headline, Byline, Date & Place (Newspaper) vs School Magazine Report Format', 'https://www.youtube.com/watch?v=dCvZ-GNEmFs&end=380s', true, 1),
('65d29b56-0301-3224-0000-000000000002', '65d29b56-0301-2224-0000-000000000002', 'VIDEO', 'Objective Narrative Delivery in Past Tense / Passive Voice: Event Proceedings, Chief Guests & Highlights', 'https://www.youtube.com/watch?v=dCvZ-GNEmFs&t=380s&end=760s', true, 1),
('65d29b56-0301-3224-0000-000000000003', '65d29b56-0301-2224-0000-000000000003', 'VIDEO', 'Concluding Summary, Eyewitness Quotes, Solved Board Questions & Avoiding Subjective Biases', 'https://www.youtube.com/watch?v=dCvZ-GNEmFs&t=760s&end=1140s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
