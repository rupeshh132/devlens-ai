-- V219__seed_class11_cs_ch07_strings_in_python_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Computer Science Chapter 7: Strings in Python
-- Masterclass Video: ScoreShala (OUk9quM1fk8)
-- 100% Zero-Gap Continuous Timeline: 0s to 5410s (01:30:10, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000007';

-- 2. Insert 4 Verified Master Subtopics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2107-0000-000000000001', '65d29b56-0083-1100-0000-000000000007', 'Introduction to Strings, Indexing, Slicing & String Operations', 1, true),
('65d29b56-0083-2107-0000-000000000002', '65d29b56-0083-1100-0000-000000000007', 'Traversing Strings with Loops & Basic String Case Methods', 2, true),
('65d29b56-0083-2107-0000-000000000003', '65d29b56-0083-1100-0000-000000000007', 'Built-in String Validation, Search & Splitting Methods', 3, true),
('65d29b56-0083-2107-0000-000000000004', '65d29b56-0083-1100-0000-000000000007', 'Practical String Programs: Palindrome Check, Frequency & Vowel Counting', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 32:22 (0s to 1942s)
('65d29b56-0083-3107-0000-000000000001', '65d29b56-0083-2107-0000-000000000001', 'VIDEO', 'Introduction to Strings, Indexing, Slicing & String Operations (Positive & Negative Indexing, Slicing [start:stop:step], Concatenation +, Repetition * & Membership in/not in)', 'https://www.youtube.com/watch?v=OUk9quM1fk8&t=0s&end=1942s', true, 1),

-- Topic 2: 32:22 to 43:19 (1942s to 2599s)
('65d29b56-0083-3107-0000-000000000002', '65d29b56-0083-2107-0000-000000000002', 'VIDEO', 'Traversing Strings with Loops & Basic String Case Methods (len(), capitalize(), title(), lower(), upper(), count() & Loop Iteration Traversal)', 'https://www.youtube.com/watch?v=OUk9quM1fk8&t=1942s&end=2599s', true, 1),

-- Topic 3: 43:19 to 1:07:25 (2599s to 4045s)
('65d29b56-0083-3107-0000-000000000003', '65d29b56-0083-2107-0000-000000000003', 'VIDEO', 'Built-in String Validation, Search & Splitting Methods (find(), index(), endswith(), startswith(), isalnum(), isalpha(), isdigit(), islower(), isupper(), isspace(), lstrip(), rstrip(), strip(), replace(), join(), partition(), split())', 'https://www.youtube.com/watch?v=OUk9quM1fk8&t=2599s&end=4045s', true, 1),

-- Topic 4: 1:07:25 to 1:30:10 (4045s to 5410s)
('65d29b56-0083-3107-0000-000000000004', '65d29b56-0083-2107-0000-000000000004', 'VIDEO', 'Practical String Programs: Palindrome Check, Frequency & Vowel Counting (Hands-on Python Programs: Reversing Strings, Counting Substrings & String Transformation Algorithms)', 'https://www.youtube.com/watch?v=OUk9quM1fk8&t=4045s&end=5410s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
