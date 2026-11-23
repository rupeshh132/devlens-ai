-- V341__scaffold_class12_english_core_curriculum.sql
-- Scaffolds Class 12 English Core (Subject Code: 301) for Session 2026-27 under Exam Type Class 12
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- Course Distribution:
-- Section A: Reading Skills (22 Marks)
--   - Unseen Passages: Factual, Descriptive & Literary (12 Marks, Chapter 25)
--   - Unseen Case-Based Factual Passages with Data & Charts (10 Marks, Chapter 26)
-- Section B: Creative Writing Skills (18 Marks)
--   - Notice Writing (4 Marks, Chapter 20)
--   - Formal and Informal Invitations & Replies (4 Marks, Chapter 21)
--   - Letter Writing: Job Application & Letter to Editor (5 Marks, Chapter 22)
--   - Article Writing & Report Writing (5 Marks, Chapters 23-24)
-- Section C: Literature Text Book and Supplementary Text (40 Marks)
--   - Flamingo Prose: 8 Chapters (Chapters 1-8)
--   - Flamingo Poetry: 5 Poems (Chapters 9-13)
--   - Vistas Supplementary: 6 Chapters (Chapters 14-19)
-- Internal Assessment: ASL (Listening: 5 Marks, Speaking: 5 Marks) + Project Work: 10 Marks = 20 Marks (Chapter 27)
-- Theory Total: 80 Marks | Internal Assessment: 20 Marks | Total: 100 Marks

-- 1. Insert Subject: English Core (301) for Class 12
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0301-0000-0000-000000000012',
    'e334760b-a4d0-4843-9234-a0ab75684ff3',
    'English Core',
    '301',
    5,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 27 Evaluative Chapters for Class 12 English Core
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0301-1200-0000-000000000001', '65d29b56-0301-0000-0000-000000000012', 'Flamingo: The Last Lesson', 1, true),
('65d29b56-0301-1200-0000-000000000002', '65d29b56-0301-0000-0000-000000000012', 'Flamingo: Lost Spring', 2, true),
('65d29b56-0301-1200-0000-000000000003', '65d29b56-0301-0000-0000-000000000012', 'Flamingo: Deep Water', 3, true),
('65d29b56-0301-1200-0000-000000000004', '65d29b56-0301-0000-0000-000000000012', 'Flamingo: The Rattrap', 4, true),
('65d29b56-0301-1200-0000-000000000005', '65d29b56-0301-0000-0000-000000000012', 'Flamingo: Indigo', 5, true),
('65d29b56-0301-1200-0000-000000000006', '65d29b56-0301-0000-0000-000000000012', 'Flamingo: Poets and Pancakes', 6, true),
('65d29b56-0301-1200-0000-000000000007', '65d29b56-0301-0000-0000-000000000012', 'Flamingo: The Interview', 7, true),
('65d29b56-0301-1200-0000-000000000008', '65d29b56-0301-0000-0000-000000000012', 'Flamingo: Going Places', 8, true),
('65d29b56-0301-1200-0000-000000000009', '65d29b56-0301-0000-0000-000000000012', 'Flamingo Poem: My Mother at Sixty-Six', 9, true),
('65d29b56-0301-1200-0000-000000000010', '65d29b56-0301-0000-0000-000000000012', 'Flamingo Poem: Keeping Quiet', 10, true),
('65d29b56-0301-1200-0000-000000000011', '65d29b56-0301-0000-0000-000000000012', 'Flamingo Poem: A Thing of Beauty', 11, true),
('65d29b56-0301-1200-0000-000000000012', '65d29b56-0301-0000-0000-000000000012', 'Flamingo Poem: A Roadside Stand', 12, true),
('65d29b56-0301-1200-0000-000000000013', '65d29b56-0301-0000-0000-000000000012', 'Flamingo Poem: Aunt Jennifer''s Tigers', 13, true),
('65d29b56-0301-1200-0000-000000000014', '65d29b56-0301-0000-0000-000000000012', 'Vistas: The Third Level', 14, true),
('65d29b56-0301-1200-0000-000000000015', '65d29b56-0301-0000-0000-000000000012', 'Vistas: The Tiger King', 15, true),
('65d29b56-0301-1200-0000-000000000016', '65d29b56-0301-0000-0000-000000000012', 'Vistas: Journey to the End of the Earth', 16, true),
('65d29b56-0301-1200-0000-000000000017', '65d29b56-0301-0000-0000-000000000012', 'Vistas: The Enemy', 17, true),
('65d29b56-0301-1200-0000-000000000018', '65d29b56-0301-0000-0000-000000000012', 'Vistas: On the Face of It', 18, true),
('65d29b56-0301-1200-0000-000000000019', '65d29b56-0301-0000-0000-000000000012', 'Vistas: Memories of Childhood', 19, true),
('65d29b56-0301-1200-0000-000000000020', '65d29b56-0301-0000-0000-000000000012', 'Writing Skills: Notice Writing', 20, true),
('65d29b56-0301-1200-0000-000000000021', '65d29b56-0301-0000-0000-000000000012', 'Writing Skills: Formal and Informal Invitations & Replies', 21, true),
('65d29b56-0301-1200-0000-000000000022', '65d29b56-0301-0000-0000-000000000012', 'Writing Skills: Letter Writing (Job Application & Letter to Editor)', 22, true),
('65d29b56-0301-1200-0000-000000000023', '65d29b56-0301-0000-0000-000000000012', 'Writing Skills: Article Writing', 23, true),
('65d29b56-0301-1200-0000-000000000024', '65d29b56-0301-0000-0000-000000000012', 'Writing Skills: Report Writing', 24, true),
('65d29b56-0301-1200-0000-000000000025', '65d29b56-0301-0000-0000-000000000012', 'Reading Skills: Unseen Passages (Factual, Descriptive & Literary)', 25, true),
('65d29b56-0301-1200-0000-000000000026', '65d29b56-0301-0000-0000-000000000012', 'Reading Skills: Case-Based Factual Passages (Charts, Graphs & Data)', 26, true),
('65d29b56-0301-1200-0000-000000000027', '65d29b56-0301-0000-0000-000000000012', 'Internal Assessment: ASL (Listening & Speaking) & Project Work', 27, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
