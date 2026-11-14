-- V138__seed_class11_biology_ch2_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 2 (Biological Classification)
-- Video: PW Class 11 / NEET (Biological Classification | Full Chapter in ONE SHOT | Chapter 2 | Class 11 Biology | soS6dnpNSIg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13756s / 3h 49m 16s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Biological Classification)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000002';

-- 2. Insert 5 Verified Master Topics for Chapter 2 (Biological Classification)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2102-0000-000000000001', '65d29b56-0440-1100-0000-000000000002', 'Systems of Classification, Five Kingdom Overview & Three Domain System', 1, true),
('65d29b56-0440-2102-0000-000000000002', '65d29b56-0440-1100-0000-000000000002', 'Kingdom Monera: Bacterial Morphology, Nutrition, Archaebacteria, Eubacteria & Mycoplasma', 2, true),
('65d29b56-0440-2102-0000-000000000003', '65d29b56-0440-1100-0000-000000000002', 'Kingdom Protista: Chrysophytes, Dinoflagellates, Euglenoids, Slime Moulds & Protozoans', 3, true),
('65d29b56-0440-2102-0000-000000000004', '65d29b56-0440-1100-0000-000000000002', 'Kingdom Fungi: Mycelium, Reproduction & Classes (Phycomycetes, Ascomycetes, Basidiomycetes, Deuteromycetes)', 4, true),
('65d29b56-0440-2102-0000-000000000005', '65d29b56-0440-1100-0000-000000000002', 'Acellular Entities: Viruses, Viroids, Prions & Lichens', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3102-0000-000000000001', '65d29b56-0440-2102-0000-000000000001', 'VIDEO', 'Systems of Classification, Five Kingdom Overview & Three Domain System', 'https://www.youtube.com/watch?v=soS6dnpNSIg&end=1935s', true, 1),
('65d29b56-0440-3102-0000-000000000002', '65d29b56-0440-2102-0000-000000000002', 'VIDEO', 'Kingdom Monera: Bacterial Morphology, Nutrition, Archaebacteria, Eubacteria & Mycoplasma', 'https://www.youtube.com/watch?v=soS6dnpNSIg&t=1935s&end=4385s', true, 1),
('65d29b56-0440-3102-0000-000000000003', '65d29b56-0440-2102-0000-000000000003', 'VIDEO', 'Kingdom Protista: Chrysophytes, Dinoflagellates, Euglenoids, Slime Moulds & Protozoans', 'https://www.youtube.com/watch?v=soS6dnpNSIg&t=4385s&end=7208s', true, 1),
('65d29b56-0440-3102-0000-000000000004', '65d29b56-0440-2102-0000-000000000004', 'VIDEO', 'Kingdom Fungi: Mycelium, Reproduction & Classes (Phycomycetes, Ascomycetes, Basidiomycetes, Deuteromycetes)', 'https://www.youtube.com/watch?v=soS6dnpNSIg&t=7208s&end=11966s', true, 1),
('65d29b56-0440-3102-0000-000000000005', '65d29b56-0440-2102-0000-000000000005', 'VIDEO', 'Acellular Entities: Viruses, Viroids, Prions & Lichens', 'https://www.youtube.com/watch?v=soS6dnpNSIg&t=11966s&end=13756s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
