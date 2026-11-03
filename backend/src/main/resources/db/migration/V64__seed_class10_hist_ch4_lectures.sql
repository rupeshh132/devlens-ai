-- V64__seed_class10_hist_ch4_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 10 History Chapter 4 (The Age of Industrialisation)
-- Video: Udaan (The Age of Industrialization FULL CHAPTER | Class 10th History | Chapter 4 | 2RqIwjsop6A)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7339s / 02h 02m 19s)

-- 1. Remove old placeholder topics & content items for History Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000004';

-- 2. Insert 6 NCERT 1:1 Master Topics for History Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2004-0000-000000000001', '65d29b56-3333-1000-0000-000000000004', 'Before the Industrial Revolution: Proto-Industrialisation & Cotton Mills', 1, true),
('65d29b56-3333-2004-0000-000000000002', '65d29b56-3333-1000-0000-000000000004', 'Hand Labour, Steam Power & The Plight of Victorian Workers', 2, true),
('65d29b56-3333-2004-0000-000000000003', '65d29b56-3333-1000-0000-000000000004', 'Industrialisation in the Colonies: Indian Textiles & Manchester Comes to India', 3, true),
('65d29b56-3333-2004-0000-000000000004', '65d29b56-3333-1000-0000-000000000004', 'Factories Come Up: Early Indian Entrepreneurs & The Jobber System', 4, true),
('65d29b56-3333-2004-0000-000000000005', '65d29b56-3333-1000-0000-000000000004', 'The Peculiarities of Industrial Growth & Small-Scale Handlooms', 5, true),
('65d29b56-3333-2004-0000-000000000006', '65d29b56-3333-1000-0000-000000000004', 'Market for Goods: Advertisements, Labels, Calendars & Nationalist Appeal', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 7339s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3004-0000-000000000001', '65d29b56-3333-2004-0000-000000000001', 'VIDEO', 'Before the Industrial Revolution: Proto-Industrialisation & Cotton Mills', 'https://www.youtube.com/watch?v=2RqIwjsop6A&end=2477s', true, 1),
('65d29b56-3333-3004-0000-000000000002', '65d29b56-3333-2004-0000-000000000002', 'VIDEO', 'Hand Labour, Steam Power & The Plight of Victorian Workers', 'https://www.youtube.com/watch?v=2RqIwjsop6A&t=2477s&end=4612s', true, 1),
('65d29b56-3333-3004-0000-000000000003', '65d29b56-3333-2004-0000-000000000003', 'VIDEO', 'Industrialisation in the Colonies: Indian Textiles & Manchester Comes to India', 'https://www.youtube.com/watch?v=2RqIwjsop6A&t=4612s&end=5733s', true, 1),
('65d29b56-3333-3004-0000-000000000004', '65d29b56-3333-2004-0000-000000000004', 'VIDEO', 'Factories Come Up: Early Indian Entrepreneurs & The Jobber System', 'https://www.youtube.com/watch?v=2RqIwjsop6A&t=5733s&end=6322s', true, 1),
('65d29b56-3333-3004-0000-000000000005', '65d29b56-3333-2004-0000-000000000005', 'VIDEO', 'The Peculiarities of Industrial Growth & Small-Scale Handlooms', 'https://www.youtube.com/watch?v=2RqIwjsop6A&t=6322s&end=6946s', true, 1),
('65d29b56-3333-3004-0000-000000000006', '65d29b56-3333-2004-0000-000000000006', 'VIDEO', 'Market for Goods: Advertisements, Labels, Calendars & Nationalist Appeal', 'https://www.youtube.com/watch?v=2RqIwjsop6A&t=6946s&end=7339s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
