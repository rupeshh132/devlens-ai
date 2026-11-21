-- V253__seed_class11_geo_ch14_biodiversity_conservation_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 14: Biodiversity and Conservation
-- Masterclass Video: Next Toppers - 11th Humanities (ucvtpyzdmfU)
-- 100% Zero-Gap Continuous Timeline: 0s to 3165s (52m 45s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 14
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000014';

-- 2. Insert 4 Verified Master Subtopics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2114-0000-000000000001', '65d29b56-0029-1100-0000-000000000014', 'Concept of Biodiversity: Genetic, Species and Ecosystem Diversity', 1, true),
('65d29b56-0029-2114-0000-000000000002', '65d29b56-0029-1100-0000-000000000014', 'Role of Biodiversity: Ecological, Economic and Scientific Roles', 2, true),
('65d29b56-0029-2114-0000-000000000003', '65d29b56-0029-1100-0000-000000000014', 'Loss of Biodiversity: Causes of Depletion (Habitat Loss, Poaching, Invasives)', 3, true),
('65d29b56-0029-2114-0000-000000000004', '65d29b56-0029-1100-0000-000000000014', 'Conservation of Biodiversity: In-Situ vs Ex-Situ, Biosphere Reserves & Hotspots', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 13:20 (0s to 800s)
('65d29b56-0029-3114-0000-000000000001', '65d29b56-0029-2114-0000-000000000001', 'VIDEO', 'Concept of Biodiversity: Genetic, Species and Ecosystem Diversity (Biological Diversity Meaning, Tropical Richness vs Polar Scarcity, Genetic Variations & Ecological Niche)', 'https://www.youtube.com/watch?v=ucvtpyzdmfU&t=0s&end=800s', true, 1),

-- Topic 2: 13:20 to 26:40 (800s to 1600s)
('65d29b56-0029-3114-0000-000000000002', '65d29b56-0029-2114-0000-000000000002', 'VIDEO', 'Role of Biodiversity: Ecological, Economic and Scientific Roles (Ecosystem Stability, Nutrient Cycling, Soil Formation, Agro-Commodities, Medicinal Herbs, Tourism & Scientific Discovery)', 'https://www.youtube.com/watch?v=ucvtpyzdmfU&t=800s&end=1600s', true, 1),

-- Topic 3: 26:40 to 40:00 (1600s to 2400s)
('65d29b56-0029-3114-0000-000000000003', '65d29b56-0029-2114-0000-000000000003', 'VIDEO', 'Loss of Biodiversity: Causes of Depletion (Habitat Loss, Poaching, Invasives) (Tropical Deforestation, Over-Exploitation, IUCN Red List: Endangered, Vulnerable & Rare Species)', 'https://www.youtube.com/watch?v=ucvtpyzdmfU&t=1600s&end=2400s', true, 1),

-- Topic 4: 40:00 to 52:45 (2400s to 3165s)
('65d29b56-0029-3114-0000-000000000004', '65d29b56-0029-2114-0000-000000000004', 'VIDEO', 'Conservation of Biodiversity: In-Situ vs Ex-Situ, Biosphere Reserves & Hotspots (National Parks, Wildlife Sanctuaries, Botanical Gardens, Norman Myers Hotspots: Western Ghats, Indo-Burma, Himalayas)', 'https://www.youtube.com/watch?v=ucvtpyzdmfU&t=2400s&end=3165s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
