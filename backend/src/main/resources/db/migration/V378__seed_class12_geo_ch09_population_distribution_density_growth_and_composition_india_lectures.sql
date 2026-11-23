-- V378__seed_class12_geo_ch09_population_distribution_density_growth_and_composition_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 9 (Population: Distribution, Density, Growth and Composition (India))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (yJZRkqmfYKc)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2176s)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Population: Distribution, Density, Growth and Composition (India))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000009';

-- 2. Insert 4 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2209-0000-000000000001', '65d29b56-0029-1200-0000-000000000009', 'Distribution and Spatial Density of Population in India (Physiological and Agricultural Density)', 1, true),
('65d29b56-0029-2209-0000-000000000002', '65d29b56-0029-1200-0000-000000000009', 'Phases of Population Growth in India: Four Phases (1901-1921, 1921-1951, 1951-1981, 1981-Present)', 2, true),
('65d29b56-0029-2209-0000-000000000003', '65d29b56-0029-1200-0000-000000000009', 'Regional Variations in Population Growth & Adolescent / Youth Population Dynamics', 3, true),
('65d29b56-0029-2209-0000-000000000004', '65d29b56-0029-1200-0000-000000000009', 'Population Composition: Rural-Urban, Linguistic, Religious & Occupational Composition of Workers', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3209-0000-000000000001', '65d29b56-0029-2209-0000-000000000001', 'VIDEO', 'Distribution and Spatial Density of Population in India (Physiological and Agricultural Density)', 'https://www.youtube.com/watch?v=yJZRkqmfYKc&end=540s', true, 1),
('65d29b56-0029-3209-0000-000000000002', '65d29b56-0029-2209-0000-000000000002', 'VIDEO', 'Phases of Population Growth in India: Four Phases (1901-1921, 1921-1951, 1951-1981, 1981-Present)', 'https://www.youtube.com/watch?v=yJZRkqmfYKc&t=540s&end=1090s', true, 1),
('65d29b56-0029-3209-0000-000000000003', '65d29b56-0029-2209-0000-000000000003', 'VIDEO', 'Regional Variations in Population Growth & Adolescent / Youth Population Dynamics', 'https://www.youtube.com/watch?v=yJZRkqmfYKc&t=1090s&end=1630s', true, 1),
('65d29b56-0029-3209-0000-000000000004', '65d29b56-0029-2209-0000-000000000004', 'VIDEO', 'Population Composition: Rural-Urban, Linguistic, Religious & Occupational Composition of Workers', 'https://www.youtube.com/watch?v=yJZRkqmfYKc&t=1630s&end=2176s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
