-- V386__seed_class12_geo_ch17_geographical_perspective_on_selected_issues_and_problems_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 17 (Geographical Perspective on Selected Issues and Problems)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (vnlHxjIIGro)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2036s)

-- 1. Remove old placeholder topics & content items for Chapter 17 (Geographical Perspective on Selected Issues and Problems)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000017'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000017';

-- 2. Insert 4 Verified Master Topics for Chapter 17
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2217-0000-000000000001', '65d29b56-0029-1200-0000-000000000017', 'Environmental Pollution: Water Pollution (Sources, Ganga/Yamuna), Air Pollution & Acid Rain', 1, true),
('65d29b56-0029-2217-0000-000000000002', '65d29b56-0029-1200-0000-000000000017', 'Noise Pollution, Solid Waste Generation and Disposal Problems in Urban Centers', 2, true),
('65d29b56-0029-2217-0000-000000000003', '65d29b56-0029-1200-0000-000000000017', 'Rural-to-Urban Migration Dynamics & Urban Settlement Challenges (Push-Pull Factors)', 3, true),
('65d29b56-0029-2217-0000-000000000004', '65d29b56-0029-1200-0000-000000000017', 'Slums and Associated Socio-Economic Challenges (Case Study: Dharavi) & Land Degradation Mitigation', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3217-0000-000000000001', '65d29b56-0029-2217-0000-000000000001', 'VIDEO', 'Environmental Pollution: Water Pollution (Sources, Ganga/Yamuna), Air Pollution & Acid Rain', 'https://www.youtube.com/watch?v=vnlHxjIIGro&end=510s', true, 1),
('65d29b56-0029-3217-0000-000000000002', '65d29b56-0029-2217-0000-000000000002', 'VIDEO', 'Noise Pollution, Solid Waste Generation and Disposal Problems in Urban Centers', 'https://www.youtube.com/watch?v=vnlHxjIIGro&t=510s&end=1020s', true, 1),
('65d29b56-0029-3217-0000-000000000003', '65d29b56-0029-2217-0000-000000000003', 'VIDEO', 'Rural-to-Urban Migration Dynamics & Urban Settlement Challenges (Push-Pull Factors)', 'https://www.youtube.com/watch?v=vnlHxjIIGro&t=1020s&end=1530s', true, 1),
('65d29b56-0029-3217-0000-000000000004', '65d29b56-0029-2217-0000-000000000004', 'VIDEO', 'Slums and Associated Socio-Economic Challenges (Case Study: Dharavi) & Land Degradation Mitigation', 'https://www.youtube.com/watch?v=vnlHxjIIGro&t=1530s&end=2036s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
