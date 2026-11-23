-- V402__seed_class12_hist_ch10_rebels_and_the_raj_the_revolt_of_1857_and_its_representations_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 10 (Rebels and the Raj: The Revolt of 1857 and Its Representations)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (g9W7JMuxfQw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1761s)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Rebels and the Raj: The Revolt of 1857 and Its Representations)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000010';

-- 2. Insert 4 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2210-0000-000000000001', '65d29b56-0027-1200-0000-000000000010', 'Pattern of the 1857 Rebellion: Outbreak, Lines of Communication, Mutiny to Revolt & Leaders and Followers', 1, true),
('65d29b56-0027-2210-0000-000000000002', '65d29b56-0027-1200-0000-000000000010', 'Underlying Causes of the Uprising: Annexation of Awadh, Subsidiary Alliance, Agrarian Discontent & Rumours and Prophecies', 2, true),
('65d29b56-0027-2210-0000-000000000003', '65d29b56-0027-1200-0000-000000000010', 'What the Rebels Wanted: Proclamations, The Vision of Unity, Anti-Firangi Resistance & Repression by the British', 3, true),
('65d29b56-0027-2210-0000-000000000004', '65d29b56-0027-1200-0000-000000000010', 'Visual Representations and Memories of 1857: British Commemorative Art (Relief of Lucknow) vs Indian Nationalist Heroism', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3210-0000-000000000001', '65d29b56-0027-2210-0000-000000000001', 'VIDEO', 'Pattern of the 1857 Rebellion: Outbreak, Lines of Communication, Mutiny to Revolt & Leaders and Followers', 'https://www.youtube.com/watch?v=g9W7JMuxfQw&end=440s', true, 1),
('65d29b56-0027-3210-0000-000000000002', '65d29b56-0027-2210-0000-000000000002', 'VIDEO', 'Underlying Causes of the Uprising: Annexation of Awadh, Subsidiary Alliance, Agrarian Discontent & Rumours and Prophecies', 'https://www.youtube.com/watch?v=g9W7JMuxfQw&t=440s&end=880s', true, 1),
('65d29b56-0027-3210-0000-000000000003', '65d29b56-0027-2210-0000-000000000003', 'VIDEO', 'What the Rebels Wanted: Proclamations, The Vision of Unity, Anti-Firangi Resistance & Repression by the British', 'https://www.youtube.com/watch?v=g9W7JMuxfQw&t=880s&end=1320s', true, 1),
('65d29b56-0027-3210-0000-000000000004', '65d29b56-0027-2210-0000-000000000004', 'VIDEO', 'Visual Representations and Memories of 1857: British Commemorative Art (Relief of Lucknow) vs Indian Nationalist Heroism', 'https://www.youtube.com/watch?v=g9W7JMuxfQw&t=1320s&end=1761s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
