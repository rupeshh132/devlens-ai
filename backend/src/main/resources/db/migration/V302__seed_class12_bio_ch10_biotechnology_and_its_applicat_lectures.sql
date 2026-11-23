-- V302__seed_class12_bio_ch10_biotechnology_and_its_applicat_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 10 (Biotechnology and its Applications)
-- Video: PW NEET / Class 12 Boards (Biotech Applications Masterclass) (Biotechnology and its Applications | v2dm3-4PCPY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8847s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Biotechnology and its Applications)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000010';

-- 2. Insert 5 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2210-0000-000000000001', '65d29b56-0440-1200-0000-000000000010', 'Biotechnology Applications in Agriculture: GM Crops Benefits & Food Nutrition Enhancement', 1, true),
('65d29b56-0440-2210-0000-000000000002', '65d29b56-0440-1200-0000-000000000010', 'Pest Resistance in Plants: Bt Cotton (Cry Toxins) & RNA Interference (RNAi) in Tobacco Plants', 2, true),
('65d29b56-0440-2210-0000-000000000003', '65d29b56-0440-1200-0000-000000000010', 'Biotechnology in Healthcare: Genetically Engineered Human Insulin (Humulin) & ADA Gene Therapy', 3, true),
('65d29b56-0440-2210-0000-000000000004', '65d29b56-0440-1200-0000-000000000010', 'Molecular Diagnosis (PCR, ELISA, Autoradiography) & Transgenic Animals for Vaccine/Toxicity Testing', 4, true),
('65d29b56-0440-2210-0000-000000000005', '65d29b56-0440-1200-0000-000000000010', 'Ethical Issues, GEAC Regulation, Biopiracy of Bio-Resources & Patent Controversies', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3210-0000-000000000001', '65d29b56-0440-2210-0000-000000000001', 'VIDEO', 'Biotechnology Applications in Agriculture: GM Crops Benefits & Food Nutrition Enhancement', 'https://www.youtube.com/watch?v=v2dm3-4PCPY&end=1618s', true, 1),
('65d29b56-0440-3210-0000-000000000002', '65d29b56-0440-2210-0000-000000000002', 'VIDEO', 'Pest Resistance in Plants: Bt Cotton (Cry Toxins) & RNA Interference (RNAi) in Tobacco Plants', 'https://www.youtube.com/watch?v=v2dm3-4PCPY&t=1618s&end=3969s', true, 1),
('65d29b56-0440-3210-0000-000000000003', '65d29b56-0440-2210-0000-000000000003', 'VIDEO', 'Biotechnology in Healthcare: Genetically Engineered Human Insulin (Humulin) & ADA Gene Therapy', 'https://www.youtube.com/watch?v=v2dm3-4PCPY&t=3969s&end=5714s', true, 1),
('65d29b56-0440-3210-0000-000000000004', '65d29b56-0440-2210-0000-000000000004', 'VIDEO', 'Molecular Diagnosis (PCR, ELISA, Autoradiography) & Transgenic Animals for Vaccine/Toxicity Testing', 'https://www.youtube.com/watch?v=v2dm3-4PCPY&t=5714s&end=7765s', true, 1),
('65d29b56-0440-3210-0000-000000000005', '65d29b56-0440-2210-0000-000000000005', 'VIDEO', 'Ethical Issues, GEAC Regulation, Biopiracy of Bio-Resources & Patent Controversies', 'https://www.youtube.com/watch?v=v2dm3-4PCPY&t=7765s&end=8847s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
