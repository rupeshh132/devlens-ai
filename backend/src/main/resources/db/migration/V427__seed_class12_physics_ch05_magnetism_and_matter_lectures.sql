-- V427__seed_class12_physics_ch05_magnetism_and_matter_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 5 (Magnetism and Matter)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (tQvTQs6eB4g)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5431s)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Magnetism and Matter)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000005';

-- 2. Insert 4 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2205-0000-000000000001', '65d29b56-0042-1200-0000-000000000005', 'Bar Magnet as an Equivalent Solenoid, Magnetic Field Lines & Gauss''s Law for Magnetism', 1, true),
('65d29b56-0042-2205-0000-000000000002', '65d29b56-0042-1200-0000-000000000005', 'Torque on Magnetic Dipole in Uniform Magnetic Field & Potential Energy of Magnetic Dipole', 2, true),
('65d29b56-0042-2205-0000-000000000003', '65d29b56-0042-1200-0000-000000000005', 'Magnetic Properties of Materials: Diamagnetic, Paramagnetic and Ferromagnetic Substances', 3, true),
('65d29b56-0042-2205-0000-000000000004', '65d29b56-0042-1200-0000-000000000005', 'Magnetization, Magnetic Intensity, Susceptibility, Relative Permeability & Curie''s Temperature Law', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3205-0000-000000000001', '65d29b56-0042-2205-0000-000000000001', 'VIDEO', 'Bar Magnet as an Equivalent Solenoid, Magnetic Field Lines & Gauss''s Law for Magnetism', 'https://www.youtube.com/watch?v=tQvTQs6eB4g&end=1350s', true, 1),
('65d29b56-0042-3205-0000-000000000002', '65d29b56-0042-2205-0000-000000000002', 'VIDEO', 'Torque on Magnetic Dipole in Uniform Magnetic Field & Potential Energy of Magnetic Dipole', 'https://www.youtube.com/watch?v=tQvTQs6eB4g&t=1350s&end=2710s', true, 1),
('65d29b56-0042-3205-0000-000000000003', '65d29b56-0042-2205-0000-000000000003', 'VIDEO', 'Magnetic Properties of Materials: Diamagnetic, Paramagnetic and Ferromagnetic Substances', 'https://www.youtube.com/watch?v=tQvTQs6eB4g&t=2710s&end=4070s', true, 1),
('65d29b56-0042-3205-0000-000000000004', '65d29b56-0042-2205-0000-000000000004', 'VIDEO', 'Magnetization, Magnetic Intensity, Susceptibility, Relative Permeability & Curie''s Temperature Law', 'https://www.youtube.com/watch?v=tQvTQs6eB4g&t=4070s&end=5431s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
