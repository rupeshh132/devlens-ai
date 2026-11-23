-- V401__seed_class12_hist_ch09_colonialism_and_the_countryside_exploring_official_archives_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 9 (Colonialism and the Countryside: Exploring Official Archives)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (XxioJ_r1hzw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1827s)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Colonialism and the Countryside: Exploring Official Archives)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000009';

-- 2. Insert 4 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2209-0000-000000000001', '65d29b56-0027-1200-0000-000000000009', 'The Permanent Settlement in Bengal (1793): Zamindars, Reasons for Default, Sunset Law & The Rise of the Jotedars', 1, true),
('65d29b56-0027-2209-0000-000000000002', '65d29b56-0027-1200-0000-000000000009', 'The Hoe and the Plough in Rajmahal Hills: Paharias Forest Dwellers vs Santhal Settlers and Damin-i Koh', 2, true),
('65d29b56-0027-2209-0000-000000000003', '65d29b56-0027-1200-0000-000000000009', 'A Revolt in the Countryside: The Bombay Deccan, The Ryotwari Settlement & The Deccan Riots of 1875', 3, true),
('65d29b56-0027-2209-0000-000000000004', '65d29b56-0027-1200-0000-000000000009', 'Evaluating Official Archives: The Fifth Report of 1812, Buchanan-Hamilton''s Surveys & Deccan Riots Report', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3209-0000-000000000001', '65d29b56-0027-2209-0000-000000000001', 'VIDEO', 'The Permanent Settlement in Bengal (1793): Zamindars, Reasons for Default, Sunset Law & The Rise of the Jotedars', 'https://www.youtube.com/watch?v=XxioJ_r1hzw&end=450s', true, 1),
('65d29b56-0027-3209-0000-000000000002', '65d29b56-0027-2209-0000-000000000002', 'VIDEO', 'The Hoe and the Plough in Rajmahal Hills: Paharias Forest Dwellers vs Santhal Settlers and Damin-i Koh', 'https://www.youtube.com/watch?v=XxioJ_r1hzw&t=450s&end=910s', true, 1),
('65d29b56-0027-3209-0000-000000000003', '65d29b56-0027-2209-0000-000000000003', 'VIDEO', 'A Revolt in the Countryside: The Bombay Deccan, The Ryotwari Settlement & The Deccan Riots of 1875', 'https://www.youtube.com/watch?v=XxioJ_r1hzw&t=910s&end=1370s', true, 1),
('65d29b56-0027-3209-0000-000000000004', '65d29b56-0027-2209-0000-000000000004', 'VIDEO', 'Evaluating Official Archives: The Fifth Report of 1812, Buchanan-Hamilton''s Surveys & Deccan Riots Report', 'https://www.youtube.com/watch?v=XxioJ_r1hzw&t=1370s&end=1827s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
