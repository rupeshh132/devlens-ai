-- V159__seed_class11_chemistry_ch02_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 2 (Structure of Atom)
-- Video: Next Toppers - 11th Science (Structure of Atom Class 11 One Shot | Tapur Ma'am | S7uLXHDTamo)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13125s / 3h 38m 45s)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Structure of Atom)
DELETE FROM learn_content_items
WHERE topic_id IN (
    '65d29b56-0430-2102-0000-000000000001',
    '65d29b56-0430-2102-0000-000000000002',
    '65d29b56-0430-2102-0000-000000000003',
    '65d29b56-0430-2102-0000-000000000004',
    '65d29b56-0430-2102-0000-000000000005',
    '65d29b56-0430-2102-0000-000000000006'
);

DELETE FROM learn_topics
WHERE id IN (
    '65d29b56-0430-2102-0000-000000000001',
    '65d29b56-0430-2102-0000-000000000002',
    '65d29b56-0430-2102-0000-000000000003',
    '65d29b56-0430-2102-0000-000000000004',
    '65d29b56-0430-2102-0000-000000000005',
    '65d29b56-0430-2102-0000-000000000006'
);

-- 2. Insert 6 Verified Master Topics for Chapter 2 (Structure of Atom)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2102-0000-000000000001', '65d29b56-0430-1100-0000-000000000002', 'Discovery of Sub-atomic Particles (Cathode & Anode Rays) and Early Atomic Models (Thomson & Rutherford)', 1, true),
('65d29b56-0430-2102-0000-000000000002', '65d29b56-0430-1100-0000-000000000002', 'Bohr''s Model for Hydrogen Atom, Postulates, Hydrogen Line Spectrum & Spectral Series', 2, true),
('65d29b56-0430-2102-0000-000000000003', '65d29b56-0430-1100-0000-000000000002', 'Dual Nature of Electromagnetic Radiation, Wave Parameters, Planck''s Quantum Theory & Photoelectric Effect', 3, true),
('65d29b56-0430-2102-0000-000000000004', '65d29b56-0430-1100-0000-000000000002', 'Dual Nature of Matter (de Broglie Relation) and Heisenberg''s Uncertainty Principle', 4, true),
('65d29b56-0430-2102-0000-000000000005', '65d29b56-0430-1100-0000-000000000002', 'Quantum Mechanical Model of Atom: Wave Functions, Orbitals & Quantum Numbers (n, l, m, s)', 5, true),
('65d29b56-0430-2102-0000-000000000006', '65d29b56-0430-1100-0000-000000000002', 'Rules for Filling Electrons in Orbitals: Aufbau Principle, Pauli''s Exclusion Principle, Hund''s Rule & Electronic Configurations', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 13125s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3102-0000-000000000001', '65d29b56-0430-2102-0000-000000000001', 'VIDEO', 'Discovery of Sub-atomic Particles (Cathode & Anode Rays) and Early Atomic Models (Thomson & Rutherford)', 'https://www.youtube.com/watch?v=S7uLXHDTamo&end=3503s', true, 1),
('65d29b56-0430-3102-0000-000000000002', '65d29b56-0430-2102-0000-000000000002', 'VIDEO', 'Bohr''s Model for Hydrogen Atom, Postulates, Hydrogen Line Spectrum & Spectral Series', 'https://www.youtube.com/watch?v=S7uLXHDTamo&t=3503s&end=4918s', true, 1),
('65d29b56-0430-3102-0000-000000000003', '65d29b56-0430-2102-0000-000000000003', 'VIDEO', 'Dual Nature of Electromagnetic Radiation, Wave Parameters, Planck''s Quantum Theory & Photoelectric Effect', 'https://www.youtube.com/watch?v=S7uLXHDTamo&t=4918s&end=6587s', true, 1),
('65d29b56-0430-3102-0000-000000000004', '65d29b56-0430-2102-0000-000000000004', 'VIDEO', 'Dual Nature of Matter (de Broglie Relation) and Heisenberg''s Uncertainty Principle', 'https://www.youtube.com/watch?v=S7uLXHDTamo&t=6587s&end=8033s', true, 1),
('65d29b56-0430-3102-0000-000000000005', '65d29b56-0430-2102-0000-000000000005', 'VIDEO', 'Quantum Mechanical Model of Atom: Wave Functions, Orbitals & Quantum Numbers (n, l, m, s)', 'https://www.youtube.com/watch?v=S7uLXHDTamo&t=8033s&end=10065s', true, 1),
('65d29b56-0430-3102-0000-000000000006', '65d29b56-0430-2102-0000-000000000006', 'VIDEO', 'Rules for Filling Electrons in Orbitals: Aufbau Principle, Pauli''s Exclusion Principle, Hund''s Rule & Electronic Configurations', 'https://www.youtube.com/watch?v=S7uLXHDTamo&t=10065s&end=13125s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
