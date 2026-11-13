-- V125__seed_class11_maths_ch4_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 4 (Complex Numbers and Quadratic Equations)
-- Video: PW Class 11 Science (Complex Numbers And Quadratic Equations | Full Chapter in ONE SHOT | Chapter 4 | Class 11 Maths | 7tu6_GH5qAw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9515s / 2h 38m 35s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Complex Numbers and Quadratic Equations)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000004';

-- 2. Insert 5 Verified Master Topics for Chapter 4 (Complex Numbers and Quadratic Equations)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2104-0000-000000000001', '65d29b56-2222-1100-0000-000000000004', 'Need for Complex Numbers, Imaginary Unit (i), Integral Powers of Iota & Problem Solving', 1, true),
('65d29b56-2222-2104-0000-000000000002', '65d29b56-2222-1100-0000-000000000004', 'Definition & Algebra of Complex Numbers: Real & Imaginary Parts, Operations & Algebraic Identities', 2, true),
('65d29b56-2222-2104-0000-000000000003', '65d29b56-2222-1100-0000-000000000004', 'Equality of Complex Numbers, Conjugate of a Complex Number & Conjugate Properties', 3, true),
('65d29b56-2222-2104-0000-000000000004', '65d29b56-2222-1100-0000-000000000004', 'Modulus of Complex Numbers, Multiplicative Inverse & Modulus Properties with Problem Solving', 4, true),
('65d29b56-2222-2104-0000-000000000005', '65d29b56-2222-1100-0000-000000000004', 'Argand Plane (Complex Plane): Geometric Representation, Real & Imaginary Axes & Chapter Review', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3104-0000-000000000001', '65d29b56-2222-2104-0000-000000000001', 'VIDEO', 'Need for Complex Numbers, Imaginary Unit (i), Integral Powers of Iota & Problem Solving', 'https://www.youtube.com/watch?v=7tu6_GH5qAw&end=2970s', true, 1),
('65d29b56-2222-3104-0000-000000000002', '65d29b56-2222-2104-0000-000000000002', 'VIDEO', 'Definition & Algebra of Complex Numbers: Real & Imaginary Parts, Operations & Algebraic Identities', 'https://www.youtube.com/watch?v=7tu6_GH5qAw&t=2970s&end=4558s', true, 1),
('65d29b56-2222-3104-0000-000000000003', '65d29b56-2222-2104-0000-000000000003', 'VIDEO', 'Equality of Complex Numbers, Conjugate of a Complex Number & Conjugate Properties', 'https://www.youtube.com/watch?v=7tu6_GH5qAw&t=4558s&end=6165s', true, 1),
('65d29b56-2222-3104-0000-000000000004', '65d29b56-2222-2104-0000-000000000004', 'VIDEO', 'Modulus of Complex Numbers, Multiplicative Inverse & Modulus Properties with Problem Solving', 'https://www.youtube.com/watch?v=7tu6_GH5qAw&t=6165s&end=8942s', true, 1),
('65d29b56-2222-3104-0000-000000000005', '65d29b56-2222-2104-0000-000000000005', 'VIDEO', 'Argand Plane (Complex Plane): Geometric Representation, Real & Imaginary Axes & Chapter Review', 'https://www.youtube.com/watch?v=7tu6_GH5qAw&t=8942s&end=9515s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
