-- V160__seed_class11_chemistry_ch03_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 3 (Classification of Elements and Periodicity in Properties)
-- Video: Next Toppers - 11th Science (Classification of Elements and Periodicity in Properties Class 11 | Tapur Ma'am | I55bzdbtY2k)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8257s / 2h 17m 37s)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Classification of Elements and Periodicity in Properties)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000003';

-- 2. Insert 5 Verified Master Topics for Chapter 3 (Classification of Elements and Periodicity in Properties)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2103-0000-000000000001', '65d29b56-0430-1100-0000-000000000003', 'Genesis of Periodic Classification (Dobereiner, Newlands, Mendeleev) & Modern Periodic Law', 1, true),
('65d29b56-0430-2103-0000-000000000002', '65d29b56-0430-1100-0000-000000000003', 'Modern Periodic Table Structure, Periods, Groups & IUPAC Nomenclature of Elements with Z > 100', 2, true),
('65d29b56-0430-2103-0000-000000000003', '65d29b56-0430-1100-0000-000000000003', 'Electronic Configurations and Divisions of Elements: s-, p-, d-, and f-Block Elements', 3, true),
('65d29b56-0430-2103-0000-000000000004', '65d29b56-0430-1100-0000-000000000003', 'Periodic Trends in Physical Properties: Atomic Radii, Ionic Radii, Shielding Effect & Lanthanide Contraction', 4, true),
('65d29b56-0430-2103-0000-000000000005', '65d29b56-0430-1100-0000-000000000003', 'Periodic Trends: Ionization Enthalpy, Electronegativity, Valency & Chemical Reactivity', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 8257s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3103-0000-000000000001', '65d29b56-0430-2103-0000-000000000001', 'VIDEO', 'Genesis of Periodic Classification (Dobereiner, Newlands, Mendeleev) & Modern Periodic Law', 'https://www.youtube.com/watch?v=I55bzdbtY2k&end=1453s', true, 1),
('65d29b56-0430-3103-0000-000000000002', '65d29b56-0430-2103-0000-000000000002', 'VIDEO', 'Modern Periodic Table Structure, Periods, Groups & IUPAC Nomenclature of Elements with Z > 100', 'https://www.youtube.com/watch?v=I55bzdbtY2k&t=1453s&end=2403s', true, 1),
('65d29b56-0430-3103-0000-000000000003', '65d29b56-0430-2103-0000-000000000003', 'VIDEO', 'Electronic Configurations and Divisions of Elements: s-, p-, d-, and f-Block Elements', 'https://www.youtube.com/watch?v=I55bzdbtY2k&t=2403s&end=4066s', true, 1),
('65d29b56-0430-3103-0000-000000000004', '65d29b56-0430-2103-0000-000000000004', 'VIDEO', 'Periodic Trends in Physical Properties: Atomic Radii, Ionic Radii, Shielding Effect & Lanthanide Contraction', 'https://www.youtube.com/watch?v=I55bzdbtY2k&t=4066s&end=6685s', true, 1),
('65d29b56-0430-3103-0000-000000000005', '65d29b56-0430-2103-0000-000000000005', 'VIDEO', 'Periodic Trends: Ionization Enthalpy, Electronegativity, Valency & Chemical Reactivity', 'https://www.youtube.com/watch?v=I55bzdbtY2k&t=6685s&end=8257s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
