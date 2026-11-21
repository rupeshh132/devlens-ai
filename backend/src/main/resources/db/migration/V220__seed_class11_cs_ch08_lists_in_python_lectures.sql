-- V220__seed_class11_cs_ch08_lists_in_python_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Computer Science Chapter 8: Lists in Python
-- Masterclass Video: ScoreShala (4-Q1q64sGQY)
-- 100% Zero-Gap Continuous Timeline: 0s to 6050s (01:40:50, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 8
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000008';

-- 2. Insert 4 Verified Master Subtopics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2108-0000-000000000001', '65d29b56-0083-1100-0000-000000000008', 'Introduction to Lists, Mutability & List Slicing Operations', 1, true),
('65d29b56-0083-2108-0000-000000000002', '65d29b56-0083-1100-0000-000000000008', 'List Traversal, Shallow vs Deep Copy & List Operations', 2, true),
('65d29b56-0083-2108-0000-000000000003', '65d29b56-0083-1100-0000-000000000008', 'Built-in List Methods & Manipulation Functions', 3, true),
('65d29b56-0083-2108-0000-000000000004', '65d29b56-0083-1100-0000-000000000008', 'List Algorithms: Linear Search, Frequency Counting & Statistics', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 37:02 (0s to 2222s)
('65d29b56-0083-3108-0000-000000000001', '65d29b56-0083-2108-0000-000000000001', 'VIDEO', 'Introduction to Lists, Mutability & List Slicing Operations (Creating Lists, Indexing, Slicing [start:stop:step], Modifying Elements in Place & In-Memory Storage)', 'https://www.youtube.com/watch?v=4-Q1q64sGQY&t=0s&end=2222s', true, 1),

-- Topic 2: 37:02 to 1:09:14 (2222s to 4154s)
('65d29b56-0083-3108-0000-000000000002', '65d29b56-0083-2108-0000-000000000002', 'VIDEO', 'List Traversal, Shallow vs Deep Copy & List Operations (Concatenation +, Repetition *, Membership in/not in, Iterating via for Loop & Copying Lists Safely)', 'https://www.youtube.com/watch?v=4-Q1q64sGQY&t=2222s&end=4154s', true, 1),

-- Topic 3: 1:09:14 to 1:24:40 (4154s to 5080s)
('65d29b56-0083-3108-0000-000000000003', '65d29b56-0083-2108-0000-000000000003', 'VIDEO', 'Built-in List Methods & Manipulation Functions (len(), list(), append(), extend(), insert(), count(), index(), remove(), pop(), reverse(), sort(), sorted(), min(), max(), sum())', 'https://www.youtube.com/watch?v=4-Q1q64sGQY&t=4154s&end=5080s', true, 1),

-- Topic 4: 1:24:40 to 1:40:50 (5080s to 6050s)
('65d29b56-0083-3108-0000-000000000004', '65d29b56-0083-2108-0000-000000000004', 'VIDEO', 'List Algorithms: Linear Search, Frequency Counting & Statistics (Writing Python Programs: Finding Min/Max/Mean, Linear Search Algorithm & Frequency Counting of Elements)', 'https://www.youtube.com/watch?v=4-Q1q64sGQY&t=5080s&end=6050s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
