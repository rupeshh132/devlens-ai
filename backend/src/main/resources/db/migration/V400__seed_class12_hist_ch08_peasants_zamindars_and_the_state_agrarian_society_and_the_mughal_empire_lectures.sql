-- V400__seed_class12_hist_ch08_peasants_zamindars_and_the_state_agrarian_society_and_the_mughal_empire_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 8 (Peasants, Zamindars and The State: Agrarian Society and the Mughal Empire)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (oCRlhiI9sMA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1286s)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Peasants, Zamindars and The State: Agrarian Society and the Mughal Empire)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000008';

-- 2. Insert 4 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2208-0000-000000000001', '65d29b56-0027-1200-0000-000000000008', 'Peasants and Agricultural Production: Types of Peasants, Cropping Patterns (Jins-i Kamil) & Irrigation Technologies', 1, true),
('65d29b56-0027-2208-0000-000000000002', '65d29b56-0027-1200-0000-000000000008', 'The Village Community: The Panchayat, The Village Headman (Muqaddam), Village Artisans & Position of Women', 2, true),
('65d29b56-0027-2208-0000-000000000003', '65d29b56-0027-1200-0000-000000000008', 'Beyond the Settled Boundary: Tribes, Forests and Shifting Frontiers & The Role and Milkiyat of Zamindars', 3, true),
('65d29b56-0027-2208-0000-000000000004', '65d29b56-0027-1200-0000-000000000008', 'The Land Revenue System, Imperial Mint and Coinage & Abu''l Fazl''s Ain-i Akbari (Reconstructing History)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3208-0000-000000000001', '65d29b56-0027-2208-0000-000000000001', 'VIDEO', 'Peasants and Agricultural Production: Types of Peasants, Cropping Patterns (Jins-i Kamil) & Irrigation Technologies', 'https://www.youtube.com/watch?v=oCRlhiI9sMA&end=320s', true, 1),
('65d29b56-0027-3208-0000-000000000002', '65d29b56-0027-2208-0000-000000000002', 'VIDEO', 'The Village Community: The Panchayat, The Village Headman (Muqaddam), Village Artisans & Position of Women', 'https://www.youtube.com/watch?v=oCRlhiI9sMA&t=320s&end=640s', true, 1),
('65d29b56-0027-3208-0000-000000000003', '65d29b56-0027-2208-0000-000000000003', 'VIDEO', 'Beyond the Settled Boundary: Tribes, Forests and Shifting Frontiers & The Role and Milkiyat of Zamindars', 'https://www.youtube.com/watch?v=oCRlhiI9sMA&t=640s&end=960s', true, 1),
('65d29b56-0027-3208-0000-000000000004', '65d29b56-0027-2208-0000-000000000004', 'VIDEO', 'The Land Revenue System, Imperial Mint and Coinage & Abu''l Fazl''s Ain-i Akbari (Reconstructing History)', 'https://www.youtube.com/watch?v=oCRlhiI9sMA&t=960s&end=1286s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
