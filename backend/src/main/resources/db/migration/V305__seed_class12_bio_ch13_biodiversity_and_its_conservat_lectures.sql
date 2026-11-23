-- V305__seed_class12_bio_ch13_biodiversity_and_its_conservat_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 13 (Biodiversity and its Conservation)
-- Video: Competition Wallah / PW NEET (Ummeed Series / Vipin Sir) (Biodiversity and its Conservation | gHFViShBqsA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7625s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Biodiversity and its Conservation)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000013';

-- 2. Insert 5 Verified Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2213-0000-000000000001', '65d29b56-0440-1200-0000-000000000013', 'Biodiversity Concepts: Genetic, Species & Ecological Diversity; Global & Indian Species Richness', 1, true),
('65d29b56-0440-2213-0000-000000000002', '65d29b56-0440-1200-0000-000000000013', 'Patterns of Biodiversity: Latitudinal Gradient, Amazon Rain Forest & Species-Area Relationship', 2, true),
('65d29b56-0440-2213-0000-000000000003', '65d29b56-0440-1200-0000-000000000013', 'Loss of Biodiversity & The Evil Quartet (Habitat Loss, Over-Exploitation, Invasions, Co-Extinction)', 3, true),
('65d29b56-0440-2213-0000-000000000004', '65d29b56-0440-1200-0000-000000000013', 'Reasons for Conserving Biodiversity: Narrowly Utilitarian, Broadly Utilitarian & Ethical Values', 4, true),
('65d29b56-0440-2213-0000-000000000005', '65d29b56-0440-1200-0000-000000000013', 'Biodiversity Conservation Strategies: In-situ (Hotspots, Sanctuaries, Biosphere Reserves) & Ex-situ Conservation', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3213-0000-000000000001', '65d29b56-0440-2213-0000-000000000001', 'VIDEO', 'Biodiversity Concepts: Genetic, Species & Ecological Diversity; Global & Indian Species Richness', 'https://www.youtube.com/watch?v=gHFViShBqsA&end=2544s', true, 1),
('65d29b56-0440-3213-0000-000000000002', '65d29b56-0440-2213-0000-000000000002', 'VIDEO', 'Patterns of Biodiversity: Latitudinal Gradient, Amazon Rain Forest & Species-Area Relationship', 'https://www.youtube.com/watch?v=gHFViShBqsA&t=2544s&end=4850s', true, 1),
('65d29b56-0440-3213-0000-000000000003', '65d29b56-0440-2213-0000-000000000003', 'VIDEO', 'Loss of Biodiversity & The Evil Quartet (Habitat Loss, Over-Exploitation, Invasions, Co-Extinction)', 'https://www.youtube.com/watch?v=gHFViShBqsA&t=4850s&end=5720s', true, 1),
('65d29b56-0440-3213-0000-000000000004', '65d29b56-0440-2213-0000-000000000004', 'VIDEO', 'Reasons for Conserving Biodiversity: Narrowly Utilitarian, Broadly Utilitarian & Ethical Values', 'https://www.youtube.com/watch?v=gHFViShBqsA&t=5720s&end=6198s', true, 1),
('65d29b56-0440-3213-0000-000000000005', '65d29b56-0440-2213-0000-000000000005', 'VIDEO', 'Biodiversity Conservation Strategies: In-situ (Hotspots, Sanctuaries, Biosphere Reserves) & Ex-situ Conservation', 'https://www.youtube.com/watch?v=gHFViShBqsA&t=6198s&end=7625s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
