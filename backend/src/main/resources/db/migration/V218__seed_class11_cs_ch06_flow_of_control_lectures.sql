-- V218__seed_class11_cs_ch06_flow_of_control_lectures.sql
-- Seeds verified 5 Continuous Master Subtopics for Class 11 Computer Science Chapter 6: Flow of Control (Conditionals & Loops)
-- Masterclass Video: ScoreShala (9JdSHcXWHwc)
-- 100% Zero-Gap Continuous Timeline: 0s to 7090s (01:58:10, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000006';

-- 2. Insert 5 Verified Master Subtopics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2106-0000-000000000001', '65d29b56-0083-1100-0000-000000000006', 'Sequential Flow, Indentation & Conditional Statements (if, if-else, if-elif-else)', 1, true),
('65d29b56-0083-2106-0000-000000000002', '65d29b56-0083-1100-0000-000000000006', 'Iterative Statements: The for Loop & range() Function Syntax', 2, true),
('65d29b56-0083-2106-0000-000000000003', '65d29b56-0083-1100-0000-000000000006', 'Hands-on Programming: Absolute Value, Divisibility & Sorting 3 Numbers', 3, true),
('65d29b56-0083-2106-0000-000000000004', '65d29b56-0083-1100-0000-000000000006', 'The while Loop, Loop Flowcharts, Factorial & Summation of Series', 4, true),
('65d29b56-0083-2106-0000-000000000005', '65d29b56-0083-1100-0000-000000000006', 'Jump Statements (break, continue), Infinite Loops & Nested Loop Patterns', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 24:45 (0s to 1485s)
('65d29b56-0083-3106-0000-000000000001', '65d29b56-0083-2106-0000-000000000001', 'VIDEO', 'Sequential Flow, Indentation & Conditional Statements (Indentation Rules, Decision Making, if, if-else, nested if & if-elif-else Ladder)', 'https://www.youtube.com/watch?v=9JdSHcXWHwc&t=0s&end=1485s', true, 1),

-- Topic 2: 24:45 to 48:46 (1485s to 2926s)
('65d29b56-0083-3106-0000-000000000002', '65d29b56-0083-2106-0000-000000000002', 'VIDEO', 'Iterative Statements: The for Loop & range() Function Syntax (range(start, stop, step), Iterating Over Sequences & Counting Loops)', 'https://www.youtube.com/watch?v=9JdSHcXWHwc&t=1485s&end=2926s', true, 1),

-- Topic 3: 48:46 to 1:17:38 (2926s to 4658s)
('65d29b56-0083-3106-0000-000000000003', '65d29b56-0083-2106-0000-000000000003', 'VIDEO', 'Hands-on Programming: Absolute Value, Divisibility & Sorting 3 Numbers (CBSE Practical Programs, Flowcharts & Logical Condition Formulation)', 'https://www.youtube.com/watch?v=9JdSHcXWHwc&t=2926s&end=4658s', true, 1),

-- Topic 4: 1:17:38 to 1:33:48 (4658s to 5628s)
('65d29b56-0083-3106-0000-000000000004', '65d29b56-0083-2106-0000-000000000004', 'VIDEO', 'The while Loop, Loop Flowcharts, Factorial & Summation of Series (Condition-Controlled Iteration, Updating Loop Variables, Factorial Algorithm & Mathematical Series)', 'https://www.youtube.com/watch?v=9JdSHcXWHwc&t=4658s&end=5628s', true, 1),

-- Topic 5: 1:33:48 to 1:58:10 (5628s to 7090s)
('65d29b56-0083-3106-0000-000000000005', '65d29b56-0083-2106-0000-000000000005', 'VIDEO', 'Jump Statements (break, continue), Infinite Loops & Nested Loop Patterns (Controlling Iteration Flow, else Clause with Loops, Star Patterns & Character Triangles)', 'https://www.youtube.com/watch?v=9JdSHcXWHwc&t=5628s&end=7090s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
