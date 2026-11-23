-- V320__seed_class12_cs_ch03_exception_handling_in_python_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Computer Science Chapter 3 (Exception Handling in Python)
-- Video: Swati Chawla (Rock in Board Series / Boards 2026) (ISBi3a1y120)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1950s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Exception Handling in Python)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0830-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0830-1200-0000-000000000003';

-- 2. Insert 6 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0830-2203-0000-000000000001', '65d29b56-0830-1200-0000-000000000003', 'Introduction to Errors & Exceptions: Syntax Errors, Runtime Errors vs Logical Errors', 1, true),
('65d29b56-0830-2203-0000-000000000002', '65d29b56-0830-1200-0000-000000000003', 'Common Built-in Python Exceptions (ZeroDivisionError, ValueError, IndexError, KeyError, TypeError, NameError)', 2, true),
('65d29b56-0830-2203-0000-000000000003', '65d29b56-0830-1200-0000-000000000003', 'Handling Exceptions with try and except Blocks & Catching Specific Exceptions', 3, true),
('65d29b56-0830-2203-0000-000000000004', '65d29b56-0830-1200-0000-000000000003', 'Multiple except Blocks, Handling Unknown Exceptions & The Default except Clause', 4, true),
('65d29b56-0830-2203-0000-000000000005', '65d29b56-0830-1200-0000-000000000003', 'The else Block & finally Block for Resource Cleanup and Guarantees', 5, true),
('65d29b56-0830-2203-0000-000000000006', '65d29b56-0830-1200-0000-000000000003', 'Raising Exceptions with raise Keyword & High-Yield CBSE Board PYQs', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0830-3203-0000-000000000001', '65d29b56-0830-2203-0000-000000000001', 'VIDEO', 'Introduction to Errors & Exceptions: Syntax Errors, Runtime Errors vs Logical Errors', 'https://www.youtube.com/watch?v=ISBi3a1y120&end=320s', true, 1),
('65d29b56-0830-3203-0000-000000000002', '65d29b56-0830-2203-0000-000000000002', 'VIDEO', 'Common Built-in Python Exceptions (ZeroDivisionError, ValueError, IndexError, KeyError, TypeError, NameError)', 'https://www.youtube.com/watch?v=ISBi3a1y120&t=320s&end=680s', true, 1),
('65d29b56-0830-3203-0000-000000000003', '65d29b56-0830-2203-0000-000000000003', 'VIDEO', 'Handling Exceptions with try and except Blocks & Catching Specific Exceptions', 'https://www.youtube.com/watch?v=ISBi3a1y120&t=680s&end=1180s', true, 1),
('65d29b56-0830-3203-0000-000000000004', '65d29b56-0830-2203-0000-000000000004', 'VIDEO', 'Multiple except Blocks, Handling Unknown Exceptions & The Default except Clause', 'https://www.youtube.com/watch?v=ISBi3a1y120&t=1180s&end=1540s', true, 1),
('65d29b56-0830-3203-0000-000000000005', '65d29b56-0830-2203-0000-000000000005', 'VIDEO', 'The else Block & finally Block for Resource Cleanup and Guarantees', 'https://www.youtube.com/watch?v=ISBi3a1y120&t=1540s&end=1760s', true, 1),
('65d29b56-0830-3203-0000-000000000006', '65d29b56-0830-2203-0000-000000000006', 'VIDEO', 'Raising Exceptions with raise Keyword & High-Yield CBSE Board PYQs', 'https://www.youtube.com/watch?v=ISBi3a1y120&t=1760s&end=1950s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
