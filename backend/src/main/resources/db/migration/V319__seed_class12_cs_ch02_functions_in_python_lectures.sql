-- V319__seed_class12_cs_ch02_functions_in_python_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Computer Science Chapter 2 (Functions in Python)
-- Video: Swati Chawla (Rock in Board Series / Boards 2026) (GdAbgW73HYM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4240s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Functions in Python)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0830-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0830-1200-0000-000000000002';

-- 2. Insert 6 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0830-2202-0000-000000000001', '65d29b56-0830-1200-0000-000000000002', 'Understanding Functions: Built-in, Module-Defined & User-Defined Function Anatomy (def, headers)', 1, true),
('65d29b56-0830-2202-0000-000000000002', '65d29b56-0830-1200-0000-000000000002', 'User Defined Functions, Variations in Syntax & Returning Single/Multiple Values', 2, true),
('65d29b56-0830-2202-0000-000000000003', '65d29b56-0830-1200-0000-000000000002', 'Arguments and Parameters: Positional / Required Arguments vs Parameters', 3, true),
('65d29b56-0830-2202-0000-000000000004', '65d29b56-0830-1200-0000-000000000002', 'Default Parameters, Keyword Arguments & Rules of Parameter Passing', 4, true),
('65d29b56-0830-2202-0000-000000000005', '65d29b56-0830-1200-0000-000000000002', 'Flow of Execution in Functions & Scope of Variables (Local vs Global Scope, global keyword)', 5, true),
('65d29b56-0830-2202-0000-000000000006', '65d29b56-0830-1200-0000-000000000002', 'Passing Mutable vs Immutable Objects to Functions & High-Yield Board Output Questions', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0830-3202-0000-000000000001', '65d29b56-0830-2202-0000-000000000001', 'VIDEO', 'Understanding Functions: Built-in, Module-Defined & User-Defined Function Anatomy (def, headers)', 'https://www.youtube.com/watch?v=GdAbgW73HYM&end=590s', true, 1),
('65d29b56-0830-3202-0000-000000000002', '65d29b56-0830-2202-0000-000000000002', 'VIDEO', 'User Defined Functions, Variations in Syntax & Returning Single/Multiple Values', 'https://www.youtube.com/watch?v=GdAbgW73HYM&t=590s&end=2264s', true, 1),
('65d29b56-0830-3202-0000-000000000003', '65d29b56-0830-2202-0000-000000000003', 'VIDEO', 'Arguments and Parameters: Positional / Required Arguments vs Parameters', 'https://www.youtube.com/watch?v=GdAbgW73HYM&t=2264s&end=2858s', true, 1),
('65d29b56-0830-3202-0000-000000000004', '65d29b56-0830-2202-0000-000000000004', 'VIDEO', 'Default Parameters, Keyword Arguments & Rules of Parameter Passing', 'https://www.youtube.com/watch?v=GdAbgW73HYM&t=2858s&end=3263s', true, 1),
('65d29b56-0830-3202-0000-000000000005', '65d29b56-0830-2202-0000-000000000005', 'VIDEO', 'Flow of Execution in Functions & Scope of Variables (Local vs Global Scope, global keyword)', 'https://www.youtube.com/watch?v=GdAbgW73HYM&t=3263s&end=4084s', true, 1),
('65d29b56-0830-3202-0000-000000000006', '65d29b56-0830-2202-0000-000000000006', 'VIDEO', 'Passing Mutable vs Immutable Objects to Functions & High-Yield Board Output Questions', 'https://www.youtube.com/watch?v=GdAbgW73HYM&t=4084s&end=4240s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
