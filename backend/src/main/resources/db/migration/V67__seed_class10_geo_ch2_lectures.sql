-- V67__seed_class10_geo_ch2_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 10 Geography Chapter 2 / Overall SST Chapter 7 (Forest and Wildlife Resources)
-- Video: Digraj Singh Rajput (Forest and Wildlife Resources | New One Shot | CBSE Class 10 Geography 2026-27 | GqLBGoMkEVA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2792s / 46m 32s)

-- 1. Remove old placeholder topics & content items for Geography Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000007';

-- 2. Insert 4 NCERT-Aligned Master Topics for Geography Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2007-0000-000000000001', '65d29b56-3333-1000-0000-000000000007', 'Flora and Fauna in India & Biological Diversity', 1, true),
('65d29b56-3333-2007-0000-000000000002', '65d29b56-3333-1000-0000-000000000007', 'Conservation of Forest and Wildlife in India & Project Tiger', 2, true),
('65d29b56-3333-2007-0000-000000000003', '65d29b56-3333-1000-0000-000000000007', 'Community and Conservation: Sacred Groves, Chipko Movement & JFM', 3, true),
('65d29b56-3333-2007-0000-000000000004', '65d29b56-3333-1000-0000-000000000007', 'Types and Distribution of Forest and Wildlife Resources & Outro', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 2792s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3007-0000-000000000001', '65d29b56-3333-2007-0000-000000000001', 'VIDEO', 'Flora and Fauna in India & Biological Diversity', 'https://www.youtube.com/watch?v=GqLBGoMkEVA&end=713s', true, 1),
('65d29b56-3333-3007-0000-000000000002', '65d29b56-3333-2007-0000-000000000002', 'VIDEO', 'Conservation of Forest and Wildlife in India & Project Tiger', 'https://www.youtube.com/watch?v=GqLBGoMkEVA&t=713s&end=1550s', true, 1),
('65d29b56-3333-3007-0000-000000000003', '65d29b56-3333-2007-0000-000000000003', 'VIDEO', 'Community and Conservation: Sacred Groves, Chipko Movement & JFM', 'https://www.youtube.com/watch?v=GqLBGoMkEVA&t=1550s&end=2107s', true, 1),
('65d29b56-3333-3007-0000-000000000004', '65d29b56-3333-2007-0000-000000000004', 'VIDEO', 'Types and Distribution of Forest and Wildlife Resources & Outro', 'https://www.youtube.com/watch?v=GqLBGoMkEVA&t=2107s&end=2792s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
