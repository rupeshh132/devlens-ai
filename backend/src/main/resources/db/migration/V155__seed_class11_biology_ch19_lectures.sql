-- V155__seed_class11_biology_ch19_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 19 (Chemical Coordination and Integration)
-- Video: PW Class 11 Science (Chemical Coordination And Integration | Full Chapter in ONE SHOT | Chapter 19 | Class 11th Biology | Thrj60T2uxo)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6776s / 1h 52m 56s)

-- 1. Remove old placeholder topics & content items for Chapter 19 (Chemical Coordination and Integration)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000019'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000019';

-- 2. Insert 6 Verified Master Topics for Chapter 19 (Chemical Coordination and Integration)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2119-0000-000000000001', '65d29b56-0440-1100-0000-000000000019', 'Endocrine System Overview, Gland Types & Chemical Nature of Hormones', 1, true),
('65d29b56-0440-2119-0000-000000000002', '65d29b56-0440-1100-0000-000000000019', 'The Hypothalamus, Pituitary Gland & Related Disorders (Gigantism, Dwarfism, Acromegaly)', 2, true),
('65d29b56-0440-2119-0000-000000000003', '65d29b56-0440-1100-0000-000000000019', 'Thyroid, Parathyroid, Thymus & Pineal Glands (Thyroxine, TCT, PTH, Thymosins & Melatonin)', 3, true),
('65d29b56-0440-2119-0000-000000000004', '65d29b56-0440-1100-0000-000000000019', 'Adrenal Glands (Cortex & Medulla) and Endocrine Pancreas (Insulin, Glucagon & Diabetes)', 4, true),
('65d29b56-0440-2119-0000-000000000005', '65d29b56-0440-1100-0000-000000000019', 'Gonadal Hormones (Testes & Ovaries) and Hormones of Other Organs (Heart, Kidney, GIT)', 5, true),
('65d29b56-0440-2119-0000-000000000006', '65d29b56-0440-1100-0000-000000000019', 'Mechanism of Hormone Action: Membrane-Bound Receptors, Second Messengers & Intracellular Regulation', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3119-0000-000000000001', '65d29b56-0440-2119-0000-000000000001', 'VIDEO', 'Endocrine System Overview, Gland Types & Chemical Nature of Hormones', 'https://www.youtube.com/watch?v=Thrj60T2uxo&end=399s', true, 1),
('65d29b56-0440-3119-0000-000000000002', '65d29b56-0440-2119-0000-000000000002', 'VIDEO', 'The Hypothalamus, Pituitary Gland & Related Disorders (Gigantism, Dwarfism, Acromegaly)', 'https://www.youtube.com/watch?v=Thrj60T2uxo&t=399s&end=3030s', true, 1),
('65d29b56-0440-3119-0000-000000000003', '65d29b56-0440-2119-0000-000000000003', 'VIDEO', 'Thyroid, Parathyroid, Thymus & Pineal Glands (Thyroxine, TCT, PTH, Thymosins & Melatonin)', 'https://www.youtube.com/watch?v=Thrj60T2uxo&t=3030s&end=4584s', true, 1),
('65d29b56-0440-3119-0000-000000000004', '65d29b56-0440-2119-0000-000000000004', 'VIDEO', 'Adrenal Glands (Cortex & Medulla) and Endocrine Pancreas (Insulin, Glucagon & Diabetes)', 'https://www.youtube.com/watch?v=Thrj60T2uxo&t=4584s&end=5591s', true, 1),
('65d29b56-0440-3119-0000-000000000005', '65d29b56-0440-2119-0000-000000000005', 'VIDEO', 'Gonadal Hormones (Testes & Ovaries) and Hormones of Other Organs (Heart, Kidney, GIT)', 'https://www.youtube.com/watch?v=Thrj60T2uxo&t=5591s&end=6325s', true, 1),
('65d29b56-0440-3119-0000-000000000006', '65d29b56-0440-2119-0000-000000000006', 'VIDEO', 'Mechanism of Hormone Action: Membrane-Bound Receptors, Second Messengers & Intracellular Regulation', 'https://www.youtube.com/watch?v=Thrj60T2uxo&t=6325s&end=6776s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
