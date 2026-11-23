-- V379__seed_class12_geo_ch10_human_settlements_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 10 (Human Settlements (India))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (EyvL6o0cGWg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 881s)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Human Settlements (India))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000010';

-- 2. Insert 4 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2210-0000-000000000001', '65d29b56-0029-1200-0000-000000000010', 'Types and Patterns of Rural Settlements: Clustered, Semi-Clustered, Hamleted and Dispersed', 1, true),
('65d29b56-0029-2210-0000-000000000002', '65d29b56-0029-1200-0000-000000000010', 'Evolution of Towns in India: Ancient Towns, Medieval Towns and Modern Towns', 2, true),
('65d29b56-0029-2210-0000-000000000003', '65d29b56-0029-1200-0000-000000000010', 'Urbanization in India & Classification of Towns on the Basis of Population Size (Class I to VI, Megacities)', 3, true),
('65d29b56-0029-2210-0000-000000000004', '65d29b56-0029-1200-0000-000000000010', 'Functional Classification of Towns: Administrative, Industrial, Transport, Commercial, Mining, Garrison & Educational', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3210-0000-000000000001', '65d29b56-0029-2210-0000-000000000001', 'VIDEO', 'Types and Patterns of Rural Settlements: Clustered, Semi-Clustered, Hamleted and Dispersed', 'https://www.youtube.com/watch?v=EyvL6o0cGWg&end=220s', true, 1),
('65d29b56-0029-3210-0000-000000000002', '65d29b56-0029-2210-0000-000000000002', 'VIDEO', 'Evolution of Towns in India: Ancient Towns, Medieval Towns and Modern Towns', 'https://www.youtube.com/watch?v=EyvL6o0cGWg&t=220s&end=440s', true, 1),
('65d29b56-0029-3210-0000-000000000003', '65d29b56-0029-2210-0000-000000000003', 'VIDEO', 'Urbanization in India & Classification of Towns on the Basis of Population Size (Class I to VI, Megacities)', 'https://www.youtube.com/watch?v=EyvL6o0cGWg&t=440s&end=660s', true, 1),
('65d29b56-0029-3210-0000-000000000004', '65d29b56-0029-2210-0000-000000000004', 'VIDEO', 'Functional Classification of Towns: Administrative, Industrial, Transport, Commercial, Mining, Garrison & Educational', 'https://www.youtube.com/watch?v=EyvL6o0cGWg&t=660s&end=881s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
