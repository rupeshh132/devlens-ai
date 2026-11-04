-- V72__seed_class10_geo_ch7_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 10 Geography Chapter 7 / Overall SST Chapter 12 (Lifelines of National Economy)
-- Video: Digraj Singh Rajput (Lifelines of National Economy | One Shot Revision Series | x0OzQNRziaE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4383s / 01h 13m 03s)

-- 1. Remove old placeholder topics & content items for Geography Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000012';

-- 2. Insert 4 NCERT-Aligned Master Topics for Geography Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2012-0000-000000000001', '65d29b56-3333-1000-0000-000000000012', 'Introduction to Lifelines & Road Transport Network (Roadways & Classifications)', 1, true),
('65d29b56-3333-2012-0000-000000000002', '65d29b56-3333-1000-0000-000000000012', 'Railways & Pipelines: Heavy Freight, Passenger & Energy Lifelines', 2, true),
('65d29b56-3333-2012-0000-000000000003', '65d29b56-3333-1000-0000-000000000012', 'Waterways, Major Sea Ports & Airways: Water & Air Transport Systems', 3, true),
('65d29b56-3333-2012-0000-000000000004', '65d29b56-3333-1000-0000-000000000012', 'Communication Systems, International Trade & Tourism as a Trade', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4383s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3012-0000-000000000001', '65d29b56-3333-2012-0000-000000000001', 'VIDEO', 'Introduction to Lifelines & Road Transport Network (Roadways & Classifications)', 'https://www.youtube.com/watch?v=x0OzQNRziaE&end=1510s', true, 1),
('65d29b56-3333-3012-0000-000000000002', '65d29b56-3333-2012-0000-000000000002', 'VIDEO', 'Railways & Pipelines: Heavy Freight, Passenger & Energy Lifelines', 'https://www.youtube.com/watch?v=x0OzQNRziaE&t=1510s&end=2450s', true, 1),
('65d29b56-3333-3012-0000-000000000003', '65d29b56-3333-2012-0000-000000000003', 'VIDEO', 'Waterways, Major Sea Ports & Airways: Water & Air Transport Systems', 'https://www.youtube.com/watch?v=x0OzQNRziaE&t=2450s&end=3530s', true, 1),
('65d29b56-3333-3012-0000-000000000004', '65d29b56-3333-2012-0000-000000000004', 'VIDEO', 'Communication Systems, International Trade & Tourism as a Trade', 'https://www.youtube.com/watch?v=x0OzQNRziaE&t=3530s&end=4383s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
