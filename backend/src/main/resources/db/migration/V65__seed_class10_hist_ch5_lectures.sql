-- V65__seed_class10_hist_ch5_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 10 History Chapter 5 (Print Culture and the Modern World)
-- Video: Warrior 2026 (Print Culture and the Modern World One Shot: FULL CHAPTER | Ut7x2rgJdSY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5316s / 01h 28m 36s)

-- 1. Remove old placeholder topics & content items for History Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000005';

-- 2. Insert 6 NCERT 1:1 Master Topics for History Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2005-0000-000000000001', '65d29b56-3333-1000-0000-000000000005', 'The First Printed Books: China, Japan and Korea', 1, true),
('65d29b56-3333-2005-0000-000000000002', '65d29b56-3333-1000-0000-000000000005', 'Print Comes to Europe & Johann Gutenberg''s Printing Press', 2, true),
('65d29b56-3333-2005-0000-000000000003', '65d29b56-3333-1000-0000-000000000005', 'The Print Revolution and Its Impact: Religious Debates & Protestant Reformation', 3, true),
('65d29b56-3333-2005-0000-000000000004', '65d29b56-3333-1000-0000-000000000005', 'The Reading Mania, Enlightenment Thinkers & The French Revolution', 4, true),
('65d29b56-3333-2005-0000-000000000005', '65d29b56-3333-1000-0000-000000000005', 'The 19th Century: Children, Women and Workers & Printing Innovations', 5, true),
('65d29b56-3333-2005-0000-000000000006', '65d29b56-3333-1000-0000-000000000005', 'India and the World of Print: Religious Reform, Vernacular Voices & Censorship', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 5316s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3005-0000-000000000001', '65d29b56-3333-2005-0000-000000000001', 'VIDEO', 'The First Printed Books: China, Japan and Korea', 'https://www.youtube.com/watch?v=Ut7x2rgJdSY&end=960s', true, 1),
('65d29b56-3333-3005-0000-000000000002', '65d29b56-3333-2005-0000-000000000002', 'VIDEO', 'Print Comes to Europe & Johann Gutenberg''s Printing Press', 'https://www.youtube.com/watch?v=Ut7x2rgJdSY&t=960s&end=1416s', true, 1),
('65d29b56-3333-3005-0000-000000000003', '65d29b56-3333-2005-0000-000000000003', 'VIDEO', 'The Print Revolution and Its Impact: Religious Debates & Protestant Reformation', 'https://www.youtube.com/watch?v=Ut7x2rgJdSY&t=1416s&end=2515s', true, 1),
('65d29b56-3333-3005-0000-000000000004', '65d29b56-3333-2005-0000-000000000004', 'VIDEO', 'The Reading Mania, Enlightenment Thinkers & The French Revolution', 'https://www.youtube.com/watch?v=Ut7x2rgJdSY&t=2515s&end=3160s', true, 1),
('65d29b56-3333-3005-0000-000000000005', '65d29b56-3333-2005-0000-000000000005', 'VIDEO', 'The 19th Century: Children, Women and Workers & Printing Innovations', 'https://www.youtube.com/watch?v=Ut7x2rgJdSY&t=3160s&end=3772s', true, 1),
('65d29b56-3333-3005-0000-000000000006', '65d29b56-3333-2005-0000-000000000006', 'VIDEO', 'India and the World of Print: Religious Reform, Vernacular Voices & Censorship', 'https://www.youtube.com/watch?v=Ut7x2rgJdSY&t=3772s&end=5316s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
