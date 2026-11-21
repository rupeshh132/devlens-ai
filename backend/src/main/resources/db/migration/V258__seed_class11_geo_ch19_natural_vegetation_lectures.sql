-- V258__seed_class11_geo_ch19_natural_vegetation_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 19: Natural Vegetation (Book 2 Ch 5)
-- Masterclass Video: Next Toppers - 11th Humanities (32T5vSU7-yw)
-- 100% Zero-Gap Continuous Timeline: 0s to 3580s (59m 40s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 19
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000019'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000019';

-- 2. Insert 4 Verified Master Subtopics for Chapter 19
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2119-0000-000000000001', '65d29b56-0029-1100-0000-000000000019', 'Natural Vegetation in India & Tropical Evergreen and Semi-Evergreen Forests', 1, true),
('65d29b56-0029-2119-0000-000000000002', '65d29b56-0029-1100-0000-000000000019', 'Tropical Deciduous (Moist & Dry), Tropical Thorn, Montane & Littoral Forests', 2, true),
('65d29b56-0029-2119-0000-000000000003', '65d29b56-0029-1100-0000-000000000019', 'Forest Cover in India, National Forest Policy, Social Forestry & Farm Forestry', 3, true),
('65d29b56-0029-2119-0000-000000000004', '65d29b56-0029-1100-0000-000000000019', 'Wildlife Conservation in India: Projects, Biosphere Reserves & National Parks', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 14:10 (0s to 850s)
('65d29b56-0029-3119-0000-000000000001', '65d29b56-0029-2119-0000-000000000001', 'VIDEO', 'Natural Vegetation in India & Tropical Evergreen and Semi-Evergreen Forests (Virgin Vegetation Types, Rainfall > 200cm, Rosewood, Mahogany, Ebony, Aini, Multi-Layered Canopies & Western Ghats)', 'https://www.youtube.com/watch?v=32T5vSU7-yw&t=0s&end=850s', true, 1),

-- Topic 2: 14:10 to 30:00 (850s to 1800s)
('65d29b56-0029-3119-0000-000000000002', '65d29b56-0029-2119-0000-000000000002', 'VIDEO', 'Tropical Deciduous (Moist & Dry), Tropical Thorn, Montane & Littoral Forests (Monsoon Forests, Teak, Sal, Shisham, Babool, Kikar, Pine, Deodar, Oak, Sundari Mangrove Forests & Tidal Ecology)', 'https://www.youtube.com/watch?v=32T5vSU7-yw&t=850s&end=1800s', true, 1),

-- Topic 3: 30:00 to 45:00 (1800s to 2700s)
('65d29b56-0029-3119-0000-000000000003', '65d29b56-0029-2119-0000-000000000003', 'VIDEO', 'Forest Cover in India, National Forest Policy, Social Forestry & Farm Forestry (33% Forest Cover Target 1988 Policy, Actual vs Recorded Forest Area, Agro-Forestry, Community Forestry & Urban Forestry)', 'https://www.youtube.com/watch?v=32T5vSU7-yw&t=1800s&end=2700s', true, 1),

-- Topic 4: 45:00 to 59:40 (2700s to 3580s)
('65d29b56-0029-3119-0000-000000000004', '65d29b56-0029-2119-0000-000000000004', 'VIDEO', 'Wildlife Conservation in India: Projects, Biosphere Reserves & National Parks (Wildlife Protection Act 1972, Project Tiger 1973, Project Elephant, UNESCO MAB Biosphere Reserves: Nilgiri, Nanda Devi, Sundarbans)', 'https://www.youtube.com/watch?v=32T5vSU7-yw&t=2700s&end=3580s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
