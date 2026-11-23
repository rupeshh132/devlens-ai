-- V328__seed_class12_eco_ch02_money_and_banking_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 2 (Money and Banking)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (b6FR2nsCz1I)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3970s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Money and Banking)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000002';

-- 2. Insert 5 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2202-0000-000000000001', '65d29b56-0030-1200-0000-000000000002', 'Money: Meaning, Evolution, Barter System & Primary and Secondary Functions of Money', 1, true),
('65d29b56-0030-2202-0000-000000000002', '65d29b56-0030-1200-0000-000000000002', 'Supply of Money: Currency with Public, Demand Deposits, Fiat/Fiduciary Money & M1 Measure', 2, true),
('65d29b56-0030-2202-0000-000000000003', '65d29b56-0030-1200-0000-000000000002', 'Commercial Banking & Credit Creation Process: Legal Reserve Ratio (CRR, SLR) & Money Multiplier', 3, true),
('65d29b56-0030-2202-0000-000000000004', '65d29b56-0030-1200-0000-000000000002', 'Central Bank (Reserve Bank of India): Meaning & Core Functions (Bank of Issue, Govt Bank, Banker''s Bank)', 4, true),
('65d29b56-0030-2202-0000-000000000005', '65d29b56-0030-1200-0000-000000000002', 'Instruments of Credit Control: Quantitative (Bank Rate, Repo, CRR, SLR, OMO) & Qualitative (Margin Requirements)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3202-0000-000000000001', '65d29b56-0030-2202-0000-000000000001', 'VIDEO', 'Money: Meaning, Evolution, Barter System & Primary and Secondary Functions of Money', 'https://www.youtube.com/watch?v=b6FR2nsCz1I&end=580s', true, 1),
('65d29b56-0030-3202-0000-000000000002', '65d29b56-0030-2202-0000-000000000002', 'VIDEO', 'Supply of Money: Currency with Public, Demand Deposits, Fiat/Fiduciary Money & M1 Measure', 'https://www.youtube.com/watch?v=b6FR2nsCz1I&t=580s&end=1340s', true, 1),
('65d29b56-0030-3202-0000-000000000003', '65d29b56-0030-2202-0000-000000000003', 'VIDEO', 'Commercial Banking & Credit Creation Process: Legal Reserve Ratio (CRR, SLR) & Money Multiplier', 'https://www.youtube.com/watch?v=b6FR2nsCz1I&t=1340s&end=2450s', true, 1),
('65d29b56-0030-3202-0000-000000000004', '65d29b56-0030-2202-0000-000000000004', 'VIDEO', 'Central Bank (Reserve Bank of India): Meaning & Core Functions (Bank of Issue, Govt Bank, Banker''s Bank)', 'https://www.youtube.com/watch?v=b6FR2nsCz1I&t=2450s&end=3100s', true, 1),
('65d29b56-0030-3202-0000-000000000005', '65d29b56-0030-2202-0000-000000000005', 'VIDEO', 'Instruments of Credit Control: Quantitative (Bank Rate, Repo, CRR, SLR, OMO) & Qualitative (Margin Requirements)', 'https://www.youtube.com/watch?v=b6FR2nsCz1I&t=3100s&end=3970s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
