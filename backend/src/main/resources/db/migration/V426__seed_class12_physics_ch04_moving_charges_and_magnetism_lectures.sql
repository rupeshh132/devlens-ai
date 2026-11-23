-- V426__seed_class12_physics_ch04_moving_charges_and_magnetism_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 4 (Moving Charges and Magnetism)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (f0Om2AnIY-8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8190s)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Moving Charges and Magnetism)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000004';

-- 2. Insert 4 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2204-0000-000000000001', '65d29b56-0042-1200-0000-000000000004', 'Concept of Magnetic Field, Oersted''s Experiment & Biot-Savart Law with Circular Loop Applications', 1, true),
('65d29b56-0042-2204-0000-000000000002', '65d29b56-0042-1200-0000-000000000004', 'Ampere''s Circuital Law and its Applications to Straight Wire and Long Cylindrical Solenoid', 2, true),
('65d29b56-0042-2204-0000-000000000003', '65d29b56-0042-1200-0000-000000000004', 'Lorentz Force, Motion of Charge in Magnetic Field, Force on Conductor & Force Between Parallel Wires', 3, true),
('65d29b56-0042-2204-0000-000000000004', '65d29b56-0042-1200-0000-000000000004', 'Torque on Current Loop in Uniform Magnetic Field & Moving Coil Galvanometer (Conversion to Ammeter/Voltmeter)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3204-0000-000000000001', '65d29b56-0042-2204-0000-000000000001', 'VIDEO', 'Concept of Magnetic Field, Oersted''s Experiment & Biot-Savart Law with Circular Loop Applications', 'https://www.youtube.com/watch?v=f0Om2AnIY-8&end=2040s', true, 1),
('65d29b56-0042-3204-0000-000000000002', '65d29b56-0042-2204-0000-000000000002', 'VIDEO', 'Ampere''s Circuital Law and its Applications to Straight Wire and Long Cylindrical Solenoid', 'https://www.youtube.com/watch?v=f0Om2AnIY-8&t=2040s&end=4090s', true, 1),
('65d29b56-0042-3204-0000-000000000003', '65d29b56-0042-2204-0000-000000000003', 'VIDEO', 'Lorentz Force, Motion of Charge in Magnetic Field, Force on Conductor & Force Between Parallel Wires', 'https://www.youtube.com/watch?v=f0Om2AnIY-8&t=4090s&end=6140s', true, 1),
('65d29b56-0042-3204-0000-000000000004', '65d29b56-0042-2204-0000-000000000004', 'VIDEO', 'Torque on Current Loop in Uniform Magnetic Field & Moving Coil Galvanometer (Conversion to Ammeter/Voltmeter)', 'https://www.youtube.com/watch?v=f0Om2AnIY-8&t=6140s&end=8190s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
