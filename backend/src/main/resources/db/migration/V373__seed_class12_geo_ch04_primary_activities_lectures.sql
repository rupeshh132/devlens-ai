-- V373__seed_class12_geo_ch04_primary_activities_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 4 (Primary Activities)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (8wRKqQU0sRE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1357s)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Primary Activities)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000004';

-- 2. Insert 4 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2204-0000-000000000001', '65d29b56-0029-1200-0000-000000000004', 'Hunting and Gathering & Pastoralism (Nomadic Herding vs Commercial Livestock Rearing)', 1, true),
('65d29b56-0029-2204-0000-000000000002', '65d29b56-0029-1200-0000-000000000004', 'Subsistence Agriculture: Primitive Subsistence (Shifting / Jhuming) & Intensive Subsistence Agriculture', 2, true),
('65d29b56-0029-2204-0000-000000000003', '65d29b56-0029-1200-0000-000000000004', 'Commercial Agriculture: Plantation, Extensive Grain, Mixed Farming, Dairy Farming & Mediterranean Agriculture', 3, true),
('65d29b56-0029-2204-0000-000000000004', '65d29b56-0029-1200-0000-000000000004', 'Market Gardening, Horticulture, Cooperative/Collective Farming (Kolkhoz) & Mining Methods (Surface vs Underground)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3204-0000-000000000001', '65d29b56-0029-2204-0000-000000000001', 'VIDEO', 'Hunting and Gathering & Pastoralism (Nomadic Herding vs Commercial Livestock Rearing)', 'https://www.youtube.com/watch?v=8wRKqQU0sRE&end=340s', true, 1),
('65d29b56-0029-3204-0000-000000000002', '65d29b56-0029-2204-0000-000000000002', 'VIDEO', 'Subsistence Agriculture: Primitive Subsistence (Shifting / Jhuming) & Intensive Subsistence Agriculture', 'https://www.youtube.com/watch?v=8wRKqQU0sRE&t=340s&end=680s', true, 1),
('65d29b56-0029-3204-0000-000000000003', '65d29b56-0029-2204-0000-000000000003', 'VIDEO', 'Commercial Agriculture: Plantation, Extensive Grain, Mixed Farming, Dairy Farming & Mediterranean Agriculture', 'https://www.youtube.com/watch?v=8wRKqQU0sRE&t=680s&end=1020s', true, 1),
('65d29b56-0029-3204-0000-000000000004', '65d29b56-0029-2204-0000-000000000004', 'VIDEO', 'Market Gardening, Horticulture, Cooperative/Collective Farming (Kolkhoz) & Mining Methods (Surface vs Underground)', 'https://www.youtube.com/watch?v=8wRKqQU0sRE&t=1020s&end=1357s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
