-- V311__seed_class12_chem_ch05_coordination_compounds_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 5 (Coordination Compounds)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards / Vijeta) (Coordination Compounds | kb0bECblCKw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 24405s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Coordination Compounds)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000005';

-- 2. Insert 6 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2205-0000-000000000001', '65d29b56-0430-1200-0000-000000000005', 'Werner''s Theory, Double Salts vs Complex Salts & Ligand Terminologies', 1, true),
('65d29b56-0430-2205-0000-000000000002', '65d29b56-0430-1200-0000-000000000005', 'IUPAC Nomenclature of Mononuclear Coordination Entities & Effective Atomic Number (EAN)', 2, true),
('65d29b56-0430-2205-0000-000000000003', '65d29b56-0430-1200-0000-000000000005', 'Valence Bond Theory (VBT): Inner vs Outer Orbital Complexes & Magnetic Properties', 3, true),
('65d29b56-0430-2205-0000-000000000004', '65d29b56-0430-1200-0000-000000000005', 'Crystal Field Theory (CFT): Octahedral and Tetrahedral Splitting, Spectrochemical Series & Color', 4, true),
('65d29b56-0430-2205-0000-000000000005', '65d29b56-0430-1200-0000-000000000005', 'Synergic Bonding in Metal Carbonyls & Importance/Applications in Metallurgy/Medicine', 5, true),
('65d29b56-0430-2205-0000-000000000006', '65d29b56-0430-1200-0000-000000000005', 'Structural & Stereoisomerism (Geometrical & Optical Isomerism) & Practice Problems', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3205-0000-000000000001', '65d29b56-0430-2205-0000-000000000001', 'VIDEO', 'Werner''s Theory, Double Salts vs Complex Salts & Ligand Terminologies', 'https://www.youtube.com/watch?v=kb0bECblCKw&end=7582s', true, 1),
('65d29b56-0430-3205-0000-000000000002', '65d29b56-0430-2205-0000-000000000002', 'VIDEO', 'IUPAC Nomenclature of Mononuclear Coordination Entities & Effective Atomic Number (EAN)', 'https://www.youtube.com/watch?v=kb0bECblCKw&t=7582s&end=13005s', true, 1),
('65d29b56-0430-3205-0000-000000000003', '65d29b56-0430-2205-0000-000000000003', 'VIDEO', 'Valence Bond Theory (VBT): Inner vs Outer Orbital Complexes & Magnetic Properties', 'https://www.youtube.com/watch?v=kb0bECblCKw&t=13005s&end=16465s', true, 1),
('65d29b56-0430-3205-0000-000000000004', '65d29b56-0430-2205-0000-000000000004', 'VIDEO', 'Crystal Field Theory (CFT): Octahedral and Tetrahedral Splitting, Spectrochemical Series & Color', 'https://www.youtube.com/watch?v=kb0bECblCKw&t=16465s&end=19553s', true, 1),
('65d29b56-0430-3205-0000-000000000005', '65d29b56-0430-2205-0000-000000000005', 'VIDEO', 'Synergic Bonding in Metal Carbonyls & Importance/Applications in Metallurgy/Medicine', 'https://www.youtube.com/watch?v=kb0bECblCKw&t=19553s&end=20044s', true, 1),
('65d29b56-0430-3205-0000-000000000006', '65d29b56-0430-2205-0000-000000000006', 'VIDEO', 'Structural & Stereoisomerism (Geometrical & Optical Isomerism) & Practice Problems', 'https://www.youtube.com/watch?v=kb0bECblCKw&t=20044s&end=24405s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
