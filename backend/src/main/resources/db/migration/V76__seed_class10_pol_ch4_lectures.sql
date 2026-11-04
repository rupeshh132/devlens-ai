-- V76__seed_class10_pol_ch4_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 10 Political Science Chapter 4 / Overall SST Chapter 16 (Political Parties)
-- Video: Digraj Singh Rajput (Political Parties | New One Shot | rCNNEZFLwtM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4495s / 01h 14m 55s)

-- 1. Remove old placeholder topics & content items for Political Science Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000016';

-- 2. Insert 4 NCERT-Aligned Master Topics for Political Science Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2016-0000-000000000001', '65d29b56-3333-1000-0000-000000000016', 'Why Do We Need Political Parties? Meaning, 3 Components & 7 Key Functions', 1, true),
('65d29b56-3333-2016-0000-000000000002', '65d29b56-3333-1000-0000-000000000016', 'How Many Parties Should We Have? One-Party, Two-Party & Multi-Party Systems', 2, true),
('65d29b56-3333-2016-0000-000000000003', '65d29b56-3333-1000-0000-000000000016', 'National Parties vs State Parties: ECI Recognition Criteria & Major Indian Parties', 3, true),
('65d29b56-3333-2016-0000-000000000004', '65d29b56-3333-1000-0000-000000000016', 'Challenges to Political Parties & How Can Parties Be Reformed? (Complete Wrap-Up)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4495s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3016-0000-000000000001', '65d29b56-3333-2016-0000-000000000001', 'VIDEO', 'Why Do We Need Political Parties? Meaning, 3 Components & 7 Key Functions', 'https://www.youtube.com/watch?v=rCNNEZFLwtM&end=1720s', true, 1),
('65d29b56-3333-3016-0000-000000000002', '65d29b56-3333-2016-0000-000000000002', 'VIDEO', 'How Many Parties Should We Have? One-Party, Two-Party & Multi-Party Systems', 'https://www.youtube.com/watch?v=rCNNEZFLwtM&t=1720s&end=2280s', true, 1),
('65d29b56-3333-3016-0000-000000000003', '65d29b56-3333-2016-0000-000000000003', 'VIDEO', 'National Parties vs State Parties: ECI Recognition Criteria & Major Indian Parties', 'https://www.youtube.com/watch?v=rCNNEZFLwtM&t=2280s&end=3430s', true, 1),
('65d29b56-3333-3016-0000-000000000004', '65d29b56-3333-2016-0000-000000000004', 'VIDEO', 'Challenges to Political Parties & How Can Parties Be Reformed? (Complete Wrap-Up)', 'https://www.youtube.com/watch?v=rCNNEZFLwtM&t=3430s&end=4495s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
