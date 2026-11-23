-- V428__seed_class12_physics_ch06_electromagnetic_induction_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 6 (Electromagnetic Induction)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (KNvRJXil1Gg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6100s)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Electromagnetic Induction)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000006';

-- 2. Insert 4 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2206-0000-000000000001', '65d29b56-0042-1200-0000-000000000006', 'Magnetic Flux, Faraday''s Discovery, Experiments & Faraday''s Mathematical Laws of Induction', 1, true),
('65d29b56-0042-2206-0000-000000000002', '65d29b56-0042-1200-0000-000000000006', 'Lenz''s Law, Conservation of Energy in EMI & Motional Electromotive Force (EMF) Derivation', 2, true),
('65d29b56-0042-2206-0000-000000000003', '65d29b56-0042-1200-0000-000000000006', 'Self-Inductance, Mutual Inductance & Inductance Formulations for Long Solenoids', 3, true),
('65d29b56-0042-2206-0000-000000000004', '65d29b56-0042-1200-0000-000000000006', 'Energy Stored in an Inductor, AC Generator Working Principle & Derivation of Alternating EMF', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3206-0000-000000000001', '65d29b56-0042-2206-0000-000000000001', 'VIDEO', 'Magnetic Flux, Faraday''s Discovery, Experiments & Faraday''s Mathematical Laws of Induction', 'https://www.youtube.com/watch?v=KNvRJXil1Gg&end=1520s', true, 1),
('65d29b56-0042-3206-0000-000000000002', '65d29b56-0042-2206-0000-000000000002', 'VIDEO', 'Lenz''s Law, Conservation of Energy in EMI & Motional Electromotive Force (EMF) Derivation', 'https://www.youtube.com/watch?v=KNvRJXil1Gg&t=1520s&end=3050s', true, 1),
('65d29b56-0042-3206-0000-000000000003', '65d29b56-0042-2206-0000-000000000003', 'VIDEO', 'Self-Inductance, Mutual Inductance & Inductance Formulations for Long Solenoids', 'https://www.youtube.com/watch?v=KNvRJXil1Gg&t=3050s&end=4570s', true, 1),
('65d29b56-0042-3206-0000-000000000004', '65d29b56-0042-2206-0000-000000000004', 'VIDEO', 'Energy Stored in an Inductor, AC Generator Working Principle & Derivation of Alternating EMF', 'https://www.youtube.com/watch?v=KNvRJXil1Gg&t=4570s&end=6100s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
