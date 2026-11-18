-- V169__seed_class11_chemistry_ch11_gaseous_state_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 11 (The Gaseous State: States of Matter)
-- Video: Physics Wallah - Alakh Pandey (States Of Matter - Gaseous State 01 | Introduction | Basic Gas Laws | H4h4vsJ9it0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4139s / 1h 08m 59s)

-- 1. Remove old placeholder topics & content items for Chapter 11 (The Gaseous State)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000011';

-- 2. Insert 4 Verified Master Topics for Chapter 11 (The Gaseous State)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2111-0000-000000000001', '65d29b56-0430-1100-0000-000000000011', 'Introduction to States of Matter & Measurable Properties of Gases (Mass, Volume, Temperature, Pressure, Density)', 1, true),
('65d29b56-0430-2111-0000-000000000002', '65d29b56-0430-1100-0000-000000000011', 'Boyle''s Law: Pressure-Volume Relationship, Isothermal Curves (P-V, P-1/V), Applications & Numericals', 2, true),
('65d29b56-0430-2111-0000-000000000003', '65d29b56-0430-1100-0000-000000000011', 'Charles'' Law (Isobars & Absolute Zero) and Gay-Lussac''s Pressure-Temperature Law (Isochores)', 3, true),
('65d29b56-0430-2111-0000-000000000004', '65d29b56-0430-1100-0000-000000000011', 'Avogadro''s Law, Combined Gas Law (Equation of State) & Derivation of Ideal Gas Equation (PV = nRT)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3111-0000-000000000001', '65d29b56-0430-2111-0000-000000000001', 'VIDEO', 'Introduction to States of Matter & Measurable Properties of Gases (Mass, Volume, Temperature, Pressure, Density)', 'https://www.youtube.com/watch?v=H4h4vsJ9it0&end=1530s', true, 1),
('65d29b56-0430-3111-0000-000000000002', '65d29b56-0430-2111-0000-000000000002', 'VIDEO', 'Boyle''s Law: Pressure-Volume Relationship, Isothermal Curves (P-V, P-1/V), Applications & Numericals', 'https://www.youtube.com/watch?v=H4h4vsJ9it0&t=1530s&end=2700s', true, 1),
('65d29b56-0430-3111-0000-000000000003', '65d29b56-0430-2111-0000-000000000003', 'VIDEO', 'Charles'' Law (Isobars & Absolute Zero) and Gay-Lussac''s Pressure-Temperature Law (Isochores)', 'https://www.youtube.com/watch?v=H4h4vsJ9it0&t=2700s&end=3620s', true, 1),
('65d29b56-0430-3111-0000-000000000004', '65d29b56-0430-2111-0000-000000000004', 'VIDEO', 'Avogadro''s Law, Combined Gas Law (Equation of State) & Derivation of Ideal Gas Equation (PV = nRT)', 'https://www.youtube.com/watch?v=H4h4vsJ9it0&t=3620s&end=4139s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
