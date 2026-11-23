-- V317__scaffold_class12_computer_science_curriculum.sql
-- Scaffolds Class 12 Computer Science (Subject Code: 083) for Session 2026-27 under Exam Type Class 12
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Unit Distribution:
-- Unit 1: Computational Thinking and Programming – 2 (40 Marks)
--   - Review of Python Basics
--   - Functions in Python
--   - Exception Handling in Python
--   - File Handling in Python
--   - Data Structures: Stacks
-- Unit 2: Computer Networks (10 Marks)
--   - Computer Networks
-- Unit 3: Database Management (20 Marks)
--   - Database Management & SQL
--   - Interface of Python with SQL Database
-- Theory Total: 70 Marks | Practical Examination Total: 30 Marks | Total: 100 Marks

-- 1. Insert Subject: Computer Science (083) for Class 12
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0830-0000-0000-000000000012',
    'e334760b-a4d0-4843-9234-a0ab75684ff3',
    'Computer Science',
    '083',
    3,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 8 Chapters for Class 12 Computer Science
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0830-1200-0000-000000000001', '65d29b56-0830-0000-0000-000000000012', 'Review of Python Basics', 1, true),
('65d29b56-0830-1200-0000-000000000002', '65d29b56-0830-0000-0000-000000000012', 'Functions in Python', 2, true),
('65d29b56-0830-1200-0000-000000000003', '65d29b56-0830-0000-0000-000000000012', 'Exception Handling in Python', 3, true),
('65d29b56-0830-1200-0000-000000000004', '65d29b56-0830-0000-0000-000000000012', 'File Handling in Python', 4, true),
('65d29b56-0830-1200-0000-000000000005', '65d29b56-0830-0000-0000-000000000012', 'Data Structures: Stacks', 5, true),
('65d29b56-0830-1200-0000-000000000006', '65d29b56-0830-0000-0000-000000000012', 'Computer Networks', 6, true),
('65d29b56-0830-1200-0000-000000000007', '65d29b56-0830-0000-0000-000000000012', 'Database Management & SQL', 7, true),
('65d29b56-0830-1200-0000-000000000008', '65d29b56-0830-0000-0000-000000000012', 'Interface of Python with SQL Database', 8, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
