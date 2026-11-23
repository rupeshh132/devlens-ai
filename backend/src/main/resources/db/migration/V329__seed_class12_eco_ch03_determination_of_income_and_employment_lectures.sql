-- V329__seed_class12_eco_ch03_determination_of_income_and_employment_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 3 (Determination of Income and Employment)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (0uph56rCtq4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5700s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Determination of Income and Employment)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000003';

-- 2. Insert 6 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2203-0000-000000000001', '65d29b56-0030-1200-0000-000000000003', 'Aggregate Demand (AD) and Its Components (C + I + G + X - M) & Aggregate Supply (AS / National Income)', 1, true),
('65d29b56-0030-2203-0000-000000000002', '65d29b56-0030-1200-0000-000000000003', 'Propensity to Consume (APC, MPC) & Propensity to Save (APS, MPS): Algebraic Functions & Break-even Point', 2, true),
('65d29b56-0030-2203-0000-000000000003', '65d29b56-0030-1200-0000-000000000003', 'Short-Run Equilibrium Output: AD-AS Approach & Saving-Investment (S-I) Approach', 3, true),
('65d29b56-0030-2203-0000-000000000004', '65d29b56-0030-1200-0000-000000000003', 'Investment Multiplier (k): Meaning, Working Mechanism, Relationship with MPC/MPS & Numerical Problems', 4, true),
('65d29b56-0030-2203-0000-000000000005', '65d29b56-0030-1200-0000-000000000003', 'Full Employment, Involuntary Unemployment, Excess Demand (Inflationary Gap) & Deficient Demand (Deflationary Gap)', 5, true),
('65d29b56-0030-2203-0000-000000000006', '65d29b56-0030-1200-0000-000000000003', 'Measures to Correct Excess & Deficient Demand: Fiscal Policy (Govt Spending, Taxes) & Monetary Policy', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3203-0000-000000000001', '65d29b56-0030-2203-0000-000000000001', 'VIDEO', 'Aggregate Demand (AD) and Its Components (C + I + G + X - M) & Aggregate Supply (AS / National Income)', 'https://www.youtube.com/watch?v=0uph56rCtq4&end=980s', true, 1),
('65d29b56-0030-3203-0000-000000000002', '65d29b56-0030-2203-0000-000000000002', 'VIDEO', 'Propensity to Consume (APC, MPC) & Propensity to Save (APS, MPS): Algebraic Functions & Break-even Point', 'https://www.youtube.com/watch?v=0uph56rCtq4&t=980s&end=2100s', true, 1),
('65d29b56-0030-3203-0000-000000000003', '65d29b56-0030-2203-0000-000000000003', 'VIDEO', 'Short-Run Equilibrium Output: AD-AS Approach & Saving-Investment (S-I) Approach', 'https://www.youtube.com/watch?v=0uph56rCtq4&t=2100s&end=3300s', true, 1),
('65d29b56-0030-3203-0000-000000000004', '65d29b56-0030-2203-0000-000000000004', 'VIDEO', 'Investment Multiplier (k): Meaning, Working Mechanism, Relationship with MPC/MPS & Numerical Problems', 'https://www.youtube.com/watch?v=0uph56rCtq4&t=3300s&end=4320s', true, 1),
('65d29b56-0030-3203-0000-000000000005', '65d29b56-0030-2203-0000-000000000005', 'VIDEO', 'Full Employment, Involuntary Unemployment, Excess Demand (Inflationary Gap) & Deficient Demand (Deflationary Gap)', 'https://www.youtube.com/watch?v=0uph56rCtq4&t=4320s&end=5050s', true, 1),
('65d29b56-0030-3203-0000-000000000006', '65d29b56-0030-2203-0000-000000000006', 'VIDEO', 'Measures to Correct Excess & Deficient Demand: Fiscal Policy (Govt Spending, Taxes) & Monetary Policy', 'https://www.youtube.com/watch?v=0uph56rCtq4&t=5050s&end=5700s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
