-- V381__seed_class12_geo_ch12_water_resources_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 12 (Water Resources (India))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (h04el-_Xfqw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1684s)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Water Resources (India))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000012';

-- 2. Insert 4 Verified Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2212-0000-000000000001', '65d29b56-0029-1200-0000-000000000012', 'Water Resources of India: Surface Water, Ground Water, Lagoons and Backwaters', 1, true),
('65d29b56-0029-2212-0000-000000000002', '65d29b56-0029-1200-0000-000000000012', 'Water Demand and Utilization: Sectoral Use (Agriculture, Domestic, Industrial) & Emerging Water Challenges', 2, true),
('65d29b56-0029-2212-0000-000000000003', '65d29b56-0029-1200-0000-000000000012', 'Water Conservation and Management: Rainwater Harvesting Techniques & Watershed Management (Haryali, Neeru-Meeru)', 3, true),
('65d29b56-0029-2212-0000-000000000004', '65d29b56-0029-1200-0000-000000000012', 'National Water Policy, River Interlinking Concepts & Sustainable Water Resource Governance', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3212-0000-000000000001', '65d29b56-0029-2212-0000-000000000001', 'VIDEO', 'Water Resources of India: Surface Water, Ground Water, Lagoons and Backwaters', 'https://www.youtube.com/watch?v=h04el-_Xfqw&end=420s', true, 1),
('65d29b56-0029-3212-0000-000000000002', '65d29b56-0029-2212-0000-000000000002', 'VIDEO', 'Water Demand and Utilization: Sectoral Use (Agriculture, Domestic, Industrial) & Emerging Water Challenges', 'https://www.youtube.com/watch?v=h04el-_Xfqw&t=420s&end=840s', true, 1),
('65d29b56-0029-3212-0000-000000000003', '65d29b56-0029-2212-0000-000000000003', 'VIDEO', 'Water Conservation and Management: Rainwater Harvesting Techniques & Watershed Management (Haryali, Neeru-Meeru)', 'https://www.youtube.com/watch?v=h04el-_Xfqw&t=840s&end=1260s', true, 1),
('65d29b56-0029-3212-0000-000000000004', '65d29b56-0029-2212-0000-000000000004', 'VIDEO', 'National Water Policy, River Interlinking Concepts & Sustainable Water Resource Governance', 'https://www.youtube.com/watch?v=h04el-_Xfqw&t=1260s&end=1684s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
