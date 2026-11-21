-- V250__seed_class11_geo_ch11_world_climate_change_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 11: World Climate and Climate Change
-- Masterclass Video: Next Toppers - 11th Humanities (3ggsq19Hmkw)
-- 100% Zero-Gap Continuous Timeline: 0s to 6020s (01:40:20, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 11
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000011';

-- 2. Insert 4 Verified Master Subtopics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2111-0000-000000000001', '65d29b56-0029-1100-0000-000000000011', 'Koeppen Scheme of Climate Classification: Major Climate Groups and Types', 1, true),
('65d29b56-0029-2111-0000-000000000002', '65d29b56-0029-1100-0000-000000000011', 'Group A (Tropical Humid) and Group B (Dry Climates): Characteristics & Global Extent', 2, true),
('65d29b56-0029-2111-0000-000000000003', '65d29b56-0029-1100-0000-000000000011', 'Group C (Warm Temperate), Group D (Cold Snow Forest), Group E (Polar) & Highland Climates', 3, true),
('65d29b56-0029-2111-0000-000000000004', '65d29b56-0029-1100-0000-000000000011', 'Climate Change: Causes, Greenhouse Gases, Global Warming & Mitigation Efforts', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 25:00 (0s to 1500s)
('65d29b56-0029-3111-0000-000000000001', '65d29b56-0029-2111-0000-000000000001', 'VIDEO', 'Koeppen Scheme of Climate Classification: Major Climate Groups and Types (Empirical Classification, Monthly Mean Temperature & Precipitation Values, Vegetation Association, Letter Symbols A, B, C, D, E, H)', 'https://www.youtube.com/watch?v=3ggsq19Hmkw&t=0s&end=1500s', true, 1),

-- Topic 2: 25:00 to 55:00 (1500s to 3300s)
('65d29b56-0029-3111-0000-000000000002', '65d29b56-0029-2111-0000-000000000002', 'VIDEO', 'Group A (Tropical Humid) and Group B (Dry Climates): Characteristics & Global Extent (Af Tropical Wet Rainforest, Am Monsoon, Aw Savanna Wet & Dry, BWh Subtropical Desert, BSh Steppe Semi-Arid)', 'https://www.youtube.com/watch?v=3ggsq19Hmkw&t=1500s&end=3300s', true, 1),

-- Topic 3: 55:00 to 01:13:20 (3300s to 4400s)
('65d29b56-0029-3111-0000-000000000003', '65d29b56-0029-2111-0000-000000000003', 'VIDEO', 'Group C (Warm Temperate), Group D (Cold Snow Forest), Group E (Polar) & Highland Climates (Mediterranean Cs, Humid Subtropical Cfa, Marine West Coast Cfb, Taiga Df, Tundra ET, Ice Cap EF & Alpine H)', 'https://www.youtube.com/watch?v=3ggsq19Hmkw&t=3300s&end=4400s', true, 1),

-- Topic 4: 01:13:20 to 01:40:20 (4400s to 6020s)
('65d29b56-0029-3111-0000-000000000004', '65d29b56-0029-2111-0000-000000000004', 'VIDEO', 'Climate Change: Causes, Greenhouse Gases, Global Warming & Mitigation Efforts (Astronomical Milankovitch Cycles, Volcanic Aerosols, Anthropogenic CO2/Methane Emissions, Sea Level Rise & Kyoto/Paris Protocols)', 'https://www.youtube.com/watch?v=3ggsq19Hmkw&t=4400s&end=6020s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
