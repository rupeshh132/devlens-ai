-- V332__seed_class12_eco_ch06_balance_of_payments_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 6 (Balance of Payments)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (CigY56biQHI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1520s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Balance of Payments)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000006';

-- 2. Insert 4 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2206-0000-000000000001', '65d29b56-0030-1200-0000-000000000006', 'Balance of Payments (BOP): Meaning, Accounting Framework, Credit vs Debit & BOP vs Balance of Trade (BOT)', 1, true),
('65d29b56-0030-2206-0000-000000000002', '65d29b56-0030-1200-0000-000000000006', 'Current Account of BOP: Merchandise Trade (Visible), Invisibles (Services, Factor Income, Unilateral Transfers)', 2, true),
('65d29b56-0030-2206-0000-000000000003', '65d29b56-0030-1200-0000-000000000006', 'Capital Account of BOP: Foreign Investments (FDI & FPI), External Borrowings, External Assistance & Banking Capital', 3, true),
('65d29b56-0030-2206-0000-000000000004', '65d29b56-0030-1200-0000-000000000006', 'Autonomous vs Accommodating Items (Above vs Below the Line), BOP Surplus, Deficit and Equilibrium', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3206-0000-000000000001', '65d29b56-0030-2206-0000-000000000001', 'VIDEO', 'Balance of Payments (BOP): Meaning, Accounting Framework, Credit vs Debit & BOP vs Balance of Trade (BOT)', 'https://www.youtube.com/watch?v=CigY56biQHI&end=380s', true, 1),
('65d29b56-0030-3206-0000-000000000002', '65d29b56-0030-2206-0000-000000000002', 'VIDEO', 'Current Account of BOP: Merchandise Trade (Visible), Invisibles (Services, Factor Income, Unilateral Transfers)', 'https://www.youtube.com/watch?v=CigY56biQHI&t=380s&end=780s', true, 1),
('65d29b56-0030-3206-0000-000000000003', '65d29b56-0030-2206-0000-000000000003', 'VIDEO', 'Capital Account of BOP: Foreign Investments (FDI & FPI), External Borrowings, External Assistance & Banking Capital', 'https://www.youtube.com/watch?v=CigY56biQHI&t=780s&end=1180s', true, 1),
('65d29b56-0030-3206-0000-000000000004', '65d29b56-0030-2206-0000-000000000004', 'VIDEO', 'Autonomous vs Accommodating Items (Above vs Below the Line), BOP Surplus, Deficit and Equilibrium', 'https://www.youtube.com/watch?v=CigY56biQHI&t=1180s&end=1520s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
