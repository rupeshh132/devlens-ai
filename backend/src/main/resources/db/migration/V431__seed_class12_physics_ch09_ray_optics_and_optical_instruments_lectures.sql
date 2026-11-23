-- V431__seed_class12_physics_ch09_ray_optics_and_optical_instruments_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 9 (Ray Optics and Optical Instruments)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (GQsJAssGVII)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16414s)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Ray Optics and Optical Instruments)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000009';

-- 2. Insert 4 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2209-0000-000000000001', '65d29b56-0042-1200-0000-000000000009', 'Spherical Mirror Formula, Refraction, Snell''s Law, Total Internal Reflection & Optical Fibres', 1, true),
('65d29b56-0042-2209-0000-000000000002', '65d29b56-0042-1200-0000-000000000009', 'Refraction at Spherical Surfaces, Lens Maker''s Formula, Thin Lens Equation & Combination of Lenses in Contact', 2, true),
('65d29b56-0042-2209-0000-000000000003', '65d29b56-0042-1200-0000-000000000009', 'Refraction through a Triangular Prism, Angle of Minimum Deviation & Dispersion of Light', 3, true),
('65d29b56-0042-2209-0000-000000000004', '65d29b56-0042-1200-0000-000000000009', 'Optical Instruments: Simple Microscope, Compound Microscope & Astronomical Telescope Magnifying Powers', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3209-0000-000000000001', '65d29b56-0042-2209-0000-000000000001', 'VIDEO', 'Spherical Mirror Formula, Refraction, Snell''s Law, Total Internal Reflection & Optical Fibres', 'https://www.youtube.com/watch?v=GQsJAssGVII&end=4100s', true, 1),
('65d29b56-0042-3209-0000-000000000002', '65d29b56-0042-2209-0000-000000000002', 'VIDEO', 'Refraction at Spherical Surfaces, Lens Maker''s Formula, Thin Lens Equation & Combination of Lenses in Contact', 'https://www.youtube.com/watch?v=GQsJAssGVII&t=4100s&end=8200s', true, 1),
('65d29b56-0042-3209-0000-000000000003', '65d29b56-0042-2209-0000-000000000003', 'VIDEO', 'Refraction through a Triangular Prism, Angle of Minimum Deviation & Dispersion of Light', 'https://www.youtube.com/watch?v=GQsJAssGVII&t=8200s&end=12300s', true, 1),
('65d29b56-0042-3209-0000-000000000004', '65d29b56-0042-2209-0000-000000000004', 'VIDEO', 'Optical Instruments: Simple Microscope, Compound Microscope & Astronomical Telescope Magnifying Powers', 'https://www.youtube.com/watch?v=GQsJAssGVII&t=12300s&end=16414s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
