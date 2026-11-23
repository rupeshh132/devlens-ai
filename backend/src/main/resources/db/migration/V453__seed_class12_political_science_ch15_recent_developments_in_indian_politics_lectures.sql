-- V453__seed_class12_political_science_ch15_recent_developments_in_indian_politics_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 15 (Recent Developments in Indian Politics)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (rON23x4a-b0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3699s)

-- 1. Remove old placeholder topics & content items for Chapter 15 (Recent Developments in Indian Politics)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000015';

-- 2. Insert 4 Verified Master Topics for Chapter 15
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2215-0000-000000000001', '65d29b56-0028-1200-0000-000000000015', 'Context of the 1990s: Collapse of Congress Dominance, Emergence of Coalition Politics & Multi-Party System', 1, true),
('65d29b56-0028-2215-0000-000000000002', '65d29b56-0028-1200-0000-000000000015', 'Political Rise of Backward Classes: Implementation of Mandal Commission, Rise of Dalit & OBC Politics (BSP/SP)', 2, true),
('65d29b56-0028-2215-0000-000000000003', '65d29b56-0028-1200-0000-000000000015', 'Communalism, Secularism & Democracy: Ayodhya Dispute, Rath Yatra, Demolition, Legal Trajectory & Amicable Resolution', 3, true),
('65d29b56-0028-2215-0000-000000000004', '65d29b56-0028-1200-0000-000000000015', 'Emergence of New Consensus: Economic Reforms, Federal Coalitions (NDA/UPA) & Governance Paradigm (2004-2024)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3215-0000-000000000001', '65d29b56-0028-2215-0000-000000000001', 'VIDEO', 'Context of the 1990s: Collapse of Congress Dominance, Emergence of Coalition Politics & Multi-Party System', 'https://www.youtube.com/watch?v=rON23x4a-b0&end=920s', true, 1),
('65d29b56-0028-3215-0000-000000000002', '65d29b56-0028-2215-0000-000000000002', 'VIDEO', 'Political Rise of Backward Classes: Implementation of Mandal Commission, Rise of Dalit & OBC Politics (BSP/SP)', 'https://www.youtube.com/watch?v=rON23x4a-b0&t=920s&end=1840s', true, 1),
('65d29b56-0028-3215-0000-000000000003', '65d29b56-0028-2215-0000-000000000003', 'VIDEO', 'Communalism, Secularism & Democracy: Ayodhya Dispute, Rath Yatra, Demolition, Legal Trajectory & Amicable Resolution', 'https://www.youtube.com/watch?v=rON23x4a-b0&t=1840s&end=2770s', true, 1),
('65d29b56-0028-3215-0000-000000000004', '65d29b56-0028-2215-0000-000000000004', 'VIDEO', 'Emergence of New Consensus: Economic Reforms, Federal Coalitions (NDA/UPA) & Governance Paradigm (2004-2024)', 'https://www.youtube.com/watch?v=rON23x4a-b0&t=2770s&end=3699s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
