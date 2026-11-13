-- V122__seed_class11_maths_ch1_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 1 (Sets)
-- Video: PW Class 11 Science (Sets | Full Chapter in ONE SHOT | Chapter 1 | Class 11 Maths | F_7WUK7htRg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13789s / 3h 49m 49s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Sets)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000001';

-- 2. Insert 5 Verified Master Topics for Chapter 1 (Sets)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2101-0000-000000000001', '65d29b56-2222-1100-0000-000000000001', 'Sets & Representations (Roster & Set-Builder Forms, Empty, Finite, Infinite & Equal Sets)', 1, true),
('65d29b56-2222-2101-0000-000000000002', '65d29b56-2222-1100-0000-000000000001', 'Subsets, Subsets of Real Numbers, Intervals as Subsets of R & Power Set', 2, true),
('65d29b56-2222-2101-0000-000000000003', '65d29b56-2222-1100-0000-000000000001', 'Venn Diagrams & Operations on Sets (Union, Intersection & Difference of Sets)', 3, true),
('65d29b56-2222-2101-0000-000000000004', '65d29b56-2222-1100-0000-000000000001', 'Complement of a Set, Laws of Algebra of Sets & De Morgan''s Laws', 4, true),
('65d29b56-2222-2101-0000-000000000005', '65d29b56-2222-1100-0000-000000000001', '[Enrichment / Formative] Practical Word Problems on Cardinality of Sets & Comprehensive Practice', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3101-0000-000000000001', '65d29b56-2222-2101-0000-000000000001', 'VIDEO', 'Sets & Representations (Roster & Set-Builder Forms, Empty, Finite, Infinite & Equal Sets)', 'https://www.youtube.com/watch?v=F_7WUK7htRg&end=2718s', true, 1),
('65d29b56-2222-3101-0000-000000000002', '65d29b56-2222-2101-0000-000000000002', 'VIDEO', 'Subsets, Subsets of Real Numbers, Intervals as Subsets of R & Power Set', 'https://www.youtube.com/watch?v=F_7WUK7htRg&t=2718s&end=5778s', true, 1),
('65d29b56-2222-3101-0000-000000000003', '65d29b56-2222-2101-0000-000000000003', 'VIDEO', 'Venn Diagrams & Operations on Sets (Union, Intersection & Difference of Sets)', 'https://www.youtube.com/watch?v=F_7WUK7htRg&t=5778s&end=7664s', true, 1),
('65d29b56-2222-3101-0000-000000000004', '65d29b56-2222-2101-0000-000000000004', 'VIDEO', 'Complement of a Set, Laws of Algebra of Sets & De Morgan''s Laws', 'https://www.youtube.com/watch?v=F_7WUK7htRg&t=7664s&end=9282s', true, 1),
('65d29b56-2222-3101-0000-000000000005', '65d29b56-2222-2101-0000-000000000005', 'VIDEO', '[Enrichment / Formative] Practical Word Problems on Cardinality of Sets & Comprehensive Practice', 'https://www.youtube.com/watch?v=F_7WUK7htRg&t=9282s&end=13789s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
