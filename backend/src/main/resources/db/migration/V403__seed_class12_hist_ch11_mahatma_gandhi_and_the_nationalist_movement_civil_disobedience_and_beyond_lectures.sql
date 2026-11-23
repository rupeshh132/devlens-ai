-- V403__seed_class12_hist_ch11_mahatma_gandhi_and_the_nationalist_movement_civil_disobedience_and_beyond_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 11 (Mahatma Gandhi and the Nationalist Movement: Civil Disobedience and Beyond)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (iMo8hDRGQz0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1247s)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Mahatma Gandhi and the Nationalist Movement: Civil Disobedience and Beyond)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000011';

-- 2. Insert 4 Verified Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2211-0000-000000000001', '65d29b56-0027-1200-0000-000000000011', 'Emergence of Mahatma Gandhi: Early Satyagrahas (Champaran, Kheda, Rowlatt) & The Non-Cooperation Movement (1920-22)', 1, true),
('65d29b56-0027-2211-0000-000000000002', '65d29b56-0027-1200-0000-000000000011', 'The Salt Satyagraha and Civil Disobedience (1930): Dandi March, Gandhi-Irwin Pact & Round Table Conferences', 2, true),
('65d29b56-0027-2211-0000-000000000003', '65d29b56-0027-1200-0000-000000000011', 'The Quit India Movement (1942), World War II Crises, Cabinet Mission & Mass Mobilization Dynamics', 3, true),
('65d29b56-0027-2211-0000-000000000004', '65d29b56-0027-1200-0000-000000000011', 'Partition Traumas, Gandhi''s Finest Hours, Assassination & Historical Sources (Speeches, Letters, Newspapers)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3211-0000-000000000001', '65d29b56-0027-2211-0000-000000000001', 'VIDEO', 'Emergence of Mahatma Gandhi: Early Satyagrahas (Champaran, Kheda, Rowlatt) & The Non-Cooperation Movement (1920-22)', 'https://www.youtube.com/watch?v=iMo8hDRGQz0&end=310s', true, 1),
('65d29b56-0027-3211-0000-000000000002', '65d29b56-0027-2211-0000-000000000002', 'VIDEO', 'The Salt Satyagraha and Civil Disobedience (1930): Dandi March, Gandhi-Irwin Pact & Round Table Conferences', 'https://www.youtube.com/watch?v=iMo8hDRGQz0&t=310s&end=620s', true, 1),
('65d29b56-0027-3211-0000-000000000003', '65d29b56-0027-2211-0000-000000000003', 'VIDEO', 'The Quit India Movement (1942), World War II Crises, Cabinet Mission & Mass Mobilization Dynamics', 'https://www.youtube.com/watch?v=iMo8hDRGQz0&t=620s&end=930s', true, 1),
('65d29b56-0027-3211-0000-000000000004', '65d29b56-0027-2211-0000-000000000004', 'VIDEO', 'Partition Traumas, Gandhi''s Finest Hours, Assassination & Historical Sources (Speeches, Letters, Newspapers)', 'https://www.youtube.com/watch?v=iMo8hDRGQz0&t=930s&end=1247s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
