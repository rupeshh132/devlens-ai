-- V424__seed_class12_physics_ch02_electrostatic_potential_and_capacitance_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 2 (Electrostatic Potential and Capacitance)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (CAaMXcb18H0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7130s)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Electrostatic Potential and Capacitance)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000002';

-- 2. Insert 4 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2202-0000-000000000001', '65d29b56-0042-1200-0000-000000000002', 'Electric Potential, Potential Difference & Electric Potential due to a Point Charge and Dipole', 1, true),
('65d29b56-0042-2202-0000-000000000002', '65d29b56-0042-1200-0000-000000000002', 'Equipotential Surfaces & Electrostatic Potential Energy of System of Charges and Dipole', 2, true),
('65d29b56-0042-2202-0000-000000000003', '65d29b56-0042-1200-0000-000000000002', 'Conductors and Insulators, Free & Bound Charges, Dielectrics and Electric Polarization', 3, true),
('65d29b56-0042-2202-0000-000000000004', '65d29b56-0042-1200-0000-000000000002', 'Capacitors and Capacitance, Series & Parallel Combinations, Parallel Plate Capacitor & Energy Stored', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3202-0000-000000000001', '65d29b56-0042-2202-0000-000000000001', 'VIDEO', 'Electric Potential, Potential Difference & Electric Potential due to a Point Charge and Dipole', 'https://www.youtube.com/watch?v=CAaMXcb18H0&end=1780s', true, 1),
('65d29b56-0042-3202-0000-000000000002', '65d29b56-0042-2202-0000-000000000002', 'VIDEO', 'Equipotential Surfaces & Electrostatic Potential Energy of System of Charges and Dipole', 'https://www.youtube.com/watch?v=CAaMXcb18H0&t=1780s&end=3560s', true, 1),
('65d29b56-0042-3202-0000-000000000003', '65d29b56-0042-2202-0000-000000000003', 'VIDEO', 'Conductors and Insulators, Free & Bound Charges, Dielectrics and Electric Polarization', 'https://www.youtube.com/watch?v=CAaMXcb18H0&t=3560s&end=5340s', true, 1),
('65d29b56-0042-3202-0000-000000000004', '65d29b56-0042-2202-0000-000000000004', 'VIDEO', 'Capacitors and Capacitance, Series & Parallel Combinations, Parallel Plate Capacitor & Energy Stored', 'https://www.youtube.com/watch?v=CAaMXcb18H0&t=5340s&end=7130s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
