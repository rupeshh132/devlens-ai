-- V147__seed_class11_biology_ch11_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 11 (Photosynthesis in Higher Plants)
-- Video: PW Class 11 Science (Photosynthesis in Higher Plants | Full Chapter in ONE SHOT | Chapter 11 | Class 11 Biology | 8pARJFHbL0o)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 15083s / 4h 11m 23s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Photosynthesis in Higher Plants)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000011';

-- 2. Insert 6 Verified Master Topics for Chapter 11 (Photosynthesis in Higher Plants)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2111-0000-000000000001', '65d29b56-0440-1100-0000-000000000011', 'Early Historical Experiments & Chloroplast Structure as Photosynthetic Site', 1, true),
('65d29b56-0440-2111-0000-000000000002', '65d29b56-0440-1100-0000-000000000011', 'Photosynthetic Pigments, Paper Chromatography, Absorption vs Action Spectrum', 2, true),
('65d29b56-0440-2111-0000-000000000003', '65d29b56-0440-1100-0000-000000000011', 'Photochemical Phase (Light Reaction): PS I, PS II & Photophosphorylation (Z-Scheme)', 3, true),
('65d29b56-0440-2111-0000-000000000004', '65d29b56-0440-1100-0000-000000000011', 'Chemiosmotic Hypothesis of ATP Synthesis across Thylakoid Membrane', 4, true),
('65d29b56-0440-2111-0000-000000000005', '65d29b56-0440-1100-0000-000000000011', 'Biosynthetic Phase (Dark Reaction): Calvin Cycle (C3) & Photorespiration (C2 Cycle)', 5, true),
('65d29b56-0440-2111-0000-000000000006', '65d29b56-0440-1100-0000-000000000011', 'Hatch-Slack Pathway (C4 Cycle), Kranz Anatomy & Factors Affecting Photosynthesis', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3111-0000-000000000001', '65d29b56-0440-2111-0000-000000000001', 'VIDEO', 'Early Historical Experiments & Chloroplast Structure as Photosynthetic Site', 'https://www.youtube.com/watch?v=8pARJFHbL0o&end=4860s', true, 1),
('65d29b56-0440-3111-0000-000000000002', '65d29b56-0440-2111-0000-000000000002', 'VIDEO', 'Photosynthetic Pigments, Paper Chromatography, Absorption vs Action Spectrum', 'https://www.youtube.com/watch?v=8pARJFHbL0o&t=4860s&end=6095s', true, 1),
('65d29b56-0440-3111-0000-000000000003', '65d29b56-0440-2111-0000-000000000003', 'VIDEO', 'Photochemical Phase (Light Reaction): PS I, PS II & Photophosphorylation (Z-Scheme)', 'https://www.youtube.com/watch?v=8pARJFHbL0o&t=6095s&end=9640s', true, 1),
('65d29b56-0440-3111-0000-000000000004', '65d29b56-0440-2111-0000-000000000004', 'VIDEO', 'Chemiosmotic Hypothesis of ATP Synthesis across Thylakoid Membrane', 'https://www.youtube.com/watch?v=8pARJFHbL0o&t=9640s&end=10308s', true, 1),
('65d29b56-0440-3111-0000-000000000005', '65d29b56-0440-2111-0000-000000000005', 'VIDEO', 'Biosynthetic Phase (Dark Reaction): Calvin Cycle (C3) & Photorespiration (C2 Cycle)', 'https://www.youtube.com/watch?v=8pARJFHbL0o&t=10308s&end=12780s', true, 1),
('65d29b56-0440-3111-0000-000000000006', '65d29b56-0440-2111-0000-000000000006', 'VIDEO', 'Hatch-Slack Pathway (C4 Cycle), Kranz Anatomy & Factors Affecting Photosynthesis', 'https://www.youtube.com/watch?v=8pARJFHbL0o&t=12780s&end=15083s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
