-- V421__seed_class12_math_ch14_internal_assessment_mathematics_lab_activities_and_viva_voce_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 14 (Internal Assessment: Mathematics Lab Activities & Viva Voce (20 Marks))
-- Video: educaptain - Commerce & Management (Class 12 Masterclass) (DBp9TgmTN6I)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 549s)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Internal Assessment: Mathematics Lab Activities & Viva Voce (20 Marks))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000014';

-- 2. Insert 4 Verified Master Topics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2214-0000-000000000001', '65d29b56-0041-1200-0000-000000000014', 'CBSE Class 12 Mathematics Internal Assessment Scheme (10 Marks Tests + 10 Marks Lab Activities)', 1, true),
('65d29b56-0041-2214-0000-000000000002', '65d29b56-0041-1200-0000-000000000014', 'Mathematics Lab Activities & Project Portfolio: Record Book Preparation per NCERT Manual', 2, true),
('65d29b56-0041-2214-0000-000000000003', '65d29b56-0041-1200-0000-000000000014', 'High-Frequency Viva Voce Questions on Relations, Matrices, Calculus & Vectors', 3, true),
('65d29b56-0041-2214-0000-000000000004', '65d29b56-0041-1200-0000-000000000014', 'Practical Exam Checklist & Strategic Tips to Score Full 20/20 Marks in Internal Assessment', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3214-0000-000000000001', '65d29b56-0041-2214-0000-000000000001', 'VIDEO', 'CBSE Class 12 Mathematics Internal Assessment Scheme (10 Marks Tests + 10 Marks Lab Activities)', 'https://www.youtube.com/watch?v=DBp9TgmTN6I&end=130s', true, 1),
('65d29b56-0041-3214-0000-000000000002', '65d29b56-0041-2214-0000-000000000002', 'VIDEO', 'Mathematics Lab Activities & Project Portfolio: Record Book Preparation per NCERT Manual', 'https://www.youtube.com/watch?v=DBp9TgmTN6I&t=130s&end=270s', true, 1),
('65d29b56-0041-3214-0000-000000000003', '65d29b56-0041-2214-0000-000000000003', 'VIDEO', 'High-Frequency Viva Voce Questions on Relations, Matrices, Calculus & Vectors', 'https://www.youtube.com/watch?v=DBp9TgmTN6I&t=270s&end=410s', true, 1),
('65d29b56-0041-3214-0000-000000000004', '65d29b56-0041-2214-0000-000000000004', 'VIDEO', 'Practical Exam Checklist & Strategic Tips to Score Full 20/20 Marks in Internal Assessment', 'https://www.youtube.com/watch?v=DBp9TgmTN6I&t=410s&end=549s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
