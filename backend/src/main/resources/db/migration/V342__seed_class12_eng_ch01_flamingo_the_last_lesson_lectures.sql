-- V342__seed_class12_eng_ch01_flamingo_the_last_lesson_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 1 (Flamingo: The Last Lesson)
-- Video: Simran Sahni (Board Exam Masterclass) (gq8i1op_M4o)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1460s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Flamingo: The Last Lesson)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000001';

-- 2. Insert 3 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2201-0000-000000000001', '65d29b56-0301-1200-0000-000000000001', 'Background: Franco-Prussian War, Franz''s Hesitation, M. Hamel & The Unusual School Atmosphere', 1, true),
('65d29b56-0301-2201-0000-000000000002', '65d29b56-0301-1200-0000-000000000001', 'M. Hamel''s Announcement, Franz''s Awakening & The Great Importance of the French Language', 2, true),
('65d29b56-0301-2201-0000-000000000003', '65d29b56-0301-1200-0000-000000000001', '"Vive La France!", Final Dismissal, Major Themes (Linguistic Chauvinism, Procrastination) & RTCs', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3201-0000-000000000001', '65d29b56-0301-2201-0000-000000000001', 'VIDEO', 'Background: Franco-Prussian War, Franz''s Hesitation, M. Hamel & The Unusual School Atmosphere', 'https://www.youtube.com/watch?v=gq8i1op_M4o&end=480s', true, 1),
('65d29b56-0301-3201-0000-000000000002', '65d29b56-0301-2201-0000-000000000002', 'VIDEO', 'M. Hamel''s Announcement, Franz''s Awakening & The Great Importance of the French Language', 'https://www.youtube.com/watch?v=gq8i1op_M4o&t=480s&end=1020s', true, 1),
('65d29b56-0301-3201-0000-000000000003', '65d29b56-0301-2201-0000-000000000003', 'VIDEO', '"Vive La France!", Final Dismissal, Major Themes (Linguistic Chauvinism, Procrastination) & RTCs', 'https://www.youtube.com/watch?v=gq8i1op_M4o&t=1020s&end=1460s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
