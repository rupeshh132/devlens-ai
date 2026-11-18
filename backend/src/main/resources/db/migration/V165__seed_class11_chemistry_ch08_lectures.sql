-- V165__seed_class11_chemistry_ch08_lectures.sql
-- Seeds verified 8 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 8 (Organic Chemistry – Some Basic Principles and Techniques)
-- Video: Next Toppers - 11th Science (Organic Chemistry Class 11 One Shot | Tapur Ma'am | soIba7r34ZM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 10525s / 2h 55m 25s)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Organic Chemistry)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000008';

-- 2. Insert 8 Verified Master Topics for Chapter 8 (Organic Chemistry)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2108-0000-000000000001', '65d29b56-0430-1100-0000-000000000008', 'General Introduction, Tetravalence of Carbon, Hybridisation (sp3, sp2, sp) & Shapes of Organic Molecules', 1, true),
('65d29b56-0430-2108-0000-000000000002', '65d29b56-0430-1100-0000-000000000008', 'Structural Representations of Organic Compounds: Complete, Condensed, Bond-line & 3D Wedge-Dash', 2, true),
('65d29b56-0430-2108-0000-000000000003', '65d29b56-0430-1100-0000-000000000008', 'Classification of Organic Compounds (Acyclic, Alicyclic, Aromatic, Heterocyclic) & Homologous Series', 3, true),
('65d29b56-0430-2108-0000-000000000004', '65d29b56-0430-1100-0000-000000000008', 'IUPAC Nomenclature of Organic Compounds: Alkanes, Branched Chains, Functional Groups & Benzene Derivatives', 4, true),
('65d29b56-0430-2108-0000-000000000005', '65d29b56-0430-1100-0000-000000000008', 'Isomerism in Organic Compounds: Structural (Chain, Position, Functional, Metamerism) & Stereoisomerism', 5, true),
('65d29b56-0430-2108-0000-000000000006', '65d29b56-0430-1100-0000-000000000008', 'Fundamental Concepts: Bond Fission, Reactive Intermediates (Carbocations, Carbanions, Radicals) & Reagents', 6, true),
('65d29b56-0430-2108-0000-000000000007', '65d29b56-0430-1100-0000-000000000008', 'Electronic Displacement Effects: Inductive Effect, Electromeric Effect, Resonance Effect & Hyperconjugation', 7, true),
('65d29b56-0430-2108-0000-000000000008', '65d29b56-0430-1100-0000-000000000008', 'Types of Organic Reactions & Mechanism: Substitution, Addition, Elimination & Rearrangement Reactions', 8, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 10525s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3108-0000-000000000001', '65d29b56-0430-2108-0000-000000000001', 'VIDEO', 'General Introduction, Tetravalence of Carbon, Hybridisation (sp3, sp2, sp) & Shapes of Organic Molecules', 'https://www.youtube.com/watch?v=soIba7r34ZM&end=935s', true, 1),
('65d29b56-0430-3108-0000-000000000002', '65d29b56-0430-2108-0000-000000000002', 'VIDEO', 'Structural Representations of Organic Compounds: Complete, Condensed, Bond-line & 3D Wedge-Dash', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=935s&end=1441s', true, 1),
('65d29b56-0430-3108-0000-000000000003', '65d29b56-0430-2108-0000-000000000003', 'VIDEO', 'Classification of Organic Compounds (Acyclic, Alicyclic, Aromatic, Heterocyclic) & Homologous Series', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=1441s&end=2580s', true, 1),
('65d29b56-0430-3108-0000-000000000004', '65d29b56-0430-2108-0000-000000000004', 'VIDEO', 'IUPAC Nomenclature of Organic Compounds: Alkanes, Branched Chains, Functional Groups & Benzene Derivatives', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=2580s&end=5596s', true, 1),
('65d29b56-0430-3108-0000-000000000005', '65d29b56-0430-2108-0000-000000000005', 'VIDEO', 'Isomerism in Organic Compounds: Structural (Chain, Position, Functional, Metamerism) & Stereoisomerism', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=5596s&end=6917s', true, 1),
('65d29b56-0430-3108-0000-000000000006', '65d29b56-0430-2108-0000-000000000006', 'VIDEO', 'Fundamental Concepts: Bond Fission, Reactive Intermediates (Carbocations, Carbanions, Radicals) & Reagents', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=6917s&end=8236s', true, 1),
('65d29b56-0430-3108-0000-000000000007', '65d29b56-0430-2108-0000-000000000007', 'VIDEO', 'Electronic Displacement Effects: Inductive Effect, Electromeric Effect, Resonance Effect & Hyperconjugation', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=8236s&end=9724s', true, 1),
('65d29b56-0430-3108-0000-000000000008', '65d29b56-0430-2108-0000-000000000008', 'VIDEO', 'Types of Organic Reactions & Mechanism: Substitution, Addition, Elimination & Rearrangement Reactions', 'https://www.youtube.com/watch?v=soIba7r34ZM&t=9724s&end=10525s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
