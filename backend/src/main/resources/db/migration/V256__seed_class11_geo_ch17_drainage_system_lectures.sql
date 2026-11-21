-- V256__seed_class11_geo_ch17_drainage_system_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 17: Drainage System (Book 2 Ch 3)
-- Masterclass Video: Next Toppers - 11th Humanities (3u32tJcC0LQ)
-- 100% Zero-Gap Continuous Timeline: 0s to 7495s (02:04:55, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 17
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000017'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000017';

-- 2. Insert 4 Verified Master Subtopics for Chapter 17
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2117-0000-000000000001', '65d29b56-0029-1100-0000-000000000017', 'Concepts of Drainage Basin, Catchment Area, Watershed & Major Drainage Patterns', 1, true),
('65d29b56-0029-2117-0000-000000000002', '65d29b56-0029-1100-0000-000000000017', 'The Himalayan Drainage System: Evolution, Indus River System and Ganga River System', 2, true),
('65d29b56-0029-2117-0000-000000000003', '65d29b56-0029-1100-0000-000000000017', 'The Brahmaputra System & The Peninsular River Systems (Narmada, Tapi, Godavari, Krishna, Kaveri)', 3, true),
('65d29b56-0029-2117-0000-000000000004', '65d29b56-0029-1100-0000-000000000017', 'Comparison of Himalayan vs Peninsular Rivers, Usability of Water & River Pollution Control', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 24:10 (0s to 1450s)
('65d29b56-0029-3117-0000-000000000001', '65d29b56-0029-2117-0000-000000000001', 'VIDEO', 'Concepts of Drainage Basin, Catchment Area, Watershed & Major Drainage Patterns (Dendritic Tree-like, Radial Amarkantak, Trellis Folded Relief, Centripetal Inland Basins & Water Divide)', 'https://www.youtube.com/watch?v=3u32tJcC0LQ&t=0s&end=1450s', true, 1),

-- Topic 2: 24:10 to 01:00:50 (1450s to 3650s)
('65d29b56-0029-3117-0000-000000000002', '65d29b56-0029-2117-0000-000000000002', 'VIDEO', 'The Himalayan Drainage System: Evolution, Indus River System and Ganga River System (Shiwalik River Hypothesis, Jhelum, Chenab, Ravi, Beas, Satluj, Bhagirathi, Alaknanda, Yamuna, Devprayag & Namami Gange)', 'https://www.youtube.com/watch?v=3u32tJcC0LQ&t=1450s&end=3650s', true, 1),

-- Topic 3: 01:00:50 to 01:36:40 (3650s to 5800s)
('65d29b56-0029-3117-0000-000000000003', '65d29b56-0029-2117-0000-000000000003', 'VIDEO', 'The Brahmaputra System & The Peninsular River Systems (Narmada, Tapi, Godavari, Krishna, Kaveri) (Tsangpo Tibet, Dihang Gorge, Majuli Island, Rift Valley Narmada/Tapi, East-Flowing Deltaic Peninsular Rivers)', 'https://www.youtube.com/watch?v=3u32tJcC0LQ&t=3650s&end=5800s', true, 1),

-- Topic 4: 01:36:40 to 02:04:55 (5800s to 7495s)
('65d29b56-0029-3117-0000-000000000004', '65d29b56-0029-2117-0000-000000000004', 'VIDEO', 'Comparison of Himalayan vs Peninsular Rivers, Usability of Water & River Pollution Control (Perennial Glacial vs Seasonal Rainfed, Navigability, National River Interlinking Project & Sewage Treatment Solutions)', 'https://www.youtube.com/watch?v=3u32tJcC0LQ&t=5800s&end=7495s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
