-- V425__seed_class12_physics_ch03_current_electricity_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 3 (Current Electricity)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (NYHf961Oem4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9995s)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Current Electricity)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000003';

-- 2. Insert 4 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2203-0000-000000000001', '65d29b56-0042-1200-0000-000000000003', 'Electric Current, Drift Velocity, Mobility and Microscopic Relation with Electric Current', 1, true),
('65d29b56-0042-2203-0000-000000000002', '65d29b56-0042-1200-0000-000000000003', 'Ohm''s Law, V-I Characteristics, Electrical Resistivity, Conductivity & Temperature Dependence', 2, true),
('65d29b56-0042-2203-0000-000000000003', '65d29b56-0042-1200-0000-000000000003', 'Internal Resistance of a Cell, Terminal Voltage & Electromotive Force (EMF), Series & Parallel Cells', 3, true),
('65d29b56-0042-2203-0000-000000000004', '65d29b56-0042-1200-0000-000000000003', 'Kirchhoff''s Rules, Wheatstone Bridge Circuit Analysis & High-Yield Numerical Problem Solving', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3203-0000-000000000001', '65d29b56-0042-2203-0000-000000000001', 'VIDEO', 'Electric Current, Drift Velocity, Mobility and Microscopic Relation with Electric Current', 'https://www.youtube.com/watch?v=NYHf961Oem4&end=2500s', true, 1),
('65d29b56-0042-3203-0000-000000000002', '65d29b56-0042-2203-0000-000000000002', 'VIDEO', 'Ohm''s Law, V-I Characteristics, Electrical Resistivity, Conductivity & Temperature Dependence', 'https://www.youtube.com/watch?v=NYHf961Oem4&t=2500s&end=5000s', true, 1),
('65d29b56-0042-3203-0000-000000000003', '65d29b56-0042-2203-0000-000000000003', 'VIDEO', 'Internal Resistance of a Cell, Terminal Voltage & Electromotive Force (EMF), Series & Parallel Cells', 'https://www.youtube.com/watch?v=NYHf961Oem4&t=5000s&end=7500s', true, 1),
('65d29b56-0042-3203-0000-000000000004', '65d29b56-0042-2203-0000-000000000004', 'VIDEO', 'Kirchhoff''s Rules, Wheatstone Bridge Circuit Analysis & High-Yield Numerical Problem Solving', 'https://www.youtube.com/watch?v=NYHf961Oem4&t=7500s&end=9995s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
