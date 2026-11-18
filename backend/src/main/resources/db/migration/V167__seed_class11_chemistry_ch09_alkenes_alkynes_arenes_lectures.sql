-- V167__seed_class11_chemistry_ch09_alkenes_alkynes_arenes_lectures.sql
-- Seeds verified 7 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 9 (Hydrocarbons - Part 2: Alkenes, Alkynes & Arenes)
-- Video: Next Toppers - 11th Science (Alkene and Alkynes One Shot in Hydrocarbons | Tapur Ma'am | nGi3tGiKiv4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6647s / 1h 50m 47s)

-- 1. Insert 7 Verified Master Topics for Chapter 9 (Topics 6 to 12)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2109-0000-000000000006', '65d29b56-0430-1100-0000-000000000009', 'Alkenes: Nomenclature, Geometrical Isomerism (cis-trans) & Methods of Preparation', 6, true),
('65d29b56-0430-2109-0000-000000000007', '65d29b56-0430-1100-0000-000000000009', 'Alkenes: Physical Properties, Addition Reactions (Markovnikov & Anti-Markovnikov Rules) & Polymerization', 7, true),
('65d29b56-0430-2109-0000-000000000008', '65d29b56-0430-1100-0000-000000000009', 'Alkynes: Structure, Nomenclature, Preparation Methods, Physical Properties & Acidity of Terminal Alkynes', 8, true),
('65d29b56-0430-2109-0000-000000000009', '65d29b56-0430-1100-0000-000000000009', 'Alkynes: Chemical Addition Reactions (H2, Halogens, HX, Water) & Linear / Cyclic Polymerization', 9, true),
('65d29b56-0430-2109-0000-000000000010', '65d29b56-0430-1100-0000-000000000009', 'Aromatic Hydrocarbons: Structure of Benzene, Resonance, Stability & Hückel''s Rule of Aromaticity', 10, true),
('65d29b56-0430-2109-0000-000000000011', '65d29b56-0430-1100-0000-000000000009', 'Arenes: Methods of Preparation & Electrophilic Substitution Reactions (Nitration, Halogenation, Friedel-Crafts)', 11, true),
('65d29b56-0430-2109-0000-000000000012', '65d29b56-0430-1100-0000-000000000009', 'Directive Influence of Functional Groups in Monosubstituted Benzene, Carcinogenicity & Toxicity', 12, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 6647s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3109-0000-000000000006', '65d29b56-0430-2109-0000-000000000006', 'VIDEO', 'Alkenes: Nomenclature, Geometrical Isomerism (cis-trans) & Methods of Preparation', 'https://www.youtube.com/watch?v=nGi3tGiKiv4&end=1491s', true, 1),
('65d29b56-0430-3109-0000-000000000007', '65d29b56-0430-2109-0000-000000000007', 'VIDEO', 'Alkenes: Physical Properties, Addition Reactions (Markovnikov & Anti-Markovnikov Rules) & Polymerization', 'https://www.youtube.com/watch?v=nGi3tGiKiv4&t=1491s&end=3311s', true, 1),
('65d29b56-0430-3109-0000-000000000008', '65d29b56-0430-2109-0000-000000000008', 'VIDEO', 'Alkynes: Structure, Nomenclature, Preparation Methods, Physical Properties & Acidity of Terminal Alkynes', 'https://www.youtube.com/watch?v=nGi3tGiKiv4&t=3311s&end=4325s', true, 1),
('65d29b56-0430-3109-0000-000000000009', '65d29b56-0430-2109-0000-000000000009', 'VIDEO', 'Alkynes: Chemical Addition Reactions (H2, Halogens, HX, Water) & Linear / Cyclic Polymerization', 'https://www.youtube.com/watch?v=nGi3tGiKiv4&t=4325s&end=4797s', true, 1),
('65d29b56-0430-3109-0000-000000000010', '65d29b56-0430-2109-0000-000000000010', 'VIDEO', 'Aromatic Hydrocarbons: Structure of Benzene, Resonance, Stability & Hückel''s Rule of Aromaticity', 'https://www.youtube.com/watch?v=nGi3tGiKiv4&t=4797s&end=5599s', true, 1),
('65d29b56-0430-3109-0000-000000000011', '65d29b56-0430-2109-0000-000000000011', 'VIDEO', 'Arenes: Methods of Preparation & Electrophilic Substitution Reactions (Nitration, Halogenation, Friedel-Crafts)', 'https://www.youtube.com/watch?v=nGi3tGiKiv4&t=5599s&end=6342s', true, 1),
('65d29b56-0430-3109-0000-000000000012', '65d29b56-0430-2109-0000-000000000012', 'VIDEO', 'Directive Influence of Functional Groups in Monosubstituted Benzene, Carcinogenicity & Toxicity', 'https://www.youtube.com/watch?v=nGi3tGiKiv4&t=6342s&end=6647s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
