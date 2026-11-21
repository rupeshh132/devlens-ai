-- V216__seed_class11_cs_ch04_introduction_to_problem_solving_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Computer Science Chapter 4: Introduction to Problem Solving
-- Masterclass Video: Magnet Brains - Shraddha Ma'am (5ArBIHvcu3o)
-- 100% Zero-Gap Continuous Timeline: 0s to 2150s (35m 50s, Outro promotional course card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000004';

-- 2. Insert 4 Verified Master Subtopics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2104-0000-000000000001', '65d29b56-0083-1100-0000-000000000004', 'Problem Solving Lifecycle & Methodologies', 1, true),
('65d29b56-0083-2104-0000-000000000002', '65d29b56-0083-1100-0000-000000000004', 'Algorithm Design, Properties & Pseudocode Representation', 2, true),
('65d29b56-0083-2104-0000-000000000003', '65d29b56-0083-1100-0000-000000000004', 'Flowchart Symbols & Algorithmic Flow of Control', 3, true),
('65d29b56-0083-2104-0000-000000000004', '65d29b56-0083-1100-0000-000000000004', 'Algorithm Verification, Dry Run Testing & Problem Decomposition', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 07:10 (0s to 430s)
('65d29b56-0083-3104-0000-000000000001', '65d29b56-0083-2104-0000-000000000001', 'VIDEO', 'Problem Solving Lifecycle & Methodologies (Analyzing Problems, Identifying Inputs/Outputs, Algorithm Formulation, Coding, Testing & Debugging)', 'https://www.youtube.com/watch?v=5ArBIHvcu3o&t=0s&end=430s', true, 1),

-- Topic 2: 07:10 to 16:20 (430s to 980s)
('65d29b56-0083-3104-0000-000000000002', '65d29b56-0083-2104-0000-000000000002', 'VIDEO', 'Algorithm Design, Properties & Pseudocode Representation (Finiteness, Definiteness, Input/Output, Effectiveness, Pseudocode Conventions & Natural Language)', 'https://www.youtube.com/watch?v=5ArBIHvcu3o&t=430s&end=980s', true, 1),

-- Topic 3: 16:20 to 25:20 (980s to 1520s)
('65d29b56-0083-3104-0000-000000000003', '65d29b56-0083-2104-0000-000000000003', 'VIDEO', 'Flowchart Symbols & Algorithmic Flow of Control (Terminal, Input/Output, Process, Decision, Flowlines, Sequential, Conditional & Iterative Logic)', 'https://www.youtube.com/watch?v=5ArBIHvcu3o&t=980s&end=1520s', true, 1),

-- Topic 4: 25:20 to 35:50 (1520s to 2150s)
('65d29b56-0083-3104-0000-000000000004', '65d29b56-0083-2104-0000-000000000004', 'VIDEO', 'Algorithm Verification, Dry Run Testing & Problem Decomposition (Trace Tables, Test Cases, Error Identification & Decomposing Complex Problems into Modules)', 'https://www.youtube.com/watch?v=5ArBIHvcu3o&t=1520s&end=2150s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
