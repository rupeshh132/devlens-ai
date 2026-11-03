-- V63__seed_class10_hist_ch3_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 10 History Chapter 3 (The Making of a Global World)
-- Video: Warrior 2026 (The Making of a Global World One Shot: FULL CHAPTER | IcMXEEShKzs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4654s)

-- 1. Remove old placeholder topics & content items for History Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000003';

-- 2. Insert 6 Student-Friendly Master Topics for History Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2003-0000-000000000001', '65d29b56-3333-1000-0000-000000000003', 'Chapter Foundations, Historical Timeline & Ancient Civilisations', 1, true),
('65d29b56-3333-2003-0000-000000000002', '65d29b56-3333-1000-0000-000000000003', 'Pre-Modern Global Networks: Silk Routes, Food Travels & European Conquest', 2, true),
('65d29b56-3333-2003-0000-000000000003', '65d29b56-3333-1000-0000-000000000003', 'The 19th-Century World Economy: Three Flows, Technology & Colonial Partition [IDP]', 3, true),
('65d29b56-3333-2003-0000-000000000004', '65d29b56-3333-1000-0000-000000000003', 'Colonial Exploitation: Rinderpest, Indentured Labour & Global Indian Trade [IDP]', 4, true),
('65d29b56-3333-2003-0000-000000000005', '65d29b56-3333-1000-0000-000000000003', 'The Inter-War Economic Crisis: WWI, Mass Production & Great Depression [IDP]', 5, true),
('65d29b56-3333-2003-0000-000000000006', '65d29b56-3333-1000-0000-000000000003', 'Post-WWII Settlement: Bretton Woods Institutions & Board Exam Practice', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3003-0000-000000000001', '65d29b56-3333-2003-0000-000000000001', 'VIDEO', 'Chapter Foundations, Historical Timeline & Ancient Civilisations', 'https://www.youtube.com/watch?v=IcMXEEShKzs&end=649s', true, 1),
('65d29b56-3333-3003-0000-000000000002', '65d29b56-3333-2003-0000-000000000002', 'VIDEO', 'Pre-Modern Global Networks: Silk Routes, Food Travels & European Conquest', 'https://www.youtube.com/watch?v=IcMXEEShKzs&t=649s&end=1643s', true, 1),
('65d29b56-3333-3003-0000-000000000003', '65d29b56-3333-2003-0000-000000000003', 'VIDEO', 'The 19th-Century World Economy: Three Flows, Technology & Colonial Partition [IDP]', 'https://www.youtube.com/watch?v=IcMXEEShKzs&t=1643s&end=2724s', true, 1),
('65d29b56-3333-3003-0000-000000000004', '65d29b56-3333-2003-0000-000000000004', 'VIDEO', 'Colonial Exploitation: Rinderpest, Indentured Labour & Global Indian Trade [IDP]', 'https://www.youtube.com/watch?v=IcMXEEShKzs&t=2724s&end=3688s', true, 1),
('65d29b56-3333-3003-0000-000000000005', '65d29b56-3333-2003-0000-000000000005', 'VIDEO', 'The Inter-War Economic Crisis: WWI, Mass Production & Great Depression [IDP]', 'https://www.youtube.com/watch?v=IcMXEEShKzs&t=3688s&end=4340s', true, 1),
('65d29b56-3333-3003-0000-000000000006', '65d29b56-3333-2003-0000-000000000006', 'VIDEO', 'Post-WWII Settlement: Bretton Woods Institutions & Board Exam Practice', 'https://www.youtube.com/watch?v=IcMXEEShKzs&t=4340s&end=4654s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
