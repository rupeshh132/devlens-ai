-- V47__seed_class10_maths_ch2_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 2 (Polynomials)
-- Video: Ritik Mishra (Polynomials ONE SHOT 🔥 | kiegUjhq8Ao)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 10797s)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Polynomials)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000002';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2002-0000-000000000001', '65d29b56-2222-1000-0000-000000000002', 'Introduction, Meaning, Degree & Types of Polynomials', 1, true),
('65d29b56-2222-2002-0000-000000000002', '65d29b56-2222-1000-0000-000000000002', 'Geometrical Meaning of Zeroes & Graphs of Polynomials', 2, true),
('65d29b56-2222-2002-0000-000000000003', '65d29b56-2222-1000-0000-000000000002', 'Finding Zeroes of Quadratic Polynomials (Middle Term Splitting)', 3, true),
('65d29b56-2222-2002-0000-000000000004', '65d29b56-2222-1000-0000-000000000002', 'Relationship Between Zeroes & Coefficients + Practice Questions', 4, true),
('65d29b56-2222-2002-0000-000000000005', '65d29b56-2222-1000-0000-000000000002', 'Advanced Formulas, Symmetric Expressions (α²+β²) & Summary', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3002-0000-000000000001', '65d29b56-2222-2002-0000-000000000001', 'VIDEO', 'Introduction, Meaning, Degree & Types of Polynomials', 'https://www.youtube.com/watch?v=kiegUjhq8Ao&end=2226s', true, 1),
('65d29b56-2222-3002-0000-000000000002', '65d29b56-2222-2002-0000-000000000002', 'VIDEO', 'Geometrical Meaning of Zeroes & Graphs of Polynomials', 'https://www.youtube.com/watch?v=kiegUjhq8Ao&t=2226s&end=3595s', true, 1),
('65d29b56-2222-3002-0000-000000000003', '65d29b56-2222-2002-0000-000000000003', 'VIDEO', 'Finding Zeroes of Quadratic Polynomials (Middle Term Splitting)', 'https://www.youtube.com/watch?v=kiegUjhq8Ao&t=3595s&end=4522s', true, 1),
('65d29b56-2222-3002-0000-000000000004', '65d29b56-2222-2002-0000-000000000004', 'VIDEO', 'Relationship Between Zeroes & Coefficients + Practice Questions', 'https://www.youtube.com/watch?v=kiegUjhq8Ao&t=4522s&end=8495s', true, 1),
('65d29b56-2222-3002-0000-000000000005', '65d29b56-2222-2002-0000-000000000005', 'VIDEO', 'Advanced Formulas, Symmetric Expressions (α²+β²) & Summary', 'https://www.youtube.com/watch?v=kiegUjhq8Ao&t=8495s&end=10797s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
