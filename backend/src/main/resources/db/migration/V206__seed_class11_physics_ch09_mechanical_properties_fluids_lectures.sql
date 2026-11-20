-- V206__seed_class11_physics_ch09_mechanical_properties_fluids_lectures.sql
-- Seeds verified 5 Continuous Master Subtopics for Class 11 Physics Chapter 9: Mechanical Properties of Fluids
-- Masterclass Video: Prashant Kirad Class 11 Science (R8gN-kDi5E8)
-- 100% Zero-Gap Continuous Timeline: 0s to 9950s (02:45:50, Outro promos trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 9
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000009';

-- 2. Insert 5 Verified Master Subtopics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2109-0000-000000000001', '65d29b56-0420-1100-0000-000000000009', 'Fluid Pressure, Variation of Pressure with Depth & Barometer Measurement', 1, true),
('65d29b56-0420-2109-0000-000000000002', '65d29b56-0420-1100-0000-000000000009', 'Pascal''s Law (Hydraulic Lift & Brakes) & Archimedes'' Principle', 2, true),
('65d29b56-0420-2109-0000-000000000003', '65d29b56-0420-1100-0000-000000000009', 'Fluid Dynamics: Continuity Equation, Bernoulli''s Theorem & Applications', 3, true),
('65d29b56-0420-2109-0000-000000000004', '65d29b56-0420-1100-0000-000000000009', 'Viscosity, Stokes'' Law & Terminal Velocity in Viscous Fluids', 4, true),
('65d29b56-0420-2109-0000-000000000005', '65d29b56-0420-1100-0000-000000000009', 'Surface Tension, Excess Pressure in Drops/Bubbles & Capillarity', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 45:48 (0s to 2748s)
('65d29b56-0420-3109-0000-000000000001', '65d29b56-0420-2109-0000-000000000001', 'VIDEO', 'Fluid Pressure, Variation of Pressure with Depth & Barometer Measurement (Concept of Thrust & Pressure, Fluid at Rest, P = P0 + rho*g*h, Hydrostatic Paradox, Mercury Barometer & Open-Tube Manometer)', 'https://www.youtube.com/watch?v=R8gN-kDi5E8&t=0s&end=2748s', true, 1),

-- Topic 2: 45:48 to 1:10:43 (2748s to 4243s)
('65d29b56-0420-3109-0000-000000000002', '65d29b56-0420-2109-0000-000000000002', 'VIDEO', 'Pascal''s Law (Hydraulic Lift & Brakes) & Archimedes'' Principle (Transmission of Fluid Pressure, Working Principle of Hydraulic Lift & Brakes, Buoyancy & Floatation)', 'https://www.youtube.com/watch?v=R8gN-kDi5E8&t=2748s&end=4243s', true, 1),

-- Topic 3: 1:10:43 to 1:42:49 (4243s to 6169s)
('65d29b56-0420-3109-0000-000000000003', '65d29b56-0420-2109-0000-000000000003', 'VIDEO', 'Fluid Dynamics: Continuity Equation, Bernoulli''s Theorem & Applications (Streamline vs Turbulent Flow, Critical Velocity, Continuity Equation A1v1 = A2v2, Bernoulli''s Energy Conservation, Torricelli''s Law & Aerodynamic Lift)', 'https://www.youtube.com/watch?v=R8gN-kDi5E8&t=4243s&end=6169s', true, 1),

-- Topic 4: 1:42:49 to 2:09:37 (6169s to 7777s)
('65d29b56-0420-3109-0000-000000000004', '65d29b56-0420-2109-0000-000000000004', 'VIDEO', 'Viscosity, Stokes'' Law & Terminal Velocity in Viscous Fluids (Coefficient of Viscosity, Newton''s Viscous Force Law, Stokes'' Law F = 6*pi*eta*r*v, Derivation of Terminal Velocity & Raindrop Motion)', 'https://www.youtube.com/watch?v=R8gN-kDi5E8&t=6169s&end=7777s', true, 1),

-- Topic 5: 2:09:37 to 2:45:50 (7777s to 9950s)
('65d29b56-0420-3109-0000-000000000005', '65d29b56-0420-2109-0000-000000000005', 'VIDEO', 'Surface Tension, Excess Pressure in Drops/Bubbles & Capillarity (Molecular Theory, Surface Energy vs Surface Tension, Angle of Contact, Excess Pressure across Liquid Drop (2T/R) & Soap Bubble (4T/R), Capillary Rise Ascent Formula)', 'https://www.youtube.com/watch?v=R8gN-kDi5E8&t=7777s&end=9950s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
