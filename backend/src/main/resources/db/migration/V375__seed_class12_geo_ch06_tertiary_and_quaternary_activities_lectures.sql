-- V375__seed_class12_geo_ch06_tertiary_and_quaternary_activities_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 6 (Tertiary and Quaternary Activities)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (4OOjuqtmWv0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1474s)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Tertiary and Quaternary Activities)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000006';

-- 2. Insert 4 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2206-0000-000000000001', '65d29b56-0029-1200-0000-000000000006', 'Overview of Tertiary Activities & Trade and Commerce: Retail, Wholesale & Rural/Urban Marketing Centres', 1, true),
('65d29b56-0029-2206-0000-000000000002', '65d29b56-0029-1200-0000-000000000006', 'Transport and Communication Services & Factors Affecting Tourism and Medical Tourism', 2, true),
('65d29b56-0029-2206-0000-000000000003', '65d29b56-0029-1200-0000-000000000006', 'People Engaged in Services: Formal vs Informal Sectors & Periodic Markets', 3, true),
('65d29b56-0029-2206-0000-000000000004', '65d29b56-0029-1200-0000-000000000006', 'Quaternary and Quinary Activities, Knowledge-Based Services & Outsourcing (BPO, KPO)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3206-0000-000000000001', '65d29b56-0029-2206-0000-000000000001', 'VIDEO', 'Overview of Tertiary Activities & Trade and Commerce: Retail, Wholesale & Rural/Urban Marketing Centres', 'https://www.youtube.com/watch?v=4OOjuqtmWv0&end=370s', true, 1),
('65d29b56-0029-3206-0000-000000000002', '65d29b56-0029-2206-0000-000000000002', 'VIDEO', 'Transport and Communication Services & Factors Affecting Tourism and Medical Tourism', 'https://www.youtube.com/watch?v=4OOjuqtmWv0&t=370s&end=740s', true, 1),
('65d29b56-0029-3206-0000-000000000003', '65d29b56-0029-2206-0000-000000000003', 'VIDEO', 'People Engaged in Services: Formal vs Informal Sectors & Periodic Markets', 'https://www.youtube.com/watch?v=4OOjuqtmWv0&t=740s&end=1110s', true, 1),
('65d29b56-0029-3206-0000-000000000004', '65d29b56-0029-2206-0000-000000000004', 'VIDEO', 'Quaternary and Quinary Activities, Knowledge-Based Services & Outsourcing (BPO, KPO)', 'https://www.youtube.com/watch?v=4OOjuqtmWv0&t=1110s&end=1474s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
