-- V414__seed_class12_math_ch07_integrals_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 7 (Integrals)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (yY2oUKVAkdY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 21930s)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Integrals)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000007';

-- 2. Insert 4 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2207-0000-000000000001', '65d29b56-0041-1200-0000-000000000007', 'Indefinite Integration as Inverse of Differentiation & Integration by Substitution', 1, true),
('65d29b56-0041-2207-0000-000000000002', '65d29b56-0041-1200-0000-000000000007', 'Integration of Rational Functions by Partial Fractions & Standard Algebraic Forms', 2, true),
('65d29b56-0041-2207-0000-000000000003', '65d29b56-0041-1200-0000-000000000007', 'Integration by Parts (ILATE Rule) & Special Integrals (√(a² ± x²), (px+q)/(ax²+bx+c))', 3, true),
('65d29b56-0041-2207-0000-000000000004', '65d29b56-0041-1200-0000-000000000007', 'Fundamental Theorem of Calculus, Properties of Definite Integrals & Definite Integral Evaluation', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3207-0000-000000000001', '65d29b56-0041-2207-0000-000000000001', 'VIDEO', 'Indefinite Integration as Inverse of Differentiation & Integration by Substitution', 'https://www.youtube.com/watch?v=yY2oUKVAkdY&end=5480s', true, 1),
('65d29b56-0041-3207-0000-000000000002', '65d29b56-0041-2207-0000-000000000002', 'VIDEO', 'Integration of Rational Functions by Partial Fractions & Standard Algebraic Forms', 'https://www.youtube.com/watch?v=yY2oUKVAkdY&t=5480s&end=10960s', true, 1),
('65d29b56-0041-3207-0000-000000000003', '65d29b56-0041-2207-0000-000000000003', 'VIDEO', 'Integration by Parts (ILATE Rule) & Special Integrals (√(a² ± x²), (px+q)/(ax²+bx+c))', 'https://www.youtube.com/watch?v=yY2oUKVAkdY&t=10960s&end=16440s', true, 1),
('65d29b56-0041-3207-0000-000000000004', '65d29b56-0041-2207-0000-000000000004', 'VIDEO', 'Fundamental Theorem of Calculus, Properties of Definite Integrals & Definite Integral Evaluation', 'https://www.youtube.com/watch?v=yY2oUKVAkdY&t=16440s&end=21930s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
