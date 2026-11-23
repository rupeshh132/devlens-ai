-- V439__seed_class12_political_science_ch01_the_end_of_bipolarity_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 1 (The End of Bipolarity)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (q4eqdnIUXq4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3052s)

-- 1. Remove old placeholder topics & content items for Chapter 1 (The End of Bipolarity)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000001';

-- 2. Insert 4 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2201-0000-000000000001', '65d29b56-0028-1200-0000-000000000001', 'The Soviet System: Structure, Bureaucracy, Command Economy & Historical Context', 1, true),
('65d29b56-0028-2201-0000-000000000002', '65d29b56-0028-1200-0000-000000000001', 'Gorbachev''s Reforms (Glasnost & Perestroika) & Causes and Consequences of Disintegration of USSR', 2, true),
('65d29b56-0028-2201-0000-000000000003', '65d29b56-0028-1200-0000-000000000001', 'Shock Therapy in Post-Communist Regimes: Concept, Process, Economic Ruin & Social Consequences', 3, true),
('65d29b56-0028-2201-0000-000000000004', '65d29b56-0028-1200-0000-000000000001', 'New Entities in World Politics (Russia, Balkan & Central Asian States) & India''s Relations with Russia', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3201-0000-000000000001', '65d29b56-0028-2201-0000-000000000001', 'VIDEO', 'The Soviet System: Structure, Bureaucracy, Command Economy & Historical Context', 'https://www.youtube.com/watch?v=q4eqdnIUXq4&end=760s', true, 1),
('65d29b56-0028-3201-0000-000000000002', '65d29b56-0028-2201-0000-000000000002', 'VIDEO', 'Gorbachev''s Reforms (Glasnost & Perestroika) & Causes and Consequences of Disintegration of USSR', 'https://www.youtube.com/watch?v=q4eqdnIUXq4&t=760s&end=1520s', true, 1),
('65d29b56-0028-3201-0000-000000000003', '65d29b56-0028-2201-0000-000000000003', 'VIDEO', 'Shock Therapy in Post-Communist Regimes: Concept, Process, Economic Ruin & Social Consequences', 'https://www.youtube.com/watch?v=q4eqdnIUXq4&t=1520s&end=2280s', true, 1),
('65d29b56-0028-3201-0000-000000000004', '65d29b56-0028-2201-0000-000000000004', 'VIDEO', 'New Entities in World Politics (Russia, Balkan & Central Asian States) & India''s Relations with Russia', 'https://www.youtube.com/watch?v=q4eqdnIUXq4&t=2280s&end=3052s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
