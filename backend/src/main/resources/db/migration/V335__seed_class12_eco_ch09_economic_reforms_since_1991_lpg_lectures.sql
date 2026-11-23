-- V335__seed_class12_eco_ch09_economic_reforms_since_1991_lpg_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 9 (Economic Reforms Since 1991 (LPG))
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (jPLhPjLdP4g)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1990s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Economic Reforms Since 1991 (LPG))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000009';

-- 2. Insert 4 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2209-0000-000000000001', '65d29b56-0030-1200-0000-000000000009', 'Background of Economic Crisis 1991: Fiscal Deficit, BOP Crisis, Foreign Exchange Depletion & Introduction of NEP', 1, true),
('65d29b56-0030-2209-0000-000000000002', '65d29b56-0030-1200-0000-000000000009', 'Liberalisation: Industrial Sector Deregulation, Financial Sector Reforms, Tax Reforms & Foreign Exchange Reforms', 2, true),
('65d29b56-0030-2209-0000-000000000003', '65d29b56-0030-1200-0000-000000000009', 'Privatisation: Disinvestment of Public Sector Undertakings (PSUs), Navratnas, Miniratnas & Rationale', 3, true),
('65d29b56-0030-2209-0000-000000000004', '65d29b56-0030-1200-0000-000000000009', 'Globalisation: Outsourcing, WTO Role, Critical Appraisal of LPG Reforms, Demonetization & Goods and Services Tax (GST)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3209-0000-000000000001', '65d29b56-0030-2209-0000-000000000001', 'VIDEO', 'Background of Economic Crisis 1991: Fiscal Deficit, BOP Crisis, Foreign Exchange Depletion & Introduction of NEP', 'https://www.youtube.com/watch?v=jPLhPjLdP4g&end=500s', true, 1),
('65d29b56-0030-3209-0000-000000000002', '65d29b56-0030-2209-0000-000000000002', 'VIDEO', 'Liberalisation: Industrial Sector Deregulation, Financial Sector Reforms, Tax Reforms & Foreign Exchange Reforms', 'https://www.youtube.com/watch?v=jPLhPjLdP4g&t=500s&end=1020s', true, 1),
('65d29b56-0030-3209-0000-000000000003', '65d29b56-0030-2209-0000-000000000003', 'VIDEO', 'Privatisation: Disinvestment of Public Sector Undertakings (PSUs), Navratnas, Miniratnas & Rationale', 'https://www.youtube.com/watch?v=jPLhPjLdP4g&t=1020s&end=1480s', true, 1),
('65d29b56-0030-3209-0000-000000000004', '65d29b56-0030-2209-0000-000000000004', 'VIDEO', 'Globalisation: Outsourcing, WTO Role, Critical Appraisal of LPG Reforms, Demonetization & Goods and Services Tax (GST)', 'https://www.youtube.com/watch?v=jPLhPjLdP4g&t=1480s&end=1990s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
