-- V310__seed_class12_chem_ch04_the_d_and_f_block_elements_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 4 (The d- and f- Block Elements)
-- Video: NCERT Wallah / Physics Wallah (VIJETA 2026 Series) (The d- and f- Block Elements | atz_SW4Ovg8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16970s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 4 (The d- and f- Block Elements)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000004';

-- 2. Insert 6 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2204-0000-000000000001', '65d29b56-0430-1200-0000-000000000004', 'Periodic Position, Electronic Configurations & General Properties of Transition Metals', 1, true),
('65d29b56-0430-2204-0000-000000000002', '65d29b56-0430-1200-0000-000000000004', 'Atomic & Ionic Radii Trends, Lanthanoid Contraction & Densities/Melting Points', 2, true),
('65d29b56-0430-2204-0000-000000000003', '65d29b56-0430-1200-0000-000000000004', 'Ionisation Enthalpies, Variable Oxidation States & Standard Electrode Potentials (E°)', 3, true),
('65d29b56-0430-2204-0000-000000000004', '65d29b56-0430-1200-0000-000000000004', 'Magnetic Properties, Colored Ion Formation, Catalytic Activity & Interstitial Compounds', 4, true),
('65d29b56-0430-2204-0000-000000000005', '65d29b56-0430-1200-0000-000000000004', 'Important Transition Metal Compounds: Potassium Dichromate (K2Cr2O7) & Permanganate (KMnO4)', 5, true),
('65d29b56-0430-2204-0000-000000000006', '65d29b56-0430-1200-0000-000000000004', 'The f-Block Inner Transition Elements: Lanthanoids vs Actinoids, Oxidation States & Uses', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3204-0000-000000000001', '65d29b56-0430-2204-0000-000000000001', 'VIDEO', 'Periodic Position, Electronic Configurations & General Properties of Transition Metals', 'https://www.youtube.com/watch?v=atz_SW4Ovg8&end=4293s', true, 1),
('65d29b56-0430-3204-0000-000000000002', '65d29b56-0430-2204-0000-000000000002', 'VIDEO', 'Atomic & Ionic Radii Trends, Lanthanoid Contraction & Densities/Melting Points', 'https://www.youtube.com/watch?v=atz_SW4Ovg8&t=4293s&end=7203s', true, 1),
('65d29b56-0430-3204-0000-000000000003', '65d29b56-0430-2204-0000-000000000003', 'VIDEO', 'Ionisation Enthalpies, Variable Oxidation States & Standard Electrode Potentials (E°)', 'https://www.youtube.com/watch?v=atz_SW4Ovg8&t=7203s&end=13122s', true, 1),
('65d29b56-0430-3204-0000-000000000004', '65d29b56-0430-2204-0000-000000000004', 'VIDEO', 'Magnetic Properties, Colored Ion Formation, Catalytic Activity & Interstitial Compounds', 'https://www.youtube.com/watch?v=atz_SW4Ovg8&t=13122s&end=14115s', true, 1),
('65d29b56-0430-3204-0000-000000000005', '65d29b56-0430-2204-0000-000000000005', 'VIDEO', 'Important Transition Metal Compounds: Potassium Dichromate (K2Cr2O7) & Permanganate (KMnO4)', 'https://www.youtube.com/watch?v=atz_SW4Ovg8&t=14115s&end=15476s', true, 1),
('65d29b56-0430-3204-0000-000000000006', '65d29b56-0430-2204-0000-000000000006', 'VIDEO', 'The f-Block Inner Transition Elements: Lanthanoids vs Actinoids, Oxidation States & Uses', 'https://www.youtube.com/watch?v=atz_SW4Ovg8&t=15476s&end=16970s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
