-- V371__seed_class12_geo_ch02_the_world_population_distribution_density_and_growth_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 2 (The World Population: Distribution, Density and Growth)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (DrUyYII_Q6Q)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 817s)

-- 1. Remove old placeholder topics & content items for Chapter 2 (The World Population: Distribution, Density and Growth)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000002';

-- 2. Insert 4 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2202-0000-000000000001', '65d29b56-0029-1200-0000-000000000002', 'Patterns of Population Distribution and Density of Population across Global Regions', 1, true),
('65d29b56-0029-2202-0000-000000000002', '65d29b56-0029-1200-0000-000000000002', 'Factors Influencing Population Distribution: Geographical, Economic & Socio-Cultural Drivers', 2, true),
('65d29b56-0029-2202-0000-000000000003', '65d29b56-0029-1200-0000-000000000002', 'Population Growth, Components of Change (CBR, CDR, Migration: Push & Pull Factors)', 3, true),
('65d29b56-0029-2202-0000-000000000004', '65d29b56-0029-1200-0000-000000000002', 'Demographic Transition Theory (Three Stages) & Population Control Measures / Malthusian Theory', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3202-0000-000000000001', '65d29b56-0029-2202-0000-000000000001', 'VIDEO', 'Patterns of Population Distribution and Density of Population across Global Regions', 'https://www.youtube.com/watch?v=DrUyYII_Q6Q&end=200s', true, 1),
('65d29b56-0029-3202-0000-000000000002', '65d29b56-0029-2202-0000-000000000002', 'VIDEO', 'Factors Influencing Population Distribution: Geographical, Economic & Socio-Cultural Drivers', 'https://www.youtube.com/watch?v=DrUyYII_Q6Q&t=200s&end=410s', true, 1),
('65d29b56-0029-3202-0000-000000000003', '65d29b56-0029-2202-0000-000000000003', 'VIDEO', 'Population Growth, Components of Change (CBR, CDR, Migration: Push & Pull Factors)', 'https://www.youtube.com/watch?v=DrUyYII_Q6Q&t=410s&end=620s', true, 1),
('65d29b56-0029-3202-0000-000000000004', '65d29b56-0029-2202-0000-000000000004', 'VIDEO', 'Demographic Transition Theory (Three Stages) & Population Control Measures / Malthusian Theory', 'https://www.youtube.com/watch?v=DrUyYII_Q6Q&t=620s&end=817s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
