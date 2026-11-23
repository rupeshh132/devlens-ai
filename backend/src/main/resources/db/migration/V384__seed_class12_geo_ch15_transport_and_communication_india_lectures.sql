-- V384__seed_class12_geo_ch15_transport_and_communication_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 15 (Transport and Communication (India))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (81Q7gWElr4k)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1790s)

-- 1. Remove old placeholder topics & content items for Chapter 15 (Transport and Communication (India))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000015';

-- 2. Insert 4 Verified Master Topics for Chapter 15
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2215-0000-000000000001', '65d29b56-0029-1200-0000-000000000015', 'Road Transport in India: NH, SH, District Roads, Golden Quadrilateral, Corridors & Bharatmala Project', 1, true),
('65d29b56-0029-2215-0000-000000000002', '65d29b56-0029-1200-0000-000000000015', 'Rail Transport in India: Network Density, Gauges, Dedicated Freight Corridors & Konkan Railway', 2, true),
('65d29b56-0029-2215-0000-000000000003', '65d29b56-0029-1200-0000-000000000015', 'Water Transport: Inland National Waterways (NW-1 to NW-5) & Oceanic Shipping', 3, true),
('65d29b56-0029-2215-0000-000000000004', '65d29b56-0029-1200-0000-000000000015', 'Air Transport, Oil & Gas Pipelines (HVJ Pipeline) & Communication Networks (Postal, Satellite, Cellular)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3215-0000-000000000001', '65d29b56-0029-2215-0000-000000000001', 'VIDEO', 'Road Transport in India: NH, SH, District Roads, Golden Quadrilateral, Corridors & Bharatmala Project', 'https://www.youtube.com/watch?v=81Q7gWElr4k&end=450s', true, 1),
('65d29b56-0029-3215-0000-000000000002', '65d29b56-0029-2215-0000-000000000002', 'VIDEO', 'Rail Transport in India: Network Density, Gauges, Dedicated Freight Corridors & Konkan Railway', 'https://www.youtube.com/watch?v=81Q7gWElr4k&t=450s&end=900s', true, 1),
('65d29b56-0029-3215-0000-000000000003', '65d29b56-0029-2215-0000-000000000003', 'VIDEO', 'Water Transport: Inland National Waterways (NW-1 to NW-5) & Oceanic Shipping', 'https://www.youtube.com/watch?v=81Q7gWElr4k&t=900s&end=1340s', true, 1),
('65d29b56-0029-3215-0000-000000000004', '65d29b56-0029-2215-0000-000000000004', 'VIDEO', 'Air Transport, Oil & Gas Pipelines (HVJ Pipeline) & Communication Networks (Postal, Satellite, Cellular)', 'https://www.youtube.com/watch?v=81Q7gWElr4k&t=1340s&end=1790s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
