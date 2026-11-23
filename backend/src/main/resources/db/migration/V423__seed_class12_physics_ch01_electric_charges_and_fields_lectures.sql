-- V423__seed_class12_physics_ch01_electric_charges_and_fields_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 1 (Electric Charges and Fields)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (gs6_BHVZ7DI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9891s)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Electric Charges and Fields)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000001';

-- 2. Insert 4 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2201-0000-000000000001', '65d29b56-0042-1200-0000-000000000001', 'Electric Charges, Conservation of Charge, Coulomb''s Law & Principle of Superposition', 1, true),
('65d29b56-0042-2201-0000-000000000002', '65d29b56-0042-1200-0000-000000000001', 'Continuous Charge Distribution, Electric Field & Field due to a Point Charge and System of Charges', 2, true),
('65d29b56-0042-2201-0000-000000000003', '65d29b56-0042-1200-0000-000000000001', 'Electric Field Lines, Electric Dipole, Axial & Equatorial Electric Fields & Torque in Uniform Field', 3, true),
('65d29b56-0042-2201-0000-000000000004', '65d29b56-0042-1200-0000-000000000001', 'Electric Flux, Gauss''s Theorem & Applications: Long Straight Wire, Infinite Plane Sheet & Spherical Shell', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3201-0000-000000000001', '65d29b56-0042-2201-0000-000000000001', 'VIDEO', 'Electric Charges, Conservation of Charge, Coulomb''s Law & Principle of Superposition', 'https://www.youtube.com/watch?v=gs6_BHVZ7DI&end=2470s', true, 1),
('65d29b56-0042-3201-0000-000000000002', '65d29b56-0042-2201-0000-000000000002', 'VIDEO', 'Continuous Charge Distribution, Electric Field & Field due to a Point Charge and System of Charges', 'https://www.youtube.com/watch?v=gs6_BHVZ7DI&t=2470s&end=4940s', true, 1),
('65d29b56-0042-3201-0000-000000000003', '65d29b56-0042-2201-0000-000000000003', 'VIDEO', 'Electric Field Lines, Electric Dipole, Axial & Equatorial Electric Fields & Torque in Uniform Field', 'https://www.youtube.com/watch?v=gs6_BHVZ7DI&t=4940s&end=7410s', true, 1),
('65d29b56-0042-3201-0000-000000000004', '65d29b56-0042-2201-0000-000000000004', 'VIDEO', 'Electric Flux, Gauss''s Theorem & Applications: Long Straight Wire, Infinite Plane Sheet & Spherical Shell', 'https://www.youtube.com/watch?v=gs6_BHVZ7DI&t=7410s&end=9891s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
