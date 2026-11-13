-- V123__seed_class11_maths_ch2_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 2 (Relations and Functions)
-- Video: PW Class 11 Science (Relation And Functions | Full Chapter in ONE SHOT | Chapter 2 | Class 11 Maths | 4VXUlNRlT3c)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 15684s / 4h 21m 24s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Relations and Functions)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000002';

-- 2. Insert 5 Verified Master Topics for Chapter 2 (Relations and Functions)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2102-0000-000000000001', '65d29b56-2222-1100-0000-000000000002', 'Ordered Pairs & Cartesian Product of Sets (Number of Elements & Subsets of R × R)', 1, true),
('65d29b56-2222-2102-0000-000000000002', '65d29b56-2222-1100-0000-000000000002', 'Relations: Definition, Pictorial Diagrams, Domain, Co-domain, Range & Inverse of a Relation', 2, true),
('65d29b56-2222-2102-0000-000000000003', '65d29b56-2222-1100-0000-000000000002', 'Functions as Special Relations: Definition, Vertical Line Test, Representation & Equal Functions', 3, true),
('65d29b56-2222-2102-0000-000000000004', '65d29b56-2222-1100-0000-000000000002', 'Real-Valued Functions: Finding Domain and Range of Algebraic, Rational & Square Root Functions', 4, true),
('65d29b56-2222-2102-0000-000000000005', '65d29b56-2222-1100-0000-000000000002', 'Standard Real Functions with Graphs & Algebra of Functions', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3102-0000-000000000001', '65d29b56-2222-2102-0000-000000000001', 'VIDEO', 'Ordered Pairs & Cartesian Product of Sets (Number of Elements & Subsets of R × R)', 'https://www.youtube.com/watch?v=4VXUlNRlT3c&end=2525s', true, 1),
('65d29b56-2222-3102-0000-000000000002', '65d29b56-2222-2102-0000-000000000002', 'VIDEO', 'Relations: Definition, Pictorial Diagrams, Domain, Co-domain, Range & Inverse of a Relation', 'https://www.youtube.com/watch?v=4VXUlNRlT3c&t=2525s&end=6657s', true, 1),
('65d29b56-2222-3102-0000-000000000003', '65d29b56-2222-2102-0000-000000000003', 'VIDEO', 'Functions as Special Relations: Definition, Vertical Line Test, Representation & Equal Functions', 'https://www.youtube.com/watch?v=4VXUlNRlT3c&t=6657s&end=10487s', true, 1),
('65d29b56-2222-3102-0000-000000000004', '65d29b56-2222-2102-0000-000000000004', 'VIDEO', 'Real-Valued Functions: Finding Domain and Range of Algebraic, Rational & Square Root Functions', 'https://www.youtube.com/watch?v=4VXUlNRlT3c&t=10487s&end=13767s', true, 1),
('65d29b56-2222-3102-0000-000000000005', '65d29b56-2222-2102-0000-000000000005', 'VIDEO', 'Standard Real Functions with Graphs & Algebra of Functions', 'https://www.youtube.com/watch?v=4VXUlNRlT3c&t=13767s&end=15684s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
