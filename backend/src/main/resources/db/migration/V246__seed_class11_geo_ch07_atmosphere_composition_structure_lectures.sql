-- V246__seed_class11_geo_ch07_atmosphere_composition_structure_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 7: Composition and Structure of Atmosphere
-- Masterclass Video: Next Toppers - 11th Humanities (G2FhHt58DtU)
-- 100% Zero-Gap Continuous Timeline: 0s to 1638s (27m 18s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000007';

-- 2. Insert 4 Verified Master Subtopics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2107-0000-000000000001', '65d29b56-0029-1100-0000-000000000007', 'Introduction to Atmosphere & Composition: Permanent and Variable Gases', 1, true),
('65d29b56-0029-2107-0000-000000000002', '65d29b56-0029-1100-0000-000000000007', 'Water Vapour and Dust Particles in Atmosphere & Meteorological Importance', 2, true),
('65d29b56-0029-2107-0000-000000000003', '65d29b56-0029-1100-0000-000000000007', 'Structure of the Atmosphere: Troposphere, Stratosphere, Mesosphere, Thermosphere & Exosphere', 3, true),
('65d29b56-0029-2107-0000-000000000004', '65d29b56-0029-1100-0000-000000000007', 'Elements of Weather and Climate: Temperature, Pressure, Wind, Moisture & Precipitation', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 07:30 (0s to 450s)
('65d29b56-0029-3107-0000-000000000001', '65d29b56-0029-2107-0000-000000000001', 'VIDEO', 'Introduction to Atmosphere & Composition: Permanent and Variable Gases (Gaseous Blanket, Gravitational Retainment, Nitrogen 78%, Oxygen 21%, Argon, Carbon Dioxide & Greenhouse Insulation)', 'https://www.youtube.com/watch?v=G2FhHt58DtU&t=0s&end=450s', true, 1),

-- Topic 2: 07:30 to 15:00 (450s to 900s)
('65d29b56-0029-3107-0000-000000000002', '65d29b56-0029-2107-0000-000000000002', 'VIDEO', 'Water Vapour and Dust Particles in Atmosphere & Meteorological Importance (Variable Gas 0-4%, Insolation Absorption, Hygroscopic Condensation Nuclei, Sea Salts, Ash & Optical Colors)', 'https://www.youtube.com/watch?v=G2FhHt58DtU&t=450s&end=900s', true, 1),

-- Topic 3: 15:00 to 22:30 (900s to 1350s)
('65d29b56-0029-3107-0000-000000000003', '65d29b56-0029-2107-0000-000000000003', 'VIDEO', 'Structure of the Atmosphere: Troposphere, Stratosphere, Mesosphere, Thermosphere & Exosphere (Lapse Rate, Tropopause, Ozone Layer, Ionosphere Radio Reflection & Meteorite Burning)', 'https://www.youtube.com/watch?v=G2FhHt58DtU&t=900s&end=1350s', true, 1),

-- Topic 4: 22:30 to 27:18 (1350s to 1638s)
('65d29b56-0029-3107-0000-000000000004', '65d29b56-0029-2107-0000-000000000004', 'VIDEO', 'Elements of Weather and Climate: Temperature, Pressure, Wind, Moisture & Precipitation (Weather State vs Climate Long-Term Average, Atmospheric Dynamics & Environmental Significance)', 'https://www.youtube.com/watch?v=G2FhHt58DtU&t=1350s&end=1638s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
