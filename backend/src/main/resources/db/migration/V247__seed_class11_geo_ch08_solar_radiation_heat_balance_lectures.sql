-- V247__seed_class11_geo_ch08_solar_radiation_heat_balance_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 8: Solar Radiation, Heat Balance and Temperature
-- Masterclass Video: Next Toppers - 11th Humanities (mvEUD0vvDII)
-- 100% Zero-Gap Continuous Timeline: 0s to 3870s (01:04:30, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 8
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000008';

-- 2. Insert 4 Verified Master Subtopics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2108-0000-000000000001', '65d29b56-0029-1100-0000-000000000008', 'Solar Radiation: Solar Constant, Insolation Variability & Atmospheric Heating/Cooling Processes', 1, true),
('65d29b56-0029-2108-0000-000000000002', '65d29b56-0029-1100-0000-000000000008', 'Terrestrial Radiation & Heat Budget of the Earth (Albedo, Greenhouse Effect)', 2, true),
('65d29b56-0029-2108-0000-000000000003', '65d29b56-0029-1100-0000-000000000008', 'Temperature: Factors Controlling Temperature & Horizontal/Isotherm Distribution', 3, true),
('65d29b56-0029-2108-0000-000000000004', '65d29b56-0029-1100-0000-000000000008', 'Vertical Distribution of Temperature, Inversion of Temperature & Practice Questions', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 16:20 (0s to 980s)
('65d29b56-0029-3108-0000-000000000001', '65d29b56-0029-2108-0000-000000000001', 'VIDEO', 'Solar Radiation: Solar Constant, Insolation Variability & Atmospheric Heating/Cooling Processes (Short-wave Radiation, Angle of Sun Rays, Day Length, Atmospheric Transparency, Conduction, Convection & Advection)', 'https://www.youtube.com/watch?v=mvEUD0vvDII&t=0s&end=980s', true, 1),

-- Topic 2: 16:20 to 33:00 (980s to 1980s)
('65d29b56-0029-3108-0000-000000000002', '65d29b56-0029-2108-0000-000000000002', 'VIDEO', 'Terrestrial Radiation & Heat Budget of the Earth (Albedo, Greenhouse Effect) (Long-wave Terrestrial Emission, 35 Units Planetary Albedo, Atmospheric Heat Absorption 14 Units, Radiative Equilibrium & Net Heat Budget)', 'https://www.youtube.com/watch?v=mvEUD0vvDII&t=980s&end=1980s', true, 1),

-- Topic 3: 33:00 to 49:10 (1980s to 2950s)
('65d29b56-0029-3108-0000-000000000003', '65d29b56-0029-2108-0000-000000000003', 'VIDEO', 'Temperature: Factors Controlling Temperature & Horizontal/Isotherm Distribution (Latitude, Altitude, Distance from Sea, Air-mass, Ocean Currents, Isotherms Bending over Continents & Ocean Basins in Jan/July)', 'https://www.youtube.com/watch?v=mvEUD0vvDII&t=1980s&end=2950s', true, 1),

-- Topic 4: 49:10 to 01:04:30 (2950s to 3870s)
('65d29b56-0029-3108-0000-000000000004', '65d29b56-0029-2108-0000-000000000004', 'VIDEO', 'Vertical Distribution of Temperature, Inversion of Temperature & Practice Questions (Normal Lapse Rate 6.5°C/km, Temperature Inversion on Long Winter Nights, Valley Inversion Frost Protection & Board Questions)', 'https://www.youtube.com/watch?v=mvEUD0vvDII&t=2950s&end=3870s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
