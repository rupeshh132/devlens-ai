-- V164__seed_class11_chemistry_ch07_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 7 (Redox Reactions)
-- Video: Next Toppers - 11th Science (Redox Reactions Class 11 One Shot | Tapur Ma'am | X86UraGJtNk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4877s / 1h 21m 17s)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Redox Reactions)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000007';

-- 2. Insert 5 Verified Master Topics for Chapter 7 (Redox Reactions)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2107-0000-000000000001', '65d29b56-0430-1100-0000-000000000007', 'Classical & Electronic Concepts of Redox Reactions, Oxidizing and Reducing Agents', 1, true),
('65d29b56-0430-2107-0000-000000000002', '65d29b56-0430-1100-0000-000000000007', 'Oxidation Number: Rules for Assignment, Calculation & Stock Notation', 2, true),
('65d29b56-0430-2107-0000-000000000003', '65d29b56-0430-1100-0000-000000000007', 'Types of Redox Reactions: Combination, Decomposition, Displacement & Disproportionation', 3, true),
('65d29b56-0430-2107-0000-000000000004', '65d29b56-0430-1100-0000-000000000007', 'Balancing of Redox Equations: Ion-Electron (Half-Reaction) Method in Acidic & Basic Media', 4, true),
('65d29b56-0430-2107-0000-000000000005', '65d29b56-0430-1100-0000-000000000007', 'Balancing of Redox Equations: Oxidation Number Method & Stoichiometric Applications', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 4877s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3107-0000-000000000001', '65d29b56-0430-2107-0000-000000000001', 'VIDEO', 'Classical & Electronic Concepts of Redox Reactions, Oxidizing and Reducing Agents', 'https://www.youtube.com/watch?v=X86UraGJtNk&end=607s', true, 1),
('65d29b56-0430-3107-0000-000000000002', '65d29b56-0430-2107-0000-000000000002', 'VIDEO', 'Oxidation Number: Rules for Assignment, Calculation & Stock Notation', 'https://www.youtube.com/watch?v=X86UraGJtNk&t=607s&end=1460s', true, 1),
('65d29b56-0430-3107-0000-000000000003', '65d29b56-0430-2107-0000-000000000003', 'VIDEO', 'Types of Redox Reactions: Combination, Decomposition, Displacement & Disproportionation', 'https://www.youtube.com/watch?v=X86UraGJtNk&t=1460s&end=1932s', true, 1),
('65d29b56-0430-3107-0000-000000000004', '65d29b56-0430-2107-0000-000000000004', 'VIDEO', 'Balancing of Redox Equations: Ion-Electron (Half-Reaction) Method in Acidic & Basic Media', 'https://www.youtube.com/watch?v=X86UraGJtNk&t=1932s&end=4087s', true, 1),
('65d29b56-0430-3107-0000-000000000005', '65d29b56-0430-2107-0000-000000000005', 'VIDEO', 'Balancing of Redox Equations: Oxidation Number Method & Stoichiometric Applications', 'https://www.youtube.com/watch?v=X86UraGJtNk&t=4087s&end=4877s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
