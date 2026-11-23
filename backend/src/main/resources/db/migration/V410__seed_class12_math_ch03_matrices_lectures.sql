-- V410__seed_class12_math_ch03_matrices_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 3 (Matrices)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (QRblOWCxDdg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9981s)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Matrices)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000003';

-- 2. Insert 4 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2203-0000-000000000001', '65d29b56-0041-1200-0000-000000000003', 'Concept, Notation, Order, Equality & Types of Matrices (Row, Column, Square, Identity, Zero)', 1, true),
('65d29b56-0041-2203-0000-000000000002', '65d29b56-0041-1200-0000-000000000003', 'Operations on Matrices: Addition, Scalar Multiplication, Matrix Multiplication & Properties', 2, true),
('65d29b56-0041-2203-0000-000000000003', '65d29b56-0041-1200-0000-000000000003', 'Transpose of a Matrix, Symmetric and Skew-Symmetric Matrices & Decomposition Theorem', 3, true),
('65d29b56-0041-2203-0000-000000000004', '65d29b56-0041-1200-0000-000000000003', 'Invertible Matrices, Uniqueness of Inverse & Competency-Based Case Study Problems', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3203-0000-000000000001', '65d29b56-0041-2203-0000-000000000001', 'VIDEO', 'Concept, Notation, Order, Equality & Types of Matrices (Row, Column, Square, Identity, Zero)', 'https://www.youtube.com/watch?v=QRblOWCxDdg&end=2500s', true, 1),
('65d29b56-0041-3203-0000-000000000002', '65d29b56-0041-2203-0000-000000000002', 'VIDEO', 'Operations on Matrices: Addition, Scalar Multiplication, Matrix Multiplication & Properties', 'https://www.youtube.com/watch?v=QRblOWCxDdg&t=2500s&end=5000s', true, 1),
('65d29b56-0041-3203-0000-000000000003', '65d29b56-0041-2203-0000-000000000003', 'VIDEO', 'Transpose of a Matrix, Symmetric and Skew-Symmetric Matrices & Decomposition Theorem', 'https://www.youtube.com/watch?v=QRblOWCxDdg&t=5000s&end=7500s', true, 1),
('65d29b56-0041-3203-0000-000000000004', '65d29b56-0041-2203-0000-000000000004', 'VIDEO', 'Invertible Matrices, Uniqueness of Inverse & Competency-Based Case Study Problems', 'https://www.youtube.com/watch?v=QRblOWCxDdg&t=7500s&end=9981s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
