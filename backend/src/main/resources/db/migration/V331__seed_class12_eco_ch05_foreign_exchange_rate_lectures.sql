-- V331__seed_class12_eco_ch05_foreign_exchange_rate_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 5 (Foreign Exchange Rate)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (DMOBsF1QCl0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1880s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Foreign Exchange Rate)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000005';

-- 2. Insert 4 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2205-0000-000000000001', '65d29b56-0030-1200-0000-000000000005', 'Foreign Exchange & Exchange Rate: Meaning, Fixed Exchange Rate System & Bretton Woods Pegged System', 1, true),
('65d29b56-0030-2205-0000-000000000002', '65d29b56-0030-1200-0000-000000000005', 'Flexible Exchange Rate System: Determination in Free Market via Demand and Supply of Foreign Exchange', 2, true),
('65d29b56-0030-2205-0000-000000000003', '65d29b56-0030-1200-0000-000000000005', 'Currency Fluctuations: Depreciation vs Appreciation (Market Forces) & Devaluation vs Revaluation (Govt Action)', 3, true),
('65d29b56-0030-2205-0000-000000000004', '65d29b56-0030-1200-0000-000000000005', 'Managed Floating Exchange Rate System (Dirty Floating) & Foreign Exchange Market (Spot vs Forward Market)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3205-0000-000000000001', '65d29b56-0030-2205-0000-000000000001', 'VIDEO', 'Foreign Exchange & Exchange Rate: Meaning, Fixed Exchange Rate System & Bretton Woods Pegged System', 'https://www.youtube.com/watch?v=DMOBsF1QCl0&end=450s', true, 1),
('65d29b56-0030-3205-0000-000000000002', '65d29b56-0030-2205-0000-000000000002', 'VIDEO', 'Flexible Exchange Rate System: Determination in Free Market via Demand and Supply of Foreign Exchange', 'https://www.youtube.com/watch?v=DMOBsF1QCl0&t=450s&end=950s', true, 1),
('65d29b56-0030-3205-0000-000000000003', '65d29b56-0030-2205-0000-000000000003', 'VIDEO', 'Currency Fluctuations: Depreciation vs Appreciation (Market Forces) & Devaluation vs Revaluation (Govt Action)', 'https://www.youtube.com/watch?v=DMOBsF1QCl0&t=950s&end=1420s', true, 1),
('65d29b56-0030-3205-0000-000000000004', '65d29b56-0030-2205-0000-000000000004', 'VIDEO', 'Managed Floating Exchange Rate System (Dirty Floating) & Foreign Exchange Market (Spot vs Forward Market)', 'https://www.youtube.com/watch?v=DMOBsF1QCl0&t=1420s&end=1880s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
