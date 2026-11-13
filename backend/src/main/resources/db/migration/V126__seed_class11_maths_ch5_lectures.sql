-- V126__seed_class11_maths_ch5_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 5 (Linear Inequalities)
-- Video: PW Class 11 Science (Linear Inequalities | Full Chapter in ONE SHOT | Chapter 5 | Class 11 Maths | Kdcd7m0jme0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6298s / 1h 44m 58s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Linear Inequalities)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000005';

-- 2. Insert 5 Verified Master Topics for Chapter 5 (Linear Inequalities)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2105-0000-000000000001', '65d29b56-2222-1100-0000-000000000005', 'Introduction to Linear Inequalities, Intervals & Fundamental Rules of Inequations', 1, true),
('65d29b56-2222-2105-0000-000000000002', '65d29b56-2222-1100-0000-000000000005', 'Algebraic Solutions of Linear Inequalities in One Variable (N, Z, R & Fractional Forms)', 2, true),
('65d29b56-2222-2105-0000-000000000003', '65d29b56-2222-1100-0000-000000000005', 'Representation on Number Line & Systems of Linear Inequalities in One Variable', 3, true),
('65d29b56-2222-2105-0000-000000000004', '65d29b56-2222-1100-0000-000000000005', 'Practical Word Problems: Marks, Consecutive Integers & Geometric Constraints', 4, true),
('65d29b56-2222-2105-0000-000000000005', '65d29b56-2222-1100-0000-000000000005', 'Advanced Applied Word Problems: Temperature Ranges & Mixture Concentration Problems', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3105-0000-000000000001', '65d29b56-2222-2105-0000-000000000001', 'VIDEO', 'Introduction to Linear Inequalities, Intervals & Fundamental Rules of Inequations', 'https://www.youtube.com/watch?v=Kdcd7m0jme0&end=894s', true, 1),
('65d29b56-2222-3105-0000-000000000002', '65d29b56-2222-2105-0000-000000000002', 'VIDEO', 'Algebraic Solutions of Linear Inequalities in One Variable (N, Z, R & Fractional Forms)', 'https://www.youtube.com/watch?v=Kdcd7m0jme0&t=894s&end=2280s', true, 1),
('65d29b56-2222-3105-0000-000000000003', '65d29b56-2222-2105-0000-000000000003', 'VIDEO', 'Representation on Number Line & Systems of Linear Inequalities in One Variable', 'https://www.youtube.com/watch?v=Kdcd7m0jme0&t=2280s&end=3160s', true, 1),
('65d29b56-2222-3105-0000-000000000004', '65d29b56-2222-2105-0000-000000000004', 'VIDEO', 'Practical Word Problems: Marks, Consecutive Integers & Geometric Constraints', 'https://www.youtube.com/watch?v=Kdcd7m0jme0&t=3160s&end=4650s', true, 1),
('65d29b56-2222-3105-0000-000000000005', '65d29b56-2222-2105-0000-000000000005', 'VIDEO', 'Advanced Applied Word Problems: Temperature Ranges & Mixture Concentration Problems', 'https://www.youtube.com/watch?v=Kdcd7m0jme0&t=4650s&end=6298s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
