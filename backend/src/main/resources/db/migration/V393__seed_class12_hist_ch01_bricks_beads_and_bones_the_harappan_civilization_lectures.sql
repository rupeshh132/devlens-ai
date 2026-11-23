-- V393__seed_class12_hist_ch01_bricks_beads_and_bones_the_harappan_civilization_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 1 (Bricks, Beads and Bones: The Harappan Civilization)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (y9r96CH7hs0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1456s)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Bricks, Beads and Bones: The Harappan Civilization)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000001';

-- 2. Insert 4 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2201-0000-000000000001', '65d29b56-0027-1200-0000-000000000001', 'Early Urban Centres & Story of Discovery: Archaeological Reports & Chronology of Harappan Civilization', 1, true),
('65d29b56-0027-2201-0000-000000000002', '65d29b56-0027-1200-0000-000000000001', 'Urban Planning, Drainage System, Domestic Architecture & The Citadel and Great Bath of Mohenjodaro', 2, true),
('65d29b56-0027-2201-0000-000000000003', '65d29b56-0027-1200-0000-000000000001', 'Subsistence Strategies, Craft Production, Social Differences, Trade Networks & Seals, Script and Weights', 3, true),
('65d29b56-0027-2201-0000-000000000004', '65d29b56-0027-1200-0000-000000000001', 'Ancient Authority, Theories on the End of Civilization & Archaeological Problems of Interpretation', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3201-0000-000000000001', '65d29b56-0027-2201-0000-000000000001', 'VIDEO', 'Early Urban Centres & Story of Discovery: Archaeological Reports & Chronology of Harappan Civilization', 'https://www.youtube.com/watch?v=y9r96CH7hs0&end=360s', true, 1),
('65d29b56-0027-3201-0000-000000000002', '65d29b56-0027-2201-0000-000000000002', 'VIDEO', 'Urban Planning, Drainage System, Domestic Architecture & The Citadel and Great Bath of Mohenjodaro', 'https://www.youtube.com/watch?v=y9r96CH7hs0&t=360s&end=720s', true, 1),
('65d29b56-0027-3201-0000-000000000003', '65d29b56-0027-2201-0000-000000000003', 'VIDEO', 'Subsistence Strategies, Craft Production, Social Differences, Trade Networks & Seals, Script and Weights', 'https://www.youtube.com/watch?v=y9r96CH7hs0&t=720s&end=1090s', true, 1),
('65d29b56-0027-3201-0000-000000000004', '65d29b56-0027-2201-0000-000000000004', 'VIDEO', 'Ancient Authority, Theories on the End of Civilization & Archaeological Problems of Interpretation', 'https://www.youtube.com/watch?v=y9r96CH7hs0&t=1090s&end=1456s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
