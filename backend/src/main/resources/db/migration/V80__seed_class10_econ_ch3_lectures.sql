-- V80__seed_class10_econ_ch3_lectures.sql
-- Seeds verified 7 Master Topics and Video Lecture Timestamps for Class 10 Economics Chapter 3 / Overall SST Chapter 20 (Money and Credit)
-- Video: Digraj Singh Rajput (Money and Credit | New One Shot | V6LPuBEXCfE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4146s / 01h 09m 06s)

-- 1. Remove old placeholder topics & content items for Economics Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000020'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000020';

-- 2. Insert 7 NCERT-Aligned Master Topics for Economics Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2020-0000-000000000001', '65d29b56-3333-1000-0000-000000000020', 'Money as a Medium of Exchange: The Barter System & Double Coincidence of Wants', 1, true),
('65d29b56-3333-2020-0000-000000000002', '65d29b56-3333-1000-0000-000000000020', 'Modern Forms of Money: Currency, Demand Deposits & Cheque Payments', 2, true),
('65d29b56-3333-2020-0000-000000000003', '65d29b56-3333-1000-0000-000000000020', 'Loan Activities of Banks: Credit Creation and Banking Intermediation', 3, true),
('65d29b56-3333-2020-0000-000000000004', '65d29b56-3333-1000-0000-000000000020', 'Two Different Credit Situations: Credit as Growth vs Debt-Trap (Salim & Swapna)', 4, true),
('65d29b56-3333-2020-0000-000000000005', '65d29b56-3333-1000-0000-000000000020', 'Terms of Credit: Interest Rate, Collateral, Documentation & Credit Arrangements', 5, true),
('65d29b56-3333-2020-0000-000000000006', '65d29b56-3333-1000-0000-000000000020', 'Formal Sector Credit vs Informal Sector Credit in India & Role of RBI', 6, true),
('65d29b56-3333-2020-0000-000000000007', '65d29b56-3333-1000-0000-000000000020', 'Self-Help Groups (SHGs) for the Poor: Collateral-Free Micro-Credit & Women''s Empowerment', 7, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4146s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3020-0000-000000000001', '65d29b56-3333-2020-0000-000000000001', 'VIDEO', 'Money as a Medium of Exchange: The Barter System & Double Coincidence of Wants', 'https://www.youtube.com/watch?v=V6LPuBEXCfE&end=593s', true, 1),
('65d29b56-3333-3020-0000-000000000002', '65d29b56-3333-2020-0000-000000000002', 'VIDEO', 'Modern Forms of Money: Currency, Demand Deposits & Cheque Payments', 'https://www.youtube.com/watch?v=V6LPuBEXCfE&t=593s&end=1373s', true, 1),
('65d29b56-3333-3020-0000-000000000003', '65d29b56-3333-2020-0000-000000000003', 'VIDEO', 'Loan Activities of Banks: Credit Creation and Banking Intermediation', 'https://www.youtube.com/watch?v=V6LPuBEXCfE&t=1373s&end=1706s', true, 1),
('65d29b56-3333-3020-0000-000000000004', '65d29b56-3333-2020-0000-000000000004', 'VIDEO', 'Two Different Credit Situations: Credit as Growth vs Debt-Trap (Salim & Swapna)', 'https://www.youtube.com/watch?v=V6LPuBEXCfE&t=1706s&end=2068s', true, 1),
('65d29b56-3333-3020-0000-000000000005', '65d29b56-3333-2020-0000-000000000005', 'VIDEO', 'Terms of Credit: Interest Rate, Collateral, Documentation & Credit Arrangements', 'https://www.youtube.com/watch?v=V6LPuBEXCfE&t=2068s&end=2780s', true, 1),
('65d29b56-3333-3020-0000-000000000006', '65d29b56-3333-2020-0000-000000000006', 'VIDEO', 'Formal Sector Credit vs Informal Sector Credit in India & Role of RBI', 'https://www.youtube.com/watch?v=V6LPuBEXCfE&t=2780s&end=3655s', true, 1),
('65d29b56-3333-3020-0000-000000000007', '65d29b56-3333-2020-0000-000000000007', 'VIDEO', 'Self-Help Groups (SHGs) for the Poor: Collateral-Free Micro-Credit & Women''s Empowerment', 'https://www.youtube.com/watch?v=V6LPuBEXCfE&t=3655s&end=4146s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
