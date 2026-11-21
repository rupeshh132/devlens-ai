-- V221__seed_class11_cs_ch09_tuples_in_python_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Computer Science Chapter 9: Tuples in Python
-- Masterclass Video: ScoreShala (Xtv-5u2lUWE)
-- 100% Zero-Gap Continuous Timeline: 0s to 5300s (01:28:20, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 9
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000009';

-- 2. Insert 4 Verified Master Subtopics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2109-0000-000000000001', '65d29b56-0083-1100-0000-000000000009', 'Introduction to Tuples, Immutability & Indexing', 1, true),
('65d29b56-0083-2109-0000-000000000002', '65d29b56-0083-1100-0000-000000000009', 'Tuple Operations, Slicing, Concatenation & Unpacking', 2, true),
('65d29b56-0083-2109-0000-000000000003', '65d29b56-0083-1100-0000-000000000009', 'Built-in Tuple Functions & Nested Tuples Architecture', 3, true),
('65d29b56-0083-2109-0000-000000000004', '65d29b56-0083-1100-0000-000000000009', 'Tuple Practical Programs: Min/Max/Mean Statistics & Linear Search', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 33:15 (0s to 1995s)
('65d29b56-0083-3109-0000-000000000001', '65d29b56-0083-2109-0000-000000000001', 'VIDEO', 'Introduction to Tuples, Immutability & Indexing (Creating Empty/Single/Multi-element Tuples, Immutability Significance, Positive & Negative Indexing)', 'https://www.youtube.com/watch?v=Xtv-5u2lUWE&t=0s&end=1995s', true, 1),

-- Topic 2: 33:15 to 1:03:09 (1995s to 3789s)
('65d29b56-0083-3109-0000-000000000002', '65d29b56-0083-2109-0000-000000000002', 'VIDEO', 'Tuple Operations, Slicing, Concatenation & Unpacking (Concatenation +, Repetition *, Slicing [start:stop:step], Membership in/not in, Tuple Assignment & Packing/Unpacking)', 'https://www.youtube.com/watch?v=Xtv-5u2lUWE&t=1995s&end=3789s', true, 1),

-- Topic 3: 1:03:09 to 1:15:20 (3789s to 4520s)
('65d29b56-0083-3109-0000-000000000003', '65d29b56-0083-2109-0000-000000000003', 'VIDEO', 'Built-in Tuple Functions & Nested Tuples Architecture (len(), tuple(), count(), index(), sorted(), min(), max(), sum(), Traversing Nested Tuples & Multi-Dimensional Access)', 'https://www.youtube.com/watch?v=Xtv-5u2lUWE&t=3789s&end=4520s', true, 1),

-- Topic 4: 1:15:20 to 1:28:20 (4520s to 5300s)
('65d29b56-0083-3109-0000-000000000004', '65d29b56-0083-2109-0000-000000000004', 'VIDEO', 'Tuple Practical Programs: Min/Max/Mean Statistics & Linear Search (Board Programs: Computing Mean/Min/Max on Numeric Tuples, Linear Search on Tuples & Frequency of Occurrences)', 'https://www.youtube.com/watch?v=Xtv-5u2lUWE&t=4520s&end=5300s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
