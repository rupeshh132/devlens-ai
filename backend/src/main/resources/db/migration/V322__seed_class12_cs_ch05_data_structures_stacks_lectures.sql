-- V322__seed_class12_cs_ch05_data_structures_stacks_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Computer Science Chapter 5 (Data Structures: Stacks)
-- Video: Swati Chawla (Rock in Board Series / Boards 2026) (1d0_1CqaUjU)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1025s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Data Structures: Stacks)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0830-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0830-1200-0000-000000000005';

-- 2. Insert 6 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0830-2205-0000-000000000001', '65d29b56-0830-1200-0000-000000000005', 'Introduction to Data Structures: Linear vs Non-Linear Structures & Stack Definition (LIFO Principle)', 1, true),
('65d29b56-0830-2205-0000-000000000002', '65d29b56-0830-1200-0000-000000000005', 'Stack Terminology: Top of Stack, Overflow & Underflow Conditions', 2, true),
('65d29b56-0830-2205-0000-000000000003', '65d29b56-0830-1200-0000-000000000005', 'Stack Operations: Implementation of PUSH Operation using Python List (append())', 3, true),
('65d29b56-0830-2205-0000-000000000004', '65d29b56-0830-1200-0000-000000000005', 'Stack Operations: Implementation of POP Operation using Python List (pop() with Underflow Check)', 4, true),
('65d29b56-0830-2205-0000-000000000005', '65d29b56-0830-1200-0000-000000000005', 'Stack Operations: Peek and Display / Traversal Implementation using Python List', 5, true),
('65d29b56-0830-2205-0000-000000000006', '65d29b56-0830-1200-0000-000000000005', 'Complete CBSE Board Examination Stack Coding PYQs & Menu-Driven Programs', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0830-3205-0000-000000000001', '65d29b56-0830-2205-0000-000000000001', 'VIDEO', 'Introduction to Data Structures: Linear vs Non-Linear Structures & Stack Definition (LIFO Principle)', 'https://www.youtube.com/watch?v=1d0_1CqaUjU&end=220s', true, 1),
('65d29b56-0830-3205-0000-000000000002', '65d29b56-0830-2205-0000-000000000002', 'VIDEO', 'Stack Terminology: Top of Stack, Overflow & Underflow Conditions', 'https://www.youtube.com/watch?v=1d0_1CqaUjU&t=220s&end=460s', true, 1),
('65d29b56-0830-3205-0000-000000000003', '65d29b56-0830-2205-0000-000000000003', 'VIDEO', 'Stack Operations: Implementation of PUSH Operation using Python List (append())', 'https://www.youtube.com/watch?v=1d0_1CqaUjU&t=460s&end=680s', true, 1),
('65d29b56-0830-3205-0000-000000000004', '65d29b56-0830-2205-0000-000000000004', 'VIDEO', 'Stack Operations: Implementation of POP Operation using Python List (pop() with Underflow Check)', 'https://www.youtube.com/watch?v=1d0_1CqaUjU&t=680s&end=840s', true, 1),
('65d29b56-0830-3205-0000-000000000005', '65d29b56-0830-2205-0000-000000000005', 'VIDEO', 'Stack Operations: Peek and Display / Traversal Implementation using Python List', 'https://www.youtube.com/watch?v=1d0_1CqaUjU&t=840s&end=950s', true, 1),
('65d29b56-0830-3205-0000-000000000006', '65d29b56-0830-2205-0000-000000000006', 'VIDEO', 'Complete CBSE Board Examination Stack Coding PYQs & Menu-Driven Programs', 'https://www.youtube.com/watch?v=1d0_1CqaUjU&t=950s&end=1025s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
