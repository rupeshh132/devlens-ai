-- V304__seed_class12_bio_ch12_ecosystem_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 12 (Ecosystem)
-- Video: Competition Wallah / NCERT Line by Line (Vipin Sir) (Ecosystem | pNHlqqpkUMA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5596s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Ecosystem)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000012';

-- 2. Insert 5 Verified Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2212-0000-000000000001', '65d29b56-0440-1200-0000-000000000012', 'Ecosystem Concept, Structural Components, Species Composition & Vertical Stratification', 1, true),
('65d29b56-0440-2212-0000-000000000002', '65d29b56-0440-1200-0000-000000000012', 'Ecosystem Productivity: Gross Primary Productivity (GPP), Net Primary Productivity (NPP) & Factors', 2, true),
('65d29b56-0440-2212-0000-000000000003', '65d29b56-0440-1200-0000-000000000012', 'Decomposition Process: Steps (Fragmentation, Leaching, Catabolism, Humification) & Soil Regulators', 3, true),
('65d29b56-0440-2212-0000-000000000004', '65d29b56-0440-1200-0000-000000000012', 'Energy Flow Dynamics, Lindeman''s 10% Law, Food Chains (GFC vs DFC) & Complex Food Webs', 4, true),
('65d29b56-0440-2212-0000-000000000005', '65d29b56-0440-1200-0000-000000000012', 'Ecological Pyramids of Number, Biomass & Energy (Upright vs Inverted) & Ecological Succession', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3212-0000-000000000001', '65d29b56-0440-2212-0000-000000000001', 'VIDEO', 'Ecosystem Concept, Structural Components, Species Composition & Vertical Stratification', 'https://www.youtube.com/watch?v=pNHlqqpkUMA&end=1620s', true, 1),
('65d29b56-0440-3212-0000-000000000002', '65d29b56-0440-2212-0000-000000000002', 'VIDEO', 'Ecosystem Productivity: Gross Primary Productivity (GPP), Net Primary Productivity (NPP) & Factors', 'https://www.youtube.com/watch?v=pNHlqqpkUMA&t=1620s&end=2594s', true, 1),
('65d29b56-0440-3212-0000-000000000003', '65d29b56-0440-2212-0000-000000000003', 'VIDEO', 'Decomposition Process: Steps (Fragmentation, Leaching, Catabolism, Humification) & Soil Regulators', 'https://www.youtube.com/watch?v=pNHlqqpkUMA&t=2594s&end=3510s', true, 1),
('65d29b56-0440-3212-0000-000000000004', '65d29b56-0440-2212-0000-000000000004', 'VIDEO', 'Energy Flow Dynamics, Lindeman''s 10% Law, Food Chains (GFC vs DFC) & Complex Food Webs', 'https://www.youtube.com/watch?v=pNHlqqpkUMA&t=3510s&end=5173s', true, 1),
('65d29b56-0440-3212-0000-000000000005', '65d29b56-0440-2212-0000-000000000005', 'VIDEO', 'Ecological Pyramids of Number, Biomass & Energy (Upright vs Inverted) & Ecological Succession', 'https://www.youtube.com/watch?v=pNHlqqpkUMA&t=5173s&end=5596s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
