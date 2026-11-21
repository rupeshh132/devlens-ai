-- V241__seed_class11_geo_ch02_origin_evolution_earth_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 2: The Origin and Evolution of the Earth
-- Masterclass Video: Next Toppers - 11th Humanities (9qWxrARcu6w)
-- 100% Zero-Gap Continuous Timeline: 0s to 4930s (01:22:10, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000002';

-- 2. Insert 4 Verified Master Subtopics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2102-0000-000000000001', '65d29b56-0029-1100-0000-000000000002', 'Early Theories of Earth Origin: Nebular Hypothesis & Planetesimal Concepts', 1, true),
('65d29b56-0029-2102-0000-000000000002', '65d29b56-0029-1100-0000-000000000002', 'Modern Theories: Big Bang Theory & Formation of Stars and Planets', 2, true),
('65d29b56-0029-2102-0000-000000000003', '65d29b56-0029-1100-0000-000000000002', 'Evolution of the Earth: Development of Lithosphere, Atmosphere and Hydrosphere', 3, true),
('65d29b56-0029-2102-0000-000000000004', '65d29b56-0029-1100-0000-000000000002', 'Origin and Evolution of Life on Earth & Geological Time Scale Overview', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 28:10 (0s to 1690s)
('65d29b56-0029-3102-0000-000000000001', '65d29b56-0029-2102-0000-000000000001', 'VIDEO', 'Early Theories of Earth Origin: Nebular Hypothesis & Planetesimal Concepts (Kant & Laplace Nebular Model, Chamberlain-Moulton Binary Concept, Drawbacks of Early Hypotheses)', 'https://www.youtube.com/watch?v=9qWxrARcu6w&t=0s&end=1690s', true, 1),

-- Topic 2: 28:10 to 48:00 (1690s to 2880s)
('65d29b56-0029-3102-0000-000000000002', '65d29b56-0029-2102-0000-000000000002', 'VIDEO', 'Modern Theories: Big Bang Theory & Formation of Stars and Planets (Expanding Universe, Edwin Hubble Evidence, Singularity, Nebula Condensation, Planetesimals Accretion)', 'https://www.youtube.com/watch?v=9qWxrARcu6w&t=1690s&end=2880s', true, 1),

-- Topic 3: 48:00 to 01:12:30 (2880s to 4350s)
('65d29b56-0029-3102-0000-000000000003', '65d29b56-0029-2102-0000-000000000003', 'VIDEO', 'Evolution of the Earth: Development of Lithosphere, Atmosphere and Hydrosphere (Density Differentiation, Degassing, Primitive Atmosphere Loss, Volcanic Condensation & Oceans Formation)', 'https://www.youtube.com/watch?v=9qWxrARcu6w&t=2880s&end=4350s', true, 1),

-- Topic 4: 01:12:30 to 01:22:10 (4350s to 4930s)
('65d29b56-0029-3102-0000-000000000004', '65d29b56-0029-2102-0000-000000000004', 'VIDEO', 'Origin and Evolution of Life on Earth & Geological Time Scale Overview (Chemical Reactions, Pre-Biotic Synthesis, Photosynthesis, Oxygen Saturation in Oceans & Fossil Record)', 'https://www.youtube.com/watch?v=9qWxrARcu6w&t=4350s&end=4930s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
