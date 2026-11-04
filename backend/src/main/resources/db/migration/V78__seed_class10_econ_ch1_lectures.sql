-- V78__seed_class10_econ_ch1_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 10 Economics Chapter 1 / Overall SST Chapter 18 (Development)
-- Video: Digraj Singh Rajput (Economics | Development | Full Chapter Explanation | L-FGyJY0Thk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6030s / 01h 40m 30s)

-- 1. Remove old placeholder topics & content items for Economics Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000018'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000018';

-- 2. Insert 6 NCERT-Aligned Master Topics for Economics Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2018-0000-000000000001', '65d29b56-3333-1000-0000-000000000018', 'What Development Promises: Different People, Different Goals & Conflicting Goals', 1, true),
('65d29b56-3333-2018-0000-000000000002', '65d29b56-3333-1000-0000-000000000018', 'Income and Other Goals: Beyond Material Wealth & Mixed Developmental Desires', 2, true),
('65d29b56-3333-2018-0000-000000000003', '65d29b56-3333-1000-0000-000000000018', 'Comparing Countries: National Income, Per Capita Income & Limitations of Average Income', 3, true),
('65d29b56-3333-2018-0000-000000000004', '65d29b56-3333-1000-0000-000000000018', 'Income and Other Criteria: Comparing Indian States (Haryana, Kerala & Bihar)', 4, true),
('65d29b56-3333-2018-0000-000000000005', '65d29b56-3333-1000-0000-000000000018', 'Public Facilities, Body Mass Index (BMI) & UNDP Human Development Report (HDR)', 5, true),
('65d29b56-3333-2018-0000-000000000006', '65d29b56-3333-1000-0000-000000000018', 'Sustainability of Development: Groundwater Crisis, Resource Exhaustion & Outro', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 6030s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3018-0000-000000000001', '65d29b56-3333-2018-0000-000000000001', 'VIDEO', 'What Development Promises: Different People, Different Goals & Conflicting Goals', 'https://www.youtube.com/watch?v=L-FGyJY0Thk&end=910s', true, 1),
('65d29b56-3333-3018-0000-000000000002', '65d29b56-3333-2018-0000-000000000002', 'VIDEO', 'Income and Other Goals: Beyond Material Wealth & Mixed Developmental Desires', 'https://www.youtube.com/watch?v=L-FGyJY0Thk&t=910s&end=1510s', true, 1),
('65d29b56-3333-3018-0000-000000000003', '65d29b56-3333-2018-0000-000000000003', 'VIDEO', 'Comparing Countries: National Income, Per Capita Income & Limitations of Average Income', 'https://www.youtube.com/watch?v=L-FGyJY0Thk&t=1510s&end=3270s', true, 1),
('65d29b56-3333-3018-0000-000000000004', '65d29b56-3333-2018-0000-000000000004', 'VIDEO', 'Income and Other Criteria: Comparing Indian States (Haryana, Kerala & Bihar)', 'https://www.youtube.com/watch?v=L-FGyJY0Thk&t=3270s&end=3990s', true, 1),
('65d29b56-3333-3018-0000-000000000005', '65d29b56-3333-2018-0000-000000000005', 'VIDEO', 'Public Facilities, Body Mass Index (BMI) & UNDP Human Development Report (HDR)', 'https://www.youtube.com/watch?v=L-FGyJY0Thk&t=3990s&end=5160s', true, 1),
('65d29b56-3333-3018-0000-000000000006', '65d29b56-3333-2018-0000-000000000006', 'VIDEO', 'Sustainability of Development: Groundwater Crisis, Resource Exhaustion & Outro', 'https://www.youtube.com/watch?v=L-FGyJY0Thk&t=5160s&end=6030s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
