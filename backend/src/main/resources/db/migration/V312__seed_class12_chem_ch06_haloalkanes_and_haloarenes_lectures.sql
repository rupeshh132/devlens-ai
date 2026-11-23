-- V312__seed_class12_chem_ch06_haloalkanes_and_haloarenes_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 6 (Haloalkanes and Haloarenes)
-- Video: NCERT Wallah / Physics Wallah (Class 12 Full Revision) (Haloalkanes and Haloarenes | 2GT9GM7k9_k)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13150s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Haloalkanes and Haloarenes)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000006';

-- 2. Insert 6 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2206-0000-000000000001', '65d29b56-0430-1200-0000-000000000006', 'Classification, IUPAC Nomenclature & Nature of the Polar C–X Bond', 1, true),
('65d29b56-0430-2206-0000-000000000002', '65d29b56-0430-1200-0000-000000000006', 'Methods of Preparation of Haloalkanes (From Alcohols, Hydrocarbons & Halogen Exchange)', 2, true),
('65d29b56-0430-2206-0000-000000000003', '65d29b56-0430-1200-0000-000000000006', 'Preparation of Haloarenes (Electrophilic Substitution & Sandmeyer''s Reaction)', 3, true),
('65d29b56-0430-2206-0000-000000000004', '65d29b56-0430-1200-0000-000000000006', 'Physical Properties (Melting/Boiling Points, Density & Solubility Trends)', 4, true),
('65d29b56-0430-2206-0000-000000000005', '65d29b56-0430-1200-0000-000000000006', 'Chemical Reactions of Haloalkanes: SN1 vs SN2 Mechanisms, Elimination (E2) & Grignard Reagent', 5, true),
('65d29b56-0430-2206-0000-000000000006', '65d29b56-0430-1200-0000-000000000006', 'Chemical Reactions of Haloarenes, Polyhalogen Compounds & Board Exam Questions', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3206-0000-000000000001', '65d29b56-0430-2206-0000-000000000001', 'VIDEO', 'Classification, IUPAC Nomenclature & Nature of the Polar C–X Bond', 'https://www.youtube.com/watch?v=2GT9GM7k9_k&end=4615s', true, 1),
('65d29b56-0430-3206-0000-000000000002', '65d29b56-0430-2206-0000-000000000002', 'VIDEO', 'Methods of Preparation of Haloalkanes (From Alcohols, Hydrocarbons & Halogen Exchange)', 'https://www.youtube.com/watch?v=2GT9GM7k9_k&t=4615s&end=6200s', true, 1),
('65d29b56-0430-3206-0000-000000000003', '65d29b56-0430-2206-0000-000000000003', 'VIDEO', 'Preparation of Haloarenes (Electrophilic Substitution & Sandmeyer''s Reaction)', 'https://www.youtube.com/watch?v=2GT9GM7k9_k&t=6200s&end=7813s', true, 1),
('65d29b56-0430-3206-0000-000000000004', '65d29b56-0430-2206-0000-000000000004', 'VIDEO', 'Physical Properties (Melting/Boiling Points, Density & Solubility Trends)', 'https://www.youtube.com/watch?v=2GT9GM7k9_k&t=7813s&end=8363s', true, 1),
('65d29b56-0430-3206-0000-000000000005', '65d29b56-0430-2206-0000-000000000005', 'VIDEO', 'Chemical Reactions of Haloalkanes: SN1 vs SN2 Mechanisms, Elimination (E2) & Grignard Reagent', 'https://www.youtube.com/watch?v=2GT9GM7k9_k&t=8363s&end=10000s', true, 1),
('65d29b56-0430-3206-0000-000000000006', '65d29b56-0430-2206-0000-000000000006', 'VIDEO', 'Chemical Reactions of Haloarenes, Polyhalogen Compounds & Board Exam Questions', 'https://www.youtube.com/watch?v=2GT9GM7k9_k&t=10000s&end=13150s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
