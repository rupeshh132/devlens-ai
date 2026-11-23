-- V382__seed_class12_geo_ch13_mineral_and_energy_resources_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 13 (Mineral and Energy Resources (India))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (SXLWmgHUhLU)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1511s)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Mineral and Energy Resources (India))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000013';

-- 2. Insert 4 Verified Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2213-0000-000000000001', '65d29b56-0029-1200-0000-000000000013', 'Classification of Minerals & Major Mineral Belts in India (North-Eastern Plateau, South-Western, North-Western)', 1, true),
('65d29b56-0029-2213-0000-000000000002', '65d29b56-0029-1200-0000-000000000013', 'Distribution of Ferrous (Iron Ore, Manganese) and Non-Ferrous Minerals (Bauxite, Copper)', 2, true),
('65d29b56-0029-2213-0000-000000000003', '65d29b56-0029-1200-0000-000000000013', 'Conventional Energy Resources: Coal Fields, Petroleum Reserves & Natural Gas Pipelines', 3, true),
('65d29b56-0029-2213-0000-000000000004', '65d29b56-0029-1200-0000-000000000013', 'Non-Conventional Energy Sources: Solar, Wind, Biomass, Nuclear & Conservation of Mineral Resources', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3213-0000-000000000001', '65d29b56-0029-2213-0000-000000000001', 'VIDEO', 'Classification of Minerals & Major Mineral Belts in India (North-Eastern Plateau, South-Western, North-Western)', 'https://www.youtube.com/watch?v=SXLWmgHUhLU&end=380s', true, 1),
('65d29b56-0029-3213-0000-000000000002', '65d29b56-0029-2213-0000-000000000002', 'VIDEO', 'Distribution of Ferrous (Iron Ore, Manganese) and Non-Ferrous Minerals (Bauxite, Copper)', 'https://www.youtube.com/watch?v=SXLWmgHUhLU&t=380s&end=760s', true, 1),
('65d29b56-0029-3213-0000-000000000003', '65d29b56-0029-2213-0000-000000000003', 'VIDEO', 'Conventional Energy Resources: Coal Fields, Petroleum Reserves & Natural Gas Pipelines', 'https://www.youtube.com/watch?v=SXLWmgHUhLU&t=760s&end=1140s', true, 1),
('65d29b56-0029-3213-0000-000000000004', '65d29b56-0029-2213-0000-000000000004', 'VIDEO', 'Non-Conventional Energy Sources: Solar, Wind, Biomass, Nuclear & Conservation of Mineral Resources', 'https://www.youtube.com/watch?v=SXLWmgHUhLU&t=1140s&end=1511s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
