-- V301__seed_class12_bio_ch09_biotechnology_principles_and_p_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 9 (Biotechnology: Principles and Processes)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Biotechnology: Principles and Processes | PqzJfOddRWE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 11250s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Biotechnology: Principles and Processes)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000009';

-- 2. Insert 5 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2209-0000-000000000001', '65d29b56-0440-1200-0000-000000000009', 'Introduction to Biotechnology & Core Principles of Genetic and Bioprocess Engineering', 1, true),
('65d29b56-0440-2209-0000-000000000002', '65d29b56-0440-1200-0000-000000000009', 'Tools of Recombinant DNA Technology: Restriction Enzymes (Endonucleases) & DNA Ligases', 2, true),
('65d29b56-0440-2209-0000-000000000003', '65d29b56-0440-1200-0000-000000000009', 'Agarose Gel Electrophoresis & Cloning Vectors (pBR322 Structure, Selectable Markers & Inactivation)', 3, true),
('65d29b56-0440-2209-0000-000000000004', '65d29b56-0440-1200-0000-000000000009', 'Competent Host Cell Transformation Methods & Polymerase Chain Reaction (PCR Cycles)', 4, true),
('65d29b56-0440-2209-0000-000000000005', '65d29b56-0440-1200-0000-000000000009', 'Bioreactors (Stirred-Tank vs Sparged Design), Continuous Cultures & Downstream Processing', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3209-0000-000000000001', '65d29b56-0440-2209-0000-000000000001', 'VIDEO', 'Introduction to Biotechnology & Core Principles of Genetic and Bioprocess Engineering', 'https://www.youtube.com/watch?v=PqzJfOddRWE&end=2343s', true, 1),
('65d29b56-0440-3209-0000-000000000002', '65d29b56-0440-2209-0000-000000000002', 'VIDEO', 'Tools of Recombinant DNA Technology: Restriction Enzymes (Endonucleases) & DNA Ligases', 'https://www.youtube.com/watch?v=PqzJfOddRWE&t=2343s&end=4908s', true, 1),
('65d29b56-0440-3209-0000-000000000003', '65d29b56-0440-2209-0000-000000000003', 'VIDEO', 'Agarose Gel Electrophoresis & Cloning Vectors (pBR322 Structure, Selectable Markers & Inactivation)', 'https://www.youtube.com/watch?v=PqzJfOddRWE&t=4908s&end=7350s', true, 1),
('65d29b56-0440-3209-0000-000000000004', '65d29b56-0440-2209-0000-000000000004', 'VIDEO', 'Competent Host Cell Transformation Methods & Polymerase Chain Reaction (PCR Cycles)', 'https://www.youtube.com/watch?v=PqzJfOddRWE&t=7350s&end=9837s', true, 1),
('65d29b56-0440-3209-0000-000000000005', '65d29b56-0440-2209-0000-000000000005', 'VIDEO', 'Bioreactors (Stirred-Tank vs Sparged Design), Continuous Cultures & Downstream Processing', 'https://www.youtube.com/watch?v=PqzJfOddRWE&t=9837s&end=11250s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
