-- V318__seed_class12_cs_ch01_review_of_python_basics_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Computer Science Chapter 1 (Review of Python Basics)
-- Video: Swati Chawla (Rock in Board Series / Boards 2026) (4M3UgZmZtZk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 12200s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Review of Python Basics)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0830-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0830-1200-0000-000000000001';

-- 2. Insert 6 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0830-2201-0000-000000000001', '65d29b56-0830-1200-0000-000000000001', 'Python Fundamentals & Token Basics (Keywords, Identifiers, Literals, Operators & Expressions)', 1, true),
('65d29b56-0830-2201-0000-000000000002', '65d29b56-0830-1200-0000-000000000001', 'Flow of Control: Conditional Statements (if-elif-else) & Iterative Loops (for, while, break, continue)', 2, true),
('65d29b56-0830-2201-0000-000000000003', '65d29b56-0830-1200-0000-000000000001', 'Strings: Traversal, Indexing, Slicing, String Operators, Built-in Methods & Immutability Concepts', 3, true),
('65d29b56-0830-2201-0000-000000000004', '65d29b56-0830-1200-0000-000000000001', 'Lists: Creation, Indexing, Slicing, Mutability, Traversing & Built-in List Methods', 4, true),
('65d29b56-0830-2201-0000-000000000005', '65d29b56-0830-1200-0000-000000000001', 'Tuples: Creation, Unpacking, Slicing, Tuple Functions & Immutability Concepts', 5, true),
('65d29b56-0830-2201-0000-000000000006', '65d29b56-0830-1200-0000-000000000001', 'Dictionaries: Key-Value Pairs, Mutability, Dictionary Methods & Class XI Board PYQs', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0830-3201-0000-000000000001', '65d29b56-0830-2201-0000-000000000001', 'VIDEO', 'Python Fundamentals & Token Basics (Keywords, Identifiers, Literals, Operators & Expressions)', 'https://www.youtube.com/watch?v=4M3UgZmZtZk&end=3005s', true, 1),
('65d29b56-0830-3201-0000-000000000002', '65d29b56-0830-2201-0000-000000000002', 'VIDEO', 'Flow of Control: Conditional Statements (if-elif-else) & Iterative Loops (for, while, break, continue)', 'https://www.youtube.com/watch?v=4M3UgZmZtZk&t=3005s&end=5357s', true, 1),
('65d29b56-0830-3201-0000-000000000003', '65d29b56-0830-2201-0000-000000000003', 'VIDEO', 'Strings: Traversal, Indexing, Slicing, String Operators, Built-in Methods & Immutability Concepts', 'https://www.youtube.com/watch?v=4M3UgZmZtZk&t=5357s&end=7964s', true, 1),
('65d29b56-0830-3201-0000-000000000004', '65d29b56-0830-2201-0000-000000000004', 'VIDEO', 'Lists: Creation, Indexing, Slicing, Mutability, Traversing & Built-in List Methods', 'https://www.youtube.com/watch?v=4M3UgZmZtZk&t=7964s&end=9981s', true, 1),
('65d29b56-0830-3201-0000-000000000005', '65d29b56-0830-2201-0000-000000000005', 'VIDEO', 'Tuples: Creation, Unpacking, Slicing, Tuple Functions & Immutability Concepts', 'https://www.youtube.com/watch?v=4M3UgZmZtZk&t=9981s&end=10778s', true, 1),
('65d29b56-0830-3201-0000-000000000006', '65d29b56-0830-2201-0000-000000000006', 'VIDEO', 'Dictionaries: Key-Value Pairs, Mutability, Dictionary Methods & Class XI Board PYQs', 'https://www.youtube.com/watch?v=4M3UgZmZtZk&t=10778s&end=12200s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
