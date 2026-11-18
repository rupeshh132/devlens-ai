-- V166__seed_class11_chemistry_ch09_alkanes_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 9 (Hydrocarbons - Part 1: Alkanes)
-- Video: Next Toppers - 11th Science (Alkanes One Shot in Hydrocarbons | Tapur Ma'am | sEchzMnCpH0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5075s / 1h 24m 35s)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Hydrocarbons)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000009';

-- 2. Insert 5 Verified Master Topics for Chapter 9 (Hydrocarbons: Part 1 - Alkanes)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2109-0000-000000000001', '65d29b56-0430-1100-0000-000000000009', 'Classification of Hydrocarbons, Carbon Types (1°, 2°, 3°, 4°), Alkyl Groups & IUPAC Nomenclature of Alkanes', 1, true),
('65d29b56-0430-2109-0000-000000000002', '65d29b56-0430-1100-0000-000000000009', 'Alkanes: Methods of Preparation (Hydrogenation of Alkenes/Alkynes, Reduction of Alkyl Halides & Decarboxylation)', 2, true),
('65d29b56-0430-2109-0000-000000000003', '65d29b56-0430-1100-0000-000000000009', 'Kolbe''s Electrolytic Synthesis & Physical Properties of Alkanes (Boiling Point, Melting Point, Solubility & Density)', 3, true),
('65d29b56-0430-2109-0000-000000000004', '65d29b56-0430-1100-0000-000000000009', 'Chemical Properties of Alkanes: Free Radical Halogenation, Combustion, Controlled Oxidation, Aromatization & Pyrolysis', 4, true),
('65d29b56-0430-2109-0000-000000000005', '65d29b56-0430-1100-0000-000000000009', 'Conformations of Alkanes: Ethane Conformations, Torsional Strain, Sawhorse & Newman Projections', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 5075s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3109-0000-000000000001', '65d29b56-0430-2109-0000-000000000001', 'VIDEO', 'Classification of Hydrocarbons, Carbon Types (1°, 2°, 3°, 4°), Alkyl Groups & IUPAC Nomenclature of Alkanes', 'https://www.youtube.com/watch?v=sEchzMnCpH0&end=1140s', true, 1),
('65d29b56-0430-3109-0000-000000000002', '65d29b56-0430-2109-0000-000000000002', 'VIDEO', 'Alkanes: Methods of Preparation (Hydrogenation of Alkenes/Alkynes, Reduction of Alkyl Halides & Decarboxylation)', 'https://www.youtube.com/watch?v=sEchzMnCpH0&t=1140s&end=2584s', true, 1),
('65d29b56-0430-3109-0000-000000000003', '65d29b56-0430-2109-0000-000000000003', 'VIDEO', 'Kolbe''s Electrolytic Synthesis & Physical Properties of Alkanes (Boiling Point, Melting Point, Solubility & Density)', 'https://www.youtube.com/watch?v=sEchzMnCpH0&t=2584s&end=3669s', true, 1),
('65d29b56-0430-3109-0000-000000000004', '65d29b56-0430-2109-0000-000000000004', 'VIDEO', 'Chemical Properties of Alkanes: Free Radical Halogenation, Combustion, Controlled Oxidation, Aromatization & Pyrolysis', 'https://www.youtube.com/watch?v=sEchzMnCpH0&t=3669s&end=4744s', true, 1),
('65d29b56-0430-3109-0000-000000000005', '65d29b56-0430-2109-0000-000000000005', 'VIDEO', 'Conformations of Alkanes: Ethane Conformations, Torsional Strain, Sawhorse & Newman Projections', 'https://www.youtube.com/watch?v=sEchzMnCpH0&t=4744s&end=5075s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
