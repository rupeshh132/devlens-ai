-- V297__seed_class12_bio_ch05_molecular_basis_of_inheritance_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 5 (Molecular Basis of Inheritance)
-- Video: NCERT Wallah / Physics Wallah (VIJETA 2026 Series) (Molecular Basis of Inheritance | zhgxP1r7Ndk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 17002s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Molecular Basis of Inheritance)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000005';

-- 2. Insert 6 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2205-0000-000000000001', '65d29b56-0440-1200-0000-000000000005', 'Structure of DNA, Double Helix Model (Watson & Crick) & Nucleosome Solenoid Packaging', 1, true),
('65d29b56-0440-2205-0000-000000000002', '65d29b56-0440-1200-0000-000000000005', 'Search for Genetic Material (Griffith, Avery-MacLeod-McCarty, Hershey-Chase) & RNA World', 2, true),
('65d29b56-0440-2205-0000-000000000003', '65d29b56-0440-1200-0000-000000000005', 'Semi-Conservative DNA Replication, Meselson-Stahl Experiment & Replication Fork Machinery', 3, true),
('65d29b56-0440-2205-0000-000000000004', '65d29b56-0440-1200-0000-000000000005', 'Transcription Unit, RNA Polymerases & Post-Transcriptional Processing in Eukaryotes', 4, true),
('65d29b56-0440-2205-0000-000000000005', '65d29b56-0440-1200-0000-000000000005', 'Genetic Code Characteristics, tRNA Adaptor & Translation (Protein Synthesis)', 5, true),
('65d29b56-0440-2205-0000-000000000006', '65d29b56-0440-1200-0000-000000000005', 'Regulation of Gene Expression (Lac Operon), Human Genome Project (HGP) & DNA Fingerprinting', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3205-0000-000000000001', '65d29b56-0440-2205-0000-000000000001', 'VIDEO', 'Structure of DNA, Double Helix Model (Watson & Crick) & Nucleosome Solenoid Packaging', 'https://www.youtube.com/watch?v=zhgxP1r7Ndk&end=3675s', true, 1),
('65d29b56-0440-3205-0000-000000000002', '65d29b56-0440-2205-0000-000000000002', 'VIDEO', 'Search for Genetic Material (Griffith, Avery-MacLeod-McCarty, Hershey-Chase) & RNA World', 'https://www.youtube.com/watch?v=zhgxP1r7Ndk&t=3675s&end=7072s', true, 1),
('65d29b56-0440-3205-0000-000000000003', '65d29b56-0440-2205-0000-000000000003', 'VIDEO', 'Semi-Conservative DNA Replication, Meselson-Stahl Experiment & Replication Fork Machinery', 'https://www.youtube.com/watch?v=zhgxP1r7Ndk&t=7072s&end=9140s', true, 1),
('65d29b56-0440-3205-0000-000000000004', '65d29b56-0440-2205-0000-000000000004', 'VIDEO', 'Transcription Unit, RNA Polymerases & Post-Transcriptional Processing in Eukaryotes', 'https://www.youtube.com/watch?v=zhgxP1r7Ndk&t=9140s&end=11087s', true, 1),
('65d29b56-0440-3205-0000-000000000005', '65d29b56-0440-2205-0000-000000000005', 'VIDEO', 'Genetic Code Characteristics, tRNA Adaptor & Translation (Protein Synthesis)', 'https://www.youtube.com/watch?v=zhgxP1r7Ndk&t=11087s&end=14114s', true, 1),
('65d29b56-0440-3205-0000-000000000006', '65d29b56-0440-2205-0000-000000000006', 'VIDEO', 'Regulation of Gene Expression (Lac Operon), Human Genome Project (HGP) & DNA Fingerprinting', 'https://www.youtube.com/watch?v=zhgxP1r7Ndk&t=14114s&end=17002s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
