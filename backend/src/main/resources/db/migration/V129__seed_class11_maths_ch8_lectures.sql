-- V129__seed_class11_maths_ch8_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 8 (Sequence and Series)
-- Video: PW Class 11 Science (Sequence And Series | Full Chapter in ONE SHOT | Chapter 8 | Class 11 Maths | pVX8_vNbta4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 14114s / 3h 55m 14s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Sequence and Series)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000008';

-- 2. Insert 5 Verified Master Topics for Chapter 8 (Sequence and Series)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2108-0000-000000000001', '65d29b56-2222-1100-0000-000000000008', 'Arithmetic Mean (A.M.), Insertion of n Arithmetic Means & Problem Solving', 1, true),
('65d29b56-2222-2108-0000-000000000002', '65d29b56-2222-1100-0000-000000000008', 'Geometric Progression (G.P.): Definition, General Term (aₙ = arⁿ⁻¹) & Geometric Series', 2, true),
('65d29b56-2222-2108-0000-000000000003', '65d29b56-2222-1100-0000-000000000008', 'Properties of G.P.: nᵗʰ Term from End & Selection of Terms in Geometric Progression', 3, true),
('65d29b56-2222-2108-0000-000000000004', '65d29b56-2222-1100-0000-000000000008', 'Sum of First n Terms of a G.P. (Sₙ) & Sum of an Infinite G.P. (S∞)', 4, true),
('65d29b56-2222-2108-0000-000000000005', '65d29b56-2222-1100-0000-000000000008', 'Geometric Mean (G.M.), Insertion of n G.M.s & Relationship between A.M. and G.M. (A.M. ≥ G.M.)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3108-0000-000000000001', '65d29b56-2222-2108-0000-000000000001', 'VIDEO', 'Arithmetic Mean (A.M.), Insertion of n Arithmetic Means & Problem Solving', 'https://www.youtube.com/watch?v=pVX8_vNbta4&end=1342s', true, 1),
('65d29b56-2222-3108-0000-000000000002', '65d29b56-2222-2108-0000-000000000002', 'VIDEO', 'Geometric Progression (G.P.): Definition, General Term (aₙ = arⁿ⁻¹) & Geometric Series', 'https://www.youtube.com/watch?v=pVX8_vNbta4&t=1342s&end=5837s', true, 1),
('65d29b56-2222-3108-0000-000000000003', '65d29b56-2222-2108-0000-000000000003', 'VIDEO', 'Properties of G.P.: nᵗʰ Term from End & Selection of Terms in Geometric Progression', 'https://www.youtube.com/watch?v=pVX8_vNbta4&t=5837s&end=6546s', true, 1),
('65d29b56-2222-3108-0000-000000000004', '65d29b56-2222-2108-0000-000000000004', 'VIDEO', 'Sum of First n Terms of a G.P. (Sₙ) & Sum of an Infinite G.P. (S∞)', 'https://www.youtube.com/watch?v=pVX8_vNbta4&t=6546s&end=11006s', true, 1),
('65d29b56-2222-3108-0000-000000000005', '65d29b56-2222-2108-0000-000000000005', 'VIDEO', 'Geometric Mean (G.M.), Insertion of n G.M.s & Relationship between A.M. and G.M. (A.M. ≥ G.M.)', 'https://www.youtube.com/watch?v=pVX8_vNbta4&t=11006s&end=14114s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
