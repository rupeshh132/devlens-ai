-- V316__seed_class12_chem_ch10_biomolecules_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 10 (Biomolecules)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Biomolecules | lkAIoq7vN6o)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7673s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Biomolecules)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000010';

-- 2. Insert 6 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2210-0000-000000000001', '65d29b56-0430-1200-0000-000000000010', 'Carbohydrates Classification, Monosaccharides: D-L Configuration & Open-Chain Structure of Glucose', 1, true),
('65d29b56-0430-2210-0000-000000000002', '65d29b56-0430-1200-0000-000000000010', 'Cyclic Structures of D-Glucose and D-Fructose: Pyranose & Furanose Haworth Projections', 2, true),
('65d29b56-0430-2210-0000-000000000003', '65d29b56-0430-1200-0000-000000000010', 'Disaccharides (Glycosidic Linkage in Sucrose, Maltose, Lactose) & Polysaccharides (Starch, Cellulose)', 3, true),
('65d29b56-0430-2210-0000-000000000004', '65d29b56-0430-1200-0000-000000000010', 'Proteins & Amino Acids: Zwitterions, Essential/Non-Essential Amino Acids, Peptide Bonds & Primary Structure', 4, true),
('65d29b56-0430-2210-0000-000000000005', '65d29b56-0430-1200-0000-000000000010', 'Tertiary/Quaternary Protein Structures, Denaturation of Proteins & Enzyme Action Specificity', 5, true),
('65d29b56-0430-2210-0000-000000000006', '65d29b56-0430-1200-0000-000000000010', 'Vitamins Classification (Fat-Soluble vs Water-Soluble), Nucleic Acids (DNA vs RNA, Double Helix) & Hormones', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3210-0000-000000000001', '65d29b56-0430-2210-0000-000000000001', 'VIDEO', 'Carbohydrates Classification, Monosaccharides: D-L Configuration & Open-Chain Structure of Glucose', 'https://www.youtube.com/watch?v=lkAIoq7vN6o&end=1111s', true, 1),
('65d29b56-0430-3210-0000-000000000002', '65d29b56-0430-2210-0000-000000000002', 'VIDEO', 'Cyclic Structures of D-Glucose and D-Fructose: Pyranose & Furanose Haworth Projections', 'https://www.youtube.com/watch?v=lkAIoq7vN6o&t=1111s&end=3835s', true, 1),
('65d29b56-0430-3210-0000-000000000003', '65d29b56-0430-2210-0000-000000000003', 'VIDEO', 'Disaccharides (Glycosidic Linkage in Sucrose, Maltose, Lactose) & Polysaccharides (Starch, Cellulose)', 'https://www.youtube.com/watch?v=lkAIoq7vN6o&t=3835s&end=6259s', true, 1),
('65d29b56-0430-3210-0000-000000000004', '65d29b56-0430-2210-0000-000000000004', 'VIDEO', 'Proteins & Amino Acids: Zwitterions, Essential/Non-Essential Amino Acids, Peptide Bonds & Primary Structure', 'https://www.youtube.com/watch?v=lkAIoq7vN6o&t=6259s&end=7047s', true, 1),
('65d29b56-0430-3210-0000-000000000005', '65d29b56-0430-2210-0000-000000000005', 'VIDEO', 'Tertiary/Quaternary Protein Structures, Denaturation of Proteins & Enzyme Action Specificity', 'https://www.youtube.com/watch?v=lkAIoq7vN6o&t=7047s&end=7356s', true, 1),
('65d29b56-0430-3210-0000-000000000006', '65d29b56-0430-2210-0000-000000000006', 'VIDEO', 'Vitamins Classification (Fat-Soluble vs Water-Soluble), Nucleic Acids (DNA vs RNA, Double Helix) & Hormones', 'https://www.youtube.com/watch?v=lkAIoq7vN6o&t=7356s&end=7673s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
