-- V133__seed_class11_maths_ch12_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 12 (Limits and Derivatives)
-- Video: PW Class 11 Science (Limits and Derivatives | Full Chapter in ONE SHOT | Chapter 12 | Class 11 Maths | CHWhaAlo_ms)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13435s / 3h 43m 55s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Limits and Derivatives)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000012';

-- 2. Insert 6 Verified Master Topics for Chapter 12 (Limits and Derivatives)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2112-0000-000000000001', '65d29b56-2222-1100-0000-000000000012', 'Intuitive Idea of Limits: Left-Hand Limit (LHL), Right-Hand Limit (RHL) & Existence of Limits', 1, true),
('65d29b56-2222-2112-0000-000000000002', '65d29b56-2222-1100-0000-000000000012', 'Indeterminate Forms & Algebraic Limits: Direct Substitution, Factorisation & Rationalisation', 2, true),
('65d29b56-2222-2112-0000-000000000003', '65d29b56-2222-1100-0000-000000000012', 'Standard Algebraic Limit Theorem (lim (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹) & Problem Solving', 3, true),
('65d29b56-2222-2112-0000-000000000004', '65d29b56-2222-1100-0000-000000000012', 'Trigonometric Limits: Sandwich Theorem, Standard Limits (lim sinx/x = 1) & Trigonometric Evaluations', 4, true),
('65d29b56-2222-2112-0000-000000000005', '65d29b56-2222-1100-0000-000000000012', 'Derivative as Rate of Change, Geometric Slope of Tangent & Differentiation from First Principles', 5, true),
('65d29b56-2222-2112-0000-000000000006', '65d29b56-2222-1100-0000-000000000012', '[Enrichment / Formative] Algebra of Derivatives: Standard Formulas, Product Rule, Quotient Rule & Chain Rule', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3112-0000-000000000001', '65d29b56-2222-2112-0000-000000000001', 'VIDEO', 'Intuitive Idea of Limits: Left-Hand Limit (LHL), Right-Hand Limit (RHL) & Existence of Limits', 'https://www.youtube.com/watch?v=CHWhaAlo_ms&end=2784s', true, 1),
('65d29b56-2222-3112-0000-000000000002', '65d29b56-2222-2112-0000-000000000002', 'VIDEO', 'Indeterminate Forms & Algebraic Limits: Direct Substitution, Factorisation & Rationalisation', 'https://www.youtube.com/watch?v=CHWhaAlo_ms&t=2784s&end=4398s', true, 1),
('65d29b56-2222-3112-0000-000000000003', '65d29b56-2222-2112-0000-000000000003', 'VIDEO', 'Standard Algebraic Limit Theorem (lim (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹) & Problem Solving', 'https://www.youtube.com/watch?v=CHWhaAlo_ms&t=4398s&end=5153s', true, 1),
('65d29b56-2222-3112-0000-000000000004', '65d29b56-2222-2112-0000-000000000004', 'VIDEO', 'Trigonometric Limits: Sandwich Theorem, Standard Limits (lim sinx/x = 1) & Trigonometric Evaluations', 'https://www.youtube.com/watch?v=CHWhaAlo_ms&t=5153s&end=10314s', true, 1),
('65d29b56-2222-3112-0000-000000000005', '65d29b56-2222-2112-0000-000000000005', 'VIDEO', 'Derivative as Rate of Change, Geometric Slope of Tangent & Differentiation from First Principles', 'https://www.youtube.com/watch?v=CHWhaAlo_ms&t=10314s&end=11814s', true, 1),
('65d29b56-2222-3112-0000-000000000006', '65d29b56-2222-2112-0000-000000000006', 'VIDEO', '[Enrichment / Formative] Algebra of Derivatives: Standard Formulas, Product Rule, Quotient Rule & Chain Rule', 'https://www.youtube.com/watch?v=CHWhaAlo_ms&t=11814s&end=13435s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
