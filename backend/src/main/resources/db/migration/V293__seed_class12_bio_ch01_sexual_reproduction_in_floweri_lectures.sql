-- V293__seed_class12_bio_ch01_sexual_reproduction_in_floweri_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 1 (Sexual Reproduction in Flowering Plants)
-- Video: NCERT Wallah / Physics Wallah (VIJETA 2026 Series) (Sexual Reproduction in Flowering Plants | bJyyUSEH_ao)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 12344s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 1 (Sexual Reproduction in Flowering Plants)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000001';

-- 2. Insert 6 Verified Master Topics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2201-0000-000000000001', '65d29b56-0440-1200-0000-000000000001', 'Flower Structure & Pre-Fertilization Events (Stamen, Microsporangium & Microsporogenesis)', 1, true),
('65d29b56-0440-2201-0000-000000000002', '65d29b56-0440-1200-0000-000000000001', 'Pollen Grain Structure, Viability & Development of Male Gametophyte', 2, true),
('65d29b56-0440-2201-0000-000000000003', '65d29b56-0440-1200-0000-000000000001', 'Pistil, Megasporangium (Ovule), Megasporogenesis & Female Gametophyte (Embryo Sac)', 3, true),
('65d29b56-0440-2201-0000-000000000004', '65d29b56-0440-1200-0000-000000000001', 'Pollination Types, Agencies, Outbreeding Devices & Pollen-Pistil Interaction', 4, true),
('65d29b56-0440-2201-0000-000000000005', '65d29b56-0440-1200-0000-000000000001', 'Double Fertilization & Post-Fertilization Events (Endosperm, Embryo, Seed & Fruit)', 5, true),
('65d29b56-0440-2201-0000-000000000006', '65d29b56-0440-1200-0000-000000000001', 'Special Modes of Reproduction (Apomixis, Parthenocarpy, Polyembryony) & Board PYQs', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3201-0000-000000000001', '65d29b56-0440-2201-0000-000000000001', 'VIDEO', 'Flower Structure & Pre-Fertilization Events (Stamen, Microsporangium & Microsporogenesis)', 'https://www.youtube.com/watch?v=bJyyUSEH_ao&end=2978s', true, 1),
('65d29b56-0440-3201-0000-000000000002', '65d29b56-0440-2201-0000-000000000002', 'VIDEO', 'Pollen Grain Structure, Viability & Development of Male Gametophyte', 'https://www.youtube.com/watch?v=bJyyUSEH_ao&t=2978s&end=4262s', true, 1),
('65d29b56-0440-3201-0000-000000000003', '65d29b56-0440-2201-0000-000000000003', 'VIDEO', 'Pistil, Megasporangium (Ovule), Megasporogenesis & Female Gametophyte (Embryo Sac)', 'https://www.youtube.com/watch?v=bJyyUSEH_ao&t=4262s&end=5870s', true, 1),
('65d29b56-0440-3201-0000-000000000004', '65d29b56-0440-2201-0000-000000000004', 'VIDEO', 'Pollination Types, Agencies, Outbreeding Devices & Pollen-Pistil Interaction', 'https://www.youtube.com/watch?v=bJyyUSEH_ao&t=5870s&end=8457s', true, 1),
('65d29b56-0440-3201-0000-000000000005', '65d29b56-0440-2201-0000-000000000005', 'VIDEO', 'Double Fertilization & Post-Fertilization Events (Endosperm, Embryo, Seed & Fruit)', 'https://www.youtube.com/watch?v=bJyyUSEH_ao&t=8457s&end=10718s', true, 1),
('65d29b56-0440-3201-0000-000000000006', '65d29b56-0440-2201-0000-000000000006', 'VIDEO', 'Special Modes of Reproduction (Apomixis, Parthenocarpy, Polyembryony) & Board PYQs', 'https://www.youtube.com/watch?v=bJyyUSEH_ao&t=10718s&end=12344s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
