-- V53__seed_class10_maths_ch8_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 8 (Introduction to Trigonometry)
-- Video: Ritik Mishra (Trigonometry ONE SHOT 🔥 | wdaBwIv7Jso)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16010s)

-- 1. Remove old placeholder topics & content items for Chapter 8
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000008';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2008-0000-000000000001', '65d29b56-2222-1000-0000-000000000008', 'Introduction, Trigonometric Ratios (T-Ratios) & Pythagoras Theorem', 1, true),
('65d29b56-2222-2008-0000-000000000002', '65d29b56-2222-1000-0000-000000000008', 'Reciprocal & Quotient Identities and T-Ratio Evaluations', 2, true),
('65d29b56-2222-2008-0000-000000000003', '65d29b56-2222-1000-0000-000000000008', 'Square Identities (sin²θ + cos²θ = 1) & T-Ratio Inter-Conversion', 3, true),
('65d29b56-2222-2008-0000-000000000004', '65d29b56-2222-1000-0000-000000000008', 'Proving Trigonometric Identities: Core CBSE & NCERT Questions', 4, true),
('65d29b56-2222-2008-0000-000000000005', '65d29b56-2222-1000-0000-000000000008', 'HOTS, Tricky Proving Questions, CBSE 2025 Problems & Chapter Summary', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3008-0000-000000000001', '65d29b56-2222-2008-0000-000000000001', 'VIDEO', 'Introduction, Trigonometric Ratios (T-Ratios) & Pythagoras Theorem', 'https://www.youtube.com/watch?v=wdaBwIv7Jso&end=2760s', true, 1),
('65d29b56-2222-3008-0000-000000000002', '65d29b56-2222-2008-0000-000000000002', 'VIDEO', 'Reciprocal & Quotient Identities and T-Ratio Evaluations', 'https://www.youtube.com/watch?v=wdaBwIv7Jso&t=2760s&end=6956s', true, 1),
('65d29b56-2222-3008-0000-000000000003', '65d29b56-2222-2008-0000-000000000003', 'VIDEO', 'Square Identities (sin²θ + cos²θ = 1) & T-Ratio Inter-Conversion', 'https://www.youtube.com/watch?v=wdaBwIv7Jso&t=6956s&end=10438s', true, 1),
('65d29b56-2222-3008-0000-000000000004', '65d29b56-2222-2008-0000-000000000004', 'VIDEO', 'Proving Trigonometric Identities: Core CBSE & NCERT Questions', 'https://www.youtube.com/watch?v=wdaBwIv7Jso&t=10438s&end=13595s', true, 1),
('65d29b56-2222-3008-0000-000000000005', '65d29b56-2222-2008-0000-000000000005', 'VIDEO', 'HOTS, Tricky Proving Questions, CBSE 2025 Problems & Chapter Summary', 'https://www.youtube.com/watch?v=wdaBwIv7Jso&t=13595s&end=16010s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
