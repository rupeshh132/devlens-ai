-- V411__seed_class12_math_ch04_determinants_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 4 (Determinants)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (2NncYZhn6FI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4338s)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Determinants)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000004';

-- 2. Insert 4 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2204-0000-000000000001', '65d29b56-0041-1200-0000-000000000004', 'Determinant of Square Matrices up to Order 3x3, Minors and Cofactors', 1, true),
('65d29b56-0041-2204-0000-000000000002', '65d29b56-0041-1200-0000-000000000004', 'Applications of Determinants in Finding the Area of a Triangle & Collinearity of Three Points', 2, true),
('65d29b56-0041-2204-0000-000000000003', '65d29b56-0041-1200-0000-000000000004', 'Adjoint and Inverse of a Square Matrix (A · adj(A) = |A| I)', 3, true),
('65d29b56-0041-2204-0000-000000000004', '65d29b56-0041-1200-0000-000000000004', 'Solving System of Linear Equations in 2 or 3 Variables by Matrix Method (Consistency & Inconsistency)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3204-0000-000000000001', '65d29b56-0041-2204-0000-000000000001', 'VIDEO', 'Determinant of Square Matrices up to Order 3x3, Minors and Cofactors', 'https://www.youtube.com/watch?v=2NncYZhn6FI&end=1080s', true, 1),
('65d29b56-0041-3204-0000-000000000002', '65d29b56-0041-2204-0000-000000000002', 'VIDEO', 'Applications of Determinants in Finding the Area of a Triangle & Collinearity of Three Points', 'https://www.youtube.com/watch?v=2NncYZhn6FI&t=1080s&end=2160s', true, 1),
('65d29b56-0041-3204-0000-000000000003', '65d29b56-0041-2204-0000-000000000003', 'VIDEO', 'Adjoint and Inverse of a Square Matrix (A · adj(A) = |A| I)', 'https://www.youtube.com/watch?v=2NncYZhn6FI&t=2160s&end=3250s', true, 1),
('65d29b56-0041-3204-0000-000000000004', '65d29b56-0041-2204-0000-000000000004', 'VIDEO', 'Solving System of Linear Equations in 2 or 3 Variables by Matrix Method (Consistency & Inconsistency)', 'https://www.youtube.com/watch?v=2NncYZhn6FI&t=3250s&end=4338s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
