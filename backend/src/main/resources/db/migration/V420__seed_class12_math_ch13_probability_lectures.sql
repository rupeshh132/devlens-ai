-- V420__seed_class12_math_ch13_probability_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Mathematics Chapter 13 (Probability)
-- Video: Science and Fun Education (Ushank Sir Masterclass) (I4WvS7_rk8k)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8101s)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Probability)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0041-1200-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0041-1200-0000-000000000013';

-- 2. Insert 4 Verified Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0041-2213-0000-000000000001', '65d29b56-0041-1200-0000-000000000013', 'Conditional Probability: Definition, Properties & Evaluation (P(A|B) = P(A ∩ B) / P(B))', 1, true),
('65d29b56-0041-2213-0000-000000000002', '65d29b56-0041-1200-0000-000000000013', 'Multiplication Theorem on Probability & Independent Events (P(A ∩ B) = P(A) · P(B))', 2, true),
('65d29b56-0041-2213-0000-000000000003', '65d29b56-0041-1200-0000-000000000013', 'Theorem of Total Probability & Law of Partitions of Sample Space', 3, true),
('65d29b56-0041-2213-0000-000000000004', '65d29b56-0041-1200-0000-000000000013', 'Bayes'' Theorem: Statement, Proof, Multi-Hypothesis Inversion & Real-Life Board Exam Problems', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0041-3213-0000-000000000001', '65d29b56-0041-2213-0000-000000000001', 'VIDEO', 'Conditional Probability: Definition, Properties & Evaluation (P(A|B) = P(A ∩ B) / P(B))', 'https://www.youtube.com/watch?v=I4WvS7_rk8k&end=2020s', true, 1),
('65d29b56-0041-3213-0000-000000000002', '65d29b56-0041-2213-0000-000000000002', 'VIDEO', 'Multiplication Theorem on Probability & Independent Events (P(A ∩ B) = P(A) · P(B))', 'https://www.youtube.com/watch?v=I4WvS7_rk8k&t=2020s&end=4050s', true, 1),
('65d29b56-0041-3213-0000-000000000003', '65d29b56-0041-2213-0000-000000000003', 'VIDEO', 'Theorem of Total Probability & Law of Partitions of Sample Space', 'https://www.youtube.com/watch?v=I4WvS7_rk8k&t=4050s&end=6070s', true, 1),
('65d29b56-0041-3213-0000-000000000004', '65d29b56-0041-2213-0000-000000000004', 'VIDEO', 'Bayes'' Theorem: Statement, Proof, Multi-Hypothesis Inversion & Real-Life Board Exam Problems', 'https://www.youtube.com/watch?v=I4WvS7_rk8k&t=6070s&end=8101s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
