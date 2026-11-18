-- V172__seed_class11_english_ch02_were_not_afraid_to_die_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 11 English Core Chapter 2 (Hornbill: We're Not Afraid to Die... If We Can All Be Together)
-- Video: Magnet Brains (We Are Not Afraid to Die Class 11 | lrUa6TRGL44)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6192s / 1h 43m 12s, Outro trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000002';

-- 2. Insert 4 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2102-0000-000000000001', '65d29b56-0301-1100-0000-000000000002', 'Voyage Planning, Wavewalker Architecture & Smooth Passage to Cape Town', 1, true),
('65d29b56-0301-2102-0000-000000000002', '65d29b56-0301-1100-0000-000000000002', 'Gigantic Waves, Catastrophic Strike & The Desperate Fight for Survival', 2, true),
('65d29b56-0301-2102-0000-000000000003', '65d29b56-0301-1100-0000-000000000002', 'Pinpricks in the Ocean, Suzanne''s Bravery & Jonathan''s Defining Courage', 3, true),
('65d29b56-0301-2102-0000-000000000004', '65d29b56-0301-1100-0000-000000000002', 'Course 185°, Sighting Île Amsterdam & Tributes of Heroism and Survival', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3102-0000-000000000001', '65d29b56-0301-2102-0000-000000000001', 'VIDEO', 'Voyage Planning, Wavewalker Architecture & Smooth Passage to Cape Town', 'https://www.youtube.com/watch?v=lrUa6TRGL44&end=1650s', true, 1),
('65d29b56-0301-3102-0000-000000000002', '65d29b56-0301-2102-0000-000000000002', 'VIDEO', 'Gigantic Waves, Catastrophic Strike & The Desperate Fight for Survival', 'https://www.youtube.com/watch?v=lrUa6TRGL44&t=1650s&end=3750s', true, 1),
('65d29b56-0301-3102-0000-000000000003', '65d29b56-0301-2102-0000-000000000003', 'VIDEO', 'Pinpricks in the Ocean, Suzanne''s Bravery & Jonathan''s Defining Courage', 'https://www.youtube.com/watch?v=lrUa6TRGL44&t=3750s&end=5250s', true, 1),
('65d29b56-0301-3102-0000-000000000004', '65d29b56-0301-2102-0000-000000000004', 'VIDEO', 'Course 185°, Sighting Île Amsterdam & Tributes of Heroism and Survival', 'https://www.youtube.com/watch?v=lrUa6TRGL44&t=5250s&end=6192s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
