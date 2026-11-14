-- V141__seed_class11_biology_ch5_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 5 (Morphology of Flowering Plants)
-- Video: PW Class 11 Science (Morphology Of Flowering Plants | Full Chapter in ONE SHOT | Chapter 5 | Class 11 Biology | lfbG0NUiHLs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 16800s / 4h 40m 00s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Morphology of Flowering Plants)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000005';

-- 2. Insert 6 Verified Master Topics for Chapter 5 (Morphology of Flowering Plants)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2105-0000-000000000001', '65d29b56-0440-1100-0000-000000000005', 'Morphology of Root: Types (Tap, Adventitious), Regions & Modifications', 1, true),
('65d29b56-0440-2105-0000-000000000002', '65d29b56-0440-1100-0000-000000000005', 'Morphology of Stem: Characteristics, Nodes, Internodes & Modifications', 2, true),
('65d29b56-0440-2105-0000-000000000003', '65d29b56-0440-1100-0000-000000000005', 'Morphology of Leaf: Parts, Venation, Simple vs Compound Leaves, Phyllotaxy & Modifications', 3, true),
('65d29b56-0440-2105-0000-000000000004', '65d29b56-0440-1100-0000-000000000005', 'Inflorescence (Racemose & Cymose) & Flower Structure (Calyx, Corolla, Aestivation)', 4, true),
('65d29b56-0440-2105-0000-000000000005', '65d29b56-0440-1100-0000-000000000005', 'Androecium, Gynoecium, Placentation, Fruit and Seed Structure', 5, true),
('65d29b56-0440-2105-0000-000000000006', '65d29b56-0440-1100-0000-000000000005', 'Semi-Technical Description of Family Solanaceae (Floral Formula & Floral Diagram)', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3105-0000-000000000001', '65d29b56-0440-2105-0000-000000000001', 'VIDEO', 'Morphology of Root: Types (Tap, Adventitious), Regions & Modifications', 'https://www.youtube.com/watch?v=lfbG0NUiHLs&end=3127s', true, 1),
('65d29b56-0440-3105-0000-000000000002', '65d29b56-0440-2105-0000-000000000002', 'VIDEO', 'Morphology of Stem: Characteristics, Nodes, Internodes & Modifications', 'https://www.youtube.com/watch?v=lfbG0NUiHLs&t=3127s&end=3952s', true, 1),
('65d29b56-0440-3105-0000-000000000003', '65d29b56-0440-2105-0000-000000000003', 'VIDEO', 'Morphology of Leaf: Parts, Venation, Simple vs Compound Leaves, Phyllotaxy & Modifications', 'https://www.youtube.com/watch?v=lfbG0NUiHLs&t=3952s&end=6492s', true, 1),
('65d29b56-0440-3105-0000-000000000004', '65d29b56-0440-2105-0000-000000000004', 'VIDEO', 'Inflorescence (Racemose & Cymose) & Flower Structure (Calyx, Corolla, Aestivation)', 'https://www.youtube.com/watch?v=lfbG0NUiHLs&t=6492s&end=11187s', true, 1),
('65d29b56-0440-3105-0000-000000000005', '65d29b56-0440-2105-0000-000000000005', 'VIDEO', 'Androecium, Gynoecium, Placentation, Fruit and Seed Structure', 'https://www.youtube.com/watch?v=lfbG0NUiHLs&t=11187s&end=15775s', true, 1),
('65d29b56-0440-3105-0000-000000000006', '65d29b56-0440-2105-0000-000000000006', 'VIDEO', 'Semi-Technical Description of Family Solanaceae (Floral Formula & Floral Diagram)', 'https://www.youtube.com/watch?v=lfbG0NUiHLs&t=15775s&end=16800s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
