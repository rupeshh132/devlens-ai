-- V140__seed_class11_biology_ch4_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 4 (Animal Kingdom)
-- Video: PW Class 11 Science (Animal Kingdom | Full Chapter in ONE SHOT | Chapter 4 | Class 11 Biology | gJVD_kj4rq8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 11340s / 3h 9m 00s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Animal Kingdom)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000004';

-- 2. Insert 6 Verified Master Topics for Chapter 4 (Animal Kingdom)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2104-0000-000000000001', '65d29b56-0440-1100-0000-000000000004', 'Basis of Classification (Levels of Organization, Symmetry, Germ Layers, Coelom, Segmentation, Notochord)', 1, true),
('65d29b56-0440-2104-0000-000000000002', '65d29b56-0440-1100-0000-000000000004', 'Non-Chordates I: Porifera, Coelenterata (Cnidaria) & Ctenophora', 2, true),
('65d29b56-0440-2104-0000-000000000003', '65d29b56-0440-1100-0000-000000000004', 'Non-Chordates II: Platyhelminthes, Aschelminthes & Annelida', 3, true),
('65d29b56-0440-2104-0000-000000000004', '65d29b56-0440-1100-0000-000000000004', 'Non-Chordates III: Arthropoda, Mollusca, Echinodermata & Hemichordata', 4, true),
('65d29b56-0440-2104-0000-000000000005', '65d29b56-0440-1100-0000-000000000004', 'Phylum Chordata: Subphyla & Pisces (Cyclostomata, Chondrichthyes, Osteichthyes)', 5, true),
('65d29b56-0440-2104-0000-000000000006', '65d29b56-0440-1100-0000-000000000004', 'Superclass Tetrapoda: Amphibia, Reptilia, Aves & Mammalia', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3104-0000-000000000001', '65d29b56-0440-2104-0000-000000000001', 'VIDEO', 'Basis of Classification (Levels of Organization, Symmetry, Germ Layers, Coelom, Segmentation, Notochord)', 'https://www.youtube.com/watch?v=gJVD_kj4rq8&end=2720s', true, 1),
('65d29b56-0440-3104-0000-000000000002', '65d29b56-0440-2104-0000-000000000002', 'VIDEO', 'Non-Chordates I: Porifera, Coelenterata (Cnidaria) & Ctenophora', 'https://www.youtube.com/watch?v=gJVD_kj4rq8&t=2720s&end=4628s', true, 1),
('65d29b56-0440-3104-0000-000000000003', '65d29b56-0440-2104-0000-000000000003', 'VIDEO', 'Non-Chordates II: Platyhelminthes, Aschelminthes & Annelida', 'https://www.youtube.com/watch?v=gJVD_kj4rq8&t=4628s&end=6158s', true, 1),
('65d29b56-0440-3104-0000-000000000004', '65d29b56-0440-2104-0000-000000000004', 'VIDEO', 'Non-Chordates III: Arthropoda, Mollusca, Echinodermata & Hemichordata', 'https://www.youtube.com/watch?v=gJVD_kj4rq8&t=6158s&end=8105s', true, 1),
('65d29b56-0440-3104-0000-000000000005', '65d29b56-0440-2104-0000-000000000005', 'VIDEO', 'Phylum Chordata: Subphyla & Pisces (Cyclostomata, Chondrichthyes, Osteichthyes)', 'https://www.youtube.com/watch?v=gJVD_kj4rq8&t=8105s&end=10196s', true, 1),
('65d29b56-0440-3104-0000-000000000006', '65d29b56-0440-2104-0000-000000000006', 'VIDEO', 'Superclass Tetrapoda: Amphibia, Reptilia, Aves & Mammalia', 'https://www.youtube.com/watch?v=gJVD_kj4rq8&t=10196s&end=11340s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
