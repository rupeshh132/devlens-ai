-- V313__seed_class12_chem_ch07_alcohols_phenols_and_ethers_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 7 (Alcohols, Phenols and Ethers)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Alcohols, Phenols and Ethers | slkIdffX7dQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 12595s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Alcohols, Phenols and Ethers)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000007';

-- 2. Insert 6 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2207-0000-000000000001', '65d29b56-0430-1200-0000-000000000007', 'Classification, IUPAC Nomenclature & Structures of Hydroxy Functional Groups', 1, true),
('65d29b56-0430-2207-0000-000000000002', '65d29b56-0430-1200-0000-000000000007', 'Methods of Preparation of Alcohols (From Alkenes, Carbonyl Compounds & Grignard Reagents)', 2, true),
('65d29b56-0430-2207-0000-000000000003', '65d29b56-0430-1200-0000-000000000007', 'Methods of Preparation of Phenols (From Haloarenes, Diazonium Salts & Cumene)', 3, true),
('65d29b56-0430-2207-0000-000000000004', '65d29b56-0430-1200-0000-000000000007', 'Physical & Chemical Properties of Alcohols: Acidity, Esterification, Dehydration & Oxidation', 4, true),
('65d29b56-0430-2207-0000-000000000005', '65d29b56-0430-1200-0000-000000000007', 'Reactions of Phenols (Electrophilic Aromatic Substitution, Kolbe''s Reaction, Reimer-Tiemann Reaction)', 5, true),
('65d29b56-0430-2207-0000-000000000006', '65d29b56-0430-1200-0000-000000000007', 'Methods of Preparation of Ethers (Williamson''s Synthesis), Physical/Chemical Properties & Mechanisms', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3207-0000-000000000001', '65d29b56-0430-2207-0000-000000000001', 'VIDEO', 'Classification, IUPAC Nomenclature & Structures of Hydroxy Functional Groups', 'https://www.youtube.com/watch?v=slkIdffX7dQ&end=3122s', true, 1),
('65d29b56-0430-3207-0000-000000000002', '65d29b56-0430-2207-0000-000000000002', 'VIDEO', 'Methods of Preparation of Alcohols (From Alkenes, Carbonyl Compounds & Grignard Reagents)', 'https://www.youtube.com/watch?v=slkIdffX7dQ&t=3122s&end=5989s', true, 1),
('65d29b56-0430-3207-0000-000000000003', '65d29b56-0430-2207-0000-000000000003', 'VIDEO', 'Methods of Preparation of Phenols (From Haloarenes, Diazonium Salts & Cumene)', 'https://www.youtube.com/watch?v=slkIdffX7dQ&t=5989s&end=6837s', true, 1),
('65d29b56-0430-3207-0000-000000000004', '65d29b56-0430-2207-0000-000000000004', 'VIDEO', 'Physical & Chemical Properties of Alcohols: Acidity, Esterification, Dehydration & Oxidation', 'https://www.youtube.com/watch?v=slkIdffX7dQ&t=6837s&end=7871s', true, 1),
('65d29b56-0430-3207-0000-000000000005', '65d29b56-0430-2207-0000-000000000005', 'VIDEO', 'Reactions of Phenols (Electrophilic Aromatic Substitution, Kolbe''s Reaction, Reimer-Tiemann Reaction)', 'https://www.youtube.com/watch?v=slkIdffX7dQ&t=7871s&end=10118s', true, 1),
('65d29b56-0430-3207-0000-000000000006', '65d29b56-0430-2207-0000-000000000006', 'VIDEO', 'Methods of Preparation of Ethers (Williamson''s Synthesis), Physical/Chemical Properties & Mechanisms', 'https://www.youtube.com/watch?v=slkIdffX7dQ&t=10118s&end=12595s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
