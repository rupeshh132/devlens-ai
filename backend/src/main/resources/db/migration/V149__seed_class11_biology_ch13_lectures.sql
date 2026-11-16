-- V149__seed_class11_biology_ch13_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 13 (Plant Growth and Development)
-- Video: PW Class 11 Science (Plant Growth and Development | Full Chapter in ONE SHOT | Chapter 13 | Class 11 Biology | HndqlohQ6pw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 10550s / 2h 55m 50s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Plant Growth and Development)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000013';

-- 2. Insert 5 Verified Master Topics for Chapter 13 (Plant Growth and Development)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2113-0000-000000000001', '65d29b56-0440-1100-0000-000000000013', 'Plant Growth: Characteristics, Indeterminate Nature, Measurement & Phases of Growth', 1, true),
('65d29b56-0440-2113-0000-000000000002', '65d29b56-0440-1100-0000-000000000013', 'Growth Rates: Arithmetic vs Geometric Growth, Sigmoid Curve & Quantitative Comparisons', 2, true),
('65d29b56-0440-2113-0000-000000000003', '65d29b56-0440-1100-0000-000000000013', 'Differentiation, Dedifferentiation, Redifferentiation, Plasticity & Growth Conditions', 3, true),
('65d29b56-0440-2113-0000-000000000004', '65d29b56-0440-1100-0000-000000000013', 'Plant Growth Promoters: Auxins, Gibberellins and Cytokinins (Discovery, Roles & Bioassays)', 4, true),
('65d29b56-0440-2113-0000-000000000005', '65d29b56-0440-1100-0000-000000000013', 'Plant Growth Inhibitors: Ethylene, Abscisic Acid (ABA) & Seed Dormancy', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3113-0000-000000000001', '65d29b56-0440-2113-0000-000000000001', 'VIDEO', 'Plant Growth: Characteristics, Indeterminate Nature, Measurement & Phases of Growth', 'https://www.youtube.com/watch?v=HndqlohQ6pw&end=3120s', true, 1),
('65d29b56-0440-3113-0000-000000000002', '65d29b56-0440-2113-0000-000000000002', 'VIDEO', 'Growth Rates: Arithmetic vs Geometric Growth, Sigmoid Curve & Quantitative Comparisons', 'https://www.youtube.com/watch?v=HndqlohQ6pw&t=3120s&end=4816s', true, 1),
('65d29b56-0440-3113-0000-000000000003', '65d29b56-0440-2113-0000-000000000003', 'VIDEO', 'Differentiation, Dedifferentiation, Redifferentiation, Plasticity & Growth Conditions', 'https://www.youtube.com/watch?v=HndqlohQ6pw&t=4816s&end=6703s', true, 1),
('65d29b56-0440-3113-0000-000000000004', '65d29b56-0440-2113-0000-000000000004', 'VIDEO', 'Plant Growth Promoters: Auxins, Gibberellins and Cytokinins (Discovery, Roles & Bioassays)', 'https://www.youtube.com/watch?v=HndqlohQ6pw&t=6703s&end=9685s', true, 1),
('65d29b56-0440-3113-0000-000000000005', '65d29b56-0440-2113-0000-000000000005', 'VIDEO', 'Plant Growth Inhibitors: Ethylene, Abscisic Acid (ABA) & Seed Dormancy', 'https://www.youtube.com/watch?v=HndqlohQ6pw&t=9685s&end=10550s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
