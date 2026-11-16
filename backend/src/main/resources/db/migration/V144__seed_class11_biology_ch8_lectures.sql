-- V144__seed_class11_biology_ch8_lectures.sql
-- Seeds verified 7 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 8 (Cell: The Unit of Life)
-- Video: PW Class 11 Science (Cell: The Unit of Life | Full Chapter in ONE SHOT | Chapter 8 | Class 11 Biology | 6rpCt0IKMzo)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 19200s / 5h 20m 00s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Cell: The Unit of Life)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000008';

-- 2. Insert 7 Verified Master Topics for Chapter 8 (Cell: The Unit of Life)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2108-0000-000000000001', '65d29b56-0440-1100-0000-000000000008', 'Cell Theory & Overview of Prokaryotic vs Eukaryotic Cells', 1, true),
('65d29b56-0440-2108-0000-000000000002', '65d29b56-0440-1100-0000-000000000008', 'Prokaryotic Cell: Cell Envelope, Mesosomes, Flagella, Pili & Plasmids', 2, true),
('65d29b56-0440-2108-0000-000000000003', '65d29b56-0440-1100-0000-000000000008', 'Plasma Membrane (Fluid Mosaic Model, Transport) & Cell Wall', 3, true),
('65d29b56-0440-2108-0000-000000000004', '65d29b56-0440-1100-0000-000000000008', 'Endomembrane System: Endoplasmic Reticulum, Golgi Apparatus, Lysosomes & Vacuoles', 4, true),
('65d29b56-0440-2108-0000-000000000005', '65d29b56-0440-1100-0000-000000000008', 'Semiautonomous Organelles: Mitochondria & Plastids (Chloroplasts, Chromoplasts, Leucoplasts)', 5, true),
('65d29b56-0440-2108-0000-000000000006', '65d29b56-0440-1100-0000-000000000008', 'Ribosomes, Cytoskeleton, Cilia, Flagella, Centrosome & Centrioles', 6, true),
('65d29b56-0440-2108-0000-000000000007', '65d29b56-0440-1100-0000-000000000008', 'Nucleus, Chromosome Structure & Microbodies', 7, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3108-0000-000000000001', '65d29b56-0440-2108-0000-000000000001', 'VIDEO', 'Cell Theory & Overview of Prokaryotic vs Eukaryotic Cells', 'https://www.youtube.com/watch?v=6rpCt0IKMzo&end=3526s', true, 1),
('65d29b56-0440-3108-0000-000000000002', '65d29b56-0440-2108-0000-000000000002', 'VIDEO', 'Prokaryotic Cell: Cell Envelope, Mesosomes, Flagella, Pili & Plasmids', 'https://www.youtube.com/watch?v=6rpCt0IKMzo&t=3526s&end=7040s', true, 1),
('65d29b56-0440-3108-0000-000000000003', '65d29b56-0440-2108-0000-000000000003', 'VIDEO', 'Plasma Membrane (Fluid Mosaic Model, Transport) & Cell Wall', 'https://www.youtube.com/watch?v=6rpCt0IKMzo&t=7040s&end=9434s', true, 1),
('65d29b56-0440-3108-0000-000000000004', '65d29b56-0440-2108-0000-000000000004', 'VIDEO', 'Endomembrane System: Endoplasmic Reticulum, Golgi Apparatus, Lysosomes & Vacuoles', 'https://www.youtube.com/watch?v=6rpCt0IKMzo&t=9434s&end=11226s', true, 1),
('65d29b56-0440-3108-0000-000000000005', '65d29b56-0440-2108-0000-000000000005', 'VIDEO', 'Semiautonomous Organelles: Mitochondria & Plastids (Chloroplasts, Chromoplasts, Leucoplasts)', 'https://www.youtube.com/watch?v=6rpCt0IKMzo&t=11226s&end=13225s', true, 1),
('65d29b56-0440-3108-0000-000000000006', '65d29b56-0440-2108-0000-000000000006', 'VIDEO', 'Ribosomes, Cytoskeleton, Cilia, Flagella, Centrosome & Centrioles', 'https://www.youtube.com/watch?v=6rpCt0IKMzo&t=13225s&end=16641s', true, 1),
('65d29b56-0440-3108-0000-000000000007', '65d29b56-0440-2108-0000-000000000007', 'VIDEO', 'Nucleus, Chromosome Structure & Microbodies', 'https://www.youtube.com/watch?v=6rpCt0IKMzo&t=16641s&end=19200s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
