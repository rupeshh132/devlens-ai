-- V406__seed_class12_hist_ch14_internal_assessment_project_work_viva_voce_and_research_portfolio_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 14 (Internal Assessment: Project Work, Viva Voce & Research Portfolio (20 Marks))
-- Video: Next Toppers - 12th Humanities (Ayushi Ma'am Masterclass) (C-YZQRvz3SY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1335s)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Internal Assessment: Project Work, Viva Voce & Research Portfolio (20 Marks))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000014';

-- 2. Insert 4 Verified Master Topics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2214-0000-000000000001', '65d29b56-0027-1200-0000-000000000014', 'CBSE Class 12 History Project Work Guidelines, Objectives, Topic Selection & CBSE Assessment Rubric', 1, true),
('65d29b56-0027-2214-0000-000000000002', '65d29b56-0027-1200-0000-000000000014', 'Research Methodology: Formulating Inquiry Questions, Sourcing Primary & Secondary Archives and Oral Histories', 2, true),
('65d29b56-0027-2214-0000-000000000003', '65d29b56-0027-1200-0000-000000000014', 'Project File Organization: Title Page, Certificate, Acknowledgement, Chronological Chapterization & Bibliography', 3, true),
('65d29b56-0027-2214-0000-000000000004', '65d29b56-0027-1200-0000-000000000014', 'Comprehensive Viva Voce Strategy: Key Analytical Themes, Defense of Hypothesis & Scoring Full 20/20 Marks', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3214-0000-000000000001', '65d29b56-0027-2214-0000-000000000001', 'VIDEO', 'CBSE Class 12 History Project Work Guidelines, Objectives, Topic Selection & CBSE Assessment Rubric', 'https://www.youtube.com/watch?v=C-YZQRvz3SY&end=330s', true, 1),
('65d29b56-0027-3214-0000-000000000002', '65d29b56-0027-2214-0000-000000000002', 'VIDEO', 'Research Methodology: Formulating Inquiry Questions, Sourcing Primary & Secondary Archives and Oral Histories', 'https://www.youtube.com/watch?v=C-YZQRvz3SY&t=330s&end=660s', true, 1),
('65d29b56-0027-3214-0000-000000000003', '65d29b56-0027-2214-0000-000000000003', 'VIDEO', 'Project File Organization: Title Page, Certificate, Acknowledgement, Chronological Chapterization & Bibliography', 'https://www.youtube.com/watch?v=C-YZQRvz3SY&t=660s&end=1000s', true, 1),
('65d29b56-0027-3214-0000-000000000004', '65d29b56-0027-2214-0000-000000000004', 'VIDEO', 'Comprehensive Viva Voce Strategy: Key Analytical Themes, Defense of Hypothesis & Scoring Full 20/20 Marks', 'https://www.youtube.com/watch?v=C-YZQRvz3SY&t=1000s&end=1335s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
