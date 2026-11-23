-- V383__seed_class12_geo_ch14_planning_and_sustainable_development_in_indian_context_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 14 (Planning and Sustainable Development in Indian Context)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (6Os-0M3-rr8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1220s)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Planning and Sustainable Development in Indian Context)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000014';

-- 2. Insert 4 Verified Master Topics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2214-0000-000000000001', '65d29b56-0029-1200-0000-000000000014', 'Approaches to Planning: Sectoral Planning vs Target Area Planning (Drought-Prone & Hill Area Programs)', 1, true),
('65d29b56-0029-2214-0000-000000000002', '65d29b56-0029-1200-0000-000000000014', 'Case Study of Target Area Planning: Integrated Tribal Development Project (ITDP) in Bharmaur Region', 2, true),
('65d29b56-0029-2214-0000-000000000003', '65d29b56-0029-1200-0000-000000000014', 'Concept of Sustainable Development: Brundtland Commission Report & Environmental Concerns', 3, true),
('65d29b56-0029-2214-0000-000000000004', '65d29b56-0029-1200-0000-000000000014', 'Case Study of Indira Gandhi Canal (Nahar) Command Area: Development Stages & Eco-Restoration Measures', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3214-0000-000000000001', '65d29b56-0029-2214-0000-000000000001', 'VIDEO', 'Approaches to Planning: Sectoral Planning vs Target Area Planning (Drought-Prone & Hill Area Programs)', 'https://www.youtube.com/watch?v=6Os-0M3-rr8&end=310s', true, 1),
('65d29b56-0029-3214-0000-000000000002', '65d29b56-0029-2214-0000-000000000002', 'VIDEO', 'Case Study of Target Area Planning: Integrated Tribal Development Project (ITDP) in Bharmaur Region', 'https://www.youtube.com/watch?v=6Os-0M3-rr8&t=310s&end=610s', true, 1),
('65d29b56-0029-3214-0000-000000000003', '65d29b56-0029-2214-0000-000000000003', 'VIDEO', 'Concept of Sustainable Development: Brundtland Commission Report & Environmental Concerns', 'https://www.youtube.com/watch?v=6Os-0M3-rr8&t=610s&end=920s', true, 1),
('65d29b56-0029-3214-0000-000000000004', '65d29b56-0029-2214-0000-000000000004', 'VIDEO', 'Case Study of Indira Gandhi Canal (Nahar) Command Area: Development Stages & Eco-Restoration Measures', 'https://www.youtube.com/watch?v=6Os-0M3-rr8&t=920s&end=1220s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
