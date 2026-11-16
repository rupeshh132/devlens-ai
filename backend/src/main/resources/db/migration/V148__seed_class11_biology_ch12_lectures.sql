-- V148__seed_class11_biology_ch12_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 12 (Respiration in Plants)
-- Video: PW Class 11 Science (Respiration in Plants | Full Chapter in ONE SHOT | Chapter 12 | Class 11 Biology | xiwwNqRg9t8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16339s / 4h 32m 19s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Respiration in Plants)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000012';

-- 2. Insert 6 Verified Master Topics for Chapter 12 (Respiration in Plants)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2112-0000-000000000001', '65d29b56-0440-1100-0000-000000000012', 'Cellular Respiration & Gas Exchange in Plants', 1, true),
('65d29b56-0440-2112-0000-000000000002', '65d29b56-0440-1100-0000-000000000012', 'Glycolysis (EMP Pathway): Steps, Substrate Phosphorylation & Energetics', 2, true),
('65d29b56-0440-2112-0000-000000000003', '65d29b56-0440-1100-0000-000000000012', 'Anaerobic Respiration: Fermentation (Alcoholic & Lactic Acid)', 3, true),
('65d29b56-0440-2112-0000-000000000004', '65d29b56-0440-1100-0000-000000000012', 'Aerobic Respiration: Link Reaction & Krebs Cycle (TCA Cycle)', 4, true),
('65d29b56-0440-2112-0000-000000000005', '65d29b56-0440-1100-0000-000000000012', 'Electron Transport System (ETS) & Oxidative Phosphorylation (Complexes I-V)', 5, true),
('65d29b56-0440-2112-0000-000000000006', '65d29b56-0440-1100-0000-000000000012', 'Respiratory Balance Sheet, Amphibolic Pathway & Respiratory Quotient (RQ)', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3112-0000-000000000001', '65d29b56-0440-2112-0000-000000000001', 'VIDEO', 'Cellular Respiration & Gas Exchange in Plants', 'https://www.youtube.com/watch?v=xiwwNqRg9t8&end=3517s', true, 1),
('65d29b56-0440-3112-0000-000000000002', '65d29b56-0440-2112-0000-000000000002', 'VIDEO', 'Glycolysis (EMP Pathway): Steps, Substrate Phosphorylation & Energetics', 'https://www.youtube.com/watch?v=xiwwNqRg9t8&t=3517s&end=6091s', true, 1),
('65d29b56-0440-3112-0000-000000000003', '65d29b56-0440-2112-0000-000000000003', 'VIDEO', 'Anaerobic Respiration: Fermentation (Alcoholic & Lactic Acid)', 'https://www.youtube.com/watch?v=xiwwNqRg9t8&t=6091s&end=7132s', true, 1),
('65d29b56-0440-3112-0000-000000000004', '65d29b56-0440-2112-0000-000000000004', 'VIDEO', 'Aerobic Respiration: Link Reaction & Krebs Cycle (TCA Cycle)', 'https://www.youtube.com/watch?v=xiwwNqRg9t8&t=7132s&end=10274s', true, 1),
('65d29b56-0440-3112-0000-000000000005', '65d29b56-0440-2112-0000-000000000005', 'VIDEO', 'Electron Transport System (ETS) & Oxidative Phosphorylation (Complexes I-V)', 'https://www.youtube.com/watch?v=xiwwNqRg9t8&t=10274s&end=14129s', true, 1),
('65d29b56-0440-3112-0000-000000000006', '65d29b56-0440-2112-0000-000000000006', 'VIDEO', 'Respiratory Balance Sheet, Amphibolic Pathway & Respiratory Quotient (RQ)', 'https://www.youtube.com/watch?v=xiwwNqRg9t8&t=14129s&end=16339s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
