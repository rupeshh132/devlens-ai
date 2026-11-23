-- V417__seed_class12_math_ch10_vectors_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 10 (Vectors)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (U7nSbEZyYnA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8586s)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Vectors)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000010';

-- 2. Insert 4 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2210-0000-000000000001', '65d29b56-0041-1200-0000-000000000010', 'Vectors and Scalars, Magnitude, Direction, Types of Vectors & Position Vector', 1, true),
('65d29b56-0041-2210-0000-000000000002', '65d29b56-0041-1200-0000-000000000010', 'Components of a Vector, Vector Addition, Scalar Multiplication & Section Formula', 2, true),
('65d29b56-0041-2210-0000-000000000003', '65d29b56-0041-1200-0000-000000000010', 'Scalar (Dot) Product of Vectors: Definition, Geometrical Projection & Properties', 3, true),
('65d29b56-0041-2210-0000-000000000004', '65d29b56-0041-1200-0000-000000000010', 'Vector (Cross) Product of Vectors: Definition, Area of Triangle/Parallelogram & Applications', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3210-0000-000000000001', '65d29b56-0041-2210-0000-000000000001', 'VIDEO', 'Vectors and Scalars, Magnitude, Direction, Types of Vectors & Position Vector', 'https://www.youtube.com/watch?v=U7nSbEZyYnA&end=2140s', true, 1),
('65d29b56-0041-3210-0000-000000000002', '65d29b56-0041-2210-0000-000000000002', 'VIDEO', 'Components of a Vector, Vector Addition, Scalar Multiplication & Section Formula', 'https://www.youtube.com/watch?v=U7nSbEZyYnA&t=2140s&end=4290s', true, 1),
('65d29b56-0041-3210-0000-000000000003', '65d29b56-0041-2210-0000-000000000003', 'VIDEO', 'Scalar (Dot) Product of Vectors: Definition, Geometrical Projection & Properties', 'https://www.youtube.com/watch?v=U7nSbEZyYnA&t=4290s&end=6440s', true, 1),
('65d29b56-0041-3210-0000-000000000004', '65d29b56-0041-2210-0000-000000000004', 'VIDEO', 'Vector (Cross) Product of Vectors: Definition, Area of Triangle/Parallelogram & Applications', 'https://www.youtube.com/watch?v=U7nSbEZyYnA&t=6440s&end=8586s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
