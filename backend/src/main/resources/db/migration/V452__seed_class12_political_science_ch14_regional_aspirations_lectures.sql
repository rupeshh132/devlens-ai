-- V452__seed_class12_political_science_ch14_regional_aspirations_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 14 (Regional Aspirations)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (mwgJOJ-yR20)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4788s)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Regional Aspirations)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000014';

-- 2. Insert 4 Verified Master Topics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2214-0000-000000000001', '65d29b56-0028-1200-0000-000000000014', 'Region and the Nation: Indian Democratic Approach to Federal Pluralism, Autonomy Demands & State Integration', 1, true),
('65d29b56-0028-2214-0000-000000000002', '65d29b56-0028-1200-0000-000000000014', 'Jammu and Kashmir: Historical Roots, Article 370 Dynamics, Cross-Border Infiltration, Insurgency & Democratic Reforms', 2, true),
('65d29b56-0028-2214-0000-000000000003', '65d29b56-0028-1200-0000-000000000014', 'Punjab Crisis: Anandpur Sahib Resolution, Operation Blue Star, 1984 Riots & Rajiv Gandhi-Longowal Accord', 3, true),
('65d29b56-0028-2214-0000-000000000004', '65d29b56-0028-1200-0000-000000000014', 'The Northeast: Seven Sisters, Demands for Autonomy, Secessionist Movements (Mizoram/Nagaland) & Assam Movement (AASU)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3214-0000-000000000001', '65d29b56-0028-2214-0000-000000000001', 'VIDEO', 'Region and the Nation: Indian Democratic Approach to Federal Pluralism, Autonomy Demands & State Integration', 'https://www.youtube.com/watch?v=mwgJOJ-yR20&end=1190s', true, 1),
('65d29b56-0028-3214-0000-000000000002', '65d29b56-0028-2214-0000-000000000002', 'VIDEO', 'Jammu and Kashmir: Historical Roots, Article 370 Dynamics, Cross-Border Infiltration, Insurgency & Democratic Reforms', 'https://www.youtube.com/watch?v=mwgJOJ-yR20&t=1190s&end=2390s', true, 1),
('65d29b56-0028-3214-0000-000000000003', '65d29b56-0028-2214-0000-000000000003', 'VIDEO', 'Punjab Crisis: Anandpur Sahib Resolution, Operation Blue Star, 1984 Riots & Rajiv Gandhi-Longowal Accord', 'https://www.youtube.com/watch?v=mwgJOJ-yR20&t=2390s&end=3590s', true, 1),
('65d29b56-0028-3214-0000-000000000004', '65d29b56-0028-2214-0000-000000000004', 'VIDEO', 'The Northeast: Seven Sisters, Demands for Autonomy, Secessionist Movements (Mizoram/Nagaland) & Assam Movement (AASU)', 'https://www.youtube.com/watch?v=mwgJOJ-yR20&t=3590s&end=4788s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
