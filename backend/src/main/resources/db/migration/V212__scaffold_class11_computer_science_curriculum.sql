-- V212__scaffold_class11_computer_science_curriculum.sql
-- Scaffolds Class 11 Computer Science (Subject Code: 083) for Session 2026-27 under Exam Type Class 11
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course Distribution: 70 Marks Theory (11 Chapters across 3 Units) + 30 Marks Practical = 100 Marks

-- 1. Insert Subject: Computer Science (083)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0083-0000-0000-000000000011',
    '303d9917-55e9-4f81-8a0f-129ba4c01aef',
    'Computer Science',
    '083',
    6,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 11 Chapters for Class 11 Computer Science
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
-- Unit 1: Computer Systems and Organisation (10 Marks) [Mid-Term]
('65d29b56-0083-1100-0000-000000000001', '65d29b56-0083-0000-0000-000000000011', 'Computer System Overview & Organisation', 1, true),
('65d29b56-0083-1100-0000-000000000002', '65d29b56-0083-0000-0000-000000000011', 'Data Representation & Number Systems', 2, true),
('65d29b56-0083-1100-0000-000000000003', '65d29b56-0083-0000-0000-000000000011', 'Boolean Logic & Logic Circuits', 3, true),

-- Unit 2: Computational Thinking and Programming - I (45 Marks)
-- Part A: Mid-Term Syllabus (Completion: September 05, 2026)
('65d29b56-0083-1100-0000-000000000004', '65d29b56-0083-0000-0000-000000000011', 'Introduction to Problem Solving', 4, true),
('65d29b56-0083-1100-0000-000000000005', '65d29b56-0083-0000-0000-000000000011', 'Getting Started with Python & Fundamentals', 5, true),
('65d29b56-0083-1100-0000-000000000006', '65d29b56-0083-0000-0000-000000000011', 'Flow of Control (Conditionals & Loops)', 6, true),

-- Part B: Annual Syllabus (Post-Midterm completion till January 30, 2027)
('65d29b56-0083-1100-0000-000000000007', '65d29b56-0083-0000-0000-000000000011', 'Strings in Python', 7, true),
('65d29b56-0083-1100-0000-000000000008', '65d29b56-0083-0000-0000-000000000011', 'Lists in Python', 8, true),
('65d29b56-0083-1100-0000-000000000009', '65d29b56-0083-0000-0000-000000000011', 'Tuples in Python', 9, true),
('65d29b56-0083-1100-0000-000000000010', '65d29b56-0083-0000-0000-000000000011', 'Dictionaries & Python Modules', 10, true),

-- Unit 3: Society, Law, and Ethics (15 Marks) [Annual]
('65d29b56-0083-1100-0000-000000000011', '65d29b56-0083-0000-0000-000000000011', 'Society, Law and Ethics', 11, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, subject_id = EXCLUDED.subject_id, order_index = EXCLUDED.order_index, is_active = true;
