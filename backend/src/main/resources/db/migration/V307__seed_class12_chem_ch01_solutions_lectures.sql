-- V307__seed_class12_chem_ch01_solutions_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 1 (Solutions)
-- Video: NCERT Wallah / Physics Wallah (VIJETA 2026 / Sunil Sir) (Solutions | 3VVSOY_iQX8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16770s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Solutions)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000001';

-- 2. Insert 6 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2201-0000-000000000001', '65d29b56-0430-1200-0000-000000000001', 'Types of Solutions & Concentration Units (Mass %, Volume %, Molarity, Molality, Mole Fraction)', 1, true),
('65d29b56-0430-2201-0000-000000000002', '65d29b56-0430-1200-0000-000000000001', 'Solubility of Gases in Liquids, Henry''s Law & Raoult''s Law for Volatile Solutes', 2, true),
('65d29b56-0430-2201-0000-000000000003', '65d29b56-0430-1200-0000-000000000001', 'Ideal and Non-Ideal Solutions, Positive & Negative Deviations and Azeotropic Mixtures', 3, true),
('65d29b56-0430-2201-0000-000000000004', '65d29b56-0430-1200-0000-000000000001', 'Colligative Properties I: Relative Lowering of Vapour Pressure & Elevation in Boiling Point', 4, true),
('65d29b56-0430-2201-0000-000000000005', '65d29b56-0430-1200-0000-000000000001', 'Colligative Properties II: Depression in Freezing Point, Osmosis & Osmotic Pressure', 5, true),
('65d29b56-0430-2201-0000-000000000006', '65d29b56-0430-1200-0000-000000000001', 'Abnormal Molar Mass, Van''t Hoff Factor (i) & High-Yield NCERT Board Exemplar Problems', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3201-0000-000000000001', '65d29b56-0430-2201-0000-000000000001', 'VIDEO', 'Types of Solutions & Concentration Units (Mass %, Volume %, Molarity, Molality, Mole Fraction)', 'https://www.youtube.com/watch?v=3VVSOY_iQX8&end=3640s', true, 1),
('65d29b56-0430-3201-0000-000000000002', '65d29b56-0430-2201-0000-000000000002', 'VIDEO', 'Solubility of Gases in Liquids, Henry''s Law & Raoult''s Law for Volatile Solutes', 'https://www.youtube.com/watch?v=3VVSOY_iQX8&t=3640s&end=9477s', true, 1),
('65d29b56-0430-3201-0000-000000000003', '65d29b56-0430-2201-0000-000000000003', 'VIDEO', 'Ideal and Non-Ideal Solutions, Positive & Negative Deviations and Azeotropic Mixtures', 'https://www.youtube.com/watch?v=3VVSOY_iQX8&t=9477s&end=11025s', true, 1),
('65d29b56-0430-3201-0000-000000000004', '65d29b56-0430-2201-0000-000000000004', 'VIDEO', 'Colligative Properties I: Relative Lowering of Vapour Pressure & Elevation in Boiling Point', 'https://www.youtube.com/watch?v=3VVSOY_iQX8&t=11025s&end=12980s', true, 1),
('65d29b56-0430-3201-0000-000000000005', '65d29b56-0430-2201-0000-000000000005', 'VIDEO', 'Colligative Properties II: Depression in Freezing Point, Osmosis & Osmotic Pressure', 'https://www.youtube.com/watch?v=3VVSOY_iQX8&t=12980s&end=15318s', true, 1),
('65d29b56-0430-3201-0000-000000000006', '65d29b56-0430-2201-0000-000000000006', 'VIDEO', 'Abnormal Molar Mass, Van''t Hoff Factor (i) & High-Yield NCERT Board Exemplar Problems', 'https://www.youtube.com/watch?v=3VVSOY_iQX8&t=15318s&end=16770s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
