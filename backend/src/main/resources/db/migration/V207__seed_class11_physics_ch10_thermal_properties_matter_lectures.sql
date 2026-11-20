-- V207__seed_class11_physics_ch10_thermal_properties_matter_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 10: Thermal Properties of Matter
-- Masterclass Video: LearnoHub - Roshni Mukherjee (JVhYUndMXCE)
-- 100% Zero-Gap Continuous Timeline: 0s to 9600s (02:40:00, Outro promos & cards trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 10
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000010';

-- 2. Insert 4 Verified Master Subtopics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2110-0000-000000000001', '65d29b56-0420-1100-0000-000000000010', 'Heat, Temperature & Thermal Expansion (Solids, Liquids & Gases)', 1, true),
('65d29b56-0420-2110-0000-000000000002', '65d29b56-0420-1100-0000-000000000010', 'Specific Heat Capacity, Calorimetry & Latent Heat (Change of State)', 2, true),
('65d29b56-0420-2110-0000-000000000003', '65d29b56-0420-1100-0000-000000000010', 'Modes of Heat Transfer: Conduction, Convection & Radiation', 3, true),
('65d29b56-0420-2110-0000-000000000004', '65d29b56-0420-1100-0000-000000000010', 'Blackbody Radiation, Wien''s Displacement Law & Stefan-Boltzmann Law', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 47:38 (0s to 2858s)
('65d29b56-0420-3110-0000-000000000001', '65d29b56-0420-2110-0000-000000000001', 'VIDEO', 'Heat, Temperature & Thermal Expansion (Solids, Liquids & Gases) (Temperature Scales, Linear/Area/Volume Thermal Expansion, Relation between alpha, beta & gamma, Anomalous Expansion of Water & Thermal Stress)', 'https://www.youtube.com/watch?v=JVhYUndMXCE&t=0s&end=2858s', true, 1),

-- Topic 2: 47:38 to 1:26:08 (2858s to 5168s)
('65d29b56-0420-3110-0000-000000000002', '65d29b56-0420-2110-0000-000000000002', 'VIDEO', 'Specific Heat Capacity, Calorimetry & Latent Heat (Change of State) (Molar Specific Heat, Principle of Calorimetry, Phase Changes, Melting & Boiling Points, Triple Point, Latent Heat of Fusion & Vaporization)', 'https://www.youtube.com/watch?v=JVhYUndMXCE&t=2858s&end=5168s', true, 1),

-- Topic 3: 1:26:08 to 2:08:15 (5168s to 7695s)
('65d29b56-0420-3110-0000-000000000003', '65d29b56-0420-2110-0000-000000000003', 'VIDEO', 'Modes of Heat Transfer: Conduction, Convection & Radiation (Thermal Conductivity, Rate of Heat Flow dQ/dt = -KA*dT/dx, Natural & Forced Convection, Radiant Energy & Applications)', 'https://www.youtube.com/watch?v=JVhYUndMXCE&t=5168s&end=7695s', true, 1),

-- Topic 4: 2:08:15 to 2:40:00 (7695s to 9600s)
('65d29b56-0420-3110-0000-000000000004', '65d29b56-0420-2110-0000-000000000004', 'VIDEO', 'Blackbody Radiation, Wien''s Displacement Law & Stefan-Boltzmann Law (Perfect Black Body Concept, Absorptive & Emissive Power, Wien''s Law lambda_max*T = b, Stefan-Boltzmann Law E = sigma*T^4 & Newton''s Law of Cooling)', 'https://www.youtube.com/watch?v=JVhYUndMXCE&t=7695s&end=9600s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
