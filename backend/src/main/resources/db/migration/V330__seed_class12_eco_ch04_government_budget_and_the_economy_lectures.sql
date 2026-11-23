-- V330__seed_class12_eco_ch04_government_budget_and_the_economy_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 4 (Government Budget and the Economy)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (OQr4j2KDCxI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2760s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Government Budget and the Economy)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000004';

-- 2. Insert 5 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2204-0000-000000000001', '65d29b56-0030-1200-0000-000000000004', 'Government Budget: Meaning, Objectives (Reallocation, Inequality Reduction, Stability) & Components', 1, true),
('65d29b56-0030-2204-0000-000000000002', '65d29b56-0030-1200-0000-000000000004', 'Classification of Government Receipts: Revenue Receipts (Tax vs Non-Tax Revenue; Direct vs Indirect Taxes)', 2, true),
('65d29b56-0030-2204-0000-000000000003', '65d29b56-0030-1200-0000-000000000004', 'Capital Receipts: Borrowings, Disinvestment, Recovery of Loans & Debt vs Non-Debt Capital Receipts', 3, true),
('65d29b56-0030-2204-0000-000000000004', '65d29b56-0030-1200-0000-000000000004', 'Government Expenditure: Revenue Expenditure vs Capital Expenditure & Developmental vs Non-Developmental', 4, true),
('65d29b56-0030-2204-0000-000000000005', '65d29b56-0030-1200-0000-000000000004', 'Budgetary Measures & Government Deficits: Revenue Deficit, Fiscal Deficit, Primary Deficit & Calculations', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3204-0000-000000000001', '65d29b56-0030-2204-0000-000000000001', 'VIDEO', 'Government Budget: Meaning, Objectives (Reallocation, Inequality Reduction, Stability) & Components', 'https://www.youtube.com/watch?v=OQr4j2KDCxI&end=580s', true, 1),
('65d29b56-0030-3204-0000-000000000002', '65d29b56-0030-2204-0000-000000000002', 'VIDEO', 'Classification of Government Receipts: Revenue Receipts (Tax vs Non-Tax Revenue; Direct vs Indirect Taxes)', 'https://www.youtube.com/watch?v=OQr4j2KDCxI&t=580s&end=1180s', true, 1),
('65d29b56-0030-3204-0000-000000000003', '65d29b56-0030-2204-0000-000000000003', 'VIDEO', 'Capital Receipts: Borrowings, Disinvestment, Recovery of Loans & Debt vs Non-Debt Capital Receipts', 'https://www.youtube.com/watch?v=OQr4j2KDCxI&t=1180s&end=1750s', true, 1),
('65d29b56-0030-3204-0000-000000000004', '65d29b56-0030-2204-0000-000000000004', 'VIDEO', 'Government Expenditure: Revenue Expenditure vs Capital Expenditure & Developmental vs Non-Developmental', 'https://www.youtube.com/watch?v=OQr4j2KDCxI&t=1750s&end=2280s', true, 1),
('65d29b56-0030-3204-0000-000000000005', '65d29b56-0030-2204-0000-000000000005', 'VIDEO', 'Budgetary Measures & Government Deficits: Revenue Deficit, Fiscal Deficit, Primary Deficit & Calculations', 'https://www.youtube.com/watch?v=OQr4j2KDCxI&t=2280s&end=2760s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
