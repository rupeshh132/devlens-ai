-- V380__seed_class12_geo_ch11_land_resources_and_agriculture_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 11 (Land Resources and Agriculture (India))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (nIaJ3vmA_0g)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2345s)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Land Resources and Agriculture (India))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000011';

-- 2. Insert 4 Verified Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2211-0000-000000000001', '65d29b56-0029-1200-0000-000000000011', 'Land-Use Categories in India (9 Categories), Land-Use Changes & Common Property Resources (CPRs)', 1, true),
('65d29b56-0029-2211-0000-000000000002', '65d29b56-0029-1200-0000-000000000011', 'Cropping Seasons (Kharif, Rabi, Zaid) & Types of Farming (Dryland vs Wetland Farming)', 2, true),
('65d29b56-0029-2211-0000-000000000003', '65d29b56-0029-1200-0000-000000000011', 'Major Crops of India: Foodgrains (Rice, Wheat, Millets, Pulses) & Commercial Crops (Oilseeds, Cotton, Jute, Tea, Coffee)', 3, true),
('65d29b56-0029-2211-0000-000000000004', '65d29b56-0029-1200-0000-000000000011', 'Agricultural Development in India, Green Revolution Strategy & Problems of Indian Agriculture', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3211-0000-000000000001', '65d29b56-0029-2211-0000-000000000001', 'VIDEO', 'Land-Use Categories in India (9 Categories), Land-Use Changes & Common Property Resources (CPRs)', 'https://www.youtube.com/watch?v=nIaJ3vmA_0g&end=580s', true, 1),
('65d29b56-0029-3211-0000-000000000002', '65d29b56-0029-2211-0000-000000000002', 'VIDEO', 'Cropping Seasons (Kharif, Rabi, Zaid) & Types of Farming (Dryland vs Wetland Farming)', 'https://www.youtube.com/watch?v=nIaJ3vmA_0g&t=580s&end=1170s', true, 1),
('65d29b56-0029-3211-0000-000000000003', '65d29b56-0029-2211-0000-000000000003', 'VIDEO', 'Major Crops of India: Foodgrains (Rice, Wheat, Millets, Pulses) & Commercial Crops (Oilseeds, Cotton, Jute, Tea, Coffee)', 'https://www.youtube.com/watch?v=nIaJ3vmA_0g&t=1170s&end=1760s', true, 1),
('65d29b56-0029-3211-0000-000000000004', '65d29b56-0029-2211-0000-000000000004', 'VIDEO', 'Agricultural Development in India, Green Revolution Strategy & Problems of Indian Agriculture', 'https://www.youtube.com/watch?v=nIaJ3vmA_0g&t=1760s&end=2345s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
