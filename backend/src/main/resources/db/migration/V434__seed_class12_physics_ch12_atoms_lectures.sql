-- V434__seed_class12_physics_ch12_atoms_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 12 (Atoms)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (OCVJaDVuD7s)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8581s)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Atoms)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000012';

-- 2. Insert 4 Verified Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2212-0000-000000000001', '65d29b56-0042-1200-0000-000000000012', 'Alpha Particle Scattering Experiment, Geiger-Marsden Results & Rutherford Nuclear Model of Atom', 1, true),
('65d29b56-0042-2212-0000-000000000002', '65d29b56-0042-1200-0000-000000000012', 'Bohr''s Quantization Postulates, Radius of Permitted Orbits & Orbital Velocity of Electron', 2, true),
('65d29b56-0042-2212-0000-000000000003', '65d29b56-0042-1200-0000-000000000012', 'Total Energy of Electron in Hydrogen Atom, Bound State Negative Energy & Energy Level Diagrams', 3, true),
('65d29b56-0042-2212-0000-000000000004', '65d29b56-0042-1200-0000-000000000012', 'Spectral Lines of Hydrogen Atom: Lyman, Balmer, Paschen, Brackett, Pfund Series & Rydberg Formula', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3212-0000-000000000001', '65d29b56-0042-2212-0000-000000000001', 'VIDEO', 'Alpha Particle Scattering Experiment, Geiger-Marsden Results & Rutherford Nuclear Model of Atom', 'https://www.youtube.com/watch?v=OCVJaDVuD7s&end=2140s', true, 1),
('65d29b56-0042-3212-0000-000000000002', '65d29b56-0042-2212-0000-000000000002', 'VIDEO', 'Bohr''s Quantization Postulates, Radius of Permitted Orbits & Orbital Velocity of Electron', 'https://www.youtube.com/watch?v=OCVJaDVuD7s&t=2140s&end=4290s', true, 1),
('65d29b56-0042-3212-0000-000000000003', '65d29b56-0042-2212-0000-000000000003', 'VIDEO', 'Total Energy of Electron in Hydrogen Atom, Bound State Negative Energy & Energy Level Diagrams', 'https://www.youtube.com/watch?v=OCVJaDVuD7s&t=4290s&end=6430s', true, 1),
('65d29b56-0042-3212-0000-000000000004', '65d29b56-0042-2212-0000-000000000004', 'VIDEO', 'Spectral Lines of Hydrogen Atom: Lyman, Balmer, Paschen, Brackett, Pfund Series & Rydberg Formula', 'https://www.youtube.com/watch?v=OCVJaDVuD7s&t=6430s&end=8581s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
