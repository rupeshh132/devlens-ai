-- V170__scaffold_class11_english_core_curriculum.sql
-- Scaffolds Class 11 English Core (Code: 301) for Session 2026-27 under Exam Type Class 11
-- Based on Directorate of Education GNCT Delhi & CBSE Senior Secondary Specifications
-- 26 Chapters: Hornbill (Prose & Poetry), Snapshots, Grammar, Creative Writing, Reading Skills & Internal Assessment

-- 1. Insert Subject: English Core (301)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES (
    '65d29b56-0301-0000-0000-000000000011',
    '303d9917-55e9-4f81-8a0f-129ba4c01aef',
    'English Core',
    '301',
    4,
    true
)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 26 Chapters for Class 11 English Core
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
-- Section C: Hornbill - Prose
('65d29b56-0301-1100-0000-000000000001', '65d29b56-0301-0000-0000-000000000011', 'Hornbill: The Portrait of a Lady', 1, true),
('65d29b56-0301-1100-0000-000000000002', '65d29b56-0301-0000-0000-000000000011', 'Hornbill: We''re Not Afraid to Die... If We Can All Be Together', 2, true),
('65d29b56-0301-1100-0000-000000000003', '65d29b56-0301-0000-0000-000000000011', 'Hornbill: Discovering Tut: The Saga Continues', 3, true),
('65d29b56-0301-1100-0000-000000000004', '65d29b56-0301-0000-0000-000000000011', 'Hornbill: The Adventure', 4, true),
('65d29b56-0301-1100-0000-000000000005', '65d29b56-0301-0000-0000-000000000011', 'Hornbill: Silk Road', 5, true),

-- Section C: Hornbill - Poetry
('65d29b56-0301-1100-0000-000000000006', '65d29b56-0301-0000-0000-000000000011', 'Hornbill Poem: A Photograph', 6, true),
('65d29b56-0301-1100-0000-000000000007', '65d29b56-0301-0000-0000-000000000011', 'Hornbill Poem: The Laburnum Top', 7, true),
('65d29b56-0301-1100-0000-000000000008', '65d29b56-0301-0000-0000-000000000011', 'Hornbill Poem: The Voice of the Rain', 8, true),
('65d29b56-0301-1100-0000-000000000009', '65d29b56-0301-0000-0000-000000000011', 'Hornbill Poem: Childhood', 9, true),
('65d29b56-0301-1100-0000-000000000010', '65d29b56-0301-0000-0000-000000000011', 'Hornbill Poem: Father to Son', 10, true),

-- Section C: Snapshots - Supplementary
('65d29b56-0301-1100-0000-000000000011', '65d29b56-0301-0000-0000-000000000011', 'Snapshots: The Summer of the Beautiful White Horse', 11, true),
('65d29b56-0301-1100-0000-000000000012', '65d29b56-0301-0000-0000-000000000011', 'Snapshots: The Address', 12, true),
('65d29b56-0301-1100-0000-000000000013', '65d29b56-0301-0000-0000-000000000011', 'Snapshots: Mother''s Day', 13, true),
('65d29b56-0301-1100-0000-000000000014', '65d29b56-0301-0000-0000-000000000011', 'Snapshots: Birth', 14, true),
('65d29b56-0301-1100-0000-000000000015', '65d29b56-0301-0000-0000-000000000011', 'Snapshots: The Tale of Melon City', 15, true),

-- Section B: Grammar
('65d29b56-0301-1100-0000-000000000016', '65d29b56-0301-0000-0000-000000000011', 'Grammar: Tenses & Gap Filling', 16, true),
('65d29b56-0301-1100-0000-000000000017', '65d29b56-0301-0000-0000-000000000011', 'Grammar: Clauses (Noun, Adverbial & Relative Clauses)', 17, true),
('65d29b56-0301-1100-0000-000000000018', '65d29b56-0301-0000-0000-000000000011', 'Grammar: Sentence Reordering & Transformation of Sentences', 18, true),

-- Section B: Creative Writing Skills
('65d29b56-0301-1100-0000-000000000019', '65d29b56-0301-0000-0000-000000000011', 'Writing Skills: Classified Advertisements', 19, true),
('65d29b56-0301-1100-0000-000000000020', '65d29b56-0301-0000-0000-000000000011', 'Writing Skills: Poster Making', 20, true),
('65d29b56-0301-1100-0000-000000000021', '65d29b56-0301-0000-0000-000000000011', 'Writing Skills: Speech Writing', 21, true),
('65d29b56-0301-1100-0000-000000000022', '65d29b56-0301-0000-0000-000000000011', 'Writing Skills: Debate Writing', 22, true),

-- Section A: Reading Skills
('65d29b56-0301-1100-0000-000000000023', '65d29b56-0301-0000-0000-000000000011', 'Reading Skills: Unseen Passages (Factual, Descriptive & Literary)', 23, true),
('65d29b56-0301-1100-0000-000000000024', '65d29b56-0301-0000-0000-000000000011', 'Reading Skills: Case-Based Factual Passages (Charts & Data)', 24, true),
('65d29b56-0301-1100-0000-000000000025', '65d29b56-0301-0000-0000-000000000011', 'Reading Skills: Note-Making and Summarization', 25, true),

-- Internal Assessment
('65d29b56-0301-1100-0000-000000000026', '65d29b56-0301-0000-0000-000000000011', 'Internal Assessment: ASL (Listening & Speaking) & Project Work', 26, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, subject_id = EXCLUDED.subject_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Initial Placeholder Topics for Chapter 1: Hornbill: The Portrait of a Lady
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2101-0000-000000000001', '65d29b56-0301-1100-0000-000000000001', 'Author Introduction, Background & The Three Phases of Relationship', 1, true),
('65d29b56-0301-2101-0000-000000000002', '65d29b56-0301-1100-0000-000000000001', 'Line-by-Line Detailed Explanation & Character Sketch of Grandmother', 2, true),
('65d29b56-0301-2101-0000-000000000003', '65d29b56-0301-1100-0000-000000000001', 'Theme of Generational Gap, Sparrows'' Homage, NCERT Solutions & RTC Questions', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;
