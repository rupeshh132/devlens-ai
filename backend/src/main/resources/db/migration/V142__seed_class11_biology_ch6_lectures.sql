-- V142__seed_class11_biology_ch6_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 6 (Anatomy of Flowering Plants)
-- Video: PW Class 11 Science (Anatomy Of Flowering Plants | Full Chapter in ONE SHOT | Chapter 6 | Class 11 Biology | CtZ4FG6AAQ4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 14215s / 3h 56m 55s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Anatomy of Flowering Plants)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000006';

-- 2. Insert 5 Verified Master Topics for Chapter 6 (Anatomy of Flowering Plants)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2106-0000-000000000001', '65d29b56-0440-1100-0000-000000000006', 'Plant Tissues: Meristematic & Simple Permanent Tissues (Parenchyma, Collenchyma, Sclerenchyma)', 1, true),
('65d29b56-0440-2106-0000-000000000002', '65d29b56-0440-1100-0000-000000000006', 'Tissue Systems: Epidermal, Ground & Vascular Systems (Xylem, Phloem & Bundle Types)', 2, true),
('65d29b56-0440-2106-0000-000000000003', '65d29b56-0440-1100-0000-000000000006', 'Anatomy of Dicotyledonous and Monocotyledonous Roots', 3, true),
('65d29b56-0440-2106-0000-000000000004', '65d29b56-0440-1100-0000-000000000006', 'Anatomy of Dicotyledonous and Monocotyledonous Stems', 4, true),
('65d29b56-0440-2106-0000-000000000005', '65d29b56-0440-1100-0000-000000000006', 'Anatomy of Dorsiventral (Dicot) and Isobilateral (Monocot) Leaves', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3106-0000-000000000001', '65d29b56-0440-2106-0000-000000000001', 'VIDEO', 'Plant Tissues: Meristematic & Simple Permanent Tissues (Parenchyma, Collenchyma, Sclerenchyma)', 'https://www.youtube.com/watch?v=CtZ4FG6AAQ4&end=2028s', true, 1),
('65d29b56-0440-3106-0000-000000000002', '65d29b56-0440-2106-0000-000000000002', 'VIDEO', 'Tissue Systems: Epidermal, Ground & Vascular Systems (Xylem, Phloem & Bundle Types)', 'https://www.youtube.com/watch?v=CtZ4FG6AAQ4&t=2028s&end=6968s', true, 1),
('65d29b56-0440-3106-0000-000000000003', '65d29b56-0440-2106-0000-000000000003', 'VIDEO', 'Anatomy of Dicotyledonous and Monocotyledonous Roots', 'https://www.youtube.com/watch?v=CtZ4FG6AAQ4&t=6968s&end=9979s', true, 1),
('65d29b56-0440-3106-0000-000000000004', '65d29b56-0440-2106-0000-000000000004', 'VIDEO', 'Anatomy of Dicotyledonous and Monocotyledonous Stems', 'https://www.youtube.com/watch?v=CtZ4FG6AAQ4&t=9979s&end=12186s', true, 1),
('65d29b56-0440-3106-0000-000000000005', '65d29b56-0440-2106-0000-000000000005', 'VIDEO', 'Anatomy of Dorsiventral (Dicot) and Isobilateral (Monocot) Leaves', 'https://www.youtube.com/watch?v=CtZ4FG6AAQ4&t=12186s&end=14215s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
