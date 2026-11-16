-- V143__seed_class11_biology_ch7_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 7 (Structural Organization in Animals)
-- Video: PW Class 11 Science (Structural Organisation in Animals | Full Chapter in ONE SHOT | Chapter 7 | Class 11 Biology | 0qtXzH_I1aA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 10650s / 2h 57m 30s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Structural Organization in Animals)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000007';

-- 2. Insert 5 Verified Master Topics for Chapter 7 (Structural Organization in Animals)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2107-0000-000000000001', '65d29b56-0440-1100-0000-000000000007', 'Animal Tissues Overview (Epithelial, Connective, Muscular & Neural Tissues)', 1, true),
('65d29b56-0440-2107-0000-000000000002', '65d29b56-0440-1100-0000-000000000007', 'Morphology of Frog (Rana tigrina): External Features, Body Divisions & Skin', 2, true),
('65d29b56-0440-2107-0000-000000000003', '65d29b56-0440-1100-0000-000000000007', 'Frog Anatomy: Digestive System & Respiratory System', 3, true),
('65d29b56-0440-2107-0000-000000000004', '65d29b56-0440-1100-0000-000000000007', 'Frog Anatomy: Circulatory (Blood Vascular & Lymphatic) System', 4, true),
('65d29b56-0440-2107-0000-000000000005', '65d29b56-0440-1100-0000-000000000007', 'Frog Anatomy: Excretory, Nervous, Sensory & Urinogenital / Reproductive Systems', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3107-0000-000000000001', '65d29b56-0440-2107-0000-000000000001', 'VIDEO', 'Animal Tissues Overview (Epithelial, Connective, Muscular & Neural Tissues)', 'https://www.youtube.com/watch?v=0qtXzH_I1aA&end=6371s', true, 1),
('65d29b56-0440-3107-0000-000000000002', '65d29b56-0440-2107-0000-000000000002', 'VIDEO', 'Morphology of Frog (Rana tigrina): External Features, Body Divisions & Skin', 'https://www.youtube.com/watch?v=0qtXzH_I1aA&t=6371s&end=7867s', true, 1),
('65d29b56-0440-3107-0000-000000000003', '65d29b56-0440-2107-0000-000000000003', 'VIDEO', 'Frog Anatomy: Digestive System & Respiratory System', 'https://www.youtube.com/watch?v=0qtXzH_I1aA&t=7867s&end=8528s', true, 1),
('65d29b56-0440-3107-0000-000000000004', '65d29b56-0440-2107-0000-000000000004', 'VIDEO', 'Frog Anatomy: Circulatory (Blood Vascular & Lymphatic) System', 'https://www.youtube.com/watch?v=0qtXzH_I1aA&t=8528s&end=9328s', true, 1),
('65d29b56-0440-3107-0000-000000000005', '65d29b56-0440-2107-0000-000000000005', 'VIDEO', 'Frog Anatomy: Excretory, Nervous, Sensory & Urinogenital / Reproductive Systems', 'https://www.youtube.com/watch?v=0qtXzH_I1aA&t=9328s&end=10650s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
