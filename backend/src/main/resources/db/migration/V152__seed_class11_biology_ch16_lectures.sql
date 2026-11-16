-- V152__seed_class11_biology_ch16_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 16 (Excretory Products and Their Elimination)
-- Video: PW Class 11 Science (Excretory Products and their Elimination Class 11 One Shot | Aarushi Tuli Ma'am | M7C0sRGBrJA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5001s / 1h 23m 21s)

-- 1. Remove old placeholder topics & content items for Chapter 16 (Excretory Products and Their Elimination)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000016';

-- 2. Insert 6 Verified Master Topics for Chapter 16 (Excretory Products and Their Elimination)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2116-0000-000000000001', '65d29b56-0440-1100-0000-000000000016', 'Modes of Excretion (Ammonotelism, Ureotelism, Uricotelism) & Excretory Organs in Animalia', 1, true),
('65d29b56-0440-2116-0000-000000000002', '65d29b56-0440-1100-0000-000000000016', 'Human Excretory System: Gross Kidney Anatomy, Histology & Structure of Nephron', 2, true),
('65d29b56-0440-2116-0000-000000000003', '65d29b56-0440-1100-0000-000000000016', 'Mechanism of Urine Formation: Glomerular Filtration, Tubular Reabsorption & Secretion', 3, true),
('65d29b56-0440-2116-0000-000000000004', '65d29b56-0440-1100-0000-000000000016', 'Function of Tubules, Countercurrent Mechanism & Micturition Reflex', 4, true),
('65d29b56-0440-2116-0000-000000000005', '65d29b56-0440-1100-0000-000000000016', 'Regulation of Kidney Function: Hypothalamus (ADH), JGA (RAAS) & Heart (ANF)', 5, true),
('65d29b56-0440-2116-0000-000000000006', '65d29b56-0440-1100-0000-000000000016', 'Accessory Excretory Organs (Lungs, Liver, Skin) & Excretory Disorders (Uremia, Renal Calculi, Dialysis)', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3116-0000-000000000001', '65d29b56-0440-2116-0000-000000000001', 'VIDEO', 'Modes of Excretion (Ammonotelism, Ureotelism, Uricotelism) & Excretory Organs in Animalia', 'https://www.youtube.com/watch?v=M7C0sRGBrJA&end=425s', true, 1),
('65d29b56-0440-3116-0000-000000000002', '65d29b56-0440-2116-0000-000000000002', 'VIDEO', 'Human Excretory System: Gross Kidney Anatomy, Histology & Structure of Nephron', 'https://www.youtube.com/watch?v=M7C0sRGBrJA&t=425s&end=1867s', true, 1),
('65d29b56-0440-3116-0000-000000000003', '65d29b56-0440-2116-0000-000000000003', 'VIDEO', 'Mechanism of Urine Formation: Glomerular Filtration, Tubular Reabsorption & Secretion', 'https://www.youtube.com/watch?v=M7C0sRGBrJA&t=1867s&end=3502s', true, 1),
('65d29b56-0440-3116-0000-000000000004', '65d29b56-0440-2116-0000-000000000004', 'VIDEO', 'Function of Tubules, Countercurrent Mechanism & Micturition Reflex', 'https://www.youtube.com/watch?v=M7C0sRGBrJA&t=3502s&end=4230s', true, 1),
('65d29b56-0440-3116-0000-000000000005', '65d29b56-0440-2116-0000-000000000005', 'VIDEO', 'Regulation of Kidney Function: Hypothalamus (ADH), JGA (RAAS) & Heart (ANF)', 'https://www.youtube.com/watch?v=M7C0sRGBrJA&t=4230s&end=4567s', true, 1),
('65d29b56-0440-3116-0000-000000000006', '65d29b56-0440-2116-0000-000000000006', 'VIDEO', 'Accessory Excretory Organs (Lungs, Liver, Skin) & Excretory Disorders (Uremia, Renal Calculi, Dialysis)', 'https://www.youtube.com/watch?v=M7C0sRGBrJA&t=4567s&end=5001s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
