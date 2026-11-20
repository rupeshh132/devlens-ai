-- V205__seed_class11_physics_ch08_mechanical_properties_solids_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 8: Mechanical Properties of Solids
-- Masterclass Video: LearnoHub - Roshni Mukherjee (p4zl6OBD80o)
-- 100% Zero-Gap Continuous Timeline: 0s to 5080s (01:24:40, Outro promos & cards trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 8
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000008';

-- 2. Insert 4 Verified Master Subtopics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2108-0000-000000000001', '65d29b56-0420-1100-0000-000000000008', 'Elasticity, Stress & Strain, and Hooke''s Law', 1, true),
('65d29b56-0420-2108-0000-000000000002', '65d29b56-0420-1100-0000-000000000008', 'Stress-Strain Curve & Young''s Modulus of Elasticity', 2, true),
('65d29b56-0420-2108-0000-000000000003', '65d29b56-0420-1100-0000-000000000008', 'Shear Modulus, Bulk Modulus, Compressibility & Poisson''s Ratio', 3, true),
('65d29b56-0420-2108-0000-000000000004', '65d29b56-0420-1100-0000-000000000008', 'Elastic Potential Energy of Stretched Wire & Applications of Elasticity', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 20:22 (0s to 1222s)
('65d29b56-0420-3108-0000-000000000001', '65d29b56-0420-2108-0000-000000000001', 'VIDEO', 'Elasticity, Stress & Strain, and Hooke''s Law (Concept of Deforming Force, Elasticity vs Plasticity, Tensile/Compressive/Shearing Stress, Longitudinal/Volumetric/Shear Strain & Hooke''s Law)', 'https://www.youtube.com/watch?v=p4zl6OBD80o&t=0s&end=1222s', true, 1),

-- Topic 2: 20:22 to 44:17 (1222s to 2657s)
('65d29b56-0420-3108-0000-000000000002', '65d29b56-0420-2108-0000-000000000002', 'VIDEO', 'Stress-Strain Curve & Young''s Modulus of Elasticity (Proportional Limit, Yield Point, Ultimate Tensile Strength, Breaking Point, Young''s Modulus Derivation & Solved Board Numericals)', 'https://www.youtube.com/watch?v=p4zl6OBD80o&t=1222s&end=2657s', true, 1),

-- Topic 3: 44:17 to 1:06:30 (2657s to 3990s)
('65d29b56-0420-3108-0000-000000000003', '65d29b56-0420-2108-0000-000000000003', 'VIDEO', 'Shear Modulus, Bulk Modulus, Compressibility & Poisson''s Ratio (Modulus of Rigidity, Bulk Modulus of Solids/Liquids/Gases, Compressibility & Lateral Strain to Longitudinal Strain Ratio)', 'https://www.youtube.com/watch?v=p4zl6OBD80o&t=2657s&end=3990s', true, 1),

-- Topic 4: 1:06:30 to 1:24:40 (3990s to 5080s)
('65d29b56-0420-3108-0000-000000000004', '65d29b56-0420-2108-0000-000000000004', 'VIDEO', 'Elastic Potential Energy of Stretched Wire & Applications of Elasticity (Work Done in Stretching a Wire U = 1/2*Stress*Strain*Volume, Energy Density, Buckling of Beams, Crane Metallic Ropes & Pillars)', 'https://www.youtube.com/watch?v=p4zl6OBD80o&t=3990s&end=5080s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
