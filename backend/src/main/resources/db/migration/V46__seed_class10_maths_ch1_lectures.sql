-- V46__seed_class10_maths_ch1_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 1 (Real Numbers)
-- Video: Shobhit Nirwan (Class 10th Real Numbers One Shot 🔥 | -UdHmSTmQtw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8893s)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Real Numbers)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000001';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2001-0000-000000000001', '65d29b56-2222-1000-0000-000000000001', 'Introduction & Basics of HCF & LCM (Prime Factorisation)', 1, true),
('65d29b56-2222-2001-0000-000000000002', '65d29b56-2222-1000-0000-000000000001', 'Important Concepts, Divisibility Rules & Formula (HCF × LCM = a × b)', 2, true),
('65d29b56-2222-2001-0000-000000000003', '65d29b56-2222-1000-0000-000000000001', 'Master Shortcut & Word Problems on HCF and LCM', 3, true),
('65d29b56-2222-2001-0000-000000000004', '65d29b56-2222-1000-0000-000000000001', 'Composite Numbers & Proof of Irrationality (√5, √7)', 4, true),
('65d29b56-2222-2001-0000-000000000005', '65d29b56-2222-1000-0000-000000000001', 'Proof of Irrationality for Composite Forms & Chapter Summary', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3001-0000-000000000001', '65d29b56-2222-2001-0000-000000000001', 'VIDEO', 'Introduction & Basics of HCF & LCM (Prime Factorisation)', 'https://www.youtube.com/watch?v=-UdHmSTmQtw&end=880s', true, 1),
('65d29b56-2222-3001-0000-000000000002', '65d29b56-2222-2001-0000-000000000002', 'VIDEO', 'Important Concepts, Divisibility Rules & Formula (HCF × LCM = a × b)', 'https://www.youtube.com/watch?v=-UdHmSTmQtw&t=880s&end=4050s', true, 1),
('65d29b56-2222-3001-0000-000000000003', '65d29b56-2222-2001-0000-000000000003', 'VIDEO', 'Master Shortcut & Word Problems on HCF and LCM', 'https://www.youtube.com/watch?v=-UdHmSTmQtw&t=4050s&end=6290s', true, 1),
('65d29b56-2222-3001-0000-000000000004', '65d29b56-2222-2001-0000-000000000004', 'VIDEO', 'Composite Numbers & Proof of Irrationality (√5, √7)', 'https://www.youtube.com/watch?v=-UdHmSTmQtw&t=6290s&end=8030s', true, 1),
('65d29b56-2222-3001-0000-000000000005', '65d29b56-2222-2001-0000-000000000005', 'VIDEO', 'Proof of Irrationality for Composite Forms & Chapter Summary', 'https://www.youtube.com/watch?v=-UdHmSTmQtw&t=8030s&end=8893s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
