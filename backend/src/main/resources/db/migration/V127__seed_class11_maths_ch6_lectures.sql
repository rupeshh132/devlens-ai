-- V127__seed_class11_maths_ch6_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 6 (Permutations and Combinations)
-- Video: PW Class 11 Science (Permutations And Combinations | Full Chapter in ONE SHOT | Chapter 6 | Class 11 Maths | Y1X_zLptX_E)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16822s / 4h 40m 22s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Permutations and Combinations)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000006';

-- 2. Insert 5 Verified Master Topics for Chapter 6 (Permutations and Combinations)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2106-0000-000000000001', '65d29b56-2222-1100-0000-000000000006', 'Factorial Notation (n!), Computational Properties & Algebraic Equations', 1, true),
('65d29b56-2222-2106-0000-000000000002', '65d29b56-2222-1100-0000-000000000006', 'Fundamental Principles of Counting (Multiplication & Addition Principles) & Problem Solving', 2, true),
('65d29b56-2222-2106-0000-000000000003', '65d29b56-2222-1100-0000-000000000006', 'Permutations: Definition, Theorems, Derivation of ⁿPᵣ Formula & Basic Arrangements', 3, true),
('65d29b56-2222-2106-0000-000000000004', '65d29b56-2222-1100-0000-000000000006', 'Restricted Permutations & Permutations of Objects Not All Distinct (Repeated Elements)', 4, true),
('65d29b56-2222-2106-0000-000000000005', '65d29b56-2222-1100-0000-000000000006', 'Combinations: Definition, Notations, ⁿCᵣ Properties & Comprehensive Problem Solving', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3106-0000-000000000001', '65d29b56-2222-2106-0000-000000000001', 'VIDEO', 'Factorial Notation (n!), Computational Properties & Algebraic Equations', 'https://www.youtube.com/watch?v=Y1X_zLptX_E&end=2922s', true, 1),
('65d29b56-2222-3106-0000-000000000002', '65d29b56-2222-2106-0000-000000000002', 'VIDEO', 'Fundamental Principles of Counting (Multiplication & Addition Principles) & Problem Solving', 'https://www.youtube.com/watch?v=Y1X_zLptX_E&t=2922s&end=7507s', true, 1),
('65d29b56-2222-3106-0000-000000000003', '65d29b56-2222-2106-0000-000000000003', 'VIDEO', 'Permutations: Definition, Theorems, Derivation of ⁿPᵣ Formula & Basic Arrangements', 'https://www.youtube.com/watch?v=Y1X_zLptX_E&t=7507s&end=9942s', true, 1),
('65d29b56-2222-3106-0000-000000000004', '65d29b56-2222-2106-0000-000000000004', 'VIDEO', 'Restricted Permutations & Permutations of Objects Not All Distinct (Repeated Elements)', 'https://www.youtube.com/watch?v=Y1X_zLptX_E&t=9942s&end=13320s', true, 1),
('65d29b56-2222-3106-0000-000000000005', '65d29b56-2222-2106-0000-000000000005', 'VIDEO', 'Combinations: Definition, Notations, ⁿCᵣ Properties & Comprehensive Problem Solving', 'https://www.youtube.com/watch?v=Y1X_zLptX_E&t=13320s&end=16822s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
