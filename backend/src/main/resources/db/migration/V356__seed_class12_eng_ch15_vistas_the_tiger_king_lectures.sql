-- V356__seed_class12_eng_ch15_vistas_the_tiger_king_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 15 (Vistas: The Tiger King)
-- Video: Simran Sahni (Board Exam Masterclass) (gkFhyCauoLY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1220s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 15 (Vistas: The Tiger King)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000015';

-- 2. Insert 3 Verified Master Topics for Chapter 15
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2215-0000-000000000001', '65d29b56-0301-1200-0000-000000000015', 'The Prophecy at Birth, The Miracle of the Ten-Day-Old Prince Speaking & Vow to Kill 100 Tigers', 1, true),
('65d29b56-0301-2215-0000-000000000002', '65d29b56-0301-1200-0000-000000000015', 'Tiger Slaughter in Pratibandapuram, The British Officer''s Visit & The 50 Diamond Rings Bribe Crisis', 2, true),
('65d29b56-0301-2215-0000-000000000003', '65d29b56-0301-1200-0000-000000000015', 'The Quest for the 100th Tiger, The Madras Zoo Deception & The Fatal Irony of the Wooden Toy Tiger', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3215-0000-000000000001', '65d29b56-0301-2215-0000-000000000001', 'VIDEO', 'The Prophecy at Birth, The Miracle of the Ten-Day-Old Prince Speaking & Vow to Kill 100 Tigers', 'https://www.youtube.com/watch?v=gkFhyCauoLY&end=410s', true, 1),
('65d29b56-0301-3215-0000-000000000002', '65d29b56-0301-2215-0000-000000000002', 'VIDEO', 'Tiger Slaughter in Pratibandapuram, The British Officer''s Visit & The 50 Diamond Rings Bribe Crisis', 'https://www.youtube.com/watch?v=gkFhyCauoLY&t=410s&end=820s', true, 1),
('65d29b56-0301-3215-0000-000000000003', '65d29b56-0301-2215-0000-000000000003', 'VIDEO', 'The Quest for the 100th Tiger, The Madras Zoo Deception & The Fatal Irony of the Wooden Toy Tiger', 'https://www.youtube.com/watch?v=gkFhyCauoLY&t=820s&end=1220s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
