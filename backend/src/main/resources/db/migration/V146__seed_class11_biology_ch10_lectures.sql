-- V146__seed_class11_biology_ch10_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 10 (Cell Cycle and Cell Division)
-- Video: PW Class 11 Science (Cell Cycle and Cell Division | Full Chapter in ONE SHOT | Chapter 10 | Class 11 Biology | 4bTa-o535Jw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16297s / 4h 31m 37s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Cell Cycle and Cell Division)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000010';

-- 2. Insert 5 Verified Master Topics for Chapter 10 (Cell Cycle and Cell Division)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2110-0000-000000000001', '65d29b56-0440-1100-0000-000000000010', 'Cell Cycle Overview, Interphase (G1, S, G2, G0) & Chromosomal Basics', 1, true),
('65d29b56-0440-2110-0000-000000000002', '65d29b56-0440-1100-0000-000000000010', 'M Phase: Mitosis (Prophase, Metaphase, Anaphase & Telophase)', 2, true),
('65d29b56-0440-2110-0000-000000000003', '65d29b56-0440-1100-0000-000000000010', 'Cytokinesis in Plant vs Animal Cells & Significance of Mitosis', 3, true),
('65d29b56-0440-2110-0000-000000000004', '65d29b56-0440-1100-0000-000000000010', 'Meiosis I: Stages of Prophase I, Crossing Over, Metaphase I to Telophase I', 4, true),
('65d29b56-0440-2110-0000-000000000005', '65d29b56-0440-1100-0000-000000000010', 'Meiosis II, Cytokinesis & Biological Significance of Meiosis', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3110-0000-000000000001', '65d29b56-0440-2110-0000-000000000001', 'VIDEO', 'Cell Cycle Overview, Interphase (G1, S, G2, G0) & Chromosomal Basics', 'https://www.youtube.com/watch?v=4bTa-o535Jw&end=6570s', true, 1),
('65d29b56-0440-3110-0000-000000000002', '65d29b56-0440-2110-0000-000000000002', 'VIDEO', 'M Phase: Mitosis (Prophase, Metaphase, Anaphase & Telophase)', 'https://www.youtube.com/watch?v=4bTa-o535Jw&t=6570s&end=9529s', true, 1),
('65d29b56-0440-3110-0000-000000000003', '65d29b56-0440-2110-0000-000000000003', 'VIDEO', 'Cytokinesis in Plant vs Animal Cells & Significance of Mitosis', 'https://www.youtube.com/watch?v=4bTa-o535Jw&t=9529s&end=10782s', true, 1),
('65d29b56-0440-3110-0000-000000000004', '65d29b56-0440-2110-0000-000000000004', 'VIDEO', 'Meiosis I: Stages of Prophase I, Crossing Over, Metaphase I to Telophase I', 'https://www.youtube.com/watch?v=4bTa-o535Jw&t=10782s&end=15452s', true, 1),
('65d29b56-0440-3110-0000-000000000005', '65d29b56-0440-2110-0000-000000000005', 'VIDEO', 'Meiosis II, Cytokinesis & Biological Significance of Meiosis', 'https://www.youtube.com/watch?v=4bTa-o535Jw&t=15452s&end=16297s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
