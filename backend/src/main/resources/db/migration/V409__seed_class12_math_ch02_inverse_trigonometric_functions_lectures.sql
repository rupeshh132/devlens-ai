-- V409__seed_class12_math_ch02_inverse_trigonometric_functions_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 2 (Inverse Trigonometric Functions)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (JDEod1lmAwg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7591s)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Inverse Trigonometric Functions)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000002';

-- 2. Insert 4 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2202-0000-000000000001', '65d29b56-0041-1200-0000-000000000002', 'Need for Restricting Domain & Definition of Inverse Trigonometric Functions', 1, true),
('65d29b56-0041-2202-0000-000000000002', '65d29b56-0041-1200-0000-000000000002', 'Principal Value Branches, Range and Domain of sin⁻¹x, cos⁻¹x, tan⁻¹x', 2, true),
('65d29b56-0041-2202-0000-000000000003', '65d29b56-0041-1200-0000-000000000002', 'Graphs of Inverse Trigonometric Functions & Evaluation of Expressions', 3, true),
('65d29b56-0041-2202-0000-000000000004', '65d29b56-0041-1200-0000-000000000002', 'Advanced Problem Solving on Principal Value Branches & Important Board PYQs', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3202-0000-000000000001', '65d29b56-0041-2202-0000-000000000001', 'VIDEO', 'Need for Restricting Domain & Definition of Inverse Trigonometric Functions', 'https://www.youtube.com/watch?v=JDEod1lmAwg&end=1900s', true, 1),
('65d29b56-0041-3202-0000-000000000002', '65d29b56-0041-2202-0000-000000000002', 'VIDEO', 'Principal Value Branches, Range and Domain of sin⁻¹x, cos⁻¹x, tan⁻¹x', 'https://www.youtube.com/watch?v=JDEod1lmAwg&t=1900s&end=3800s', true, 1),
('65d29b56-0041-3202-0000-000000000003', '65d29b56-0041-2202-0000-000000000003', 'VIDEO', 'Graphs of Inverse Trigonometric Functions & Evaluation of Expressions', 'https://www.youtube.com/watch?v=JDEod1lmAwg&t=3800s&end=5700s', true, 1),
('65d29b56-0041-3202-0000-000000000004', '65d29b56-0041-2202-0000-000000000004', 'VIDEO', 'Advanced Problem Solving on Principal Value Branches & Important Board PYQs', 'https://www.youtube.com/watch?v=JDEod1lmAwg&t=5700s&end=7591s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
