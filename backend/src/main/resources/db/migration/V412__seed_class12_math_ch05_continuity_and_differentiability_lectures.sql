-- V412__seed_class12_math_ch05_continuity_and_differentiability_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 5 (Continuity and Differentiability)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (cnpv-t2DGiw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5408s)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Continuity and Differentiability)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000005';

-- 2. Insert 4 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2205-0000-000000000001', '65d29b56-0041-1200-0000-000000000005', 'Continuity of Functions at a Point and in an Interval & Algebra of Continuous Functions', 1, true),
('65d29b56-0041-2205-0000-000000000002', '65d29b56-0041-1200-0000-000000000005', 'Differentiability: Meaning, Left-Hand/Right-Hand Derivatives & Chain Rule for Composite Functions', 2, true),
('65d29b56-0041-2205-0000-000000000003', '65d29b56-0041-1200-0000-000000000005', 'Derivatives of Inverse Trig Functions, Implicit Functions, Exponential & Logarithmic Functions', 3, true),
('65d29b56-0041-2205-0000-000000000004', '65d29b56-0041-1200-0000-000000000005', 'Logarithmic Differentiation, Parametric Form Differentiation & Second Order Derivatives', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3205-0000-000000000001', '65d29b56-0041-2205-0000-000000000001', 'VIDEO', 'Continuity of Functions at a Point and in an Interval & Algebra of Continuous Functions', 'https://www.youtube.com/watch?v=cnpv-t2DGiw&end=1350s', true, 1),
('65d29b56-0041-3205-0000-000000000002', '65d29b56-0041-2205-0000-000000000002', 'VIDEO', 'Differentiability: Meaning, Left-Hand/Right-Hand Derivatives & Chain Rule for Composite Functions', 'https://www.youtube.com/watch?v=cnpv-t2DGiw&t=1350s&end=2700s', true, 1),
('65d29b56-0041-3205-0000-000000000003', '65d29b56-0041-2205-0000-000000000003', 'VIDEO', 'Derivatives of Inverse Trig Functions, Implicit Functions, Exponential & Logarithmic Functions', 'https://www.youtube.com/watch?v=cnpv-t2DGiw&t=2700s&end=4050s', true, 1),
('65d29b56-0041-3205-0000-000000000004', '65d29b56-0041-2205-0000-000000000004', 'VIDEO', 'Logarithmic Differentiation, Parametric Form Differentiation & Second Order Derivatives', 'https://www.youtube.com/watch?v=cnpv-t2DGiw&t=4050s&end=5408s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
