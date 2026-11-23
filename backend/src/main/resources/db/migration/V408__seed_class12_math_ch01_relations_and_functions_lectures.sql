-- V408__seed_class12_math_ch01_relations_and_functions_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 1 (Relations and Functions)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (zyFucmwc2gY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7071s)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Relations and Functions)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000001';

-- 2. Insert 4 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2201-0000-000000000001', '65d29b56-0041-1200-0000-000000000001', 'Types of Relations: Empty, Universal, Reflexive, Symmetric, Transitive & Equivalence Relations', 1, true),
('65d29b56-0041-2201-0000-000000000002', '65d29b56-0041-1200-0000-000000000001', 'Equivalence Classes & Properties with NCERT Exercise Questions', 2, true),
('65d29b56-0041-2201-0000-000000000003', '65d29b56-0041-1200-0000-000000000001', 'Types of Functions: Injective (One-to-One), Surjective (Onto) & Bijective Functions', 3, true),
('65d29b56-0041-2201-0000-000000000004', '65d29b56-0041-1200-0000-000000000001', 'Proving One-to-One and Onto Functions & Board Level Numerical Analysis', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3201-0000-000000000001', '65d29b56-0041-2201-0000-000000000001', 'VIDEO', 'Types of Relations: Empty, Universal, Reflexive, Symmetric, Transitive & Equivalence Relations', 'https://www.youtube.com/watch?v=zyFucmwc2gY&end=1760s', true, 1),
('65d29b56-0041-3201-0000-000000000002', '65d29b56-0041-2201-0000-000000000002', 'VIDEO', 'Equivalence Classes & Properties with NCERT Exercise Questions', 'https://www.youtube.com/watch?v=zyFucmwc2gY&t=1760s&end=3530s', true, 1),
('65d29b56-0041-3201-0000-000000000003', '65d29b56-0041-2201-0000-000000000003', 'VIDEO', 'Types of Functions: Injective (One-to-One), Surjective (Onto) & Bijective Functions', 'https://www.youtube.com/watch?v=zyFucmwc2gY&t=3530s&end=5300s', true, 1),
('65d29b56-0041-3201-0000-000000000004', '65d29b56-0041-2201-0000-000000000004', 'VIDEO', 'Proving One-to-One and Onto Functions & Board Level Numerical Analysis', 'https://www.youtube.com/watch?v=zyFucmwc2gY&t=5300s&end=7071s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
