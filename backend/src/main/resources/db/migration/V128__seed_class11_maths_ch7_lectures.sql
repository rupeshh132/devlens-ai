-- V128__seed_class11_maths_ch7_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 7 (Binomial Theorem)
-- Video: PW Class 11 Science (Binomial Theorem | Full Chapter in ONE SHOT | Chapter 7 | Class 11 Maths | hxPoUsmq7Xs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6526s / 1h 48m 46s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Binomial Theorem)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000007';

-- 2. Insert 5 Verified Master Topics for Chapter 7 (Binomial Theorem)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2107-0000-000000000001', '65d29b56-2222-1100-0000-000000000007', 'Pascal''s Triangle, Combinatorial Coefficients & Binomial Theorem for Positive Integral Indices', 1, true),
('65d29b56-2222-2107-0000-000000000002', '65d29b56-2222-1100-0000-000000000007', 'Standard Binomial Expansions: Fractional Terms, Alternating Signs & Higher Powers', 2, true),
('65d29b56-2222-2107-0000-000000000003', '65d29b56-2222-1100-0000-000000000007', 'Trinomial & Multi-Term Expansions using Binomial Theorem Grouping', 3, true),
('65d29b56-2222-2107-0000-000000000004', '65d29b56-2222-1100-0000-000000000007', 'Numerical Approximations & Inequality Magnitude Comparisons using Binomial Theorem', 4, true),
('65d29b56-2222-2107-0000-000000000005', '65d29b56-2222-1100-0000-000000000007', 'Conjugate Radical Identities, Combinatorial Sums & Divisibility Proofs', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3107-0000-000000000001', '65d29b56-2222-2107-0000-000000000001', 'VIDEO', 'Pascal''s Triangle, Combinatorial Coefficients & Binomial Theorem for Positive Integral Indices', 'https://www.youtube.com/watch?v=hxPoUsmq7Xs&end=1917s', true, 1),
('65d29b56-2222-3107-0000-000000000002', '65d29b56-2222-2107-0000-000000000002', 'VIDEO', 'Standard Binomial Expansions: Fractional Terms, Alternating Signs & Higher Powers', 'https://www.youtube.com/watch?v=hxPoUsmq7Xs&t=1917s&end=2840s', true, 1),
('65d29b56-2222-3107-0000-000000000003', '65d29b56-2222-2107-0000-000000000003', 'VIDEO', 'Trinomial & Multi-Term Expansions using Binomial Theorem Grouping', 'https://www.youtube.com/watch?v=hxPoUsmq7Xs&t=2840s&end=4030s', true, 1),
('65d29b56-2222-3107-0000-000000000004', '65d29b56-2222-2107-0000-000000000004', 'VIDEO', 'Numerical Approximations & Inequality Magnitude Comparisons using Binomial Theorem', 'https://www.youtube.com/watch?v=hxPoUsmq7Xs&t=4030s&end=5030s', true, 1),
('65d29b56-2222-3107-0000-000000000005', '65d29b56-2222-2107-0000-000000000005', 'VIDEO', 'Conjugate Radical Identities, Combinatorial Sums & Divisibility Proofs', 'https://www.youtube.com/watch?v=hxPoUsmq7Xs&t=5030s&end=6526s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
