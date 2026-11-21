-- V222__seed_class11_cs_ch10_dictionaries_and_modules_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Computer Science Chapter 10: Dictionaries & Python Modules
-- Masterclass Video: ScoreShala (Uh0oNjOgAMI)
-- 100% Zero-Gap Continuous Timeline: 0s to 4080s (01:08:00, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 10
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000010';

-- 2. Insert 4 Verified Master Subtopics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2110-0000-000000000001', '65d29b56-0083-1100-0000-000000000010', 'Introduction to Dictionaries, Key-Value Pairs & Mutability', 1, true),
('65d29b56-0083-2110-0000-000000000002', '65d29b56-0083-1100-0000-000000000010', 'Accessing, Modifying & Traversing Dictionaries with Loops', 2, true),
('65d29b56-0083-2110-0000-000000000003', '65d29b56-0083-1100-0000-000000000010', 'Built-in Dictionary Methods & Mapping Functions', 3, true),
('65d29b56-0083-2110-0000-000000000004', '65d29b56-0083-1100-0000-000000000010', 'Dictionary Programs (Frequency, Records) & Python Standard Modules', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 21:08 (0s to 1268s)
('65d29b56-0083-3110-0000-000000000001', '65d29b56-0083-2110-0000-000000000001', 'VIDEO', 'Introduction to Dictionaries, Key-Value Pairs & Mutability (Concept of Mapping, Key Uniqueness, Key Immutability, Mutable Value Objects & Creating Empty/Populated Dicts)', 'https://www.youtube.com/watch?v=Uh0oNjOgAMI&t=0s&end=1268s', true, 1),

-- Topic 2: 21:08 to 34:25 (1268s to 2065s)
('65d29b56-0083-3110-0000-000000000002', '65d29b56-0083-2110-0000-000000000002', 'VIDEO', 'Accessing, Modifying & Traversing Dictionaries with Loops (Accessing Items via Subscript [key], Modifying Values, Adding New Key-Value Pairs & Iterating through Keys and Values)', 'https://www.youtube.com/watch?v=Uh0oNjOgAMI&t=1268s&end=2065s', true, 1),

-- Topic 3: 34:25 to 55:09 (2065s to 3309s)
('65d29b56-0083-3110-0000-000000000003', '65d29b56-0083-2110-0000-000000000003', 'VIDEO', 'Built-in Dictionary Methods & Mapping Functions (len(), dict(), keys(), values(), items(), get(), update(), del, clear(), fromkeys(), copy(), pop(), popitem(), setdefault(), max(), min(), sorted())', 'https://www.youtube.com/watch?v=Uh0oNjOgAMI&t=2065s&end=3309s', true, 1),

-- Topic 4: 55:09 to 1:08:00 (3309s to 4080s)
('65d29b56-0083-3110-0000-000000000004', '65d29b56-0083-2110-0000-000000000004', 'VIDEO', 'Dictionary Programs (Frequency, Records) & Python Standard Modules (Counting Character Frequency, Employee Name-Salary Database, Importing Modules: math, random, statistics Functions)', 'https://www.youtube.com/watch?v=Uh0oNjOgAMI&t=3309s&end=4080s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
