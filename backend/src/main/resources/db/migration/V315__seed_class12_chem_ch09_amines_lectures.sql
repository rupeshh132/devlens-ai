-- V315__seed_class12_chem_ch09_amines_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 9 (Amines)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Amines | lkAbtIASF4o)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 12808s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Amines)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000009';

-- 2. Insert 6 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2209-0000-000000000001', '65d29b56-0430-1200-0000-000000000009', 'Structure, Classification (1°, 2°, 3°) & IUPAC Nomenclature of Aliphatic and Aromatic Amines', 1, true),
('65d29b56-0430-2209-0000-000000000002', '65d29b56-0430-1200-0000-000000000009', 'Methods of Preparation of Amines (Reduction of Nitro/Nitriles, Hoffmann Bromamide & Gabriel Phthalimide)', 2, true),
('65d29b56-0430-2209-0000-000000000003', '65d29b56-0430-1200-0000-000000000009', 'Physical Properties of Amines: Boiling Point Trends, Intermolecular H-Bonding & Solubility', 3, true),
('65d29b56-0430-2209-0000-000000000004', '65d29b56-0430-1200-0000-000000000009', 'Basic Character of Amines: Gas Phase vs Aqueous Phase Basicity, Inductive, Steric & Solvation Factors', 4, true),
('65d29b56-0430-2209-0000-000000000005', '65d29b56-0430-1200-0000-000000000009', 'Chemical Reactions of Amines: Acylation, Carbylamine Test, Hinsberg''s Test & Electrophilic Substitution', 5, true),
('65d29b56-0430-2209-0000-000000000006', '65d29b56-0430-1200-0000-000000000009', 'Diazonium Salts: Diazotisation Reaction, Sandmeyer''s/Gattermann Reactions, Azo Coupling & Synthesis', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3209-0000-000000000001', '65d29b56-0430-2209-0000-000000000001', 'VIDEO', 'Structure, Classification (1°, 2°, 3°) & IUPAC Nomenclature of Aliphatic and Aromatic Amines', 'https://www.youtube.com/watch?v=lkAbtIASF4o&end=2665s', true, 1),
('65d29b56-0430-3209-0000-000000000002', '65d29b56-0430-2209-0000-000000000002', 'VIDEO', 'Methods of Preparation of Amines (Reduction of Nitro/Nitriles, Hoffmann Bromamide & Gabriel Phthalimide)', 'https://www.youtube.com/watch?v=lkAbtIASF4o&t=2665s&end=4840s', true, 1),
('65d29b56-0430-3209-0000-000000000003', '65d29b56-0430-2209-0000-000000000003', 'VIDEO', 'Physical Properties of Amines: Boiling Point Trends, Intermolecular H-Bonding & Solubility', 'https://www.youtube.com/watch?v=lkAbtIASF4o&t=4840s&end=6795s', true, 1),
('65d29b56-0430-3209-0000-000000000004', '65d29b56-0430-2209-0000-000000000004', 'VIDEO', 'Basic Character of Amines: Gas Phase vs Aqueous Phase Basicity, Inductive, Steric & Solvation Factors', 'https://www.youtube.com/watch?v=lkAbtIASF4o&t=6795s&end=8500s', true, 1),
('65d29b56-0430-3209-0000-000000000005', '65d29b56-0430-2209-0000-000000000005', 'VIDEO', 'Chemical Reactions of Amines: Acylation, Carbylamine Test, Hinsberg''s Test & Electrophilic Substitution', 'https://www.youtube.com/watch?v=lkAbtIASF4o&t=8500s&end=10177s', true, 1),
('65d29b56-0430-3209-0000-000000000006', '65d29b56-0430-2209-0000-000000000006', 'VIDEO', 'Diazonium Salts: Diazotisation Reaction, Sandmeyer''s/Gattermann Reactions, Azo Coupling & Synthesis', 'https://www.youtube.com/watch?v=lkAbtIASF4o&t=10177s&end=12808s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
