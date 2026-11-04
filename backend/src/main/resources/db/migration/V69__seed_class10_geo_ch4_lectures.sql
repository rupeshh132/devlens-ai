-- V69__seed_class10_geo_ch4_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 10 Geography Chapter 4 / Overall SST Chapter 9 (Agriculture)
-- Video: Siddharth Sharma (Agriculture One Shot: FULL CHAPTER | Warrior 2026 | Class 10 Geography Chapter 4 | ojMWfRRIF-E)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5895s / 01h 38m 15s)

-- 1. Remove old placeholder topics & content items for Geography Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000009';

-- 2. Insert 6 NCERT-Aligned Master Topics for Geography Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2009-0000-000000000001', '65d29b56-3333-1000-0000-000000000009', 'Introduction to Agriculture & Types of Farming', 1, true),
('65d29b56-3333-2009-0000-000000000002', '65d29b56-3333-1000-0000-000000000009', 'Cropping Patterns (Rabi, Kharif, Zaid) & The Green Revolution', 2, true),
('65d29b56-3333-2009-0000-000000000003', '65d29b56-3333-1000-0000-000000000009', 'Major Food Crops: Grains, Millets & Pulses (with Nitrogen Cycle)', 3, true),
('65d29b56-3333-2009-0000-000000000004', '65d29b56-3333-1000-0000-000000000009', 'Food Crops Other Than Grains & Horticulture', 4, true),
('65d29b56-3333-2009-0000-000000000005', '65d29b56-3333-1000-0000-000000000009', 'Crop Distribution Map Work & Non-Food / Fibre Crops', 5, true),
('65d29b56-3333-2009-0000-000000000006', '65d29b56-3333-1000-0000-000000000009', 'Technological & Institutional Reforms, Bhoodan-Gramdan & Review', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 5895s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3009-0000-000000000001', '65d29b56-3333-2009-0000-000000000001', 'VIDEO', 'Introduction to Agriculture & Types of Farming', 'https://www.youtube.com/watch?v=ojMWfRRIF-E&end=1260s', true, 1),
('65d29b56-3333-3009-0000-000000000002', '65d29b56-3333-2009-0000-000000000002', 'VIDEO', 'Cropping Patterns (Rabi, Kharif, Zaid) & The Green Revolution', 'https://www.youtube.com/watch?v=ojMWfRRIF-E&t=1260s&end=2060s', true, 1),
('65d29b56-3333-3009-0000-000000000003', '65d29b56-3333-2009-0000-000000000003', 'VIDEO', 'Major Food Crops: Grains, Millets & Pulses (with Nitrogen Cycle)', 'https://www.youtube.com/watch?v=ojMWfRRIF-E&t=2060s&end=3360s', true, 1),
('65d29b56-3333-3009-0000-000000000004', '65d29b56-3333-2009-0000-000000000004', 'VIDEO', 'Food Crops Other Than Grains & Horticulture', 'https://www.youtube.com/watch?v=ojMWfRRIF-E&t=3360s&end=4410s', true, 1),
('65d29b56-3333-3009-0000-000000000005', '65d29b56-3333-2009-0000-000000000005', 'VIDEO', 'Crop Distribution Map Work & Non-Food / Fibre Crops', 'https://www.youtube.com/watch?v=ojMWfRRIF-E&t=4410s&end=5010s', true, 1),
('65d29b56-3333-3009-0000-000000000006', '65d29b56-3333-2009-0000-000000000006', 'VIDEO', 'Technological & Institutional Reforms, Bhoodan-Gramdan & Review', 'https://www.youtube.com/watch?v=ojMWfRRIF-E&t=5010s&end=5895s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
