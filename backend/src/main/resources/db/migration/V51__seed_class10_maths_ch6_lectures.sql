-- V51__seed_class10_maths_ch6_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 6 (Triangles)
-- Video: Ritik Mishra (Triangles ONE SHOT 🔥 | nxo1ItY3oTo)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 15121s)

-- 1. Remove old placeholder topics & content items for Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000006';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2006-0000-000000000001', '65d29b56-2222-1000-0000-000000000006', 'Introduction, Basic Proportionality Theorem (BPT) & Converse', 1, true),
('65d29b56-2222-2006-0000-000000000002', '65d29b56-2222-1000-0000-000000000006', 'Formal Proof of BPT & Algebraic Applications (Questions 3 to 14)', 2, true),
('65d29b56-2222-2006-0000-000000000003', '65d29b56-2222-1000-0000-000000000006', 'Concept of Similarity vs Congruence & Basic Similarity Illustrations', 3, true),
('65d29b56-2222-2006-0000-000000000004', '65d29b56-2222-1000-0000-000000000006', 'Criteria for Similarity of Triangles (AAA, SSS, SAS) & Board Problems', 4, true),
('65d29b56-2222-2006-0000-000000000005', '65d29b56-2222-1000-0000-000000000006', 'Advanced Geometric Proofs (Medians, Shadows, Ratio of Areas) & Summary', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3006-0000-000000000001', '65d29b56-2222-2006-0000-000000000001', 'VIDEO', 'Introduction, Basic Proportionality Theorem (BPT) & Converse', 'https://www.youtube.com/watch?v=nxo1ItY3oTo&end=1995s', true, 1),
('65d29b56-2222-3006-0000-000000000002', '65d29b56-2222-2006-0000-000000000002', 'VIDEO', 'Formal Proof of BPT & Algebraic Applications (Questions 3 to 14)', 'https://www.youtube.com/watch?v=nxo1ItY3oTo&t=1995s&end=5325s', true, 1),
('65d29b56-2222-3006-0000-000000000003', '65d29b56-2222-2006-0000-000000000003', 'VIDEO', 'Concept of Similarity vs Congruence & Basic Similarity Illustrations', 'https://www.youtube.com/watch?v=nxo1ItY3oTo&t=5325s&end=9272s', true, 1),
('65d29b56-2222-3006-0000-000000000004', '65d29b56-2222-2006-0000-000000000004', 'VIDEO', 'Criteria for Similarity of Triangles (AAA, SSS, SAS) & Board Problems', 'https://www.youtube.com/watch?v=nxo1ItY3oTo&t=9272s&end=12314s', true, 1),
('65d29b56-2222-3006-0000-000000000005', '65d29b56-2222-2006-0000-000000000005', 'VIDEO', 'Advanced Geometric Proofs (Medians, Shadows, Ratio of Areas) & Summary', 'https://www.youtube.com/watch?v=nxo1ItY3oTo&t=12314s&end=15121s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
