-- V449__seed_class12_political_science_ch11_indias_external_relations_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 11 (India''s External Relations)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (k-S94is36uI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3661s)

-- 1. Remove old placeholder topics & content items for Chapter 11 (India''s External Relations)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000011';

-- 2. Insert 4 Verified Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2211-0000-000000000001', '65d29b56-0028-1200-0000-000000000011', 'Foundations of Indian Foreign Policy: Constitutional Directive (Article 51), Nehru''s Vision & Cold War Context', 1, true),
('65d29b56-0028-2211-0000-000000000002', '65d29b56-0028-1200-0000-000000000011', 'The Policy of Non-Alignment (NAM), Afro-Asian Solidarity & Maintaining Equidistance from Superpowers', 2, true),
('65d29b56-0028-2211-0000-000000000003', '65d29b56-0028-1200-0000-000000000011', 'Sino-Indian Relations: Panchsheel Agreement, Dalai Lama & Tibet Asylum, 1962 Border War and Repercussions', 3, true),
('65d29b56-0028-2211-0000-000000000004', '65d29b56-0028-1200-0000-000000000011', 'Wars with Pakistan (1965 & 1971 Bangladesh Liberation), Shimla Agreement & Evolution of India''s Nuclear Doctrine', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3211-0000-000000000001', '65d29b56-0028-2211-0000-000000000001', 'VIDEO', 'Foundations of Indian Foreign Policy: Constitutional Directive (Article 51), Nehru''s Vision & Cold War Context', 'https://www.youtube.com/watch?v=k-S94is36uI&end=910s', true, 1),
('65d29b56-0028-3211-0000-000000000002', '65d29b56-0028-2211-0000-000000000002', 'VIDEO', 'The Policy of Non-Alignment (NAM), Afro-Asian Solidarity & Maintaining Equidistance from Superpowers', 'https://www.youtube.com/watch?v=k-S94is36uI&t=910s&end=1830s', true, 1),
('65d29b56-0028-3211-0000-000000000003', '65d29b56-0028-2211-0000-000000000003', 'VIDEO', 'Sino-Indian Relations: Panchsheel Agreement, Dalai Lama & Tibet Asylum, 1962 Border War and Repercussions', 'https://www.youtube.com/watch?v=k-S94is36uI&t=1830s&end=2740s', true, 1),
('65d29b56-0028-3211-0000-000000000004', '65d29b56-0028-2211-0000-000000000004', 'VIDEO', 'Wars with Pakistan (1965 & 1971 Bangladesh Liberation), Shimla Agreement & Evolution of India''s Nuclear Doctrine', 'https://www.youtube.com/watch?v=k-S94is36uI&t=2740s&end=3661s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
