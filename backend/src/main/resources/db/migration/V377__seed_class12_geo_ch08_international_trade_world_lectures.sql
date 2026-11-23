-- V377__seed_class12_geo_ch08_international_trade_world_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 8 (International Trade (World))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (Evi524qzdQY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 977s)

-- 1. Remove old placeholder topics & content items for Chapter 8 (International Trade (World))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000008';

-- 2. Insert 4 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2208-0000-000000000001', '65d29b56-0029-1200-0000-000000000008', 'Historical Background of Trade, Basis of International Trade & Balance of Trade (Favourable vs Unfavourable)', 1, true),
('65d29b56-0029-2208-0000-000000000002', '65d29b56-0029-1200-0000-000000000008', 'Important Aspects of International Trade: Volume, Composition and Direction of Trade', 2, true),
('65d29b56-0029-2208-0000-000000000003', '65d29b56-0029-1200-0000-000000000008', 'Free Trade, Dumping, Role of WTO (World Trade Organization) & Regional Trade Blocs', 3, true),
('65d29b56-0029-2208-0000-000000000004', '65d29b56-0029-1200-0000-000000000008', 'Gateways of International Trade: Types of Ports (Industrial, Commercial, Comprehensive, Entrepot, Naval, Oil Ports)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3208-0000-000000000001', '65d29b56-0029-2208-0000-000000000001', 'VIDEO', 'Historical Background of Trade, Basis of International Trade & Balance of Trade (Favourable vs Unfavourable)', 'https://www.youtube.com/watch?v=Evi524qzdQY&end=240s', true, 1),
('65d29b56-0029-3208-0000-000000000002', '65d29b56-0029-2208-0000-000000000002', 'VIDEO', 'Important Aspects of International Trade: Volume, Composition and Direction of Trade', 'https://www.youtube.com/watch?v=Evi524qzdQY&t=240s&end=490s', true, 1),
('65d29b56-0029-3208-0000-000000000003', '65d29b56-0029-2208-0000-000000000003', 'VIDEO', 'Free Trade, Dumping, Role of WTO (World Trade Organization) & Regional Trade Blocs', 'https://www.youtube.com/watch?v=Evi524qzdQY&t=490s&end=730s', true, 1),
('65d29b56-0029-3208-0000-000000000004', '65d29b56-0029-2208-0000-000000000004', 'VIDEO', 'Gateways of International Trade: Types of Ports (Industrial, Commercial, Comprehensive, Entrepot, Naval, Oil Ports)', 'https://www.youtube.com/watch?v=Evi524qzdQY&t=730s&end=977s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
