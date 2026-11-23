-- V370__seed_class12_geo_ch01_human_geography_nature_and_scope_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 1 (Human Geography: Nature and Scope)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (Y12O3_sTOaA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 883s)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Human Geography: Nature and Scope)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000001';

-- 2. Insert 4 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2201-0000-000000000001', '65d29b56-0029-1200-0000-000000000001', 'Introduction to Human Geography, Definitions (Ratzel, Semple, Vidal) & Nature of Human Geography', 1, true),
('65d29b56-0029-2201-0000-000000000002', '65d29b56-0029-1200-0000-000000000001', 'Naturalization of Humans (Environmental Determinism) vs Humanization of Nature (Possibilism) & Neo-Determinism', 2, true),
('65d29b56-0029-2201-0000-000000000003', '65d29b56-0029-1200-0000-000000000001', 'Approaches to Human Geography through Historical Periods: Exploration to Spatial Organization', 3, true),
('65d29b56-0029-2201-0000-000000000004', '65d29b56-0029-1200-0000-000000000001', 'Schools of Thought (Welfare, Radical, Behavioural) & Broad Fields and Sub-fields of Human Geography', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3201-0000-000000000001', '65d29b56-0029-2201-0000-000000000001', 'VIDEO', 'Introduction to Human Geography, Definitions (Ratzel, Semple, Vidal) & Nature of Human Geography', 'https://www.youtube.com/watch?v=Y12O3_sTOaA&end=220s', true, 1),
('65d29b56-0029-3201-0000-000000000002', '65d29b56-0029-2201-0000-000000000002', 'VIDEO', 'Naturalization of Humans (Environmental Determinism) vs Humanization of Nature (Possibilism) & Neo-Determinism', 'https://www.youtube.com/watch?v=Y12O3_sTOaA&t=220s&end=450s', true, 1),
('65d29b56-0029-3201-0000-000000000003', '65d29b56-0029-2201-0000-000000000003', 'VIDEO', 'Approaches to Human Geography through Historical Periods: Exploration to Spatial Organization', 'https://www.youtube.com/watch?v=Y12O3_sTOaA&t=450s&end=660s', true, 1),
('65d29b56-0029-3201-0000-000000000004', '65d29b56-0029-2201-0000-000000000004', 'VIDEO', 'Schools of Thought (Welfare, Radical, Behavioural) & Broad Fields and Sub-fields of Human Geography', 'https://www.youtube.com/watch?v=Y12O3_sTOaA&t=660s&end=883s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
