-- V139__seed_class11_biology_ch3_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 3 (Plant Kingdom)
-- Video: PW Class 11 Science (Plant Kingdom | Full Chapter in ONE SHOT | Chapter 3 | Class 11 Biology | 38t4sSVaRjI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 11306s / 3h 8m 26s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Plant Kingdom)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000003';

-- 2. Insert 5 Verified Master Topics for Chapter 3 (Plant Kingdom)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2103-0000-000000000001', '65d29b56-0440-1100-0000-000000000003', 'Systems of Plant Classification & Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae)', 1, true),
('65d29b56-0440-2103-0000-000000000002', '65d29b56-0440-1100-0000-000000000003', 'Bryophytes: Amphibians of Plant Kingdom (Liverworts, Mosses & Economic Importance)', 2, true),
('65d29b56-0440-2103-0000-000000000003', '65d29b56-0440-1100-0000-000000000003', 'Pteridophytes: Vascular Cryptogams (Sporangia Arrangement, Heterospory & Life Cycle)', 3, true),
('65d29b56-0440-2103-0000-000000000004', '65d29b56-0440-1100-0000-000000000003', 'Gymnosperms: Naked-seeded Plants, Conifers & Life Cycle', 4, true),
('65d29b56-0440-2103-0000-000000000005', '65d29b56-0440-1100-0000-000000000003', 'Angiosperms Overview & Plant Life Cycles (Alternation of Generations)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3103-0000-000000000001', '65d29b56-0440-2103-0000-000000000001', 'VIDEO', 'Systems of Plant Classification & Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae)', 'https://www.youtube.com/watch?v=38t4sSVaRjI&end=5070s', true, 1),
('65d29b56-0440-3103-0000-000000000002', '65d29b56-0440-2103-0000-000000000002', 'VIDEO', 'Bryophytes: Amphibians of Plant Kingdom (Liverworts, Mosses & Economic Importance)', 'https://www.youtube.com/watch?v=38t4sSVaRjI&t=5070s&end=8274s', true, 1),
('65d29b56-0440-3103-0000-000000000003', '65d29b56-0440-2103-0000-000000000003', 'VIDEO', 'Pteridophytes: Vascular Cryptogams (Sporangia Arrangement, Heterospory & Life Cycle)', 'https://www.youtube.com/watch?v=38t4sSVaRjI&t=8274s&end=9552s', true, 1),
('65d29b56-0440-3103-0000-000000000004', '65d29b56-0440-2103-0000-000000000004', 'VIDEO', 'Gymnosperms: Naked-seeded Plants, Conifers & Life Cycle', 'https://www.youtube.com/watch?v=38t4sSVaRjI&t=9552s&end=11112s', true, 1),
('65d29b56-0440-3103-0000-000000000005', '65d29b56-0440-2103-0000-000000000005', 'VIDEO', 'Angiosperms Overview & Plant Life Cycles (Alternation of Generations)', 'https://www.youtube.com/watch?v=38t4sSVaRjI&t=11112s&end=11306s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
