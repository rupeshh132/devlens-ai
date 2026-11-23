-- V308__seed_class12_chem_ch02_electrochemistry_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 2 (Electrochemistry)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Electrochemistry | etdTd4zscso)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 24742s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Electrochemistry)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000002';

-- 2. Insert 6 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2202-0000-000000000001', '65d29b56-0430-1200-0000-000000000002', 'Introduction to Electrochemistry, Redox Reactions & Galvanic Cells (Daniell Cell)', 1, true),
('65d29b56-0430-2202-0000-000000000002', '65d29b56-0430-1200-0000-000000000002', 'Standard Electrode Potential, Cell EMF, SHE & Gibbs Free Energy (ΔG° = -nFE°)', 2, true),
('65d29b56-0430-2202-0000-000000000003', '65d29b56-0430-1200-0000-000000000002', 'Nernst Equation for Electrode and Cell Potentials & The Electrochemical Series', 3, true),
('65d29b56-0430-2202-0000-000000000004', '65d29b56-0430-1200-0000-000000000002', 'Electrolytic Cells, Products of Electrolysis & Faraday''s Laws of Electrolysis', 4, true),
('65d29b56-0430-2202-0000-000000000005', '65d29b56-0430-1200-0000-000000000002', 'Conductance of Electrolytic Solutions, Molar Conductivity & Kohlrausch''s Law', 5, true),
('65d29b56-0430-2202-0000-000000000006', '65d29b56-0430-1200-0000-000000000002', 'Commercial Batteries (Primary & Secondary), Fuel Cells, Corrosion Prevention & PYQs', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3202-0000-000000000001', '65d29b56-0430-2202-0000-000000000001', 'VIDEO', 'Introduction to Electrochemistry, Redox Reactions & Galvanic Cells (Daniell Cell)', 'https://www.youtube.com/watch?v=etdTd4zscso&end=6548s', true, 1),
('65d29b56-0430-3202-0000-000000000002', '65d29b56-0430-2202-0000-000000000002', 'VIDEO', 'Standard Electrode Potential, Cell EMF, SHE & Gibbs Free Energy (ΔG° = -nFE°)', 'https://www.youtube.com/watch?v=etdTd4zscso&t=6548s&end=12392s', true, 1),
('65d29b56-0430-3202-0000-000000000003', '65d29b56-0430-2202-0000-000000000003', 'VIDEO', 'Nernst Equation for Electrode and Cell Potentials & The Electrochemical Series', 'https://www.youtube.com/watch?v=etdTd4zscso&t=12392s&end=15978s', true, 1),
('65d29b56-0430-3202-0000-000000000004', '65d29b56-0430-2202-0000-000000000004', 'VIDEO', 'Electrolytic Cells, Products of Electrolysis & Faraday''s Laws of Electrolysis', 'https://www.youtube.com/watch?v=etdTd4zscso&t=15978s&end=19544s', true, 1),
('65d29b56-0430-3202-0000-000000000005', '65d29b56-0430-2202-0000-000000000005', 'VIDEO', 'Conductance of Electrolytic Solutions, Molar Conductivity & Kohlrausch''s Law', 'https://www.youtube.com/watch?v=etdTd4zscso&t=19544s&end=21930s', true, 1),
('65d29b56-0430-3202-0000-000000000006', '65d29b56-0430-2202-0000-000000000006', 'VIDEO', 'Commercial Batteries (Primary & Secondary), Fuel Cells, Corrosion Prevention & PYQs', 'https://www.youtube.com/watch?v=etdTd4zscso&t=21930s&end=24742s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
