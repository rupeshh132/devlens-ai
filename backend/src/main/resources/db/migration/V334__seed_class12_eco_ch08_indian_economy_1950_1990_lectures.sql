-- V334__seed_class12_eco_ch08_indian_economy_1950_1990_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 8 (Indian Economy (1950-1990))
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (h_fjf0ULmO4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2170s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Indian Economy (1950-1990))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000008';

-- 2. Insert 4 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2208-0000-000000000001', '65d29b56-0030-1200-0000-000000000008', 'Economic Systems (Capitalist, Socialist, Mixed) & Common Goals of Five-Year Plans (Growth, Modernisation, Self-Reliance, Equity)', 1, true),
('65d29b56-0030-2208-0000-000000000002', '65d29b56-0030-1200-0000-000000000008', 'Agricultural Development: Institutional Reforms (Land Ceiling, Abolition of Intermediaries) & The Green Revolution (HYV Seeds)', 2, true),
('65d29b56-0030-2208-0000-000000000003', '65d29b56-0030-1200-0000-000000000008', 'Industrial Policy Resolution (IPR) 1956 & Small-Scale Industries (Karve Committee, Protection and Subsidies)', 3, true),
('65d29b56-0030-2208-0000-000000000004', '65d29b56-0030-1200-0000-000000000008', 'Trade Policy: Import Substitution (Inward Looking Trade Strategy), Protectionism (Tariffs & Quotas) & Critical Evaluation', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3208-0000-000000000001', '65d29b56-0030-2208-0000-000000000001', 'VIDEO', 'Economic Systems (Capitalist, Socialist, Mixed) & Common Goals of Five-Year Plans (Growth, Modernisation, Self-Reliance, Equity)', 'https://www.youtube.com/watch?v=h_fjf0ULmO4&end=550s', true, 1),
('65d29b56-0030-3208-0000-000000000002', '65d29b56-0030-2208-0000-000000000002', 'VIDEO', 'Agricultural Development: Institutional Reforms (Land Ceiling, Abolition of Intermediaries) & The Green Revolution (HYV Seeds)', 'https://www.youtube.com/watch?v=h_fjf0ULmO4&t=550s&end=1150s', true, 1),
('65d29b56-0030-3208-0000-000000000003', '65d29b56-0030-2208-0000-000000000003', 'VIDEO', 'Industrial Policy Resolution (IPR) 1956 & Small-Scale Industries (Karve Committee, Protection and Subsidies)', 'https://www.youtube.com/watch?v=h_fjf0ULmO4&t=1150s&end=1680s', true, 1),
('65d29b56-0030-3208-0000-000000000004', '65d29b56-0030-2208-0000-000000000004', 'VIDEO', 'Trade Policy: Import Substitution (Inward Looking Trade Strategy), Protectionism (Tariffs & Quotas) & Critical Evaluation', 'https://www.youtube.com/watch?v=h_fjf0ULmO4&t=1680s&end=2170s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
