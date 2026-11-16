-- V145__seed_class11_biology_ch9_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 9 (Biomolecules)
-- Video: PW Class 11 Science (Biomolecules | Full Chapter in ONE SHOT | Chapter 9 | Class 11 Biology | kmggUcIFm30)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9697s / 2h 41m 37s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Biomolecules)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000009';

-- 2. Insert 6 Verified Master Topics for Chapter 9 (Biomolecules)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2109-0000-000000000001', '65d29b56-0440-1100-0000-000000000009', 'Chemical Analysis of Living Tissues, Ash Analysis & Biomolecules Pool', 1, true),
('65d29b56-0440-2109-0000-000000000002', '65d29b56-0440-1100-0000-000000000009', 'Carbohydrates: Monosaccharides, Oligosaccharides, Polysaccharides & Reducing Sugars', 2, true),
('65d29b56-0440-2109-0000-000000000003', '65d29b56-0440-1100-0000-000000000009', 'Amino Acids & Proteins: Peptide Bonds, Protein Conformations & Functions', 3, true),
('65d29b56-0440-2109-0000-000000000004', '65d29b56-0440-1100-0000-000000000009', 'Lipids: Fatty Acids, Glycerol, Triglycerides, Phospholipids & Sterols', 4, true),
('65d29b56-0440-2109-0000-000000000005', '65d29b56-0440-1100-0000-000000000009', 'Nucleic Acids: Nucleotides, DNA Double Helix Structure & RNA Types', 5, true),
('65d29b56-0440-2109-0000-000000000006', '65d29b56-0440-1100-0000-000000000009', 'Enzymes: Mechanism of Action, Activation Energy, Factors, Classification & Co-factors', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3109-0000-000000000001', '65d29b56-0440-2109-0000-000000000001', 'VIDEO', 'Chemical Analysis of Living Tissues, Ash Analysis & Biomolecules Pool', 'https://www.youtube.com/watch?v=kmggUcIFm30&end=1389s', true, 1),
('65d29b56-0440-3109-0000-000000000002', '65d29b56-0440-2109-0000-000000000002', 'VIDEO', 'Carbohydrates: Monosaccharides, Oligosaccharides, Polysaccharides & Reducing Sugars', 'https://www.youtube.com/watch?v=kmggUcIFm30&t=1389s&end=4152s', true, 1),
('65d29b56-0440-3109-0000-000000000003', '65d29b56-0440-2109-0000-000000000003', 'VIDEO', 'Amino Acids & Proteins: Peptide Bonds, Protein Conformations & Functions', 'https://www.youtube.com/watch?v=kmggUcIFm30&t=4152s&end=5716s', true, 1),
('65d29b56-0440-3109-0000-000000000004', '65d29b56-0440-2109-0000-000000000004', 'VIDEO', 'Lipids: Fatty Acids, Glycerol, Triglycerides, Phospholipids & Sterols', 'https://www.youtube.com/watch?v=kmggUcIFm30&t=5716s&end=6855s', true, 1),
('65d29b56-0440-3109-0000-000000000005', '65d29b56-0440-2109-0000-000000000005', 'VIDEO', 'Nucleic Acids: Nucleotides, DNA Double Helix Structure & RNA Types', 'https://www.youtube.com/watch?v=kmggUcIFm30&t=6855s&end=7623s', true, 1),
('65d29b56-0440-3109-0000-000000000006', '65d29b56-0440-2109-0000-000000000006', 'VIDEO', 'Enzymes: Mechanism of Action, Activation Energy, Factors, Classification & Co-factors', 'https://www.youtube.com/watch?v=kmggUcIFm30&t=7623s&end=9697s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
